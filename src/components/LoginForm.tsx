"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useI18n } from "@/i18n/I18nProvider";
import { isAdminSession, resolveLoginEmail } from "@/lib/admin";
import { getSupabaseBrowser } from "@/lib/supabase-browser";

export function LoginForm() {
  const router = useRouter();
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    getSupabaseBrowser()
      .auth.getSession()
      .then(({ data }) => {
        if (!data.session) return;
        router.replace(isAdminSession(data.session.user) ? "/admin" : "/dashboard");
      });
  }, [router]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const identifier = String(new FormData(form).get("email") ?? "").trim();
    const password = String(new FormData(form).get("password") ?? "");
    const email = resolveLoginEmail(identifier);
    const supabase = getSupabaseBrowser();

    try {
      const { data, error: loginError } = await supabase.auth.signInWithPassword({ email, password });
      if (loginError) throw loginError;
      router.push(isAdminSession(data.user) ? "/admin" : "/dashboard");
      router.refresh();
    } catch {
      setStatus("error");
      setError(t("login.fail"));
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-4 rounded-xl border border-line bg-panel p-6">
      <div>
        <label className="mb-1.5 block text-xs text-muted" htmlFor="email">
          {t("login.user")}
        </label>
        <input
          id="email"
          name="email"
          type="text"
          required
          autoComplete="username"
          placeholder={t("login.userPh")}
          className="w-full rounded-md border border-line bg-background px-3 py-2.5 text-sm outline-none placeholder:text-muted/60 focus:border-accent/50"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs text-muted" htmlFor="password">
          {t("login.password")}
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          minLength={8}
          autoComplete="current-password"
          className="w-full rounded-md border border-line bg-background px-3 py-2.5 text-sm outline-none focus:border-accent/50"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-accent py-2.5 text-sm font-medium text-white disabled:opacity-60"
      >
        {status === "sending" ? t("login.sending") : t("login.submit")}
      </button>
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
    </form>
  );
}
