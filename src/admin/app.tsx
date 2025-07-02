import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    theme: {
      defaultTheme: 'light',
    },
    locales: ['ru'],
    translations: {
      ru: {
        'Auth.form.welcome.title': 'Добро пожаловать!',
        'Auth.form.welcome.subtitle': 'Войдите в свою учётную запись',
        'Auth.form.email.label': 'Эл. почта',
        'Auth.form.email.placeholder': 'employee@ermatel.ru',
        'HomePage.header.title': 'Добро пожаловать, {name}!',
        'HomePage.header.subtitle': 'Панель управления',
        'upload-xlsx.plugin.name': 'Калькулятор стоимости',

      },
      en: {
        'Auth.form.welcome.title': 'Welcome!',
        'Auth.form.welcome.subtitle': 'Log in to your account',
        'Auth.form.email.placeholder': 'employee@ermatel.ru',
      }
    }
  },
  bootstrap(app: StrapiApp) {
    const themeKey = 'STRAPI_THEME';
    const forceFlag = 'STRAPI_THEME_FORCE_CHANGE';
    const defaultTheme = 'light';
    const currentTheme = localStorage.getItem(themeKey);
    const alreadyForced = localStorage.getItem(forceFlag);
    if (!currentTheme || currentTheme === 'system') {
      localStorage.setItem(themeKey, defaultTheme);
      return;
    }
    if (!alreadyForced && currentTheme === 'dark') {
      localStorage.setItem(themeKey, defaultTheme);
      localStorage.setItem(forceFlag, 'true');
    }

    const KEY = 'strapi-admin-language';
    const DEFAULT_LANG = 'ru';

    if (!localStorage.getItem(KEY)) {
      localStorage.setItem(KEY, DEFAULT_LANG);
    }
  },
};
