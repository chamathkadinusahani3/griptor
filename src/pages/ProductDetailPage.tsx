import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { CTASection } from '../components/sections/CTASection';
import { ArrowLeft, ArrowRight, Check, Plus } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export const ProductDetailPage = () => {
  const { slug } = useParams();
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${product.color} py-20`}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4yKSIvPjwvc3ZnPg==')] opacity-50" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Reveal>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Products
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              {product.title}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
              {product.longDescription}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white text-[var(--navy)] hover:bg-[var(--soft-gray)] w-full sm:w-auto"
                  icon={<ArrowRight className="w-5 h-5" />}>
                  Book Live Demo
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white w-full sm:w-auto">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Modules */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--navy)] mb-3">
              What's Included
            </h2>
            <p className="text-[var(--text-gray)] mb-12 max-w-2xl">
              Every plan starts with the core modules below. Need more? Add optional
              modules any time as your business grows.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.modules.map((module, i) => (
              <Reveal key={module.name} delay={i * 0.05}>
                <div
                  className={`h-full rounded-2xl border p-6 flex items-start gap-4 ${
                    module.included
                      ? 'bg-[var(--light-blue)]/30 border-[var(--border)]'
                      : 'bg-[var(--soft-gray)] border-dashed border-[var(--border)]'
                  }`}>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      module.included
                        ? 'bg-[var(--teal)] text-white'
                        : 'bg-white text-[var(--text-gray)] border border-[var(--border)]'
                    }`}>
                    {module.included ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3 mb-1">
                      <h3 className="font-bold text-[var(--navy)]">{module.name}</h3>
                      <span
                        className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full flex-shrink-0 ${
                          module.included
                            ? 'bg-[var(--teal)]/10 text-[var(--teal)]'
                            : 'bg-white text-[var(--text-gray)] border border-[var(--border)]'
                        }`}>
                        {module.included ? 'Included' : `+${module.addOnPrice}/mo`}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-gray)]">{module.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-[var(--soft-gray)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--navy)] mb-3">
              Simple, Standalone Pricing
            </h2>
            <p className="text-[var(--text-gray)] mb-10">
              Get {product.title} on its own, or bundle it into a full GRIPTOR plan for
              better value.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-white rounded-3xl border border-[var(--border)] shadow-sm p-10 max-w-md mx-auto">
              <div className="mb-6">
                <span className="text-5xl font-extrabold text-[var(--navy)]">
                  {product.price}
                </span>
                <span className="text-[var(--text-gray)]">/month</span>
              </div>
              <p className="text-sm text-[var(--text-gray)] mb-8">
                Includes all core modules listed above. Optional add-ons billed
                separately.
              </p>
              <div className="flex flex-col gap-3">
                <Link to="/contact">
                  <Button variant="primary" className="w-full">
                    Start Free Trial
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button variant="outline" className="w-full">
                    Compare Full Plans
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </div>
  );
};
