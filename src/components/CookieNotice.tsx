"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";

const STORAGE_KEY = "an_cookie_ack";

export function CookieNotice() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      setVisible(window.localStorage.getItem(STORAGE_KEY) !== "1");
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  function accept() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  return (
    <div className="fixed inset-x-0 bottom-[4.5rem] z-50 px-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 rounded-xl border border-line bg-background/95 p-4 shadow-lg backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-muted sm:text-sm">
          {t("cookie.body")}{" "}
          <Link href="/confidentialite" className="text-accent hover:underline">
            {t("footer.privacy")}
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white"
        >
          {t("cookie.accept")}
        </button>
      </div>
    </div>
  );
}
