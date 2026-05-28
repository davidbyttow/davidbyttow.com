import type { CSSProperties } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SNOW",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

// Closing prices for the last 8 known trading days of May 2026.
// May 25 is Memorial Day (market closed). The final two trading days
// (May 28, 29) are unknown and extrapolated from the current price.
const KNOWN_CLOSES = [
  { date: "May 15", close: 157.47 },
  { date: "May 18", close: 164.24 },
  { date: "May 19", close: 169.55 },
  { date: "May 20", close: 166.97 },
  { date: "May 21", close: 165.54 },
  { date: "May 22", close: 172.2 },
  { date: "May 26", close: 177.6 },
  { date: "May 27", close: 175.26 },
];
const EXTRAPOLATED_DATES = ["May 28", "May 29"];
const POSITION_USD = 9_300_000;
const FALLBACK_PRICE = 175.26;

async function getCurrentPrice(): Promise<number> {
  try {
    const res = await fetch(
      "https://query1.finance.yahoo.com/v8/finance/chart/SNOW?interval=1d&range=1d",
      { headers: { "User-Agent": "Mozilla/5.0" }, cache: "no-store" },
    );
    if (!res.ok) return FALLBACK_PRICE;
    const data = await res.json();
    const price = data?.chart?.result?.[0]?.meta?.regularMarketPrice;
    return typeof price === "number" && price > 0 ? price : FALLBACK_PRICE;
  } catch {
    return FALLBACK_PRICE;
  }
}

function usd(n: number, cents: boolean): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: cents ? 2 : 0,
    maximumFractionDigits: cents ? 2 : 0,
  }).format(n);
}

export default async function Snowflake() {
  const price = await getCurrentPrice();

  const days = [
    ...KNOWN_CLOSES.map((d) => ({ ...d, extrapolated: false })),
    ...EXTRAPOLATED_DATES.map((date) => ({
      date,
      close: price,
      extrapolated: true,
    })),
  ];

  const average = days.reduce((sum, d) => sum + d.close, 0) / days.length;
  const shares = POSITION_USD / average;
  const valuation = shares * price;

  return (
    <main style={mainStyle}>
      <div style={blockStyle}>
        <div style={labelStyle}>Current Value</div>
        <div style={valuationStyle}>{usd(valuation, false)}</div>
      </div>
      <div style={blockStyle}>
        <div style={labelStyle}>$SNOW</div>
        <div style={priceStyle}>{usd(price, true)}</div>
      </div>
      <div style={blockStyle}>
        <div style={labelStyle}>10-Day Avg</div>
        <div style={avgStyle}>{usd(average, true)}</div>
      </div>
      <div style={daysGridStyle}>
        {days.map((d) => (
          <div key={d.date} style={dayCellStyle}>
            <div style={dayDateStyle}>
              {d.date}
              {d.extrapolated ? "*" : ""}
            </div>
            <div style={dayCloseStyle}>{usd(d.close, true)}</div>
          </div>
        ))}
      </div>
      <div style={footnoteStyle}>* extrapolated from current price</div>
    </main>
  );
}

const mainStyle: CSSProperties = {
  flexDirection: "column",
  gap: "3rem",
  padding: "3rem 2rem",
};

const blockStyle: CSSProperties = {
  textAlign: "center",
};

const labelStyle: CSSProperties = {
  fontSize: "0.8rem",
  letterSpacing: "0.25em",
  textTransform: "uppercase",
  color: "#8a8576",
  marginBottom: "0.75rem",
};

const priceStyle: CSSProperties = {
  fontSize: "clamp(3rem, 12vw, 9rem)",
  fontWeight: 700,
  letterSpacing: "-0.03em",
  lineHeight: 1,
};

const valuationStyle: CSSProperties = {
  fontSize: "clamp(3.5rem, 15vw, 12rem)",
  fontWeight: 700,
  letterSpacing: "-0.03em",
  lineHeight: 1,
  color: "#1b7a3d",
};

const avgStyle: CSSProperties = {
  fontSize: "clamp(1.75rem, 6vw, 3.5rem)",
  fontWeight: 700,
  letterSpacing: "-0.02em",
  lineHeight: 1,
};

const daysGridStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "1rem 1.75rem",
  maxWidth: "640px",
};

const dayCellStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minWidth: "64px",
};

const dayDateStyle: CSSProperties = {
  fontSize: "0.65rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#8a8576",
  marginBottom: "0.25rem",
};

const dayCloseStyle: CSSProperties = {
  fontSize: "1rem",
  fontWeight: 600,
};

const footnoteStyle: CSSProperties = {
  fontSize: "0.7rem",
  letterSpacing: "0.05em",
  color: "#a39e8e",
};
