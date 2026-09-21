const steps = [
  {
    n: "01",
    title: "Conectezi contul la un broker reglementat",
    body: "QuantNode nu deschide conturi de tranzacționare și nu preia fonduri. Conexiunea se face către un broker sau un venue deja reglementat, ales de dumneavoastră.",
  },
  {
    n: "02",
    title: "Activezi agentul prin API securizat",
    body: "Cheile de acces sunt emise cu permisiuni stricte de trading. Nu există drepturi de retragere. Politicile de risc (inclusiv Stop-Loss) pot fi impuse la nivel de infrastructură.",
  },
  {
    n: "03",
    title: "Monitorizezi execuția din panoul de control",
    body: "Jurnale de ordine, starea agenților, latență și alerte operaționale rămân vizibile în dashboard. Intervenția umană este oricând posibilă prin API sau UI.",
  },
];

export function HowItWorks() {
  return (
    <section id="cum-functioneaza" className="scroll-mt-20 border-t border-white/8">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-xs tracking-wide text-accent uppercase">Operațiuni</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">Cum funcționează</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
          Un flux scurt, auditabil, gândit pentru echipe care au deja un proces de risc și un broker.
        </p>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {steps.map((step) => (
            <article key={step.n} className="rounded-xl border border-white/8 bg-panel p-6">
              <p className="font-mono text-xs text-accent">{step.n}</p>
              <h3 className="mt-4 text-lg font-medium tracking-tight">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
