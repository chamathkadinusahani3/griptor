import React from 'react';
import { Hexagon } from 'lucide-react';
export const Logo = () => {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="w-8 h-8 rounded-lg brand-gradient flex items-center justify-center shadow-lg shadow-[var(--teal)]/20">
        <Hexagon className="w-5 h-5 text-white" strokeWidth={2.5} />
      </div>
      <span className="font-extrabold text-2xl tracking-tight text-[var(--navy)]">
        GRIPTOR
      </span>
    </div>);

};