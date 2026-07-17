import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pt: {
    translation: {
      welcome: "Bem-vindo",
      about: "Sobre Mim",
      projects: "Projetos"
    }
  },
  en: {
    translation: {
      welcome: "Welcome",
      about: "About Me",
      projects: "Projects"
    }
  }
};

i18n
.use(initReactI18next)
.init({
  resources,
  lng: "pt",
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;