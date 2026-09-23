"use client";

import { privacyByLocale } from "@/content/privacy";
import { LegalArticle } from "@/components/LegalArticle";
import { useI18n } from "@/i18n/I18nProvider";

export function PrivacyContent() {
  const { locale } = useI18n();
  return <LegalArticle doc={privacyByLocale[locale]} />;
}
