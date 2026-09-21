import Link from "next/link";
import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { LivePrices } from "@/components/LivePrices";
import { SiteShell } from "@/components/SiteShell";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <LivePrices />
      <section className="border-t border-white/8">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-16 sm:px-6 md:grid-cols-2">
          <Link href="/cum-functioneaza" className="rounded-xl border border-white/8 bg-panel p-6 transition-colors hover:border-accent/30">
            <p className="font-mono text-xs text-accent">01</p>
            <h2 className="mt-3 text-xl font-medium tracking-tight">Cum funcționează</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Binance, XTB, Plus500 · boți pe date de piață · dashboard și retrageri în 24h.
            </p>
          </Link>
          <Link href="/contact" className="rounded-xl border border-white/8 bg-panel p-6 transition-colors hover:border-accent/30">
            <p className="font-mono text-xs text-accent">02</p>
            <h2 className="mt-3 text-xl font-medium tracking-tight">Contact</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Acces la platformă, integrare API sau întrebări despre risc — fără pitch agresiv.
            </p>
          </Link>
        </div>
      </section>
      <About />
    </SiteShell>
  );
}
