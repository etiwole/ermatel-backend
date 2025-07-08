import type { Core } from '@strapi/strapi';
import slugify from "slugify";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi, menu }: { strapi: Core.Strapi, menu: any }) {
    strapi.documents.use(async (context, next) => {
      const { action, uid, params } = context;

      if (uid === 'api::category.category' && ['create', 'update'].includes(action)) {
        const maybeData = params as { data?: Record<string, any> };
        const data = maybeData.data;

        if (data?.title && !data.slug) {
          data.slug = slugify(data.title, { lower: true, strict: true });
        }
      }
      
      if ((uid === 'api::vacancy-request.vacancy-request' && action === 'create') || (uid === 'api::order.order' && action === 'create')) {
        (params as any).populate = { file: true };
      }
      
      const result = await next();

      const getNextEmail = async (emails: string[]) => {
        let state = await strapi.entityService.findMany('api::email-queue-state.email-queue-state', {
          fields: ['currentIndex']
        });

        const currentState = Array.isArray(state) ? state[0] : state;
        if (!currentState) {
          throw new Error('Не удалось получить или создать email-queue-state');
        }

        const currentIndex = currentState.currentIndex || 0;
        const nextEmail = emails[currentIndex % emails.length];

        await strapi.entityService.update('api::email-queue-state.email-queue-state', currentState.id, {
          data: { currentIndex: (currentIndex + 1) % emails.length },
        });

        return nextEmail;
      };

      if (uid === 'api::vacancy-request.vacancy-request' && action === 'create') {
        const { data } = params as { data?: Record<string, any>};

        const created = result as unknown as { id: number; [key: string]: any };

        const adminUrl = process.env.ADMIN_URL || 'https://backend.ermatel.ru';
        const adminLink = created?.documentId
          ? `${adminUrl}/admin/content-manager/collection-types/api::vacancy-request.vacancy-request/${created?.documentId}`
          : '#';

        const html = `
          <p>Здравствуйте!</p>
          <p>Вы получили новый отклик на вакансию через форму обратной связи на сайте.</p>
          <p><strong>Данные кандидата:</strong></p>
          <ul>
            <li><strong>Имя:</strong> ${data?.name || '-'}</li>
            <li><strong>Email:</strong> ${data?.email || '-'}</li>
            <li><strong>Телефон:</strong> ${data?.phone || '-'}</li>
          </ul>
          <p><a href="${adminLink}">Открыть отклик в админке</a></p>
          <p>Пожалуйста, свяжитесь с кандидатом для уточнения деталей или назначения интервью.</p>
          <p>Это письмо сформировано автоматически. Пожалуйста, не отвечайте на него.</p>
        `;

        const attachments = [];

        if (created?.file && created?.file?.url) {
          attachments.push({
            filename: created?.file?.name,
            path: created?.file.url.startsWith('http')
              ? created?.file.url
              : `${process.env.PUBLIC_URL || 'https://backend.ermatel.ru'}${created?.file.url}`,
            contentType: created?.file.mine,
          });
        }

        try {
          const settings = await strapi.entityService.findMany('api::global.global', {
            fields: ['notify_emails'],
          });

          const emails = settings?.notify_emails
            ?.split(',')
            .map(e => e.trim())
            .filter(Boolean)
          ;

          if (emails && emails.length > 0) {
            await strapi.plugin('email').service('email').send({
              to: await getNextEmail(emails),
              subject: 'ermatel.ru - Отклик на вакансию',
              html,
              attachments,
            });
}
        } catch (e) {
          console.log(e)
        }

      }

      if (uid === 'api::order.order' && action === 'create') {
        const { data } = params as { data?: Record<string, any>};

        const created = result as unknown as { id: number; [key: string]: any };

        const adminUrl = process.env.ADMIN_URL || 'https://backend.ermatel.ru';
        const adminLink = created?.documentId
          ? `${adminUrl}/admin/content-manager/collection-types/api::order.order/${created?.documentId}`
          : '#';

        const html = `
          <p>Здравствуйте!</p>
          <p>Вы получили новую заявку на заказ.</p>

          <p><strong>Параметры заказа:</strong></p>
          <p><strong>Технология печати:</strong> ${data?.technology || '-'}</p>
          <p><strong>Размер упаковки:</strong></p>
          <ul>
            <li><strong>Ширина упаковки, мм:</strong> ${data?.width || '-'}</li>
            <li><strong>Длина упаковки, мм:</strong> ${data?.length || '-'}</li>
          </ul>
          <p><strong>Состав упаковки:</strong></p>
          <ul>
            <li><strong>1 слой:</strong> ${data?.layer1 || '-'}</li>
            <li><strong>2 слой:</strong> ${data?.layer2 || '-'}</li>
            <li><strong>3 слой:</strong> ${data?.layer3 || '-'}</li>
          </ul>
          <p><strong>Количество краски:</strong></p>
          <ul>
            <li><strong>Количество красок:</strong> ${data?.colors || '-'}</li>
            <li><strong>Количество пантонов:</strong> ${data?.pantons || '-'}</li>
          </ul>
          <p><strong>Размер тиража:</strong> ${data?.count || '-'}</p>

          <p><strong>Данные клиента:</strong></p>
          <ul>
            <li><strong>Имя:</strong> ${data?.name || '-'}</li>
            <li><strong>Email:</strong> ${data?.email || '-'}</li>
            <li><strong>Телефон:</strong> ${data?.phone || '-'}</li>
          </ul>
          <p><a href="${adminLink}">Открыть заявку в админке</a></p>
          <p>Пожалуйста, свяжитесь с клиентом для уточнения деталей заказа.</p>
          <p>Это письмо сформировано автоматически. Пожалуйста, не отвечайте на него.</p>
        `;

        const attachments = [];

        if (created?.file && created?.file?.url) {
          attachments.push({
            filename: created?.file?.name,
            path: created?.file.url.startsWith('http')
              ? created?.file.url
              : `${process.env.PUBLIC_URL || 'https://backend.ermatel.ru'}${created?.file.url}`,
            contentType: created?.file.mine,
          });
        }


        try {
          const settings = await strapi.entityService.findMany('api::global.global', {
            fields: ['notify_emails'],
          });

          const emails = settings?.notify_emails
            ?.split(',')
            .map(e => e.trim())
            .filter(Boolean)
          ;

          if (emails && emails.length > 0) {
            await strapi.plugin('email').service('email').send({
              to: await getNextEmail(emails),
              subject: 'ermatel.ru - Заявка на заказ',
              html,
              attachments,
            });
}
        } catch (e) {
          console.log(e)
        }


      }
      
      return result;
    });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }: { strapi: Core.Strapi }) {
    strapi.register
  },
};
