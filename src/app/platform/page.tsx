import Link from "next/link";
import { PlatformAccessForm } from "@/components/PlatformAccessForm";
import { SiteShell } from "@/components/SiteShell";

export default function PlatformPage() {
  return (
    <SiteShell>
      <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-16 sm:px-6">
        <h1 className="text-3xl font-semibold tracking-tight">Conectare</h1>
        <p className="mt-3 text-sm leading-6 text-muted">
          Introduceți adresa de email pentru a solicita sau a continua accesul la platformă.
        </p>
        <PlatformAccessForm />
        <Link href="/contact" className="mt-6 text-sm text-accent hover:underline">
          Preferi un mesaj detaliat? Formularul de contact
        </Link>
      </div>
    </SiteShell>
  );
}
