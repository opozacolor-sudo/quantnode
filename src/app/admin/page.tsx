"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BrandMark } from "@/components/BrandMark";
import { isAdminSession } from "@/lib/admin";
import { getSupabaseBrowser } from "@/lib/supabase-browser";

type Issued = { id: string; email: string; created_at: string };

export default function AdminPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [accounts, setAccounts] = useState<Issued[]>([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  const load = useCallback(async () => {
    const supabase = getSupabaseBrowser();
    const { data } = await supabase.auth.getSession();
    if (!data.session || !isAdminSession(data.session.user)) {
      router.replace("/platform");
      return;
    }
    const { data: rows, error: listError } = await supabase
      .from("issued_accounts")
      .select("id, email, created_at")
      .order("created_at", { ascending: false });
    if (listError) setError(listError.message);
    else setAccounts((rows ?? []) as Issued[]);
    setReady(true);
  }, [router]);

  useEffect(() => {
    load();
  }, [load]);

  async function onCreate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setMessage("");
    setSending(true);
    const form = event.currentTarget;
    const payload = new FormData(form);
    const email = String(payload.get("email") ?? "").trim();
    const password = String(payload.get("password") ?? "");
    const confirm = String(payload.get("confirm") ?? "");
    if (password !== confirm) {
      setSending(false);
      setError("Parolele nu coincid.");
      return;
    }
    const supabase = getSupabaseBrowser();
    const { error: rpcError } = await supabase.rpc("admin_create_account", {
      p_email: email,
      p_password: password,
    });
    setSending(false);
    if (rpcError) {
      setError(rpcError.message);
      return;
    }
    form.reset();
    setMessage(`Cont creat pentru ${email}. Persoana se poate conecta din Conectare.`);
    await load();
  }

  async function logout() {
    await getSupabaseBrowser().auth.signOut();
    router.replace("/platform");
  }

  if (!ready) {
    return <div className="flex min-h-full items-center justify-center text-sm text-muted">Se încarcă admin…</div>;
  }

  return (
    <div className="min-h-full bg-background">
      <header className="sticky top-0 z-40 border-b border-line bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <BrandMark href="/admin" />
          <div className="flex items-center gap-3 text-sm">
            <span className="hidden text-muted sm:inline">AdminAlgoritm</span>
            <button type="button" onClick={logout} className="rounded-full border border-line px-3 py-1.5 hover:bg-panel">
              Ieșire
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl space-y-8 px-4 py-10 sm:px-6">
        <section>
          <p className="text-xs tracking-wide text-accent uppercase">Administrare</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Emitere conturi</h1>
          <p className="mt-3 text-sm leading-6 text-muted">
            Conturile de platformă se creează doar de aici. Nu există înregistrare publică.
          </p>
        </section>

        {message ? <p className="text-sm text-accent">{message}</p> : null}
        {error ? <p className="text-sm text-red-600">{error}</p> : null}

        <form onSubmit={onCreate} className="space-y-4 rounded-xl border border-line bg-panel p-6">
          <div>
            <label className="mb-1.5 block text-xs text-muted" htmlFor="email">
              Email persoană interesată
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border border-line bg-background px-3 py-2.5 text-sm outline-none focus:border-accent/50"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs text-muted" htmlFor="password">
              Parolă inițială
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={8}
              className="w-full rounded-md border border-line bg-background px-3 py-2.5 text-sm outline-none focus:border-accent/50"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs text-muted" htmlFor="confirm">
              Confirmă parola
            </label>
            <input
              id="confirm"
              name="confirm"
              type="password"
              required
              minLength={8}
              className="w-full rounded-md border border-line bg-background px-3 py-2.5 text-sm outline-none focus:border-accent/50"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white disabled:opacity-60"
          >
            {sending ? "Se creează…" : "Creează cont"}
          </button>
        </form>

        <section className="overflow-hidden rounded-xl border border-line">
          <div className="border-b border-line bg-panel-2 px-4 py-4">
            <h2 className="text-lg font-medium">Conturi emise</h2>
          </div>
          <ul className="divide-y divide-line text-sm">
            {accounts.length === 0 ? (
              <li className="px-4 py-6 text-muted">Niciun cont emis încă.</li>
            ) : (
              accounts.map((item) => (
                <li key={item.id} className="flex items-center justify-between px-4 py-3">
                  <span>{item.email}</span>
                  <span className="text-xs text-muted">{new Date(item.created_at).toLocaleString("ro-RO")}</span>
                </li>
              ))
            )}
          </ul>
        </section>
      </main>
    </div>
  );
}
