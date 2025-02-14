// export const i18n = {
//   locales: [
//     { code: 'en-US', name: 'English', icon: '🇺🇸' },
//     { code: 'fr', name: 'Français', icon: '🇫🇷' },
//     { code: 'ar', name: 'العربية', icon: '🇸🇦' },
//   ],
//   defaultLocale: 'en-US',
// }

// export const getDirection = (locale: string) => {
//   return locale === 'ar' ? 'rtl' : 'ltr'
// }
// export type I18nConfig = typeof i18n
// export type Locale = I18nConfig['locales'][number]

// export const i18n = {
//   locales: [
//     { code: "en-US", name: "English", icon: "🇺🇸" },
//     { code: "fr", name: "Français", icon: "🇫🇷" },
//     { code: "ar", name: "العربية", icon: "🇸🇦" },
//     { code: "es", name: "Español", icon: "🇪🇸" }, // Aquí agregas español
//   ],
//   defaultLocale: "en-US",
// };

// export const getDirection = (locale: string) => {
//   return locale === "ar" ? "rtl" : "ltr";
// };

// export type I18nConfig = typeof i18n;
// export type Locale = I18nConfig["locales"][number];

export const i18n = {
  locales: [
    { code: "en-US", name: "English", icon: "/flags/us.svg" },
    { code: "fr", name: "Français", icon: "/flags/fr.svg" },
    { code: "ar", name: "العربية", icon: "/flags/sa.svg" },
    { code: "es", name: "Español", icon: "/flags/es.svg" },
  ],
  defaultLocale: "en-US",
};

export const getDirection = (locale: string) => {
  return locale === "ar" ? "rtl" : "ltr";
};

export type I18nConfig = typeof i18n;
export type Locale = I18nConfig["locales"][number];
