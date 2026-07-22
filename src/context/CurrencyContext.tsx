import React, { createContext, useContext, useState, useEffect } from 'react';
import { Currency, CURRENCIES, DEFAULT_CURRENCY, getCurrency, fetchLiveRates, LiveRates } from '../data/currencies';

const CURRENCY_STORAGE_KEY = 'griptor_currency';
const RATES_STORAGE_KEY = 'griptor_fx_rates';
const RATES_TTL_MS = 6 * 60 * 60 * 1000; // re-fetch if cached rates are older than this; the API itself only updates once/24h

interface CurrencyContextValue {
  /** the selected currency, with `rate` already resolved to the live rate if one was fetched successfully */
  currency: Currency;
  setCurrencyCode: (code: string) => void;
  /** true if `currency.rate` came from the live API rather than the static fallback table */
  isLive: boolean;
  ratesUpdatedAt: Date | null;
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

function loadCachedRates(): LiveRates | null {
  if (typeof window === 'undefined') return null;
  const raw = localStorage.getItem(RATES_STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as LiveRates;
  } catch {
    return null;
  }
}

export const CurrencyProvider = ({ children }: { children: React.ReactNode }) => {
  const [selected, setSelected] = useState<Currency>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem(CURRENCY_STORAGE_KEY) : null;
    return saved ? getCurrency(saved) : DEFAULT_CURRENCY;
  });
  const [liveRates, setLiveRates] = useState<LiveRates | null>(loadCachedRates);

  useEffect(() => {
    localStorage.setItem(CURRENCY_STORAGE_KEY, selected.code);
  }, [selected]);

  useEffect(() => {
    const isStale = !liveRates || Date.now() - liveRates.fetchedAt > RATES_TTL_MS;
    if (!isStale) return;
    fetchLiveRates().then((fresh) => {
      if (!fresh) return; // offline/API down — keep whatever we already had (cached or static fallback)
      setLiveRates(fresh);
      localStorage.setItem(RATES_STORAGE_KEY, JSON.stringify(fresh));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- staleness is computed from the initial mount's state; a single check-and-fetch on load is correct here, not a dependency loop
  }, []);

  const liveRate = liveRates?.rates[selected.code];
  const currency: Currency = liveRate != null ? { ...selected, rate: liveRate } : selected;
  const isLive = liveRate != null;

  const setCurrencyCode = (code: string) => setSelected(getCurrency(code));

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrencyCode,
        isLive,
        ratesUpdatedAt: liveRates ? new Date(liveRates.fetchedAt) : null,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error('useCurrency must be used within a CurrencyProvider');
  return ctx;
}

export { CURRENCIES };
