import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // Правильный импорт

import enTranslation from './locales/en.json';
import uaTranslation from './locales/ua.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  ua: {
    translation: uaTranslation,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
