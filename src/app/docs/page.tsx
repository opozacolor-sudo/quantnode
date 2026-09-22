import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export default function DocsPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-xs tracking-wide text-accent uppercase">Documentație</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">API QuantNode</h1>
        <p className="mt-4 text-sm leading-7 text-muted">
          Documentația completă de producție este livrată odată cu accesul la platformă. Mai jos este
          modelul de integrare.
        </p>

        <section className="mt-10 space-y-4 text-sm leading-7 text-muted">
          <h2 className="text-xl font-medium text-foreground">Autentificare</h2>
          <p>
            Toate cererile folosesc un header <code className="font-mono text-accent">Authorization: Bearer &lt;api_key&gt;</code>.
            Cheile sunt scoped: <code className="font-mono text-foreground">trade:read</code>,{" "}
            <code className="font-mono text-foreground">trade:write</code>. Scope-ul{" "}
            <code className="font-mono text-foreground">withdraw</code> nu există.
          </p>
          <h2 className="pt-4 text-xl font-medium text-foreground">Flux minim</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Conectați un venue/broker reglementat din dashboard.</li>
            <li>Definiți limitele de risc (Stop-Loss, notional maxim, orar de trading).</li>
            <li>Activați un agent sau trimiteți ordine prin endpoint-ul de execuție.</li>
            <li>Monitorizați fill-urile și starea în panoul de control.</li>
          </ol>
        </section>

        <Link href="/contact" className="mt-12 inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white">
          Solicitați acces
        </Link>
      </div>
    </SiteShell>
  );
}
