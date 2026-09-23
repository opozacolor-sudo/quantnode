"use client";

import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { useI18n } from "@/i18n/I18nProvider";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-line pb-4">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <BrandMark />
            <p className="mt-3 text-sm text-muted">{t("footer.tagline")}</p>
            <nav className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
              <Link href="/comment-ca-marche" className="hover:text-foreground">
                {t("nav.how")}
              </Link>
              <Link href="/historique" className="hover:text-foreground">
                {t("nav.history")}
              </Link>
              <Link href="/contact" className="hover:text-foreground">
                {t("nav.contact")}
              </Link>
            </nav>
            <p className="mt-4 text-sm text-muted">{t("footer.apps")}</p>
          </div>
          <p className="text-xs leading-6 text-muted">{t("footer.disclaimer")}</p>
        </div>
        <p className="mt-10 text-xs text-muted">{t("footer.rights")}</p>
      </div>
    </footer>
  );
}
