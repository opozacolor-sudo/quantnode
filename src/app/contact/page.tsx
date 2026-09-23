import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Contact — AlgorithmNode",
  description: "Contact tehnic pentru acces la platformă, integrare API și întrebări despre permisiuni și risc.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs tracking-wide text-accent uppercase">Contact</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Discuție tehnică, nu vânzare agresivă
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
            Pentru acces la platformă, integrare API sau întrebări despre permisiuni și risc, trimiteți un
            mesaj. Răspundem în programul de lucru.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:py-16">
        <aside className="space-y-4 lg:col-span-4">
          <div className="rounded-xl border border-line bg-panel p-5">
            <p className="text-xs tracking-wide text-muted uppercase">Acces</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Conturile se emit doar de administrator, după mesajul din formular.
            </p>
          </div>
          <div className="rounded-xl border border-line bg-panel p-5">
            <p className="text-xs tracking-wide text-muted uppercase">Util</p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
              <li>Broker / venue reglementat</li>
              <li>Nevoi de API (execuție, date, alerte)</li>
              <li>Cerințe de risc (Stop-Loss, limite)</li>
            </ul>
          </div>
          <div className="rounded-xl border border-line bg-panel p-5">
            <p className="text-xs tracking-wide text-muted uppercase">Răspuns</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Mesajele sunt înregistrate în sistem. Nu trimitem oferte speculative și nu cerem transfer de fonduri.
            </p>
          </div>
        </aside>

        <div className="lg:col-span-8">
          <ContactForm />
        </div>
      </section>
    </SiteShell>
  );
}
