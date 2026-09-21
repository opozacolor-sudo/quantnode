import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim().toLowerCase();
    const message = String(body.message ?? "").trim();
    const honeypot = String(body.company ?? "").trim();

    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    if (name.length < 2 || name.length > 120) {
      return NextResponse.json({ error: "Numele trebuie să aibă între 2 și 120 de caractere." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Adresa de email nu este validă." }, { status: 400 });
    }

    if (message.length < 10 || message.length > 5000) {
      return NextResponse.json({ error: "Mesajul trebuie să aibă între 10 și 5000 de caractere." }, { status: 400 });
    }

    const { error } = await supabase.from("contact_messages").insert({ name, email, message });

    if (error) {
      console.error(error);
      return NextResponse.json({ error: "Mesajul nu a putut fi salvat. Încercați din nou." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Cerere invalidă." }, { status: 400 });
  }
}
