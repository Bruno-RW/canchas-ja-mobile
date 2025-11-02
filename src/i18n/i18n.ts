import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationPT from './messages/pt.json';
import translationEN from './messages/en.json';
import translationES from './messages/es.json';

const resources = {
  pt: { translation: translationPT },
  en: { translation: translationEN },
  es: { translation: translationES },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    defaultNS: 'translation',
    fallbackNS: 'translation',
    keySeparator: '.',
    nsSeparator: ':',
    debug: false,
    interpolation: { escapeValue: false },
    react: { useSuspense: false }
  });

export default i18n;