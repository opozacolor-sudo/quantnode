"use client";

import { useEffect, useState } from "react";

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

function formatPrice(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: value >= 100 ? 2 : 4,
  }).format(value);
}

export function LivePrices() {
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
    <section id="preturi" className="scroll-mt-20 border-t border-white/8">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs tracking-wide text-accent uppercase">Piață</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Prețuri live</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted">
              Date de referință pentru crypto (BTC, ETH) și mărfuri energetice (Brent, WTI), actualizate
              periodic din surse publice. Nu reprezintă recomandare de investiții.
            </p>
          </div>
          <p className="font-mono text-xs text-muted">
            {data?.updatedAt
              ? `Ultima actualizare ${new Date(data.updatedAt).toLocaleTimeString("ro-RO")}`
              : "Se încarcă fluxul de date…"}
          </p>
        </div>

        {status === "error" ? (
          <p className="rounded-lg border border-white/8 bg-panel px-4 py-6 text-sm text-muted">
            Fluxul de prețuri este temporar indisponibil. Reîncercați în câteva momente.
          </p>
        ) : (
          <div className="overflow-hidden rounded-xl border border-white/8">
            <div className="grid grid-cols-12 bg-panel-2 px-4 py-3 font-mono text-[11px] tracking-wide text-muted uppercase">
              <div className="col-span-5 sm:col-span-4">Instrument</div>
              <div className="col-span-4 text-right sm:col-span-3">Preț</div>
              <div className="col-span-3 text-right">24h</div>
              <div className="hidden text-right sm:col-span-2 sm:block">Sursă</div>
            </div>
            {(data?.quotes ?? []).length === 0 && status === "loading" ? (
              <div className="px-4 py-8 text-sm text-muted">Se preiau cotațiile…</div>
            ) : (
              (data?.quotes ?? []).map((quote) => {
                const up = (quote.change24h ?? 0) >= 0;
                return (
                  <div
                    key={quote.id}
                    className="grid grid-cols-12 items-center border-t border-white/8 px-4 py-4 text-sm"
                  >
                    <div className="col-span-5 sm:col-span-4">
                      <div className="font-medium">{quote.symbol}</div>
                      <div className="text-xs text-muted">{quote.name}</div>
                    </div>
                    <div className="col-span-4 text-right font-mono sm:col-span-3">
                      {formatPrice(quote.price)}
                    </div>
                    <div className={`col-span-3 text-right font-mono ${up ? "text-accent" : "text-red-400"}`}>
                      {quote.change24h === null
                        ? "—"
                        : `${up ? "+" : ""}${quote.change24h.toFixed(2)}%`}
                    </div>
                    <div className="hidden text-right text-xs text-muted sm:col-span-2 sm:block">
                      {quote.source}
                    </div>
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
