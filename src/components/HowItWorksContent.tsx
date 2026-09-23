"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";

export function HowItWorksContent() {
  const { t } = useI18n();
  const steps = [
    { n: "01", title: "how.s1.title", body: "how.s1.body", points: ["how.s1.p1", "how.s1.p2", "how.s1.p3"] },
    { n: "02", title: "how.s2.title", body: "how.s2.body", points: ["how.s2.p1", "how.s2.p2", "how.s2.p3"] },
    { n: "03", title: "how.s3.title", body: "how.s3.body", points: ["how.s3.p1", "how.s3.p2", "how.s3.p3"] },
  ];

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs tracking-wide text-accent uppercase">{t("how.kicker")}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">{t("how.title")}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">{t("how.lead")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <ol className="space-y-5">
          {steps.map((step) => (
            <li key={step.n} className="grid gap-6 rounded-2xl border border-line bg-panel p-6 sm:p-8 lg:grid-cols-12">
              <div className="lg:col-span-2">
                <p className="font-mono text-3xl text-accent/80">{step.n}</p>
              </div>
              <div className="lg:col-span-6">
                <h2 className="text-xl font-medium tracking-tight">{t(step.title)}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{t(step.body)}</p>
              </div>
              <ul className="space-y-2 text-sm text-muted lg:col-span-4">
                {step.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {t(point)}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-line bg-panel-2 p-5">
            <h3 className="text-sm font-medium">{t("how.provideTitle")}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{t("how.provideBody")}</p>
          </article>
          <article className="rounded-xl border border-line bg-panel-2 p-5">
            <h3 className="text-sm font-medium">{t("how.notTitle")}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{t("how.notBody")}</p>
          </article>
          <article className="rounded-xl border border-line bg-panel-2 p-5">
            <h3 className="text-sm font-medium">{t("how.riskTitle")}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{t("how.riskBody")}</p>
          </article>
        </div>

        <div className="mt-12">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-medium text-white">
            {t("how.cta")}
          </Link>
        </div>
      </section>
    </>
  );
}
