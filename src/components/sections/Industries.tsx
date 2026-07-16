import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Car, Truck, Wrench, Settings, Store, ShieldCheck } from 'lucide-react';
const INDUSTRIES = [
{
  name: 'Tyre Shops',
  icon: Settings
},
{
  name: 'Garage Workshops',
  icon: Wrench
},
{
  name: 'Car Dealerships',
  icon: Car
},
{
  name: 'Fleet Companies',
  icon: Truck
},
{
  name: 'Service Centers',
  icon: ShieldCheck
},
{
  name: 'Spare Parts Stores',
  icon: Store
}];

export const Industries = () => {
  return (
    <section id="industries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Industries We Serve"
          title="Built for Every Automotive Business"
          subtitle="Tailored workflows and features designed specifically for your sector." />
        

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, i) =>
          <Reveal key={i} delay={i * 0.05}>
              <div className="group relative p-8 rounded-2xl bg-[var(--soft-gray)] border border-[var(--border)] hover:bg-white hover:shadow-xl hover:border-[var(--teal)] transition-all duration-300 cursor-pointer overflow-hidden text-center flex flex-col items-center">
                {/* Isometric Tech Shape Background */}
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[var(--light-blue)] rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500" />

                <div className="relative z-10 w-16 h-16 rounded-2xl bg-white shadow-sm border border-[var(--border)] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-[var(--teal)] transition-all duration-300">
                  <ind.icon className="w-8 h-8 text-[var(--navy)] group-hover:text-[var(--teal)] transition-colors" />
                </div>

                <h3 className="relative z-10 text-lg font-bold text-[var(--navy)]">
                  {ind.name}
                </h3>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

};