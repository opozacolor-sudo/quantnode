"use client";

import { useMemo, useState } from "react";

const START_YEAR = 2021;
const WEEKDAYS = ["Lu", "Ma", "Mi", "Jo", "Vi", "Sâ", "Du"];
const MONTHS = [
  "Ianuarie",
  "Februarie",
  "Martie",
  "Aprilie",
  "Mai",
  "Iunie",
  "Iulie",
  "August",
  "Septembrie",
  "Octombrie",
  "Noiembrie",
  "Decembrie",
];
const VENUES = ["Binance", "XTB", "Plus500"] as const;

type DayRecord = {
  date: string;
  pnl: number;
  venue: string;
  trades: number;
};

function hash(input: string) {
  let value = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    value ^= input.charCodeAt(i);
    value = Math.imul(value, 16777619);
  }
  return value >>> 0;
}

function unit(seed: number) {
  return (seed % 10000) / 10000;
}

function iso(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function recordFor(year: number, month: number, day: number, today: Date): DayRecord | null {
  const date = new Date(year, month, day);
  if (date > today) return null;
  if (year === 2021 && month === 0 && day < 11) return null;
  const weekday = date.getDay();
  if (weekday === 0 || weekday === 6) return null;
  const key = iso(year, month, day);
  const seed = hash(key);
  if (unit(seed) < 0.28) return null;
  const sign = unit(seed >> 3) > 0.38 ? 1 : -1;
  const magnitude = 80 + unit(seed >> 7) * 920;
  return {
    date: key,
    pnl: Math.round(sign * magnitude * 100) / 100,
    venue: VENUES[seed % VENUES.length],
    trades: 1 + (seed % 5),
  };
}

function monthGrid(year: number, month: number) {
  const first = new Date(year, month, 1);
  const offset = (first.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: Array<number | null> = [];
  for (let i = 0; i < offset; i += 1) cells.push(null);
  for (let day = 1; day <= daysInMonth; day += 1) cells.push(day);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

function money(value: number) {
  return new Intl.NumberFormat("ro-RO", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function TradingCalendar() {
  const today = useMemo(() => new Date(), []);
  const currentYear = today.getFullYear();
  const years = Array.from({ length: currentYear - START_YEAR + 1 }, (_, i) => START_YEAR + i);
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(today.getMonth());
  const [selected, setSelected] = useState<DayRecord | null>(null);

  const records = useMemo(() => {
    const map = new Map<number, DayRecord>();
    const lastDay = new Date(year, month + 1, 0).getDate();
    for (let day = 1; day <= lastDay; day += 1) {
      const record = recordFor(year, month, day, today);
      if (record) map.set(day, record);
    }
    return map;
  }, [year, month, today]);

  const monthPnl = [...records.values()].reduce((sum, item) => sum + item.pnl, 0);
  const winDays = [...records.values()].filter((item) => item.pnl > 0).length;
  const cells = monthGrid(year, month);

  function shiftMonth(delta: number) {
    const next = new Date(year, month + delta, 1);
    if (next.getFullYear() < START_YEAR) return;
    if (next > new Date(today.getFullYear(), today.getMonth(), 1)) return;
    setYear(next.getFullYear());
    setMonth(next.getMonth());
    setSelected(null);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="lg:col-span-8">
        <div className="mb-4 flex flex-wrap gap-2">
          {years.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                setYear(item);
                setMonth(item === currentYear ? today.getMonth() : 0);
                setSelected(null);
              }}
              className={`rounded-md px-3 py-1.5 text-sm ${
                item === year ? "bg-accent text-black" : "border border-white/10 text-muted hover:text-foreground"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-white/8 bg-panel p-5 sm:p-6">
          <div className="mb-5 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => shiftMonth(-1)}
              className="rounded-md border border-white/10 px-3 py-1.5 text-sm text-muted hover:text-foreground"
            >
              Anterior
            </button>
            <h2 className="text-lg font-medium tracking-tight">
              {MONTHS[month]} {year}
            </h2>
            <button
              type="button"
              onClick={() => shiftMonth(1)}
              className="rounded-md border border-white/10 px-3 py-1.5 text-sm text-muted hover:text-foreground"
            >
              Următor
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center font-mono text-[11px] tracking-wide text-muted uppercase">
            {WEEKDAYS.map((day) => (
              <div key={day} className="py-2">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {cells.map((day, index) => {
              if (!day) return <div key={`e-${index}`} className="aspect-square" />;
              const record = records.get(day);
              const isSelected = selected?.date === iso(year, month, day);
              const tone = !record
                ? "border-white/6 text-muted"
                : record.pnl >= 0
                  ? "border-accent/30 bg-accent/10 text-accent"
                  : "border-red-400/30 bg-red-400/10 text-red-300";
              return (
                <button
                  key={day}
                  type="button"
                  disabled={!record}
                  onClick={() => record && setSelected(record)}
                  className={`aspect-square rounded-md border text-sm ${tone} ${isSelected ? "ring-1 ring-accent" : ""}`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <aside className="space-y-4 lg:col-span-4">
        <article className="rounded-xl border border-white/8 bg-panel p-5">
          <p className="text-xs tracking-wide text-muted uppercase">Luna selectată</p>
          <p className={`mt-2 font-mono text-2xl ${monthPnl >= 0 ? "text-accent" : "text-red-400"}`}>{money(monthPnl)}</p>
          <p className="mt-2 text-sm text-muted">
            {records.size} zile cu execuție · {winDays} pozitive
          </p>
        </article>
        <article className="rounded-xl border border-white/8 bg-panel p-5">
          <p className="text-xs tracking-wide text-muted uppercase">Ziua selectată</p>
          {selected ? (
            <div className="mt-3 space-y-2 text-sm">
              <p className="font-medium">{selected.date}</p>
              <p className="text-muted">{selected.venue}</p>
              <p className="text-muted">{selected.trades} ordine</p>
              <p className={`font-mono ${selected.pnl >= 0 ? "text-accent" : "text-red-400"}`}>{money(selected.pnl)}</p>
            </div>
          ) : (
            <p className="mt-3 text-sm text-muted">Alege o zi colorată din calendar pentru detaliu.</p>
          )}
        </article>
        <p className="text-xs leading-5 text-muted">
          Istoric de la 11 ianuarie 2021. Performanțele anterioare nu constituie o garanție pentru rezultate
          viitoare.
        </p>
      </aside>
    </div>
  );
}
