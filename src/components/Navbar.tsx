"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { LanguageSwitcher } from "@/i18n/LanguageSwitcher";
import { useI18n } from "@/i18n/I18nProvider";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useI18n();

  const links = [
    { href: "/#a-propos", key: "nav.about" },
    { href: "/comment-ca-marche", key: "nav.how" },
    { href: "/historique", key: "nav.history" },
    { href: "/#prix", key: "nav.prices" },
    { href: "/contact", key: "nav.contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <BrandMark />

        <nav className="hidden items-center gap-7 text-sm md:flex">
          {links.map((link) => {
            const isCurrent = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-foreground ${isCurrent ? "text-foreground" : "text-muted"}`}
              >
                {t(link.key)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <Link
            href="/platform"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            {t("nav.login")}
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="rounded-full border border-line px-3 py-1.5 text-sm"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={t("nav.menu")}
          >
            {t("nav.menu")}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-muted hover:text-foreground">
                {t(link.key)}
              </Link>
            ))}
            <Link
              href="/platform"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-accent px-3.5 py-2 text-center text-white"
            >
              {t("nav.login")}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
