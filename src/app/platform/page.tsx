import Link from "next/link";
import { LoginForm } from "@/components/LoginForm";
import { SiteShell } from "@/components/SiteShell";

export default function PlatformPage() {
  return (
    <SiteShell>
      <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-16 sm:px-6">
        <h1 className="text-3xl font-semibold tracking-tight">Conectare</h1>
        <p className="mt-3 text-sm leading-6 text-muted">
          Accesul se acordă de către administrator după ce ne contactați. Introduceți datele primite pentru
          a intra în dashboard.
        </p>
        <LoginForm />
        <Link href="/contact" className="mt-6 text-sm text-accent hover:underline">
          Nu aveți cont? Scrieți-ne
        </Link>
      </div>
    </SiteShell>
  );
}
