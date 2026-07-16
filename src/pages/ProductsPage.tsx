import React from 'react';
import { ProductShowcase } from '../components/sections/ProductShowcase';
import { AnalyticsSection } from '../components/sections/AnalyticsSection';
import { CTASection } from '../components/sections/CTASection';
export const ProductsPage = () => {
  return (
    <div className="pt-20">
      <ProductShowcase />
      <AnalyticsSection />
      <CTASection />
    </div>);

};