"use client";

import type { ReactNode } from "react";
import type { Locale } from "./config";
import { I18nProvider } from "./I18nProvider";

export function Providers({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <I18nProvider initialLocale={locale}>{children}</I18nProvider>;
}
