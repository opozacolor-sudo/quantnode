"use client";

import { termsByLocale } from "@/content/terms";
import { LegalArticle } from "@/components/LegalArticle";
import { useI18n } from "@/i18n/I18nProvider";

export function TermsContent() {
  const { locale } = useI18n();
  return <LegalArticle doc={termsByLocale[locale]} />;
}
