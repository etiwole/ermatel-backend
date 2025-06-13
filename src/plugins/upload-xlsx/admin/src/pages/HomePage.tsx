import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Grid,
  Main,
  Typography
} from '@strapi/design-system';
import { useIntl } from 'react-intl';
import { useFetchClient } from '@strapi/strapi/admin';
import {getTranslation} from "../utils/getTranslation";
import * as Icons from '@strapi/icons';

const Toast: React.FC<{ message: string; type: 'success' | 'error'; onClose: () => void }> = ({ message, type, onClose }) => {
  return (
    <Box
      background={type === 'success' ? 'success100' : 'danger100'}
      padding={4}
      shadow="filterShadow"
      position="fixed"
      bottom={4}
      right={4}
      style={{ borderRadius: 8, zIndex: 9999, minWidth: 300, display: 'flex', alignItems: 'center', gap: 12 }}
    >
      {type === 'success' ? <Icons.CheckCircle /> : <Icons.CrossCircle />}
      <Typography>{message}</Typography>
    </Box>
  );
};

const HomePage: React.FC = () => {
  const { formatMessage } = useIntl();
  const { post } = useFetchClient();

  const [file, setFile] = useState<File | null>(null);
  const [toast, setToast] = useState<React.ReactNode>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast(<Toast message={message} type={type} onClose={() => setToast(null)} />);
    setTimeout(() => setToast(null), 4000);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    setIsLoading(true);
    try {
      await post('/upload-xlsx/upload-xlsx-file', formData);
      showToast('Файл успешно загружен', 'success');
    } catch {
      showToast('Ошибка при загрузке файла', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Main>
      {toast}
      <Flex direction="column" alignItems="stretch" gap={4} padding={6} background="neutral100">
        <Typography variant="alpha" as="h1">
          {formatMessage({ id: getTranslation('plugin.name'), defaultMessage: 'Импорт данных из Excel файла' })}
        </Typography>

        <Card shadow="tableShadow">
          <CardBody padding={4}>
            <Flex direction="column" gap={4} alignItems="start">
              <Flex direction="row" gap={4}>
                <Box gridColumn="1 / -1">
                  <input
                    type="file"
                    accept=".xlsx"
                    onChange={(e) => {
                      const target = e.target as HTMLInputElement;
                      setFile(target.files?.[0] || null);
                    }}
                    style={{
                      fontSize: '1.25rem',
                      padding: '0.5rem',
                    }}
                  />
                </Box>
                <Box gridColumn="1 / -1">
                  <Button
                    onClick={handleUpload}
                    startIcon={!isLoading ? <Icons.Upload /> : undefined}
                    loading={isLoading}
                    disabled={!file || isLoading}
                  >
                    {isLoading ? 'Загрузка...' : 'Загрузить Excel'}
                  </Button>
                </Box>
              </Flex>
              <Box>
                <Typography variant="beta" as="h2" fontWeight="bold" marginBottom={4}>
                  Требования к файлу и рекомендации:
                </Typography>

                <Box as="ul" marginBottom={4} marginTop={2} paddingLeft={5} style={{ listStyleType: 'disc' }}>
                  <Typography as="li" variant="epsilon" marginBottom={2}>
                    Файл должен быть в формате <strong>.xlsx</strong>
                  </Typography>
                  <Typography as="li" variant="epsilon" marginBottom={2}>
                    Допустимые заголовки столбцов:
                    <em> Материал упаковки, Красочность, 300, 500, 750, 1000, 1500, 2000, 3000</em>
                  </Typography>
                  <Typography as="li" variant="epsilon" marginBottom={2}>
                    Пожалуйста, удалите пустые строки перед загрузкой
                  </Typography>
                  <Typography as="li" variant="epsilon" marginBottom={2}>
                    Максимальный размер файла — <strong>5 MB</strong>
                  </Typography>
                  <Typography as="li" variant="epsilon" marginBottom={2}>
                    После загрузки данные будут обработаны автоматически. <strong>Не обновляйте страницу</strong> во время обработки
                  </Typography>
                </Box>

                <Typography
                  textColor="danger600"
                  variant="beta"
                  as="p"
                  fontWeight="bold"
                  marginTop={10}
                >
                  Внимание: загрузка нового файла полностью заменит текущие данные в системе.
                </Typography>
              </Box>


            </Flex>
          </CardBody>
        </Card>
      </Flex>
    </Main>
  );
};

export { HomePage };
