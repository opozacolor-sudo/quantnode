import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

export function Footer() {
  return (
    <footer className="border-t border-line pb-4">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <BrandMark />
            <p className="mt-3 text-sm text-muted">
              Tranzacționare automată cu agenți de piață și boți de execuție.
            </p>
            <nav className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
              <Link href="/cum-functioneaza" className="hover:text-foreground">
                Cum funcționează
              </Link>
              <Link href="/istoric" className="hover:text-foreground">
                Istoric
              </Link>
              <Link href="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </nav>
            <p className="mt-4 text-sm text-muted">Aplicații iOS și Android — în curând.</p>
          </div>
          <p className="text-xs leading-6 text-muted">
            Disclaimer: Tranzacționarea pe piețele financiare, inclusiv crypto și mărfuri, implică un risc
            substanțial de pierdere, până la întreaga valoare a capitalului angajat. Performanțele anterioare
            nu constituie o garanție pentru rezultate viitoare. AlgorithmNode furnizează tehnologie de
            execuție algoritmică și nu oferă consultanță de investiții. Datele de preț sunt informative și
            pot fi întârziate sau incomplete.
          </p>
        </div>
        <p className="mt-10 text-xs text-muted">© 2026 AlgorithmNode. Toate drepturile rezervate.</p>
      </div>
    </footer>
  );
}
