// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['path', 'navigator'], // Check URL path first
      lookupFromPathIndex: 1, // Look for language in the first path segment
      
    },
    backend: {
      loadPath: '/portfolio/locales/{{lng}}/{{ns}}.json',

    }
  });

export default i18n;