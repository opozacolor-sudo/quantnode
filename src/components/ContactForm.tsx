"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";

const ERROR_KEYS: Record<string, string> = {
  invalid_name: "form.errName",
  invalid_email: "form.errEmail",
  invalid_phone: "form.errPhone",
  invalid_message: "form.errMessage",
  save_failed: "form.errSave",
};

type ContactFormProps = {
  defaultEmail?: string;
  defaultMessage?: string;
  idPrefix?: string;
  variant?: "page" | "embedded";
};

export function ContactForm({
  defaultEmail = "",
  defaultMessage = "",
  idPrefix = "",
  variant = "page",
}: ContactFormProps) {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState("");
  const fid = (name: string) => `${idPrefix}${name}`;

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
        const key = ERROR_KEYS[String(json.error)] ?? "form.fail";
        setError(t(key));
        return;
      }
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
      setError(t("form.server"));
    }
  }

  const shell =
    variant === "embedded"
      ? "space-y-4"
      : "space-y-4 rounded-xl border border-line bg-panel p-6 sm:p-8";

  return (
    <form key={`${defaultEmail}|${defaultMessage}`} onSubmit={onSubmit} className={shell}>
      <div className="hidden">
        <label htmlFor={fid("company")}>Company</label>
        <input id={fid("company")} name="company" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={fid("name")} className="mb-1.5 block text-xs text-muted">
            {t("form.name")}
          </label>
          <input
            id={fid("name")}
            name="name"
            required
            minLength={2}
            maxLength={120}
            className="w-full rounded-md border border-line bg-background px-3 py-2.5 text-sm outline-none focus:border-accent/50"
          />
        </div>
        <div>
          <label htmlFor={fid("email")} className="mb-1.5 block text-xs text-muted">
            {t("form.email")}
          </label>
          <input
            id={fid("email")}
            name="email"
            type="email"
            required
            defaultValue={defaultEmail}
            className="w-full rounded-md border border-line bg-background px-3 py-2.5 text-sm outline-none focus:border-accent/50"
          />
        </div>
      </div>
      <div>
        <label htmlFor={fid("phone")} className="mb-1.5 block text-xs text-muted">
          {t("form.phone")}
        </label>
        <input
          id={fid("phone")}
          name="phone"
          type="tel"
          required
          minLength={8}
          maxLength={30}
          autoComplete="tel"
          placeholder={t("form.phonePh")}
          className="w-full rounded-md border border-line bg-background px-3 py-2.5 text-sm outline-none placeholder:text-muted/60 focus:border-accent/50"
        />
      </div>
      <div>
        <label htmlFor={fid("message")} className="mb-1.5 block text-xs text-muted">
          {t("form.message")}
        </label>
        <textarea
          id={fid("message")}
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={7}
          defaultValue={defaultMessage}
          placeholder={t("form.msgPh")}
          className="w-full resize-y rounded-md border border-line bg-background px-3 py-2.5 text-sm outline-none placeholder:text-muted/60 focus:border-accent/50"
        />
      </div>
      <label className="flex items-start gap-2 text-xs leading-5 text-muted">
        <input type="checkbox" name="legal" required className="mt-0.5" />
        <span>
          {t("form.legalStart")}{" "}
          <Link href="/conditions-generales" className="text-accent hover:underline">
            {t("footer.terms")}
          </Link>
          {t("form.legalMid")}
          <Link href="/confidentialite" className="text-accent hover:underline">
            {t("footer.privacy")}
          </Link>
          .
        </span>
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white disabled:opacity-60"
      >
        {status === "sending" ? t("form.sending") : t("form.send")}
      </button>
      {status === "ok" ? <p className="text-sm text-accent">{t("form.ok")}</p> : null}
      {status === "error" ? <p className="text-sm text-red-400">{error}</p> : null}
    </form>
  );
}
