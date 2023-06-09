import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en/translation.json";
import fr from "./fr/translation.json";

const resources = {
    en: {translation: en},
    fr: {translation: fr}
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        keySeparator: false,
        interpolation: {escapeValue: false},
        react: {
            useSuspense: false,
        },
    });

export default i18n;
