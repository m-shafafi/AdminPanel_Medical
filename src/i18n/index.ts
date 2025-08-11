import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import EN_TRANSLATION from "../locales/en/translation.json";
import FA_TRANSLATION from "../locales/fa/translation.json";
import AR_TRANSLATION from "../locales/ar/translation.json";

// ✅ Set default language to fa-IR if not already set
if (typeof window !== "undefined" && !localStorage.getItem("i18nextLng")) {
  localStorage.setItem("i18nextLng", "fa-IR");
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "fa-IR",
    interpolation: {
      escapeValue: true,
    },
    resources: {
      "fa-IR": { translation: FA_TRANSLATION },
      "en-GB": { translation: EN_TRANSLATION },
      "ar-GB": { translation: AR_TRANSLATION },
    },
    detection: {
      order: ["localStorage", "cookie", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18n;
