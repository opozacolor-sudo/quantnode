import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { TradingCalendar } from "@/components/TradingCalendar";

export const metadata: Metadata = {
  title: "Istoric tranzacționări — QuantNode",
  description: "Calendar de execuție algoritmică de la 2021 până în prezent, pe Binance, XTB și Plus500.",
};

export default function HistoryPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs tracking-wide text-accent uppercase">Categorie</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Istoric tranzacționări
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
            Activitate de la începutul din 2021. Calendarul arată zilele cu execuție pe Binance, XTB și
            Plus500. Selectează o lună și o zi pentru detaliu.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <TradingCalendar />
      </section>
    </SiteShell>
  );
}
