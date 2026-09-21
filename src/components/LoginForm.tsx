"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseBrowser } from "@/lib/supabase-browser";

export function LoginForm() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  useEffect(() => {
    getSupabaseBrowser()
      .auth.getSession()
      .then(({ data }) => {
        if (data.session) router.replace("/dashboard");
      });
  }, [router]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");
    setInfo("");

    const form = event.currentTarget;
    const email = String(new FormData(form).get("email") ?? "").trim();
    const password = String(new FormData(form).get("password") ?? "");
    const supabase = getSupabaseBrowser();

    try {
      if (mode === "register") {
        const { data, error: signError } = await supabase.auth.signUp({ email, password });
        if (signError) throw signError;
        if (data.session) {
          router.push("/dashboard");
          router.refresh();
          return;
        }
        setInfo("Cont creat. Dacă primiți un email de confirmare, deschideți-l, apoi autentificați-vă.");
        setMode("login");
        setStatus("idle");
        return;
      }

      const { error: loginError } = await supabase.auth.signInWithPassword({ email, password });
      if (loginError) throw loginError;
      router.push("/dashboard");
      router.refresh();
    } catch (caught) {
      setStatus("error");
      setError(caught instanceof Error ? caught.message : "Autentificarea a eșuat.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-4 rounded-xl border border-white/8 bg-panel p-6">
      <div className="grid grid-cols-2 rounded-md border border-white/8 p-1 text-sm">
        <button
          type="button"
          onClick={() => setMode("login")}
          className={`rounded px-3 py-1.5 ${mode === "login" ? "bg-white/8 text-foreground" : "text-muted"}`}
        >
          Autentificare
        </button>
        <button
          type="button"
          onClick={() => setMode("register")}
          className={`rounded px-3 py-1.5 ${mode === "register" ? "bg-white/8 text-foreground" : "text-muted"}`}
        >
          Cont nou
        </button>
      </div>

      <div>
        <label className="mb-1.5 block text-xs text-muted" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="nume@firma.com"
          className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2.5 text-sm outline-none placeholder:text-muted/60 focus:border-accent/50"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs text-muted" htmlFor="password">
          Parolă
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          minLength={8}
          autoComplete={mode === "login" ? "current-password" : "new-password"}
          className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2.5 text-sm outline-none focus:border-accent/50"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-md bg-accent py-2.5 text-sm font-medium text-black disabled:opacity-60"
      >
        {status === "sending" ? "Se procesează…" : mode === "login" ? "Intră în dashboard" : "Creează cont"}
      </button>
      {info ? <p className="text-sm text-accent">{info}</p> : null}
      {error ? <p className="text-sm text-red-400">{error}</p> : null}
    </form>
  );
}
