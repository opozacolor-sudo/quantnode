"use client";

import { locales, localeMeta, type Locale } from "./config";
import { useI18n } from "./I18nProvider";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();

  return (
    <label className="flex items-center gap-2">
      <span className="sr-only">{t("nav.language")}</span>
      <select
        value={locale}
        onChange={(event) => setLocale(event.target.value as Locale)}
        className="h-9 rounded-full border border-zinc-200 bg-white px-3 text-xs font-medium text-zinc-700 outline-none transition hover:border-zinc-300 focus:border-[#0052ff]"
        aria-label={t("nav.language")}
      >
        {locales.map((code) => (
          <option key={code} value={code}>
            {localeMeta[code].label}
          </option>
        ))}
      </select>
    </label>
  );
}
