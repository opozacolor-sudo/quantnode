"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";

export function HomeCards() {
  const { t } = useI18n();

  return (
    <section className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-16 sm:px-6 md:grid-cols-3">
        <Link href="/comment-ca-marche" className="rounded-xl border border-line bg-panel p-6 transition-colors hover:border-accent/30">
          <p className="font-mono text-xs text-accent">01</p>
          <h2 className="mt-3 text-xl font-medium tracking-tight">{t("home.howTitle")}</h2>
          <p className="mt-2 text-sm leading-6 text-muted">{t("home.howBody")}</p>
        </Link>
        <Link href="/historique" className="rounded-xl border border-line bg-panel p-6 transition-colors hover:border-accent/30">
          <p className="font-mono text-xs text-accent">02</p>
          <h2 className="mt-3 text-xl font-medium tracking-tight">{t("home.historyTitle")}</h2>
          <p className="mt-2 text-sm leading-6 text-muted">{t("home.historyBody")}</p>
        </Link>
        <Link href="/contact" className="rounded-xl border border-line bg-panel p-6 transition-colors hover:border-accent/30">
          <p className="font-mono text-xs text-accent">03</p>
          <h2 className="mt-3 text-xl font-medium tracking-tight">{t("home.contactTitle")}</h2>
          <p className="mt-2 text-sm leading-6 text-muted">{t("home.contactBody")}</p>
        </Link>
      </div>
    </section>
  );
}
