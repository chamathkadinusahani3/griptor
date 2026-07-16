import React from 'react';
import { Industries } from '../components/sections/Industries';
import { WhyChoose } from '../components/sections/WhyChoose';
import { Process } from '../components/sections/Process';
import { CTASection } from '../components/sections/CTASection';
export const IndustriesPage = () => {
  return (
    <div className="pt-20">
      <Industries />
      <WhyChoose />
      <Process />
      <CTASection />
    </div>);

};