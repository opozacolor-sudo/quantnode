"use client";

import { FormEvent, useState } from "react";

export function PlatformAccessForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const payload = {
      email: String(new FormData(form).get("email") ?? ""),
      company: String(new FormData(form).get("company") ?? ""),
    };

    try {
      const res = await fetch("/api/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) {
        setStatus("error");
        setError(json.error || "Trimiterea a eșuat.");
        return;
      }
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
      setError("Nu s-a putut contacta serverul.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-4 rounded-xl border border-line bg-panel p-6">
      <div className="hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
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
          className="w-full rounded-md border border-line bg-background px-3 py-2.5 text-sm outline-none placeholder:text-muted/60 focus:border-accent/50"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-accent py-2.5 text-sm font-medium text-white disabled:opacity-60"
      >
        {status === "sending" ? "Se trimite…" : "Continuă"}
      </button>
      {status === "ok" ? (
        <p className="text-sm text-accent">Am înregistrat adresa. Vă contactăm cu accesul.</p>
      ) : null}
      {status === "error" ? <p className="text-sm text-red-400">{error}</p> : null}
    </form>
  );
}
