import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Cum funcționează — QuantNode",
  description:
    "Conectare la broker reglementat, activare agent prin API fără drept de retragere, monitorizare în panoul de control.",
};

const steps = [
  {
    n: "01",
    title: "Conectezi contul la un broker reglementat",
    body: "QuantNode nu deschide conturi de tranzacționare și nu preia fonduri. Conexiunea se face către un broker sau un venue deja reglementat, ales de dumneavoastră. Capitalul rămâne unde este astăzi.",
    points: ["Fără custodie de active", "Contul rămâne pe numele operatorului", "Onboarding pe venue-ul existent"],
  },
  {
    n: "02",
    title: "Activezi agentul prin API securizat",
    body: "Cheile de acces sunt emise cu permisiuni stricte de trading. Nu există drepturi de retragere. Politicile de risc — inclusiv Stop-Loss și plafoane de notional — pot fi impuse la nivel de infrastructură, înainte de execuție.",
    points: ["Scope trade:read / trade:write", "Fără withdraw", "Limite de risc configurabile"],
  },
  {
    n: "03",
    title: "Monitorizezi execuția din panoul de control",
    body: "Jurnale de ordine, starea agenților, latență și alerte operaționale rămân vizibile în dashboard. Intervenția umană este oricând posibilă prin API sau UI: pauză, revocare cheie, ajustare de risc.",
    points: ["Audit al ordinelor", "Alerte operaționale", "Control uman în orice moment"],
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
            Un flux scurt, auditabil, gândit pentru echipe care au deja un proces de risc și un broker.
            QuantNode orchestrează execuția. Nu administrează capitalul.
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
            <p className="mt-2 text-sm leading-6 text-muted">Software SaaS: conectare, execuție, observabilitate.</p>
          </article>
          <article className="rounded-xl border border-white/8 bg-panel-2 p-5">
            <h3 className="text-sm font-medium">Ce nu facem</h3>
            <p className="mt-2 text-sm leading-6 text-muted">Nu deținem fonduri, nu dăm sfaturi de investiții, nu gestionăm portofolii.</p>
          </article>
          <article className="rounded-xl border border-white/8 bg-panel-2 p-5">
            <h3 className="text-sm font-medium">Risc</h3>
            <p className="mt-2 text-sm leading-6 text-muted">Stop-Loss și limitele de expunere sunt cerințe de sistem, nu opțiuni de marketing.</p>
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
