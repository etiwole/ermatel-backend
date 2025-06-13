import type { Core } from '@strapi/strapi';
import { Context } from 'koa';
import { readFileSync } from 'fs';
import { read, utils } from 'xlsx';

export interface LayerEntity {
  id: number;
  name: string;
}

const controller = ({ strapi }: { strapi: Core.Strapi }) => ({
  async uploadXlsxFile(ctx: Context) {
    if (!ctx.is('multipart')) {
      return ctx.throw(400, 'Ожидается multipart/form-data');
    }

    const uploaded = ctx.request.files?.file;
    const file = Array.isArray(uploaded) ? uploaded[0] : uploaded;

    if (!file || typeof file !== 'object' || !('filepath' in file)) {
      return ctx.throw(400, 'Файл не был загружен или некорректен');
    }

    const filepath = (file as any).filepath;

    // Чтение файла как buffer и парсинг без формул
    const buffer = readFileSync(filepath);
    const workbook = read(buffer, { type: 'buffer', cellFormula: false });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = utils.sheet_to_json(sheet, { header: 1 }) as any[][];

    if (!Array.isArray(jsonData) || jsonData.length < 2) {
      return ctx.throw(400, 'Файл пуст или не содержит таблицу');
    }

    const expectedHeaders = ['Материал упаковки', 'Красочность', 300, 500, 750, 1000, 1500, 2000, 3000];
    const headerRow = jsonData.find(row =>
      `${row?.[0]}`.toLowerCase().includes('материал') &&
      `${row?.[1]}`.toLowerCase().includes('красочность')
    );

    if (!headerRow || headerRow.length < expectedHeaders.length) {
      return ctx.throw(400, 'Не найдена строка с заголовками или она неполная');
    }

    for (let i = 0; i < expectedHeaders.length; i++) {
      if (`${headerRow[i]}`.toString().trim() !== `${expectedHeaders[i]}`.toString().trim()) {
        return ctx.throw(400, `Неверный формат таблицы: ожидалось '${expectedHeaders[i]}', получено '${headerRow[i]}'`);
      }
    }

    const headerIndex = jsonData.indexOf(headerRow);
    const rows = jsonData.slice(headerIndex + 1);

    // Очистка существующих данных
    await strapi.db.query('api::print-price.print-price').deleteMany({});
    await strapi.db.query('api::layer-combination.layer-combination').deleteMany({});
    await strapi.db.query('api::color-profile.color-profile').deleteMany({});
    await strapi.db.query('api::layer-material.layer-material').deleteMany({});

    let currentMaterialCell = '';
    const weights = [300, 500, 750, 1000, 1500, 2000, 3000];

    for (const row of rows) {
      if (!row[0] && !row[1]) {
        console.log('Пропущена строка: пустая первая и вторая ячейка', row);
        continue;
      }
      if (!row[0] && !row[1]) continue;
      if (row[0]) currentMaterialCell = row[0];

      const materialLines = currentMaterialCell
        .split('\n')
        .map((x: string) => x.trim())
        .filter(Boolean);

      const colorDescription = (row[1] || '').toString().trim();
      const prices = row.slice(2, 9).map((val: any) => (typeof val === 'number' ? val : null));

      for (const material of materialLines) {
        console.log('Обработка материала:', material);
        const layers = material.split('+').map((x: string) => x.trim());
        if (layers.length > 3) {
          console.warn('Слишком много слоёв, пропускаем:', material);
          continue;
        }

        const layerEntities: LayerEntity[] = await Promise.all(
          layers.map(async (name) => {
            const [existing] = await strapi.entityService.findMany('api::layer-material.layer-material', {
              filters: { name },
              limit: 1
            }) as any[];
            return existing ?? await strapi.entityService.create('api::layer-material.layer-material', {
              data: { name }
            });
          })
        );

        const combinationData = {
          layer1: layerEntities[0]?.id,
          layer2: layerEntities[1]?.id || null,
          layer3: layerEntities[2]?.id || null
        };

        const [existingCombo] = await strapi.entityService.findMany('api::layer-combination.layer-combination', {
          filters: Object.fromEntries(
            Object.entries(combinationData).filter(([_, v]) => v !== null)
          ),
          populate: ['print_prices'],
          limit: 1
        }) as any[];

        const combination = existingCombo ?? await strapi.entityService.create('api::layer-combination.layer-combination', {
          data: combinationData
        });

        const [colorProfile] = await strapi.entityService.findMany('api::color-profile.color-profile', {
          filters: { description: colorDescription },
          limit: 1
        }) as any[];

        const profile = colorProfile ?? await strapi.entityService.create('api::color-profile.color-profile', {
          data: { description: colorDescription }
        });

        // Создание print-prices + обновление связи с layer_combination
        for (let i = 0; i < weights.length; i++) {
          const price = prices[i];
          if (price === null) {
            console.log(`Пропущена цена для веса ${weights[i]} — значение:`, row[2 + i]);
            continue;
          }

          const createdPrice = await strapi.entityService.create('api::print-price.print-price', {
            data: {
              weight: weights[i],
              price: price,
              layer_combination: combination.id,
              color_profile: profile.id
            }
          });

          console.log('Создан print-price для', material, 'вес:', weights[i], 'цена:', price);

          // Получение актуальной связи перед обновлением
          const updatedCombination = await strapi.entityService.findOne(
            'api::layer-combination.layer-combination',
            combination.id,
            { populate: ['print_prices'] }
          ) as { print_prices?: { id: number }[] };

          // Обновление связи print_prices у layer_combination
          await strapi.db.query('api::layer-combination.layer-combination').update({
            where: { id: combination.id },
            data: {
              print_prices: {
                set: [
                  ...(updatedCombination.print_prices?.map((p: any) => p.id) || []),
                  createdPrice.id
                ]
              }
            }
          });
        }
      }
    }

    ctx.send({ message: 'Файл успешно загружен и обработан' });
  }
});

export default controller;
