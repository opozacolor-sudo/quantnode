import Link from "next/link";

function Candle({
  className,
  color,
  delay,
  height,
}: {
  className: string;
  color: string;
  delay: string;
  height: string;
}) {
  return (
    <div
      className={`candle-float pointer-events-none absolute hidden sm:block ${className}`}
      style={{ animationDelay: delay }}
      aria-hidden
    >
      <div className={`mx-auto h-6 w-px ${color} opacity-40`} />
      <div className={`${height} w-2.5 rounded-sm ${color}`} />
      <div className={`mx-auto h-5 w-px ${color} opacity-40`} />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <Candle className="top-16 left-[8%]" color="bg-accent" delay="0s" height="h-14" />
      <Candle className="top-28 left-[18%]" color="bg-violet-400" delay="0.6s" height="h-10" />
      <Candle className="top-12 right-[14%]" color="bg-sky-400" delay="1.1s" height="h-16" />
      <Candle className="right-[8%] bottom-28" color="bg-indigo-400" delay="1.8s" height="h-12" />
      <Candle className="bottom-24 left-[12%]" color="bg-blue-300" delay="0.3s" height="h-9" />
      <Candle className="top-40 right-[22%]" color="bg-accent" delay="2.2s" height="h-8" />

      <div className="relative mx-auto flex max-w-4xl flex-1 flex-col justify-center px-4 pt-10 pb-8 text-center sm:px-6">
        <p className="mb-6 text-sm text-muted">SaaS · API-first · fără custodie</p>

        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          Infrastructură de tranzacționare pentru piețe globale.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          AlgorithmNode execută automat, prin agenți care citesc piața la microsecunde și boți care
          urmăresc factorii de preț pe crypto, aur/USD, petrol, acțiuni, mărfuri și valute.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Începe acum
          </Link>
          <Link
            href="/cum-functioneaza"
            className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-sm font-medium hover:bg-panel"
          >
            Explorează platforma
          </Link>
        </div>
      </div>

      <p className="relative mb-2 px-4 pb-20 text-center text-sm text-muted">
        Piețe pe care tranzacționăm.
      </p>
    </section>
  );
}
