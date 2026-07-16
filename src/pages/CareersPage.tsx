import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { CTASection } from '../components/sections/CTASection';
import {
  MapPin,
  Clock,
  ArrowRight,
  Rocket,
  Heart,
  GraduationCap,
  Globe } from
'lucide-react';
const PERKS = [
{
  icon: Globe,
  title: 'Remote-First',
  desc: 'Work from anywhere with flexible hours.'
},
{
  icon: Heart,
  title: 'Health & Wellness',
  desc: 'Comprehensive medical, dental, and vision.'
},
{
  icon: GraduationCap,
  title: 'Learning Budget',
  desc: 'Annual stipend for courses and conferences.'
},
{
  icon: Rocket,
  title: 'Equity & Growth',
  desc: 'Meaningful ownership and clear career paths.'
}];

const ROLES = [
{
  title: 'Senior Frontend Engineer',
  dept: 'Engineering',
  location: 'Remote',
  type: 'Full-time'
},
{
  title: 'Product Designer',
  dept: 'Design',
  location: 'Remote',
  type: 'Full-time'
},
{
  title: 'Backend Engineer (Cloud)',
  dept: 'Engineering',
  location: 'Remote',
  type: 'Full-time'
},
{
  title: 'Customer Success Manager',
  dept: 'Customer Success',
  location: 'Hybrid',
  type: 'Full-time'
},
{
  title: 'Sales Development Rep',
  dept: 'Sales',
  location: 'Remote',
  type: 'Full-time'
}];

export const CareersPage = () => {
  return (
    <div className="pt-20">
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge="Careers"
            title="Build the Future of Automotive Software"
            subtitle="Join a team of engineers, designers, and problem-solvers shaping how automotive businesses run worldwide." />
          
        </div>
      </section>

      {/* Perks */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PERKS.map((perk, i) =>
          <Reveal key={i} delay={i * 0.08}>
              <div className="p-6 rounded-2xl bg-[var(--soft-gray)] border border-[var(--border)] h-full">
                <div className="w-12 h-12 rounded-xl brand-gradient flex items-center justify-center mb-5">
                  <perk.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[var(--navy)] mb-2">
                  {perk.title}
                </h3>
                <p className="text-sm text-[var(--text-gray)]">{perk.desc}</p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24 bg-[var(--soft-gray)]">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading badge="Open Positions" title="Current Openings" />
          <div className="space-y-4">
            {ROLES.map((role, i) =>
            <Reveal key={i} delay={i * 0.06}>
                <div className="group bg-white rounded-2xl border border-[var(--border)] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-xl hover:border-[var(--teal)] transition-all duration-300">
                  <div>
                    <h3 className="text-lg font-bold text-[var(--navy)] group-hover:text-[var(--royal)] transition-colors">
                      {role.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-[var(--text-gray)]">
                      <span className="font-semibold text-[var(--teal)]">
                        {role.dept}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {role.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {role.type}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="shrink-0">
                    Apply <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <CTASection />
    </div>);

};