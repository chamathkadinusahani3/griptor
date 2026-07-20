import React from 'react';
export const Logo = () => {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <img src="/logo.png" alt="GRIPTOR" className="w-12 h-12 rounded-lg object-contain" />
      <div className="flex flex-col leading-none">
        <span className="font-extrabold text-2xl tracking-tight whitespace-nowrap">
          <span className="text-[var(--navy)]">GRIPTOR</span>{' '}
          <span className="text-[var(--teal)]">TECH</span>
        </span>
        <div className="mt-1.5 flex items-center gap-2">
          <span className="h-px flex-1 bg-[var(--border)]" />
          <span className="shrink-0 text-[10px] font-bold tracking-[0.25em] text-[var(--text-gray)]">PVT LTD</span>
          <span className="h-px flex-1 bg-[var(--border)]" />
        </div>
      </div>
    </div>);

};
