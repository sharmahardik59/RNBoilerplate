import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import RNLanguageDetector from "@os-team/i18next-react-native-language-detector";

import enTranslation from "./en.json";
import arTranslation from "./ar.json";
import frTranslation from "./fr.json";
import { I18nManager } from "react-native";

i18n
  .use(RNLanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    lng: I18nManager.isRTL ? 'ar' : 'en', // Set language based on RTL
    resources: {
      ar: {
        translation: arTranslation,
      },
      en: {
        translation: enTranslation,
      },
      fr: {
        translation: frTranslation,
      },
    },
    supportedLngs: ["en", "fr", "ar"],
  });
