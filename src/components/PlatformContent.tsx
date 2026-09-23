"use client";

import Link from "next/link";
import { LoginForm } from "@/components/LoginForm";
import { useI18n } from "@/i18n/I18nProvider";

export function PlatformContent() {
  const { t } = useI18n();

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight">{t("login.title")}</h1>
      <p className="mt-3 text-sm leading-6 text-muted">{t("login.lead")}</p>
      <LoginForm />
      <Link href="/contact" className="mt-6 text-sm text-accent hover:underline">
        {t("login.noAccount")}
      </Link>
    </div>
  );
}
