import React from 'react';
import { Pricing } from '../components/sections/Pricing';
import { FAQ } from '../components/sections/FAQ';
import { CTASection } from '../components/sections/CTASection';
export const PricingPage = () => {
  return (
    <div className="pt-20">
      <Pricing />
      <FAQ />
      <CTASection />
    </div>);

};