import React from 'react';
import { Counter } from '../ui/Counter';
import { Reveal } from '../ui/Reveal';
const STATS = [
{
  value: 150,
  suffix: '+',
  label: 'Business Clients'
},
{
  value: 40,
  suffix: '+',
  label: 'Software Modules'
},
{
  value: 1,
  suffix: 'M+',
  label: 'Transactions'
},
{
  value: 99.9,
  suffix: '%',
  label: 'Cloud Uptime',
  decimals: 1
},
{
  value: 24,
  suffix: '/7',
  label: 'Support'
}];

export const Stats = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 divide-x divide-[var(--border)]">
          {STATS.map((stat, i) =>
          <Reveal key={i} delay={i * 0.1}>
              <div className="text-center px-4">
                <div className="text-4xl md:text-5xl font-extrabold text-[var(--navy)] mb-2">
                  <Counter
                  end={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals} />
                
                </div>
                <div className="text-sm font-semibold text-[var(--text-gray)] uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

};