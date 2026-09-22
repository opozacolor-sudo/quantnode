const MARKETS = [
  { label: "Bitcoin", symbol: "BTC" },
  { label: "Ethereum", symbol: "ETH" },
  { label: "Solana", symbol: "SOL" },
  { label: "Ripple", symbol: "XRP" },
  { label: "Cardano", symbol: "ADA" },
  { label: "Litecoin", symbol: "LTC" },
  { label: "Avalanche", symbol: "AVAX" },
  { label: "Crypto", symbol: "ALT" },
  { label: "Aur / USD", symbol: "XAU" },
  { label: "Argint / USD", symbol: "XAG" },
  { label: "Platină", symbol: "XPT" },
  { label: "Petrol Brent", symbol: "BRENT" },
  { label: "Petrol WTI", symbol: "WTI" },
  { label: "Gaz natural", symbol: "NG" },
  { label: "Acțiuni US", symbol: "SPX" },
  { label: "Nasdaq", symbol: "NDX" },
  { label: "DAX", symbol: "DAX" },
  { label: "FTSE 100", symbol: "UKX" },
  { label: "Nikkei", symbol: "NKY" },
  { label: "Mărfuri", symbol: "CMDTY" },
  { label: "Cupru", symbol: "HG" },
  { label: "Grâu", symbol: "WHEAT" },
  { label: "EUR / USD", symbol: "EURUSD" },
  { label: "GBP / USD", symbol: "GBPUSD" },
  { label: "USD / JPY", symbol: "USDJPY" },
  { label: "USD / CHF", symbol: "USDCHF" },
  { label: "AUD / USD", symbol: "AUDUSD" },
  { label: "USD / CAD", symbol: "USDCAD" },
  { label: "NZD / USD", symbol: "NZDUSD" },
  { label: "EUR / GBP", symbol: "EURGBP" },
  { label: "EUR / JPY", symbol: "EURJPY" },
  { label: "USD / RON", symbol: "USDRON" },
];

function TickerItems({ copy }: { copy: string }) {
  return (
    <>
      {MARKETS.map((item) => (
        <li key={`${copy}-${item.symbol}`} className="flex shrink-0 items-center gap-3 px-7">
          <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-md bg-[#0a0a0a]/6 px-1 text-[9px] font-semibold tracking-wide text-[#3a3a3a]">
            {item.symbol.length > 4 ? item.symbol.slice(0, 3) : item.symbol}
          </span>
          <span className="text-[15px] font-medium tracking-tight text-[#6b6b6b]">{item.label}</span>
        </li>
      ))}
    </>
  );
}

export function MarketsTicker() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 bg-background">
      <div className="ticker-fade overflow-hidden py-5">
        <ul className="ticker-track flex w-max items-center">
          <TickerItems copy="a" />
          <TickerItems copy="b" />
        </ul>
      </div>
    </div>
  );
}
