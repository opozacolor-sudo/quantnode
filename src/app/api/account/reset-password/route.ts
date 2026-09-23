import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { defaultLocale, isLocale, localeCookie, type Locale } from "@/i18n/config";
import { randomPassword } from "@/lib/password";
import { passwordResetEmail } from "@/lib/password-email";
import { supabase } from "@/lib/supabase";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request: Request) {
  const header = request.headers.get("authorization") ?? "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  if (!token) {
    return NextResponse.json({ error: "not_authenticated" }, { status: 401 });
  }

  const admin = getSupabaseAdmin();
  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data.user?.email) {
    return NextResponse.json({ error: "not_authenticated" }, { status: 401 });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM ?? "AlgorithmNode <noreply@algorithmnode.site>";
  if (!resendKey) {
    return NextResponse.json({ error: "mail_failed" }, { status: 500 });
  }

  const jar = await cookies();
  let locale: Locale = defaultLocale;
  try {
    const body = await request.json();
    if (isLocale(body.locale)) locale = body.locale;
  } catch {
    /* empty body */
  }
  if (!isLocale(locale)) {
    const cookieLocale = jar.get(localeCookie)?.value;
    locale = isLocale(cookieLocale) ? cookieLocale : defaultLocale;
  }

  const password = randomPassword();
  const updated = await admin.auth.admin.updateUserById(data.user.id, { password });
  if (updated.error) {
    console.error(updated.error);
    return NextResponse.json({ error: "save_failed" }, { status: 500 });
  }

  const name =
    String(data.user.user_metadata?.full_name ?? "").trim() || data.user.email.split("@")[0];
  const loginUrl = `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.algorithmnode.site"}/platform`;
  const mail = passwordResetEmail({
    locale,
    name,
    email: data.user.email,
    password,
    loginUrl,
  });
  const sent = await new Resend(resendKey).emails.send({
    from,
    to: data.user.email,
    subject: mail.subject,
    html: mail.html,
    text: mail.text,
  });

  if (sent.error) {
    console.error(sent.error);
    return NextResponse.json({ error: "mail_failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
