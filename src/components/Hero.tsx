import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-accent/8 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/3 px-3 py-1 text-xs tracking-wide text-muted uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          SaaS · API-first · fără custodie
        </p>

        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          Infrastructură de tranzacționare algoritmică bazată pe date
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          QuantNode furnizează software de execuție, orchestrare și monitorizare pentru agenți algoritmici.
          Capitalul rămâne la brokerul dumneavoastră reglementat. Controlul se face exclusiv prin API, cu
          permisiuni stricte de trading — fără deținere sau retragere de fonduri.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
          >
            Vezi Documentația
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-white/12 bg-white/4 px-5 py-3 text-sm font-medium hover:bg-white/8"
          >
            Începe Acum
          </Link>
        </div>

        <dl className="mt-16 grid gap-6 border-t border-white/8 pt-8 sm:grid-cols-3">
          <div>
            <dt className="text-xs tracking-wide text-muted uppercase">Model</dt>
            <dd className="mt-1 text-sm">SaaS de infrastructură, nu gestiune de portofoliu</dd>
          </div>
          <div>
            <dt className="text-xs tracking-wide text-muted uppercase">Custodie</dt>
            <dd className="mt-1 text-sm">Zero. Conturile rămân la brokerul conectat</dd>
          </div>
          <div>
            <dt className="text-xs tracking-wide text-muted uppercase">Acces API</dt>
            <dd className="mt-1 text-sm">Chei cu scop limitat: trading, fără withdraw</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
