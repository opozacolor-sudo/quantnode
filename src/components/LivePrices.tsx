"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";

type Quote = {
  id: string;
  symbol: string;
  name: string;
  category: "crypto" | "commodity";
  price: number;
  change24h: number | null;
  currency: string;
  source: string;
};

type Payload = {
  updatedAt: string;
  quotes: Quote[];
  errors?: string[];
};

function formatPrice(value: number, locale: string) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: value >= 100 ? 2 : 4,
  }).format(value);
}

export function LivePrices() {
  const { t, bcp47 } = useI18n();
  const [data, setData] = useState<Payload | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/prices", { cache: "no-store" });
        if (!res.ok) throw new Error("fail");
        const json = (await res.json()) as Payload;
        if (!cancelled) {
          setData(json);
          setStatus("ready");
        }
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    load();
    const id = setInterval(load, 20000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  return (
    <section id="prix" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs tracking-wide text-accent uppercase">{t("prices.kicker")}</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">{t("prices.title")}</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted">{t("prices.body")}</p>
          </div>
          <p className="font-mono text-xs text-muted">
            {data?.updatedAt
              ? t("prices.updated", { time: new Date(data.updatedAt).toLocaleTimeString(bcp47) })
              : t("prices.loadingFeed")}
          </p>
        </div>

        {status === "error" ? (
          <p className="rounded-lg border border-line bg-panel px-4 py-6 text-sm text-muted">{t("prices.error")}</p>
        ) : (
          <div className="overflow-hidden rounded-xl border border-line">
            <div className="grid grid-cols-12 bg-panel-2 px-4 py-3 font-mono text-[11px] tracking-wide text-muted uppercase">
              <div className="col-span-5 sm:col-span-4">{t("prices.instrument")}</div>
              <div className="col-span-4 text-right sm:col-span-3">{t("prices.price")}</div>
              <div className="col-span-3 text-right">{t("prices.change")}</div>
              <div className="hidden text-right sm:col-span-2 sm:block">{t("prices.source")}</div>
            </div>
            {(data?.quotes ?? []).length === 0 && status === "loading" ? (
              <div className="px-4 py-8 text-sm text-muted">{t("prices.loadingQuotes")}</div>
            ) : (
              (data?.quotes ?? []).map((quote) => {
                const up = (quote.change24h ?? 0) >= 0;
                return (
                  <div key={quote.id} className="grid grid-cols-12 items-center border-t border-line px-4 py-4 text-sm">
                    <div className="col-span-5 sm:col-span-4">
                      <div className="font-medium">{quote.symbol}</div>
                      <div className="text-xs text-muted">{quote.name}</div>
                    </div>
                    <div className="col-span-4 text-right font-mono sm:col-span-3">{formatPrice(quote.price, bcp47)}</div>
                    <div className={`col-span-3 text-right font-mono ${up ? "text-gain" : "text-loss"}`}>
                      {quote.change24h === null ? "—" : `${up ? "+" : ""}${quote.change24h.toFixed(2)}%`}
                    </div>
                    <div className="hidden text-right text-xs text-muted sm:col-span-2 sm:block">{quote.source}</div>
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </section>
  );
}
