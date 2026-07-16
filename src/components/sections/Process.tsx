import React, { useRef } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  MessageSquare,
  FileEdit,
  Code2,
  Rocket,
  GraduationCap,
  HeadphonesIcon } from
'lucide-react';
const STEPS = [
{
  title: 'Consultation',
  icon: MessageSquare,
  desc: 'Understanding your unique business needs.'
},
{
  title: 'Planning',
  icon: FileEdit,
  desc: 'Mapping out the perfect software architecture.'
},
{
  title: 'Development',
  icon: Code2,
  desc: 'Customizing the platform for your workflow.'
},
{
  title: 'Deployment',
  icon: Rocket,
  desc: 'Seamless migration and go-live process.'
},
{
  title: 'Training',
  icon: GraduationCap,
  desc: 'Onboarding your entire team effectively.'
},
{
  title: 'Support',
  icon: HeadphonesIcon,
  desc: '24/7 ongoing technical assistance.'
}];

export const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  return (
    <section className="py-24 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Our Process"
          title="From Concept to Go-Live"
          subtitle="A streamlined onboarding process designed to get your business running on GRIPTOR OS smoothly." />
        

        <div className="relative mt-16">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[5%] right-[5%] h-1 bg-[var(--soft-gray)] rounded-full overflow-hidden">
            <motion.div
              className="h-full brand-gradient"
              style={{
                width: lineWidth
              }} />
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {STEPS.map((step, i) =>
            <Reveal key={i} delay={i * 0.1}>
                <div className="relative flex flex-col items-center text-center group">
                  {/* Mobile Connecting Line */}
                  {i !== STEPS.length - 1 &&
                <div className="md:hidden absolute top-24 bottom-[-2rem] left-1/2 w-0.5 bg-[var(--soft-gray)] -translate-x-1/2" />
                }

                  <div className="w-24 h-24 rounded-2xl bg-white border-2 border-[var(--border)] shadow-sm flex items-center justify-center mb-6 relative z-10 group-hover:border-[var(--teal)] group-hover:scale-110 transition-all duration-300">
                    <step.icon className="w-10 h-10 text-[var(--navy)] group-hover:text-[var(--teal)] transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold text-[var(--navy)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--text-gray)]">{step.desc}</p>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>);

};