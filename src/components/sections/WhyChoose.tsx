import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
const POINTS = [
'Enterprise-grade Security',
'Continuous Updates',
'Cloud Architecture',
'24/7 Support',
'Fast Deployment',
'High Performance',
'Modern UI',
'Automatic Backup',
'Scalable Platform',
'Multi-user',
'API Integration',
'Multi-location'];

export const WhyChoose = () => {
  return (
    <section className="py-24 bg-[var(--navy)] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--teal)] rounded-full blur-[150px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--royal)] rounded-full blur-[150px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading
            badge="Why GRIPTOR"
            title="Engineered for Enterprise Scale"
            subtitle="We don't just build software; we build the foundation for your business growth."
            align="left"
            light={true} />
          

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {POINTS.map((point, i) =>
            <Reveal key={i} delay={i * 0.05}>
                <div className="flex items-center gap-3 text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-[var(--cyan)] flex-shrink-0" />
                  <span className="font-medium">{point}</span>
                </div>
              </Reveal>
            )}
          </div>
        </div>

        <Reveal delay={0.2} direction="left">
          <div className="relative">
            {/* Abstract Dashboard Illustration */}
            <div className="aspect-square md:aspect-[4/3] bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6 shadow-2xl relative overflow-hidden">
              {/* Fake UI Elements */}
              <div className="flex gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/10 animate-pulse" />
                <div className="flex-1 space-y-2 py-2">
                  <div className="h-4 w-1/3 bg-white/20 rounded" />
                  <div className="h-3 w-1/4 bg-white/10 rounded" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="h-24 rounded-xl bg-gradient-to-br from-[var(--teal)]/20 to-transparent border border-[var(--teal)]/30 p-4">
                  <div className="h-3 w-1/2 bg-[var(--teal)]/50 rounded mb-4" />
                  <div className="h-6 w-3/4 bg-white/80 rounded" />
                </div>
                <div className="h-24 rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="h-3 w-1/2 bg-white/30 rounded mb-4" />
                  <div className="h-6 w-2/3 bg-white/60 rounded" />
                </div>
              </div>

              <div className="h-32 rounded-xl bg-white/5 border border-white/10 p-4 relative flex items-end gap-2">
                {[40, 60, 30, 80, 50, 90, 70].map((h, i) =>
                <motion.div
                  key={i}
                  initial={{
                    height: 0
                  }}
                  whileInView={{
                    height: `${h}%`
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    duration: 1,
                    delay: i * 0.1
                  }}
                  className="flex-1 bg-[var(--cyan)]/40 rounded-t-sm" />

                )}
              </div>

              {/* Floating Element */}
              <motion.div
                animate={{
                  y: [-10, 10, -10]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute -right-6 top-1/3 w-48 p-4 bg-white rounded-xl shadow-2xl border border-[var(--border)]">
                
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <div className="text-xs font-bold text-[var(--navy)]">
                    System Status
                  </div>
                </div>
                <div className="text-sm font-semibold text-[var(--teal)]">
                  All Systems Operational
                </div>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

};