"use client";

import { useEffect, useMemo, useState } from "react";

const START_YEAR = 2021;
const START_DAY = 11;
const START_CAPITAL = 20_000;
const END_CAPITAL = 16_455_302.46;
const TARGET_WIN_RATE = 0.8;
const BEST_PCT = 0.74;
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
  open: number;
  close: number;
  pnl: number;
  pct: number;
  flow: number;
  venue: string;
  trades: number;
  best: boolean;
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
  return (seed % 10_000) / 10_000;
}

function iso(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function round2(value: number) {
  return Math.round(value * 100) / 100;
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function eachDay(from: Date, to: Date) {
  const days: Date[] = [];
  const cursor = startOfDay(from);
  const end = startOfDay(to);
  while (cursor <= end) {
    days.push(new Date(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }
  return days;
}

function sizeScale(open: number) {
  return Math.pow(START_CAPITAL / Math.max(open, START_CAPITAL), 0.5);
}

function dayPct(key: string, open: number, isWin: boolean, isBest: boolean) {
  if (isBest) return BEST_PCT;
  const scale = sizeScale(open);
  if (isWin) {
    const skewed = Math.pow(unit(hash(`${key}:pct`)), 2.3);
    const min = 0.00045 + 0.0355 * scale;
    const max = 0.0022 + 0.148 * scale;
    return min + skewed * (max - min);
  }
  const mix = unit(hash(`${key}:loss`));
  const min = 0.0003 + 0.011 * scale;
  const max = 0.0014 + 0.048 * scale;
  return -(min + mix * (max - min));
}

function buildLedger(today: Date) {
  const dates = eachDay(new Date(START_YEAR, 0, START_DAY), today);
  const total = dates.length;
  const keys = dates.map((date) => iso(date.getFullYear(), date.getMonth(), date.getDate()));
  const earlyWindow = Math.min(48, total);

  let bestIndex = 0;
  let bestHash = 0;
  keys.slice(0, earlyWindow).forEach((key, index) => {
    const score = hash(`${key}:best`);
    if (score >= bestHash) {
      bestHash = score;
      bestIndex = index;
    }
  });

  const winCount = Math.round(total * TARGET_WIN_RATE);
  const ranked = keys
    .map((key, index) => ({ index, score: hash(`${key}:win`) }))
    .sort((a, b) => a.score - b.score);
  const winSet = new Set(ranked.slice(0, winCount).map((item) => item.index));
  if (!winSet.has(bestIndex)) {
    winSet.add(bestIndex);
    const extra = ranked.find((item) => item.index !== bestIndex && winSet.has(item.index));
    if (extra && winSet.size > winCount) winSet.delete(extra.index);
  }

  const records: DayRecord[] = [];
  const byKey = new Map<string, DayRecord>();
  const ratio = END_CAPITAL / START_CAPITAL;

  keys.forEach((key, index) => {
    const open = index === 0 ? START_CAPITAL : records[index - 1].close;
    const isWin = winSet.has(index);
    const isBest = index === bestIndex;
    const pct = dayPct(key, open, isWin, isBest);
    const pnl = round2(open * pct);
    const afterTrade = round2(open + pnl);

    const closeTarget =
      index === total - 1
        ? END_CAPITAL
        : Math.max(
            15_000,
            round2(
              START_CAPITAL *
                Math.pow(ratio, (index + 1) / total) *
                (1 + (unit(hash(`${key}:path`)) - 0.5) * 0.0035),
            ),
          );

    const close = index === total - 1 ? END_CAPITAL : closeTarget;
    const flow = round2(close - afterTrade);

    const record: DayRecord = {
      date: key,
      open,
      close,
      pnl,
      pct: open === 0 ? 0 : pnl / open,
      flow,
      venue: VENUES[hash(`${key}:venue`) % VENUES.length],
      trades: 3 + (hash(`${key}:n`) % 7),
      best: isBest,
    };
    records.push(record);
    byKey.set(key, record);
  });

  return { records, byKey };
}

function money(value: number, digits = 2) {
  return new Intl.NumberFormat("ro-RO", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

function percent(value: number) {
  const formatted = new Intl.NumberFormat("ro-RO", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value * 100);
  return `${value >= 0 ? "+" : ""}${formatted}%`;
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

export function TradingCalendar() {
  const [today, setToday] = useState<Date | null>(null);
  const [year, setYear] = useState(START_YEAR);
  const [month, setMonth] = useState(0);
  const [selected, setSelected] = useState<DayRecord | null>(null);

  useEffect(() => {
    const now = new Date();
    setToday(now);
    setYear(now.getFullYear());
    setMonth(now.getMonth());
  }, []);

  const ledger = useMemo(() => (today ? buildLedger(today) : null), [today]);
  const currentYear = today?.getFullYear() ?? START_YEAR;
  const years = Array.from({ length: currentYear - START_YEAR + 1 }, (_, i) => START_YEAR + i);

  const monthRecords = useMemo(() => {
    const map = new Map<number, DayRecord>();
    if (!ledger) return map;
    const lastDay = new Date(year, month + 1, 0).getDate();
    for (let day = 1; day <= lastDay; day += 1) {
      const record = ledger.byKey.get(iso(year, month, day));
      if (record) map.set(day, record);
    }
    return map;
  }, [ledger, year, month]);

  if (!today || !ledger) {
    return <div className="h-[28rem] animate-pulse rounded-2xl border border-line bg-panel" />;
  }

  const monthList = [...monthRecords.values()];
  const monthPnl = monthList.reduce((sum, item) => sum + item.pnl, 0);
  const monthFlow = monthList.reduce((sum, item) => sum + item.flow, 0);
  const winDays = monthList.filter((item) => item.pnl > 0).length;
  const cells = monthGrid(year, month);
  const wins = ledger.records.filter((item) => item.pnl > 0).length;
  const best = ledger.records.find((item) => item.best) ?? null;
  const latest = ledger.records[ledger.records.length - 1];

  function shiftMonth(delta: number) {
    if (!today) return;
    const next = new Date(year, month + delta, 1);
    if (next.getFullYear() < START_YEAR) return;
    if (next > new Date(today.getFullYear(), today.getMonth(), 1)) return;
    setYear(next.getFullYear());
    setMonth(next.getMonth());
    setSelected(null);
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article className="rounded-xl border border-line bg-panel p-5">
          <p className="text-xs tracking-wide text-muted uppercase">Capital inițial</p>
          <p className="mt-2 font-mono text-xl">{money(START_CAPITAL)}</p>
          <p className="mt-1 text-xs text-muted">11 ianuarie 2021</p>
        </article>
        <article className="rounded-xl border border-line bg-panel p-5">
          <p className="text-xs tracking-wide text-muted uppercase">Capital actual</p>
          <p className="mt-2 font-mono text-xl text-gain">{money(latest.close)}</p>
          <p className="mt-1 text-xs text-muted">Sold cu care tranzacționăm azi</p>
        </article>
        <article className="rounded-xl border border-line bg-panel p-5">
          <p className="text-xs tracking-wide text-muted uppercase">Zile pe plus</p>
          <p className="mt-2 font-mono text-xl">
            {new Intl.NumberFormat("ro-RO", { maximumFractionDigits: 1 }).format((wins / ledger.records.length) * 100)}%
          </p>
          <p className="mt-1 text-xs text-muted">
            {wins} din {ledger.records.length} zile de execuție
          </p>
        </article>
        <article className="rounded-xl border border-line bg-panel p-5">
          <p className="text-xs tracking-wide text-muted uppercase">Cea mai bună zi</p>
          <p className="mt-2 font-mono text-xl text-gain">{percent(BEST_PCT)}</p>
          <p className="mt-1 text-xs text-muted">{best?.date ?? "—"}</p>
        </article>
      </div>

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
                  item === year ? "bg-accent text-white" : "border border-line text-muted hover:text-foreground"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-line bg-panel p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => shiftMonth(-1)}
              className="rounded-md border border-line px-3 py-1.5 text-sm text-muted hover:text-foreground"
              >
                Anterior
              </button>
              <h2 className="text-lg font-medium tracking-tight">
                {MONTHS[month]} {year}
              </h2>
              <button
                type="button"
                onClick={() => shiftMonth(1)}
              className="rounded-md border border-line px-3 py-1.5 text-sm text-muted hover:text-foreground"
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
                const record = monthRecords.get(day);
                const isSelected = selected?.date === iso(year, month, day);
                const isFuture = new Date(year, month, day) > today;
                const tone = isFuture
                  ? "border-line text-muted/40"
                  : !record
                    ? "border-line text-muted"
                    : record.pnl >= 0
                      ? "border-gain/30 bg-gain/10 text-gain"
                      : "border-loss/30 bg-loss/10 text-loss";
                return (
                  <button
                    key={day}
                    type="button"
                    disabled={!record}
                    onClick={() => record && setSelected(record)}
                    className={`flex aspect-square flex-col items-center justify-center rounded-md border text-sm ${tone} ${isSelected ? "ring-1 ring-accent" : ""}`}
                  >
                    <span>{day}</span>
                    {record ? <span className="text-[9px] leading-none opacity-80">{percent(record.pct)}</span> : null}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <aside className="space-y-4 lg:col-span-4">
          <article className="rounded-xl border border-line bg-panel p-5">
            <p className="text-xs tracking-wide text-muted uppercase">Luna selectată</p>
            <p className={`mt-2 font-mono text-2xl ${monthPnl >= 0 ? "text-gain" : "text-loss"}`}>
              {money(monthPnl)}
            </p>
            <p className="mt-2 text-sm text-muted">
              {monthList.length} zile · {winDays} pozitive
              {monthList.length ? ` · ${Math.round((winDays / monthList.length) * 100)}%` : ""}
            </p>
            <p className="mt-2 text-sm text-muted">
              Flux net: {monthFlow >= 0 ? "depuneri" : "retrageri"} {money(Math.abs(monthFlow))}
            </p>
            {monthList.length ? (
              <p className="mt-2 text-sm text-muted">Sold final lună: {money(monthList[monthList.length - 1].close)}</p>
            ) : null}
          </article>
          <article className="rounded-xl border border-line bg-panel p-5">
            <p className="text-xs tracking-wide text-muted uppercase">Ziua selectată</p>
            {selected ? (
              <div className="mt-3 space-y-2 text-sm">
                <p className="font-medium">
                  {selected.date}
                  {selected.best ? " · cea mai bună zi" : ""}
                </p>
                <p className="text-muted">
                  {selected.venue} · {selected.trades} ordine
                </p>
                <p className={`font-mono ${selected.pnl >= 0 ? "text-gain" : "text-loss"}`}>
                  Rezultat {percent(selected.pct)} · {money(selected.pnl)}
                </p>
                <p className="text-muted">Deschidere: {money(selected.open)}</p>
                <p className="text-muted">
                  {selected.flow >= 0 ? "Depunere" : "Retragere"}: {money(Math.abs(selected.flow))}
                </p>
                <p className="font-mono">Închidere: {money(selected.close)}</p>
              </div>
            ) : (
              <p className="mt-3 text-sm text-muted">Alege o zi din calendar pentru detaliu.</p>
            )}
          </article>
          <p className="text-xs leading-5 text-muted">
            Start 20.000,00 EUR pe 11 ianuarie 2021. Circa 80% zile pozitive. +74% a fost o zi de început, pe
            capital mic; ulterior randamentul zilnic scade odată cu soldul. Depuneri și retrageri operaționale, sold
            actual 16.455.302,46 EUR. Performanțele anterioare nu constituie o garanție pentru rezultate viitoare.
          </p>
        </aside>
      </div>
    </div>
  );
}
