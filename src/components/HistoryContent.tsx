"use client";

import { TradingCalendar } from "@/components/TradingCalendar";
import { useI18n } from "@/i18n/I18nProvider";

export function HistoryContent() {
  const { t } = useI18n();

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs tracking-wide text-accent uppercase">{t("history.kicker")}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">{t("history.title")}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">{t("history.lead")}</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <TradingCalendar />
      </section>
    </>
  );
}
