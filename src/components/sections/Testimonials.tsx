import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Star } from 'lucide-react';
const TESTIMONIALS = [
{
  quote:
  'GRIPTOR OS completely transformed how we manage our 5 locations. The real-time inventory tracking alone saved us thousands in the first month.',
  name: 'David Chen',
  role: 'Operations Director',
  company: 'Metro Auto Service',
  initial: 'D'
},
{
  quote:
  "The best automotive software we've used. The interface is incredibly intuitive, and the customer portal has significantly improved our client retention.",
  name: 'Sarah Jenkins',
  role: 'Owner',
  company: 'Elite Tyre & Auto',
  initial: 'S'
},
{
  quote:
  'Migrating to GRIPTOR was seamless. Their support team is phenomenal, and the analytics dashboard gives me insights I never had before.',
  name: 'Michael Rodriguez',
  role: 'CEO',
  company: 'ProFleet Management',
  initial: 'M'
}];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-[var(--navy)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] mask-image:linear-gradient(to_bottom,white,transparent)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          badge="Testimonials"
          title="Trusted by Industry Leaders"
          subtitle="See what our clients have to say about their experience with GRIPTOR TECH."
          light={true} />
        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test, i) =>
          <Reveal key={i} delay={i * 0.1}>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) =>
                <Star
                  key={star}
                  className="w-5 h-5 text-amber-400 fill-amber-400" />

                )}
                </div>
                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  "{test.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full brand-gradient flex items-center justify-center text-white font-bold text-xl border-2 border-white/20">
                    {test.initial}
                  </div>
                  <div>
                    <div className="text-white font-bold">{test.name}</div>
                    <div className="text-[var(--cyan)] text-sm">
                      {test.role}, {test.company}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

};