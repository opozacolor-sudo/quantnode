import { LoginForm } from "@/components/LoginForm";
import { SiteShell } from "@/components/SiteShell";

export default function PlatformPage() {
  return (
    <SiteShell>
      <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-16 sm:px-6">
        <h1 className="text-3xl font-semibold tracking-tight">Conectare</h1>
        <p className="mt-3 text-sm leading-6 text-muted">
          Autentifică-te pentru a deschide dashboard-ul: portofel, limite, stop-loss și istoric.
        </p>
        <LoginForm />
      </div>
    </SiteShell>
  );
}
