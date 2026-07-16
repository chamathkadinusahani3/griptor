import React from 'react';
import { Solutions } from '../components/sections/Solutions';
import { DashboardShowcase } from '../components/sections/DashboardShowcase';
import { BentoFeatures } from '../components/sections/BentoFeatures';
import { CTASection } from '../components/sections/CTASection';
export const SolutionsPage = () => {
  return (
    <div className="pt-20">
      <Solutions />
      <DashboardShowcase />
      <BentoFeatures />
      <CTASection />
    </div>);

};