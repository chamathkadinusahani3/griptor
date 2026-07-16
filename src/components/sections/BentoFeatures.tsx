import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import {
  Cloud,
  Shield,
  Smartphone,
  Zap,
  Globe,
  Lock,
  BarChart,
  Bell } from
'lucide-react';
const FEATURES = [
{
  title: 'Cloud Based Architecture',
  desc: 'Access your business from anywhere, on any device. 99.9% guaranteed uptime.',
  icon: Cloud,
  colSpan: 'md:col-span-2',
  bg: 'bg-[var(--navy)] text-white',
  iconColor: 'text-[var(--cyan)]'
},
{
  title: 'Real-Time Analytics',
  desc: 'AI-powered reports and insights.',
  icon: BarChart,
  colSpan: 'md:col-span-1',
  bg: 'bg-white border border-[var(--border)]',
  iconColor: 'text-[var(--teal)]'
},
{
  title: 'Bank-Grade Security',
  desc: 'End-to-end encryption for all data.',
  icon: Shield,
  colSpan: 'md:col-span-1',
  bg: 'bg-white border border-[var(--border)]',
  iconColor: 'text-[var(--royal)]'
},
{
  title: 'Mobile Responsive',
  desc: 'Native apps for technicians and customers.',
  icon: Smartphone,
  colSpan: 'md:col-span-1',
  bg: 'bg-[var(--light-blue)] border border-[var(--border)]',
  iconColor: 'text-[var(--teal)]'
},
{
  title: 'Multi-Branch Support',
  desc: 'Manage multiple locations from a single unified dashboard with role-based access.',
  icon: Globe,
  colSpan: 'md:col-span-2',
  bg: 'brand-gradient text-white',
  iconColor: 'text-white'
},
{
  title: 'Automated Alerts',
  desc: 'WhatsApp & SMS notifications.',
  icon: Bell,
  colSpan: 'md:col-span-1',
  bg: 'bg-white border border-[var(--border)]',
  iconColor: 'text-[var(--cyan)]'
}];

export const BentoFeatures = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Platform Features"
          title="Everything You Need to Scale"
          subtitle="Powerful features packed into an intuitive, modern interface." />
        

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {FEATURES.map((feat, i) =>
          <Reveal
            key={i}
            delay={i * 0.1}
            className={`${feat.colSpan} h-full`}>
            
              <div
              className={`h-full rounded-3xl p-8 flex flex-col justify-between group overflow-hidden relative transition-transform duration-300 hover:scale-[1.02] ${feat.bg}`}>
              
                {/* Decorative Glow for dark cards */}
                {feat.bg.includes('navy') &&
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--teal)] rounded-full blur-[50px] opacity-30 group-hover:opacity-50 transition-opacity" />
              }

                <div className="relative z-10">
                  <feat.icon className={`w-8 h-8 mb-4 ${feat.iconColor}`} />
                  <h3
                  className={`text-xl font-bold mb-2 ${feat.bg.includes('text-white') ? 'text-white' : 'text-[var(--navy)]'}`}>
                  
                    {feat.title}
                  </h3>
                  <p
                  className={`text-sm ${feat.bg.includes('text-white') ? 'text-white/80' : 'text-[var(--text-gray)]'}`}>
                  
                    {feat.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

};