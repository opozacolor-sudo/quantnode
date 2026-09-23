"use client";

import { useI18n } from "@/i18n/I18nProvider";

export function ComingSoonApps() {
  const { t } = useI18n();

  return (
    <section className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-12 sm:flex-row sm:items-center sm:px-6">
        <div>
          <p className="text-xs tracking-wide text-accent uppercase">{t("apps.kicker")}</p>
          <h2 className="mt-2 text-xl font-medium tracking-tight">{t("apps.title")}</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted">{t("apps.body")}</p>
        </div>
        <div className="flex gap-2">
          <span className="rounded-full border border-line px-4 py-2 text-sm text-muted">{t("apps.ios")}</span>
          <span className="rounded-full border border-line px-4 py-2 text-sm text-muted">{t("apps.android")}</span>
        </div>
      </div>
    </section>
  );
}
