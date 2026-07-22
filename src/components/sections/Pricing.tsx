import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { CurrencySelector } from '../ui/CurrencySelector';
import { useCurrency } from '../../context/CurrencyContext';
import { formatPrice } from '../../data/currencies';
import { Check } from 'lucide-react';
const PLANS = [
{
  name: 'Starter',
  desc: 'Perfect for single-location independent garages.',
  priceUSD: 99,
  features: [
  'Garage Management',
  'Basic CRM',
  'Up to 3 Users',
  'Standard Support',
  'Basic Reporting'],

  highlight: false
},
{
  name: 'Professional',
  desc: 'For growing businesses with advanced needs.',
  priceUSD: 249,
  features: [
  'Everything in Starter',
  'Inventory & POS',
  'Up to 10 Users',
  'Priority Support',
  'Advanced Analytics',
  'Customer Mobile App',
  'API Access'],

  highlight: true
},
{
  name: 'Enterprise',
  desc: 'Custom solutions for large fleets and franchises.',
  priceUSD: null,
  features: [
  'Everything in Professional',
  'Unlimited Users',
  'Multi-location Management',
  'Dedicated Account Manager',
  'Custom Integrations',
  'White-label Options'],

  highlight: false
}];

export const Pricing = () => {
  const { currency, isLive, ratesUpdatedAt } = useCurrency();
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
          {PLANS.map((plan, i) =>
          <Reveal key={i} delay={i * 0.1}>
              <div
              className={`relative bg-white rounded-3xl p-8 ${plan.highlight ? 'border-2 border-[var(--teal)] shadow-2xl shadow-[var(--teal)]/20 md:scale-105 z-10' : 'border border-[var(--border)] shadow-sm'}`}>
              
                {plan.highlight &&
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full brand-gradient text-white text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
              }

                <h3 className="text-2xl font-bold text-[var(--navy)] mb-2">
                  {plan.name}
                </h3>
                <p className="text-[var(--text-gray)] text-sm mb-6 h-10">
                  {plan.desc}
                </p>

                <div className="mb-8">
                  <span className="text-4xl font-extrabold text-[var(--navy)]">
                    {plan.priceUSD === null ? 'Custom' : formatPrice(plan.priceUSD, currency)}
                  </span>
                  {plan.priceUSD !== null &&
                <span className="text-[var(--text-gray)]">/month</span>
                }
                </div>

                <Link className="block" to={plan.priceUSD === null ? '/contact' : `/get-started?plan=${plan.name.toLowerCase()}`}>
                  <Button
                  variant={plan.highlight ? 'primary' : 'outline'}
                  className="w-full mb-8">

                    {plan.priceUSD === null ?
                  'Contact Sales' :
                  'Start Free Trial'}
                  </Button>
                </Link>

                <div className="space-y-4">
                  <div className="text-sm font-bold text-[var(--navy)] uppercase tracking-wider mb-4">
                    What's included
                  </div>
                  {plan.features.map((feat, j) =>
                <div key={j} className="flex items-start gap-3">
                      <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.highlight ? 'bg-[var(--teal)] text-white' : 'bg-[var(--light-blue)] text-[var(--teal)]'}`}>
                    
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm text-[var(--text-gray)]">
                        {feat}
                      </span>
                    </div>
                )}
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

};