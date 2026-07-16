import React from 'react';
import { Hero } from '../components/sections/Hero';
import { TrustedBy } from '../components/sections/TrustedBy';
import { Stats } from '../components/sections/Stats';
import { Solutions } from '../components/sections/Solutions';
import { Testimonials } from '../components/sections/Testimonials';
import { CTASection } from '../components/sections/CTASection';
export const Home = () => {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Stats />
      <Solutions />
      <Testimonials />
      <CTASection />
    </>);

};