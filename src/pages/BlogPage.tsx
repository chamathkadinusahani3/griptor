import React from 'react';
import { Blog } from '../components/sections/Blog';
import { CTASection } from '../components/sections/CTASection';
export const BlogPage = () => {
  return (
    <div className="pt-20">
      <Blog />
      <CTASection />
    </div>);

};