import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { SolutionsPage } from './pages/SolutionsPage';
import { ProductsPage } from './pages/ProductsPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';

import { ContactPage } from './pages/ContactPage';
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
         
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>);

}