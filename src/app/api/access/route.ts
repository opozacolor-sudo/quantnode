import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = String(body.email ?? "").trim().toLowerCase();
    const honeypot = String(body.company ?? "").trim();

    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Adresa de email nu este validă." }, { status: 400 });
    }

    const { error } = await supabase.from("access_requests").insert({ email });

    if (error) {
      console.error(error);
      return NextResponse.json({ error: "Cererea nu a putut fi salvată. Încercați din nou." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Cerere invalidă." }, { status: 400 });
  }
}
