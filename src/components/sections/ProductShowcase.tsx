import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { ArrowRight, Check } from 'lucide-react';
import { PRODUCTS } from '../../data/products';

export const ProductShowcase = () => {
  return (
    <section id="products" className="py-24 bg-[var(--soft-gray)]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Our Products"
          title="Purpose-Built Software Products"
          subtitle="Choose the modules you need, or get the complete suite." />
        

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, i) =>
          <Reveal key={i} delay={i * 0.1}>
              <div className="bg-white rounded-3xl border border-[var(--border)] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                {/* Mockup Header Area */}
                <div
                className={`h-48 bg-gradient-to-br ${product.color} p-6 relative overflow-hidden`}>
                
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4yKSIvPjwvc3ZnPg==')] opacity-50" />

                  {/* Abstract UI Mockup */}
                  <div className="absolute bottom-[-20px] right-[-20px] w-48 h-32 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl transform rotate-[-5deg] group-hover:rotate-0 transition-transform duration-500 p-3">
                    <div className="w-full h-3 bg-white/20 rounded-full mb-2" />
                    <div className="w-2/3 h-3 bg-white/20 rounded-full mb-4" />
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded bg-white/20" />
                      <div className="w-8 h-8 rounded bg-white/20" />
                      <div className="w-8 h-8 rounded bg-white/20" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-[var(--navy)] mb-3">
                    {product.title}
                  </h3>
                  <p className="text-[var(--text-gray)] mb-6">{product.desc}</p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {product.features.map((feat, j) =>
                  <li
                    key={j}
                    className="flex items-center gap-3 text-sm font-semibold text-[var(--navy)]">
                    
                        <div className="w-5 h-5 rounded-full bg-[var(--light-blue)] flex items-center justify-center text-[var(--teal)]">
                          <Check className="w-3 h-3" />
                        </div>
                        {feat}
                      </li>
                  )}
                  </ul>

                  <Link to={`/products/${product.slug}`}>
                    <Button
                    variant="outline"
                    className="w-full group-hover:bg-[var(--navy)] group-hover:text-white group-hover:border-[var(--navy)]">

                      Learn More <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

};