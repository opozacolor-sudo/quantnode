export function About() {
  return (
    <section id="despre" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs tracking-wide text-accent uppercase">Despre noi</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">
            Agenți care citesc piața. Boți care execută.
          </h2>
        </div>
        <div className="space-y-5 text-sm leading-7 text-muted lg:col-span-7">
          <p>
            AlgorithmNode este o platformă de tranzacționare automată. Nu lucrăm cu ordine introduse manual
            la fiecare mișcare de preț. Sistemul pornește de la agenți software care citesc piața în
            continuu, la rezoluție de microsecunde, și de la boți care acționează imediat ce semnalul e
            validat.
          </p>
          <p>
            Agenții urmăresc fluxul de cotații, adâncimea de piață, știrile, evenimentele macro, corelațiile
            între active și factorii care mută prețul — de la crypto (Bitcoin, Ethereum și restul pieței)
            până la aur/USD, petrol, acțiuni și mărfuri. Fiecare factor e ponderat în timp real: un comunicat
            de dobândă, o ruptură de lichiditate, un spike de volatilitate sau o știre geopolitică nu așteaptă
            un operator uman.
          </p>
          <p>
            Când agenții confirmă o stare de piață, boții deschid, ajustează sau închid poziții pe venue-urile
            conectate (Binance, XTB, Plus500), în limitele pe care le-ați setat: stop-loss, valoare maximă per
            tranzacție, expunere zilnică. Nu se execută ordine în afara acestor reguli.
          </p>
          <p>
            Dashboard-ul vă arată soldul, istoricul și limitele. Retragerile se procesează în maxim 24 de ore.
            Capitalul rămâne sub controlul dumneavoastră. AlgorithmNode furnizează execuția algoritmică —
            agenții citesc, boții acționează, dumneavoastră decideți cadrul de risc.
          </p>
        </div>
      </div>
    </section>
  );
}
