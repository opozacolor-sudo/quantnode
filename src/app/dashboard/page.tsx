"use client";

import Link from "next/link";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BrandMark } from "@/components/BrandMark";
import { isAdminSession } from "@/lib/admin";
import { getSupabaseBrowser } from "@/lib/supabase-browser";

type Wallet = { available: number; currency: string };
type Settings = { max_trade: number; daily_limit: number; stop_loss_pct: number };
type LedgerRow = {
  id: string;
  type: "deposit" | "withdraw" | "trade";
  amount: number;
  status: string;
  note: string | null;
  created_at: string;
};

function money(value: number, currency = "EUR") {
  return new Intl.NumberFormat("ro-RO", { style: "currency", currency }).format(value);
}

function typeLabel(type: LedgerRow["type"]) {
  if (type === "deposit") return "Depunere";
  if (type === "withdraw") return "Retragere";
  return "Tranzacție";
}

function statusLabel(status: string) {
  if (status === "pending") return "În așteptare";
  if (status === "rejected") return "Respinsă";
  if (status === "completed") return "Finalizat";
  return status;
}

export default function DashboardPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [settings, setSettings] = useState<Settings | null>(null);
  const [rows, setRows] = useState<LedgerRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    const supabase = getSupabaseBrowser();
    const { data: sessionData } = await supabase.auth.getSession();
    if (!sessionData.session) {
      router.replace("/platform");
      return;
    }
    if (isAdminSession(sessionData.session.user)) {
      router.replace("/admin");
      return;
    }
    setEmail(sessionData.session.user.email ?? "");

    const [walletRes, settingsRes, ledgerRes] = await Promise.all([
      supabase.from("wallets").select("available, currency").maybeSingle(),
      supabase.from("trading_settings").select("max_trade, daily_limit, stop_loss_pct").maybeSingle(),
      supabase.from("ledger").select("id, type, amount, status, note, created_at").order("created_at", { ascending: false }).limit(50),
    ]);

    setWallet(walletRes.data ?? { available: 0, currency: "EUR" });
    setRows((ledgerRes.data as LedgerRow[]) ?? []);

    if (settingsRes.data) {
      setSettings(settingsRes.data);
    } else {
      const userId = sessionData.session.user.id;
      const { data: created, error: createError } = await supabase
        .from("trading_settings")
        .insert({
          user_id: userId,
          max_trade: 500,
          daily_limit: 2500,
          stop_loss_pct: 2.5,
        })
        .select("max_trade, daily_limit, stop_loss_pct")
        .single();
      if (!createError && created) setSettings(created);
      else {
        setSettings({ max_trade: 500, daily_limit: 2500, stop_loss_pct: 2.5 });
      }
    }
    setLoading(false);
  }, [router]);

  useEffect(() => {
    load();
  }, [load]);

  async function onMove(type: "deposit" | "withdraw", event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setMessage("");
    const amount = Number(new FormData(event.currentTarget).get("amount"));
    const supabase = getSupabaseBrowser();
    const fn = type === "deposit" ? "deposit_funds" : "withdraw_funds";
    const { error: rpcError } = await supabase.rpc(fn, { p_amount: amount });
    if (rpcError) {
      setError(rpcError.message);
      return;
    }
    event.currentTarget.reset();
    setMessage(
      type === "deposit"
        ? "Cererea de depunere a fost înregistrată. Soldul se actualizează după confirmare."
        : "Cererea de retragere a fost înregistrată. Procesare în maxim 24 de ore.",
    );
    await load();
  }

  async function onSaveSettings(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setMessage("");
    const form = new FormData(event.currentTarget);
    const maxTrade = Number(form.get("max_trade"));
    const stopLoss = Number(form.get("stop_loss_pct"));
    const dailyLimit = Number(form.get("daily_limit") || settings?.daily_limit || 2500);
    const supabase = getSupabaseBrowser();
    const { data, error: rpcError } = await supabase.rpc("save_trading_settings", {
      p_max_trade: maxTrade,
      p_stop_loss_pct: stopLoss,
      p_daily_limit: dailyLimit,
    });
    if (rpcError) {
      setError(rpcError.message);
      return;
    }
    const saved = Array.isArray(data) ? data[0] : data;
    if (saved) {
      setSettings({
        max_trade: Number(saved.max_trade),
        daily_limit: Number(saved.daily_limit),
        stop_loss_pct: Number(saved.stop_loss_pct),
      });
    }
    setMessage("Stop-Loss și limita per tranzacție au fost salvate.");
  }

  async function logout() {
    await getSupabaseBrowser().auth.signOut();
    router.replace("/platform");
  }

  if (loading) {
    return (
      <div className="flex min-h-full items-center justify-center text-sm text-muted">Se încarcă dashboard-ul…</div>
    );
  }

  return (
    <div className="min-h-full bg-background">
      <header className="sticky top-0 z-40 border-b border-line bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <BrandMark href="/dashboard" />
          <div className="flex items-center gap-3 text-sm">
            <span className="hidden text-muted sm:inline">{email}</span>
            <Link href="/" className="text-muted hover:text-foreground">
              Site
            </Link>
            <button type="button" onClick={logout} className="rounded-full border border-line px-3 py-1.5 hover:bg-panel">
              Ieșire
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6">
        {message ? <p className="text-sm text-accent">{message}</p> : null}
        {error ? <p className="text-sm text-red-400">{error}</p> : null}

        <section>
          <p className="text-xs tracking-wide text-accent uppercase">Portofel</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Controlul fondurilor</h1>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <article className="rounded-xl border border-line bg-panel p-5">
              <p className="text-xs text-muted">Sold disponibil</p>
              <p className="mt-2 font-mono text-2xl">
                {money(Number(wallet?.available ?? 0), wallet?.currency ?? "EUR")}
              </p>
            </article>
            <article className="rounded-xl border border-line bg-panel p-5">
              <p className="text-xs text-muted">Stop-Loss</p>
              <p className="mt-2 font-mono text-2xl">{settings ? `${Number(settings.stop_loss_pct)}%` : "—"}</p>
            </article>
            <article className="rounded-xl border border-line bg-panel p-5">
              <p className="text-xs text-muted">Limită tranzacție</p>
              <p className="mt-2 font-mono text-2xl">{settings ? money(Number(settings.max_trade)) : "—"}</p>
            </article>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <form onSubmit={(event) => onMove("deposit", event)} className="rounded-xl border border-line bg-panel p-6">
            <h2 className="text-lg font-medium">Depunere</h2>
            <p className="mt-1 text-sm text-muted">Trimite o cerere de depunere în EUR. Soldul crește doar după confirmare.</p>
            <label className="mt-4 mb-1.5 block text-xs text-muted" htmlFor="deposit-amount">
              Sumă
            </label>
            <input
              id="deposit-amount"
              name="amount"
              type="number"
              min={10}
              step="0.01"
              required
              className="w-full rounded-md border border-line bg-background px-3 py-2.5 text-sm outline-none focus:border-accent/50"
            />
            <button type="submit" className="mt-4 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white">
              Depune
            </button>
          </form>

          <form onSubmit={(event) => onMove("withdraw", event)} className="rounded-xl border border-line bg-panel p-6">
            <h2 className="text-lg font-medium">Retragere</h2>
            <p className="mt-1 text-sm text-muted">În contul tău, procesare în maxim 24 de ore.</p>
            <label className="mt-4 mb-1.5 block text-xs text-muted" htmlFor="withdraw-amount">
              Sumă
            </label>
            <input
              id="withdraw-amount"
              name="amount"
              type="number"
              min={10}
              step="0.01"
              required
              className="w-full rounded-md border border-line bg-background px-3 py-2.5 text-sm outline-none focus:border-accent/50"
            />
            <button type="submit" className="mt-4 rounded-full border border-line bg-panel px-4 py-2 text-sm">
              Retrage
            </button>
          </form>
        </section>

        <section className="rounded-xl border border-line bg-panel p-6">
          <h2 className="text-lg font-medium">Limite de tranzacționare și Stop-Loss</h2>
          <p className="mt-1 text-sm text-muted">
            Valorile se salvează pe contul tău. Boții nu deschid poziții peste limita per tranzacție și închid
            la Stop-Loss.
          </p>
          <form onSubmit={onSaveSettings} className="mt-6 grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs text-muted" htmlFor="max_trade">
                Limită valoare per tranzacție (EUR)
              </label>
              <input
                id="max_trade"
                name="max_trade"
                type="number"
                min={10}
                step="0.01"
                required
                key={`max-${settings?.max_trade ?? "empty"}`}
                defaultValue={settings ? Number(settings.max_trade) : 500}
                className="w-full rounded-md border border-line bg-background px-3 py-2.5 text-sm outline-none focus:border-accent/50"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs text-muted" htmlFor="stop_loss_pct">
                Stop-Loss (%)
              </label>
              <input
                id="stop_loss_pct"
                name="stop_loss_pct"
                type="number"
                min={0.1}
                max={50}
                step="0.1"
                required
                key={`sl-${settings?.stop_loss_pct ?? "empty"}`}
                defaultValue={settings ? Number(settings.stop_loss_pct) : 2.5}
                className="w-full rounded-md border border-line bg-background px-3 py-2.5 text-sm outline-none focus:border-accent/50"
              />
            </div>
            <input type="hidden" name="daily_limit" value={settings ? Number(settings.daily_limit) : 2500} />
            <div className="md:col-span-2">
              <button type="submit" className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white">
                Salvează Stop-Loss și limita
              </button>
            </div>
          </form>
        </section>

        <section className="overflow-hidden rounded-xl border border-line">
          <div className="border-b border-line bg-panel-2 px-4 py-4">
            <h2 className="text-lg font-medium">Istoric tranzacții</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="font-mono text-[11px] tracking-wide text-muted uppercase">
                <tr>
                  <th className="px-4 py-3">Data</th>
                  <th className="px-4 py-3">Tip</th>
                  <th className="px-4 py-3">Detaliu</th>
                  <th className="px-4 py-3 text-right">Sumă</th>
                  <th className="px-4 py-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                {rows.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-4 py-8 text-center text-sm text-muted">
                      Nicio mișcare încă. Soldul este 0,00 EUR până la o depunere confirmată.
                    </td>
                  </tr>
                ) : (
                  rows.map((row) => (
                    <tr key={row.id} className="border-t border-line">
                      <td className="px-4 py-3 text-muted">{new Date(row.created_at).toLocaleString("ro-RO")}</td>
                      <td className="px-4 py-3">{typeLabel(row.type)}</td>
                      <td className="px-4 py-3 text-muted">{row.note ?? "—"}</td>
                      <td className={`px-4 py-3 text-right font-mono ${Number(row.amount) >= 0 ? "text-accent" : "text-red-400"}`}>
                        {money(Number(row.amount))}
                      </td>
                      <td className="px-4 py-3 text-right text-muted">{statusLabel(row.status)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
