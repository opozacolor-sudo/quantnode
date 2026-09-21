import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export default function PlatformPage() {
  return (
    <SiteShell>
      <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-16 sm:px-6">
        <h1 className="text-3xl font-semibold tracking-tight">Conectare</h1>
        <p className="mt-3 text-sm leading-6 text-muted">
          Accesul la platformă este pe bază de invitație, pentru operatori care au deja un broker
          reglementat și un proces intern de risc.
        </p>
        <form className="mt-8 space-y-4 rounded-xl border border-white/8 bg-panel p-6">
          <div>
            <label className="mb-1.5 block text-xs text-muted" htmlFor="email">
              Email profesional
            </label>
            <input
              id="email"
              type="email"
              disabled
              placeholder="nume@firma.com"
              className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2.5 text-sm"
            />
          </div>
          <button
            type="button"
            disabled
            className="w-full rounded-md border border-white/10 bg-white/5 py-2.5 text-sm text-muted"
          >
            SSO / acces — disponibil după onboarding
          </button>
        </form>
        <Link href="/contact" className="mt-6 text-sm text-accent hover:underline">
          Cereți acces prin formularul de contact
        </Link>
      </div>
    </SiteShell>
  );
}
