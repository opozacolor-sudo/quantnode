export function About() {
  return (
    <section id="despre" className="scroll-mt-20 border-t border-white/8">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs tracking-wide text-accent uppercase">Despre noi</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Tehnologie software. Nimic altceva.</h2>
        </div>
        <div className="space-y-5 text-sm leading-7 text-muted lg:col-span-7">
          <p>
            QuantNode este o platformă SaaS de infrastructură pentru tranzacționare algoritmică. Construim
            unelte de conectare, orchestrare, execuție și observabilitate — nu administrăm capital, nu
            oferim consiliere de investiții și nu deținem activele clienților.
          </p>
          <p>
            Proiectarea sistemului pornește de la rigoare tehnică: API versionat, autentificare cu scop
            limitat, jurnalizare a ordinelor și limite de risc configurabile. Stop-Loss și plafoanele de
            expunere sunt tratate ca cerințe de sistem, nu ca opțiuni de marketing.
          </p>
          <p>
            Transparența este operațională: datele de piață afișate pe acest site sunt de referință, iar
            performanța strategiilor rămâne responsabilitatea operatorului care le activează. QuantNode
            furnizează exclusiv software.
          </p>
        </div>
      </div>
    </section>
  );
}
