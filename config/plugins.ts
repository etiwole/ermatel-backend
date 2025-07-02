export default ({ env }) => ({
  'upload-xlsx': {
    enabled: true,
    resolve: './src/plugins/upload-xlsx',
  },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.yandex.ru'),
        port: env.int('SMTP_PORT', 465),
        secure: true,
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: env('DEFAULT_FROM_EMAIL'),
        defaultReplyTo: env('DEFAULT_REPLYTO_EMAIL')
      }
    }
  },
  i18n: {
    enabled: true,
  },
});
