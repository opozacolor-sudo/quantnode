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
    <section id="contact" className="scroll-mt-20 border-t border-white/8">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs tracking-wide text-accent uppercase">Contact</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Discuție tehnică, nu vânzare agresivă</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            Pentru acces la platformă, integrare API sau întrebări despre permisiuni și risc, trimiteți un
            mesaj. Răspundem în programul de lucru.
          </p>
          <p className="mt-6 font-mono text-xs text-muted">contact@quantnode.io</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 rounded-xl border border-white/8 bg-panel p-6 lg:col-span-7">
          <div className="hidden">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" tabIndex={-1} autoComplete="off" />
          </div>
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
              className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2.5 text-sm outline-none focus:border-accent/50"
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
              className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2.5 text-sm outline-none focus:border-accent/50"
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
              rows={5}
              className="w-full resize-y rounded-md border border-white/10 bg-black/30 px-3 py-2.5 text-sm outline-none focus:border-accent/50"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-black disabled:opacity-60"
          >
            {status === "sending" ? "Se trimite…" : "Trimite"}
          </button>
          {status === "ok" ? (
            <p className="text-sm text-accent">Mesajul a fost înregistrat. Vă contactăm în curând.</p>
          ) : null}
          {status === "error" ? <p className="text-sm text-red-400">{error}</p> : null}
        </form>
      </div>
    </section>
  );
}
