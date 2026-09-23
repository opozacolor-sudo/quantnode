"use client";

import { useI18n } from "@/i18n/I18nProvider";

export function About() {
  const { t } = useI18n();

  return (
    <section id="a-propos" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs tracking-wide text-accent uppercase">{t("about.kicker")}</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">{t("about.title")}</h2>
        </div>
        <div className="space-y-5 text-sm leading-7 text-muted lg:col-span-7">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
          <p>{t("about.p4")}</p>
        </div>
      </div>
    </section>
  );
}
