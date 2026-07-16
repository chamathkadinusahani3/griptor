import React from 'react';
import { Hero } from '../components/sections/Hero';

import { Solutions } from '../components/sections/Solutions';
import { Testimonials } from '../components/sections/Testimonials';
import { CTASection } from '../components/sections/CTASection';
export const Home = () => {
  return (
    <>
      <Hero />
      
      <Solutions />
      <Testimonials />
      <CTASection />
    </>);

};