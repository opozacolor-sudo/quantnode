"use client";

import { FormEvent, useEffect, useState } from "react";
import { getSupabaseBrowser } from "@/lib/supabase-browser";

export function PasswordDialog({ email }: { email: string }) {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function onChangePassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setMessage("");
    const form = new FormData(event.currentTarget);
    const current = String(form.get("current") ?? "");
    const next = String(form.get("next") ?? "");
    const confirm = String(form.get("confirm") ?? "");
    if (next.length < 8) {
      setError("Parola nouă trebuie să aibă minim 8 caractere.");
      return;
    }
    if (next !== confirm) {
      setError("Parola nouă și confirmarea nu coincid.");
      return;
    }
    setBusy(true);
    const supabase = getSupabaseBrowser();
    const { error: signError } = await supabase.auth.signInWithPassword({ email, password: current });
    if (signError) {
      setBusy(false);
      setError("Parola actuală este greșită.");
      return;
    }
    const { error: updateError } = await supabase.auth.updateUser({ password: next });
    setBusy(false);
    if (updateError) {
      setError(updateError.message);
      return;
    }
    event.currentTarget.reset();
    setMessage("Parola a fost schimbată.");
  }

  async function onForgot() {
    setError("");
    setMessage("");
    setBusy(true);
    const supabase = getSupabaseBrowser();
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    if (!token) {
      setBusy(false);
      setError("Sesiunea a expirat. Reconectați-vă.");
      return;
    }
    const locale = document.cookie.match(/(?:^|; )an_locale=([^;]+)/)?.[1] ?? "fr";
    try {
      const res = await fetch("/api/account/reset-password", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ locale }),
      });
      const json = await res.json();
      if (!res.ok) {
        setBusy(false);
        setError(
          json.error === "mail_failed"
            ? "Parola a fost resetată, dar emailul nu a putut fi trimis. Încercați din nou."
            : "Nu am putut trimite parola nouă. Încercați din nou.",
        );
        return;
      }
      setBusy(false);
      setMessage("Parola nouă a fost trimisă pe email. Verificați și folderul spam.");
    } catch {
      setBusy(false);
      setError("Nu am putut contacta serverul.");
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          setError("");
          setMessage("");
        }}
        className="rounded-full border border-line px-3 py-1.5 hover:bg-panel"
      >
        Schimbă parola
      </button>
      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4 sm:items-center"
          role="presentation"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="password-title"
            className="my-6 w-full max-w-md rounded-xl border border-line bg-background p-6 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h2 id="password-title" className="text-lg font-medium">
                Schimbă parola
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-line px-3 py-1 text-sm text-muted hover:text-foreground"
              >
                Închide
              </button>
            </div>
            <form onSubmit={onChangePassword} className="mt-5 space-y-4">
              <div>
                <label className="mb-1.5 block text-xs text-muted" htmlFor="pwd-current">
                  Parola actuală
                </label>
                <input
                  id="pwd-current"
                  name="current"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="w-full rounded-md border border-line bg-background px-3 py-2.5 text-sm outline-none focus:border-accent/50"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs text-muted" htmlFor="pwd-next">
                  Parola nouă
                </label>
                <input
                  id="pwd-next"
                  name="next"
                  type="password"
                  required
                  minLength={8}
                  autoComplete="new-password"
                  className="w-full rounded-md border border-line bg-background px-3 py-2.5 text-sm outline-none focus:border-accent/50"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs text-muted" htmlFor="pwd-confirm">
                  Confirmă parola nouă
                </label>
                <input
                  id="pwd-confirm"
                  name="confirm"
                  type="password"
                  required
                  minLength={8}
                  autoComplete="new-password"
                  className="w-full rounded-md border border-line bg-background px-3 py-2.5 text-sm outline-none focus:border-accent/50"
                />
              </div>
              <button
                type="submit"
                disabled={busy}
                className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white disabled:opacity-60"
              >
                {busy ? "Se salvează…" : "Salvează parola"}
              </button>
            </form>
            <p className="mt-4 text-sm text-muted">
              Ați uitat parola?{" "}
              <button
                type="button"
                disabled={busy}
                onClick={onForgot}
                className="text-accent hover:underline disabled:opacity-60"
              >
                Trimite o parolă nouă pe email
              </button>
              . Verificați și spam-ul.
            </p>
            {message ? <p className="mt-3 text-sm text-accent">{message}</p> : null}
            {error ? <p className="mt-3 text-sm text-red-400">{error}</p> : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
