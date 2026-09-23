import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { defaultLocale, isLocale, localeCookie, type Locale } from "@/i18n/config";
import { randomPassword } from "@/lib/password";
import { supabase } from "@/lib/supabase";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { syncAffinityLead } from "@/lib/affinity";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function alreadyRegistered(message: string) {
  const lower = message.toLowerCase();
  return lower.includes("already") || lower.includes("registered") || lower.includes("exists");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim().toLowerCase();
    const phone = String(body.phone ?? "").trim();
    const message = String(body.message ?? "").trim();
    const honeypot = String(body.company ?? "").trim();
    const createAccount = body.createAccount !== false;
    const jar = await cookies();
    const locale: Locale = isLocale(body.locale)
      ? body.locale
      : isLocale(jar.get(localeCookie)?.value)
        ? (jar.get(localeCookie)?.value as Locale)
        : defaultLocale;

    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    if (name.length < 2 || name.length > 120) {
      return NextResponse.json({ error: "invalid_name" }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "invalid_email" }, { status: 400 });
    }

    const digits = phone.replace(/\D/g, "");
    if (phone.length < 8 || phone.length > 30 || digits.length < 8) {
      return NextResponse.json({ error: "invalid_phone" }, { status: 400 });
    }

    if (message.length < 10 || message.length > 5000) {
      return NextResponse.json({ error: "invalid_message" }, { status: 400 });
    }

    const { error } = await supabase.from("contact_messages").insert({ name, email, phone, message });

    if (error) {
      console.error(error);
      return NextResponse.json({ error: "save_failed" }, { status: 500 });
    }

    try {
      await syncAffinityLead({ name, email, phone, message, locale });
    } catch (crmError) {
      console.error(crmError);
    }

    if (!createAccount) {
      return NextResponse.json({ ok: true });
    }

    const resendKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM ?? "AlgorithmNode <noreply@algorithmnode.site>";
    if (!resendKey || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.error("Missing RESEND_API_KEY or SUPABASE_SERVICE_ROLE_KEY");
      return NextResponse.json({ error: "save_failed" }, { status: 500 });
    }

    const password = randomPassword();
    const admin = getSupabaseAdmin();
    const created = await admin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { full_name: name, phone, locale },
    });

    if (created.error) {
      if (alreadyRegistered(created.error.message)) {
        return NextResponse.json({ ok: true, existing: true });
      }
      console.error(created.error);
      return NextResponse.json({ error: "save_failed" }, { status: 500 });
    }

    const { error: issuedError } = await admin.from("issued_accounts").insert({ email });
    if (issuedError) console.error(issuedError);

    const loginUrl = `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.algorithmnode.site"}/platform`;
    const mail = welcomeEmail({ locale, name, email, password, loginUrl });
    const resend = new Resend(resendKey);
    const sent = await resend.emails.send({
      from,
      to: email,
      subject: mail.subject,
      html: mail.html,
      text: mail.text,
    });

    if (sent.error) {
      console.error(sent.error);
      return NextResponse.json({ error: "mail_failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }
}
