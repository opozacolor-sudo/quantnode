"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/#despre", label: "Despre noi" },
  { href: "/cum-functioneaza", label: "Cum funcționează" },
  { href: "/istoric", label: "Istoric" },
  { href: "/#preturi", label: "Prețuri Live" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#0b0d10]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-medium tracking-tight">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-accent/30 bg-accent/10 font-mono text-xs text-accent">
            QN
          </span>
          <span>
            Quant<span className="text-accent">Node</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          {links.map((link) => {
            const isCurrent = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-foreground ${isCurrent ? "text-foreground" : "text-muted"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/platform"
            className="rounded-md border border-white/10 bg-white/5 px-3.5 py-2 text-sm transition-colors hover:border-accent/40 hover:bg-accent/10"
          >
            Conectare / Platformă
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md border border-white/10 px-3 py-1.5 text-sm md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Deschide meniul"
        >
          Meniu
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/8 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-muted hover:text-foreground">
                {link.label}
              </Link>
            ))}
            <Link
              href="/platform"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md border border-white/10 bg-white/5 px-3.5 py-2 text-center"
            >
              Conectare / Platformă
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
