"use client";

import { ContactForm } from "@/components/ContactForm";
import { useI18n } from "@/i18n/I18nProvider";

export function ContactContent() {
  const { t } = useI18n();

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs tracking-wide text-accent uppercase">{t("contact.kicker")}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {t("contact.title")}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">{t("contact.lead")}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:py-16">
        <aside className="space-y-4 lg:col-span-4">
          <div className="rounded-xl border border-line bg-panel p-5">
            <p className="text-xs tracking-wide text-muted uppercase">{t("contact.access")}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{t("contact.accessBody")}</p>
          </div>
          <div className="rounded-xl border border-line bg-panel p-5">
            <p className="text-xs tracking-wide text-muted uppercase">{t("contact.useful")}</p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
              <li>{t("contact.u1")}</li>
              <li>{t("contact.u2")}</li>
              <li>{t("contact.u3")}</li>
            </ul>
          </div>
          <div className="rounded-xl border border-line bg-panel p-5">
            <p className="text-xs tracking-wide text-muted uppercase">{t("contact.reply")}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{t("contact.replyBody")}</p>
          </div>
        </aside>

        <div className="lg:col-span-8">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
