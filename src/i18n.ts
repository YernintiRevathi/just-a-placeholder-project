// src/i18n.ts

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi) // This loads translations from your /public folder
  .use(LanguageDetector) // This detects the user's browser language
  .use(initReactI18next) // This passes the i18n instance to react-i18next
  .init({
    // --- Configuration Options ---
    supportedLngs: ["en", "hi"], // The languages you support
    fallbackLng: "en", // The language to use if detection fails

    detection: {
      // Order and methods for language detection
      order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
      caches: ["cookie"], // Where to cache the selected language
    },

    backend: {
      // Path to your translation files
      loadPath: "/locales/{{lng}}/translation.json",
    },

    react: {
      // --- CRITICAL SETTING ---
      // This tells React to wait until translations are loaded
      useSuspense: true,
    },

    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
  });

export default i18n;