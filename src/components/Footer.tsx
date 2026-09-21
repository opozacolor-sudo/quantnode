export function Footer() {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-medium">
              Quant<span className="text-accent">Node</span>
            </p>
            <p className="mt-3 text-sm text-muted">Infrastructură software pentru execuție algoritmică.</p>
          </div>
          <div className="text-sm text-muted">
            <p>QuantNode S.R.L.</p>
            <p>Str. Academiei 35, București, România</p>
            <p>CUI: RO00000000 (demo)</p>
            <p>contact@quantnode.io</p>
          </div>
          <p className="text-xs leading-6 text-muted">
            Disclaimer: Tranzacționarea pe piețele financiare, inclusiv crypto și mărfuri, implică un risc
            substanțial de pierdere, până la întreaga valoare a capitalului angajat. Performanțele anterioare
            nu constituie o garanție pentru rezultate viitoare. QuantNode furnizează exclusiv tehnologie
            software (SaaS) și nu oferă consultanță de investiții, nu administrează fonduri și nu deține
            custodia activelor clienților. Datele de preț sunt informative și pot fi întârziate sau incomplete.
          </p>
        </div>
        <p className="mt-10 text-xs text-muted">© {new Date().getFullYear()} QuantNode. Toate drepturile rezervate.</p>
      </div>
    </footer>
  );
}
