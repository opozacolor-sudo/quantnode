export const locales = ["fr", "en", "es", "it", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";
export const localeCookie = "an_locale";

export const localeMeta: Record<Locale, { label: string; bcp47: string }> = {
  fr: { label: "Français", bcp47: "fr-FR" },
  en: { label: "English", bcp47: "en-US" },
  es: { label: "Español", bcp47: "es-ES" },
  it: { label: "Italiano", bcp47: "it-IT" },
  de: { label: "Deutsch", bcp47: "de-DE" },
};

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}
