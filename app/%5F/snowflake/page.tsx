import type { CSSProperties } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SNOW",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

// Closing prices for the last 8 known trading days of May 2026.
// May 25 is Memorial Day (market closed). The final two trading days
// (May 28, 29) are unknown and use the current price instead.
const KNOWN_MAY_CLOSES = [
  157.47, // May 15
  164.24, // May 18
  169.55, // May 19
  166.97, // May 20
  165.54, // May 21
  172.2, // May 22
  177.6, // May 26
  175.26, // May 27
];
const POSITION_USD = 6_200_000;
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
  const tenDay = [...KNOWN_MAY_CLOSES, price, price];
  const average = tenDay.reduce((sum, p) => sum + p, 0) / tenDay.length;
  const shares = POSITION_USD / average;
  const valuation = shares * price;

  return (
    <main style={mainStyle}>
      <div style={blockStyle}>
        <div style={labelStyle}>SNOW</div>
        <div style={priceStyle}>{usd(price, true)}</div>
      </div>
      <div style={blockStyle}>
        <div style={labelStyle}>Valuation</div>
        <div style={valuationStyle}>{usd(valuation, false)}</div>
      </div>
    </main>
  );
}

const mainStyle: CSSProperties = {
  flexDirection: "column",
  gap: "4rem",
  padding: "2rem",
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
};
