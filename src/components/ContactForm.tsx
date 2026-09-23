"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const payload = {
      name: String(new FormData(form).get("name") ?? ""),
      email: String(new FormData(form).get("email") ?? ""),
      phone: String(new FormData(form).get("phone") ?? ""),
      message: String(new FormData(form).get("message") ?? ""),
      company: String(new FormData(form).get("company") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
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
    <form onSubmit={onSubmit} className="space-y-4 rounded-xl border border-line bg-panel p-6 sm:p-8">
      <div className="hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs text-muted">
            Nume
          </label>
          <input
            id="name"
            name="name"
            required
            minLength={2}
            maxLength={120}
            className="w-full rounded-md border border-line bg-background px-3 py-2.5 text-sm outline-none focus:border-accent/50"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs text-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-line bg-background px-3 py-2.5 text-sm outline-none focus:border-accent/50"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-xs text-muted">
          Telefon
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          minLength={8}
          maxLength={30}
          autoComplete="tel"
          placeholder="+40 7xx xxx xxx"
          className="w-full rounded-md border border-line bg-background px-3 py-2.5 text-sm outline-none placeholder:text-muted/60 focus:border-accent/50"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs text-muted">
          Mesaj
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={7}
          placeholder="Context tehnic, broker, volum estimat, întrebări despre API sau risc."
          className="w-full resize-y rounded-md border border-line bg-background px-3 py-2.5 text-sm outline-none placeholder:text-muted/60 focus:border-accent/50"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white disabled:opacity-60"
      >
        {status === "sending" ? "Se trimite…" : "Trimite"}
      </button>
      {status === "ok" ? (
        <p className="text-sm text-accent">Mesajul a fost înregistrat. Vă contactăm în curând.</p>
      ) : null}
      {status === "error" ? <p className="text-sm text-red-400">{error}</p> : null}
    </form>
  );
}
