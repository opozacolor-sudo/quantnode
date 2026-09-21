import { NextResponse } from "next/server";

export const revalidate = 20;

type Quote = {
  id: string;
  symbol: string;
  name: string;
  category: "crypto" | "commodity";
  price: number;
  change24h: number | null;
  currency: string;
  source: string;
};

type CoinGeckoPrice = {
  usd?: number;
  usd_24h_change?: number;
};

async function fetchCrypto(): Promise<Quote[]> {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true",
    { next: { revalidate: 20 }, headers: { Accept: "application/json" } },
  );

  if (!res.ok) {
    throw new Error(`CoinGecko ${res.status}`);
  }

  const data = (await res.json()) as Record<string, CoinGeckoPrice>;

  return [
    {
      id: "btc",
      symbol: "BTC",
      name: "Bitcoin",
      category: "crypto",
      price: data.bitcoin?.usd ?? 0,
      change24h: data.bitcoin?.usd_24h_change ?? null,
      currency: "USD",
      source: "CoinGecko",
    },
    {
      id: "eth",
      symbol: "ETH",
      name: "Ethereum",
      category: "crypto",
      price: data.ethereum?.usd ?? 0,
      change24h: data.ethereum?.usd_24h_change ?? null,
      currency: "USD",
      source: "CoinGecko",
    },
  ];
}

async function fetchYahoo(symbol: string, id: string, name: string): Promise<Quote> {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?interval=1d&range=5d`;
  const res = await fetch(url, {
    next: { revalidate: 20 },
    headers: {
      Accept: "application/json",
      "User-Agent": "QuantNode/1.0",
    },
  });

  if (!res.ok) {
    throw new Error(`Yahoo ${symbol} ${res.status}`);
  }

  const json = await res.json();
  const meta = json?.chart?.result?.[0]?.meta;
  const closes: Array<number | null> =
    json?.chart?.result?.[0]?.indicators?.quote?.[0]?.close ?? [];
  const price = Number(meta?.regularMarketPrice);
  const previous = Number(
    closes.filter((value): value is number => typeof value === "number").at(-2) ??
      meta?.previousClose ??
      meta?.chartPreviousClose,
  );

  const change24h =
    Number.isFinite(price) && Number.isFinite(previous) && previous !== 0
      ? ((price - previous) / previous) * 100
      : null;

  return {
    id,
    symbol: id.toUpperCase(),
    name,
    category: "commodity",
    price,
    change24h,
    currency: "USD",
    source: "Yahoo Finance",
  };
}

export async function GET() {
  const settled = await Promise.allSettled([
    fetchCrypto(),
    fetchYahoo("BZ=F", "brent", "Petrol Brent"),
    fetchYahoo("CL=F", "wti", "Petrol WTI"),
  ]);

  const quotes: Quote[] = [];
  const errors: string[] = [];

  for (const result of settled) {
    if (result.status === "fulfilled") {
      quotes.push(...(Array.isArray(result.value) ? result.value : [result.value]));
    } else {
      errors.push(result.reason instanceof Error ? result.reason.message : "fetch failed");
    }
  }

  return NextResponse.json(
    {
      updatedAt: new Date().toISOString(),
      quotes: quotes.filter((quote) => Number.isFinite(quote.price) && quote.price > 0),
      errors,
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=20, stale-while-revalidate=60",
      },
    },
  );
}
