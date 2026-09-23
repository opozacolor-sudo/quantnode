import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { TradingCalendar } from "@/components/TradingCalendar";

export const metadata: Metadata = {
  title: "Istoric tranzacționări — AlgorithmNode",
  description: "Calendar de execuție algoritmică de la 2021 până în prezent, pe Binance, XTB și Plus500.",
};

export default function HistoryPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs tracking-wide text-accent uppercase">Categorie</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Istoric tranzacționări
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
            De la 20.000 EUR pe 11 ianuarie 2021, execuție zilnică pe Binance, XTB și Plus500. Circa 80% din
            zile au fost pe plus. La început, zilele bune porneau de la +4%, cu un vârf de +74%; pe capitalul
            mare, rezultatul zilnic e temperat. Soldul actual de lucru este 16.455.302,46 EUR.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <TradingCalendar />
      </section>
    </SiteShell>
  );
}
