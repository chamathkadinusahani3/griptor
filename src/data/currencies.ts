export interface Currency {
  code: string;
  country: string;
  symbol: string;
  /**
   * Units of this currency per 1 USD. This is a fallback only, used until a
   * live rate is fetched (see fetchLiveRates below) or if that fetch fails —
   * display only, all billing happens in USD.
   */
  rate: number;
}

export const CURRENCIES: Currency[] = [
  { code: 'USD', country: 'United States', symbol: '$', rate: 1 },
  { code: 'LKR', country: 'Sri Lanka', symbol: 'Rs', rate: 300 },
  { code: 'INR', country: 'India', symbol: '₹', rate: 83 },
  { code: 'GBP', country: 'United Kingdom', symbol: '£', rate: 0.79 },
  { code: 'EUR', country: 'European Union', symbol: '€', rate: 0.92 },
  { code: 'AUD', country: 'Australia', symbol: 'A$', rate: 1.52 },
  { code: 'CAD', country: 'Canada', symbol: 'C$', rate: 1.36 },
  { code: 'AED', country: 'United Arab Emirates', symbol: 'د.إ', rate: 3.67 },
  { code: 'SGD', country: 'Singapore', symbol: 'S$', rate: 1.34 },
];

export const DEFAULT_CURRENCY = CURRENCIES[0];

export function getCurrency(code: string): Currency {
  return CURRENCIES.find((c) => c.code === code) ?? DEFAULT_CURRENCY;
}

/** Converts a USD amount to the given currency and formats it for display, e.g. "Rs 29,700". No decimals — these are approximate reference prices, not exact billing amounts. */
export function formatPrice(usdAmount: number, currency: Currency): string {
  const converted = Math.round(usdAmount * currency.rate);
  const separator = currency.symbol.length > 1 ? ' ' : '';
  return `${currency.symbol}${separator}${converted.toLocaleString('en-US')}`;
}

export interface LiveRates {
  /** currency code -> units per 1 USD */
  rates: Record<string, number>;
  fetchedAt: number;
}

// Free, no API key, CORS-open (Access-Control-Allow-Origin: *), updates once
// every 24h. Docs: https://www.exchangerate-api.com/docs/free
const RATES_API_URL = 'https://open.er-api.com/v6/latest/USD';

/** Returns null on any failure (offline, API down, unexpected shape) so callers can fall back to the static table. */
export async function fetchLiveRates(): Promise<LiveRates | null> {
  try {
    const res = await fetch(RATES_API_URL);
    if (!res.ok) return null;
    const data = await res.json();
    if (data.result !== 'success' || typeof data.rates !== 'object') return null;
    return { rates: data.rates, fetchedAt: Date.now() };
  } catch {
    return null;
  }
}
