import React from 'react';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';
export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Brand Gradient Background */}
      <div className="absolute inset-0 brand-gradient" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] mask-image:linear-gradient(to_bottom,white,transparent)]" />
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[150%] bg-white/10 blur-[100px] rounded-full transform rotate-45 pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[150%] bg-[var(--navy)]/20 blur-[100px] rounded-full transform -rotate-45 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Ready to Transform Your Automotive Business?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join hundreds of modern garages, dealerships, and fleets already
            using GRIPTOR OS to automate their operations and increase
            profitability.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-[var(--navy)] hover:bg-[var(--soft-gray)] hover:text-[var(--royal)] shadow-xl shadow-black/10"
              icon={<ArrowRight className="w-5 h-5" />}>
              
              Book Live Demo
            </Button>
            <Button
              size="lg"
              className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white">
              
              Start Free Trial
            </Button>
          </div>
        </Reveal>
      </div>
    </section>);

};