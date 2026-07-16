import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
const FAQS = [
{
  q: 'How long does it take to implement GRIPTOR OS?',
  a: 'Implementation time varies depending on your business size and the modules selected. For a single location, you can be up and running in as little as 48 hours. Enterprise deployments typically take 2-4 weeks including data migration and staff training.'
},
{
  q: 'Can I migrate my existing data?',
  a: 'Yes, our onboarding team will handle the complete migration of your existing customer records, vehicle history, inventory, and financial data from your current system to GRIPTOR OS securely.'
},
{
  q: 'Is my data secure in the cloud?',
  a: 'Absolutely. We use bank-grade 256-bit encryption, automated daily backups, and host our infrastructure on enterprise-grade servers with 99.9% guaranteed uptime.'
},
{
  q: 'Do you provide training for my staff?',
  a: 'Yes, all plans include comprehensive onboarding. Professional and Enterprise plans include dedicated live training sessions for your entire team, plus 24/7 access to our knowledge base and support.'
},
{
  q: 'Can I upgrade or downgrade my plan later?',
  a: 'Yes, you can change your plan at any time. If you upgrade, the new features are available immediately. If you downgrade, the changes will take effect at the start of your next billing cycle.'
}];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about the product and billing." />
        

        <div className="space-y-4">
          {FAQS.map((faq, i) =>
          <Reveal key={i} delay={i * 0.1}>
              <div className="border border-[var(--border)] rounded-2xl overflow-hidden bg-[var(--soft-gray)]/50">
                <button
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                
                  <span className="font-bold text-[var(--navy)]">{faq.q}</span>
                  <motion.div
                  animate={{
                    rotate: openIndex === i ? 180 : 0
                  }}
                  transition={{
                    duration: 0.3
                  }}
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[var(--border)] flex-shrink-0">
                  
                    <ChevronDown className="w-4 h-4 text-[var(--teal)]" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === i &&
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0
                  }}
                  animate={{
                    height: 'auto',
                    opacity: 1
                  }}
                  exit={{
                    height: 0,
                    opacity: 0
                  }}
                  transition={{
                    duration: 0.3
                  }}>
                  
                      <div className="px-6 pb-6 text-[var(--text-gray)] leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                }
                </AnimatePresence>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

};