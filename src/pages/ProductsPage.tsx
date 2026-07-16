import React from 'react';
import { ProductShowcase } from '../components/sections/ProductShowcase';

import { CTASection } from '../components/sections/CTASection';
export const ProductsPage = () => {
  return (
    <div className="pt-20">
      <ProductShowcase />
      
      <CTASection />
    </div>);

};