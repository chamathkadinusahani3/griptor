import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { motion } from 'framer-motion';
export const AnalyticsSection = () => {
  return (
    <section className="py-24 bg-[var(--soft-gray)] border-y border-[var(--border)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Deep Insights"
          title="Data-Driven Decisions"
          subtitle="Track every metric that matters. From revenue and inventory to technician performance." />
        

        <Reveal delay={0.2}>
          <div className="w-full bg-white rounded-3xl shadow-xl border border-[var(--border)] p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-[var(--navy)]">
                  Revenue Overview
                </h3>
                <p className="text-[var(--text-gray)]">
                  Monthly performance across all branches
                </p>
              </div>
              <div className="flex gap-2">
                <div className="px-4 py-2 rounded-lg bg-[var(--light-blue)] text-[var(--teal)] font-semibold text-sm">
                  This Year
                </div>
                <div className="px-4 py-2 rounded-lg border border-[var(--border)] text-[var(--text-gray)] font-semibold text-sm">
                  Last Year
                </div>
              </div>
            </div>

            {/* Animated Chart Mockup */}
            <div className="h-[400px] w-full relative flex items-end justify-between gap-2 md:gap-4 pt-10">
              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                {[1, 2, 3, 4, 5].map((i) =>
                <div
                  key={i}
                  className="w-full border-t border-[var(--border)]/50" />

                )}
              </div>

              {/* Bars */}
              {[
              {
                val: 40,
                label: 'Jan'
              },
              {
                val: 55,
                label: 'Feb'
              },
              {
                val: 45,
                label: 'Mar'
              },
              {
                val: 70,
                label: 'Apr'
              },
              {
                val: 65,
                label: 'May'
              },
              {
                val: 85,
                label: 'Jun'
              },
              {
                val: 75,
                label: 'Jul'
              },
              {
                val: 90,
                label: 'Aug'
              },
              {
                val: 80,
                label: 'Sep'
              },
              {
                val: 95,
                label: 'Oct'
              },
              {
                val: 85,
                label: 'Nov'
              },
              {
                val: 100,
                label: 'Dec'
              }].
              map((data, i) =>
              <div
                key={i}
                className="flex-1 flex flex-col items-center gap-4 relative z-10 h-full justify-end group">
                
                  <motion.div
                  initial={{
                    height: 0
                  }}
                  whileInView={{
                    height: `${data.val}%`
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    duration: 1,
                    delay: i * 0.05,
                    type: 'spring',
                    bounce: 0.2
                  }}
                  className="w-full max-w-[40px] brand-gradient rounded-t-md relative group-hover:opacity-80 transition-opacity">
                  
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[var(--navy)] text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                      ${(data.val * 1.2).toFixed(1)}k
                    </div>
                  </motion.div>
                  <span className="text-xs font-semibold text-[var(--text-gray)]">
                    {data.label}
                  </span>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

};