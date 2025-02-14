export const i18n = {
  locales: [
    { code: "en-US", name: "English", icon: "/flags/us.svg" },
    { code: "fr", name: "Français", icon: "/flags/fr.svg" },
    { code: "ar", name: "العربية", icon: "/flags/sa.svg" },
    { code: "es", name: "Español", icon: "/flags/es.svg" },
    { code: "pt", name: "Português", icon: "/flags/pt.svg" }, // Portugués
    { code: "de", name: "Deutsch", icon: "/flags/de.svg" }, // Alemán
  ],
  defaultLocale: "en-US",
};

export const getDirection = (locale: string) => {
  return locale === "ar" ? "rtl" : "ltr";
};

export type I18nConfig = typeof i18n;
export type Locale = I18nConfig["locales"][number];
