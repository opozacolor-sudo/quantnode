import { NextResponse } from "next/server";
import { isLocale, localeCookie } from "@/i18n/config";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const locale = String(body.locale ?? "");
    if (!isLocale(locale)) {
      return NextResponse.json({ error: "invalid_locale" }, { status: 400 });
    }
    const response = NextResponse.json({ ok: true });
    response.cookies.set(localeCookie, locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  } catch {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }
}
