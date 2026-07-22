import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { useCurrency, CURRENCIES } from '../../context/CurrencyContext';

export const CurrencySelector = () => {
  const { currency, setCurrencyCode } = useCurrency();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-white px-4 py-2.5 text-sm font-semibold text-[var(--navy)] hover:border-[var(--teal)] hover:text-[var(--teal)] transition-colors"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Globe className="w-4 h-4" />
        {currency.country} · {currency.code}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute z-20 mt-2 w-56 max-h-72 overflow-y-auto rounded-xl border border-[var(--border)] bg-white shadow-xl py-1 right-0 sm:right-auto sm:left-0"
        >
          {CURRENCIES.map((c) => (
            <button
              key={c.code}
              type="button"
              role="option"
              aria-selected={c.code === currency.code}
              onClick={() => {
                setCurrencyCode(c.code);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between hover:bg-[var(--soft-gray)] transition-colors ${
                c.code === currency.code ? 'text-[var(--teal)] font-semibold' : 'text-[var(--navy)]'
              }`}
            >
              <span>{c.country}</span>
              <span className="text-[var(--text-gray)]">{c.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
