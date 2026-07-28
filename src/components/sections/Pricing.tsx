import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { CurrencySelector } from '../ui/CurrencySelector';
import { useCurrency } from '../../context/CurrencyContext';
import { formatPrice } from '../../data/currencies';
import { getFromAdmin } from '../../lib/api';
import { Check } from 'lucide-react';

interface PricingTier {
  id: string;
  name: string;
  price: number | null;
  description: string;
  features: string[];
  popular?: boolean;
}

// Only these two plans have real self-serve checkout built (SignupPage.tsx,
// griptoradmin's PayHere setup-payment.ts) — any other plan (Enterprise, or
// any new custom-named plan a super admin creates) always routes to Contact
// Sales instead, regardless of whether it happens to have a real price set.
// A plan being priced doesn't mean it's self-serve-buyable.
const SELF_SERVE_PLAN_NAMES = ['Starter', 'Professional'];

// Shown only if the live fetch from griptoradmin fails (network issue, admin
// API down) — a public marketing page should never render an empty pricing
// section. Kept intentionally minimal/generic rather than a full copy of
// real plan data, which would just go stale.
const FALLBACK_TIERS: PricingTier[] = [
{ id: 'starter', name: 'Starter', price: 99, description: 'Perfect for single-location independent garages.', features: ['Garage Management', 'Basic CRM', 'Up to 3 Users', 'Standard Support', 'Basic Reporting'] },
{ id: 'pro', name: 'Professional', price: 249, description: 'For growing businesses with advanced needs.', features: ['Everything in Starter', 'Inventory & POS', 'Up to 10 Users', 'Priority Support', 'Advanced Analytics', 'API Access'], popular: true },
{ id: 'enterprise', name: 'Enterprise', price: null, description: 'Custom solutions for large fleets and franchises.', features: ['Everything in Professional', 'Unlimited Users', 'Multi-location Management', 'Dedicated Account Manager', 'Custom Integrations'] }];


export const Pricing = () => {
  const { currency, isLive, ratesUpdatedAt } = useCurrency();
  const [plans, setPlans] = useState<PricingTier[]>(FALLBACK_TIERS);

  useEffect(() => {
    getFromAdmin<{ tiers: PricingTier[] }>('/public/pricing-tiers')
      .then(({ tiers }) => {
        if (tiers.length > 0) setPlans(tiers);
      })
      .catch(() => {
        // Real plan data couldn't be reached — keep the static fallback
        // above rather than showing a broken/empty pricing section.
      });
  }, []);

  return (
    <section id="pricing" className="py-24 bg-[var(--soft-gray)]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Pricing Plans"
          title="Simple, Transparent Pricing"
          subtitle="Choose the plan that fits your business size and needs. No hidden fees." />

        <div className="flex flex-col items-center gap-3 mb-12">
          <CurrencySelector />
          {currency.code !== 'USD' && (
            <p className="text-xs text-[var(--text-gray)]">
              {isLive
                ? `Live exchange rate${ratesUpdatedAt ? ` as of ${ratesUpdatedAt.toLocaleDateString()}` : ''} — all plans are billed in USD.`
                : `Prices shown in ${currency.code} are approximate — all plans are billed in USD.`}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {plans.map((plan, i) => {
          const selfServe = SELF_SERVE_PLAN_NAMES.includes(plan.name);
          return (
            <Reveal key={plan.id} delay={i * 0.1}>
              <div
              className={`relative bg-white rounded-3xl p-8 ${plan.popular ? 'border-2 border-[var(--teal)] shadow-2xl shadow-[var(--teal)]/20 md:scale-105 z-10' : 'border border-[var(--border)] shadow-sm'}`}>

                {plan.popular &&
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full brand-gradient text-white text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
              }

                <h3 className="text-2xl font-bold text-[var(--navy)] mb-2">
                  {plan.name}
                </h3>
                <p className="text-[var(--text-gray)] text-sm mb-6 h-10">
                  {plan.description}
                </p>

                <div className="mb-8">
                  <span className="text-4xl font-extrabold text-[var(--navy)]">
                    {plan.price === null ? 'Custom' : formatPrice(plan.price, currency)}
                  </span>
                  {plan.price !== null &&
                <span className="text-[var(--text-gray)]">/month</span>
                }
                </div>

                <Link className="block" to={selfServe ? `/get-started?plan=${plan.name.toLowerCase()}` : '/contact'}>
                  <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full mb-8">

                    {selfServe ? 'Start Free Trial' : 'Contact Sales'}
                  </Button>
                </Link>

                <div className="space-y-4">
                  <div className="text-sm font-bold text-[var(--navy)] uppercase tracking-wider mb-4">
                    What's included
                  </div>
                  {plan.features.map((feat, j) =>
                <div key={j} className="flex items-start gap-3">
                      <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.popular ? 'bg-[var(--teal)] text-white' : 'bg-[var(--light-blue)] text-[var(--teal)]'}`}>

                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm text-[var(--text-gray)]">
                        {feat}
                      </span>
                    </div>
                )}
                </div>
              </div>
            </Reveal>);

        })}
        </div>
      </div>
    </section>);

};