import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Cum funcționează — QuantNode",
  description:
    "Boți de tranzacții automate pe Binance, XTB și Plus500, pe date de piață la microsecundă, cu dashboard și retragere în maxim 24 de ore.",
};

const steps = [
  {
    n: "01",
    title: "Tranzacționăm pe platformele majore",
    body: "Execuția se face pe Binance, XTB și Plus500, prin boți de tranzacții automate. Variațiile de profit se situează între 4% și 40%. Performanțele anterioare nu sunt o garanție pentru rezultate viitoare.",
    points: ["Binance, XTB, Plus500", "Boți de tranzacții automate", "Variații de profit 4–40%"],
  },
  {
    n: "02",
    title: "Decizii pe date la microsecundă",
    body: "Boții de tranzacționare se bazează pe informații la microsecundă, din surse de încredere, despre evenimente și știri care influențează prețurile și fluctuațiile de piață.",
    points: ["Latență la microsecundă", "Surse de încredere", "Evenimente și știri de piață"],
  },
  {
    n: "03",
    title: "Dashboard activ și control asupra fondurilor",
    body: "Ai un dashboard activ, control asupra finanțelor și retragere în maxim 24 de ore în contul tău.",
    points: ["Dashboard activ", "Control asupra finanțelor", "Retragere în maxim 24 de ore"],
  },
];

export default function HowItWorksPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs tracking-wide text-accent uppercase">Operațiuni</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">Cum funcționează</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
            Boți de execuție pe Binance, XTB și Plus500, alimentați de date de piață, cu un dashboard din
            care controlezi activitatea și retragerile.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <ol className="space-y-5">
          {steps.map((step) => (
            <li key={step.n} className="grid gap-6 rounded-2xl border border-white/8 bg-panel p-6 sm:p-8 lg:grid-cols-12">
              <div className="lg:col-span-2">
                <p className="font-mono text-3xl text-accent/80">{step.n}</p>
              </div>
              <div className="lg:col-span-6">
                <h2 className="text-xl font-medium tracking-tight">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{step.body}</p>
              </div>
              <ul className="space-y-2 text-sm text-muted lg:col-span-4">
                {step.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-white/8 bg-panel-2 p-5">
            <h3 className="text-sm font-medium">Ce furnizăm</h3>
            <p className="mt-2 text-sm leading-6 text-muted">
              Automatizare pe venue-uri majore, date de piață și un panou de control pentru execuție și fonduri.
            </p>
          </article>
          <article className="rounded-xl border border-white/8 bg-panel-2 p-5">
            <h3 className="text-sm font-medium">Ce nu facem</h3>
            <p className="mt-2 text-sm leading-6 text-muted">
              Nu deschidem tranzacții care nu se încadrează în limitele impuse de utilizator.
            </p>
          </article>
          <article className="rounded-xl border border-white/8 bg-panel-2 p-5">
            <h3 className="text-sm font-medium">Risc</h3>
            <p className="mt-2 text-sm leading-6 text-muted">
              Tranzacționarea implică risc de pierdere. Limitele tale rămân regula de execuție.
            </p>
          </article>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-medium text-black">
            Solicitați acces
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-md border border-white/12 bg-white/4 px-5 py-3 text-sm font-medium hover:bg-white/8"
          >
            Vezi documentația
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
