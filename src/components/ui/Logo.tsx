import React from 'react';
export const Logo = () => {
  return (
    <div className="flex items-center gap-2 select-none">
      <img src="/logo.png" alt="GRIPTOR" className="w-12 h-12 rounded-lg object-contain" />
      <span className="font-extrabold text-2xl tracking-tight text-[var(--navy)]">
        GRIPTOR
      </span>
    </div>);

};