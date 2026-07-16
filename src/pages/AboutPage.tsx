import React from 'react';
import { WhyChoose } from '../components/sections/WhyChoose';
import { Process } from '../components/sections/Process';

import { Testimonials } from '../components/sections/Testimonials';
import { CTASection } from '../components/sections/CTASection';
import { SectionHeading } from '../components/ui/SectionHeading';
export const AboutPage = () => {
  return (
    <div className="pt-20">
      <section className="pt-24 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge="About Us"
            title="The Technology Partner for Modern Automotive Businesses"
            subtitle="GRIPTOR TECH PVT LTD builds cloud-based software that helps garages, dealerships, workshops, and fleets automate operations, streamline workflows, and deliver exceptional customer experiences at scale." />
          
        </div>
      </section>
     
      <WhyChoose />
      <Process />
      <Testimonials />
      <CTASection />
    </div>);

};