import React from 'react';
const COMPANIES = [
'AutoTech Solutions',
'Global Fleet Co.',
'Prime Dealerships',
'Speedy Tyres',
'Elite Garages',
'Pro Service Centers',
'Metro Auto Parts',
'Apex Inspections'];

export const TrustedBy = () => {
  return (
    <section className="py-10 border-y border-[var(--border)] bg-[var(--soft-gray)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="text-sm font-semibold text-[var(--text-gray)] uppercase tracking-widest">
          Trusted by 100+ Automotive Businesses Worldwide
        </p>
      </div>

      <div className="relative flex overflow-hidden group">
        {/* Gradient Masks for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--soft-gray)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--soft-gray)] to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
          {[...COMPANIES, ...COMPANIES, ...COMPANIES].map((company, i) =>
          <div
            key={i}
            className="mx-12 flex items-center justify-center text-xl font-bold text-[var(--navy)]/30 hover:text-[var(--navy)]/60 transition-colors duration-300">
            
              {company}
            </div>
          )}
        </div>
      </div>
    </section>);

};