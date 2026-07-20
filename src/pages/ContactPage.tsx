import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { postToAdmin, ApiError } from '../lib/api';
const CONTACT_INFO = [
{
  icon: Mail,
  label: 'Email',
  value: 'info@griptortech.com'
},
{
  icon: Phone,
  label: 'Phone',
  value: '+94 723 45 6789'
},
{
  icon: MapPin,
  label: 'Office',
  value: '278, 2 High Level Rd, Pannipitiya'
}];

const inputClass =
'w-full px-4 py-3 rounded-xl bg-[var(--soft-gray)] border border-[var(--border)] text-[var(--navy)] placeholder:text-[var(--text-gray)]/60 focus:outline-none focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/20 transition-all';
export const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [businessType, setBusinessType] = useState('Garage / Workshop');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      await postToAdmin('/leads/submit', { name, email, company, businessType, message });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="pt-20">
      <section className="pt-24 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge="Contact Us"
            title="Let's Transform Your Business Together"
            subtitle="Book a live demo, start a free trial, or just ask us anything. Our team will get back to you within one business day." />


          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Info */}
            <Reveal className="lg:col-span-2" direction="right">
              <div className="space-y-6">
                {CONTACT_INFO.map((item, i) =>
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-[var(--soft-gray)] border border-[var(--border)]">

                    <div className="w-12 h-12 rounded-xl brand-gradient flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[var(--text-gray)] uppercase tracking-wider mb-1">
                        {item.label}
                      </div>
                      <div className="text-[var(--navy)] font-bold">
                        {item.value}
                      </div>
                    </div>
                  </div>
                )}
                <div className="p-6 rounded-2xl brand-gradient text-white">
                  <h3 className="font-bold text-lg mb-2">Enterprise Support</h3>
                  <p className="text-white/80 text-sm">
                    Dedicated account managers and 24/7 priority support for
                    enterprise clients.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal className="lg:col-span-3" direction="left">
              <div className="bg-white rounded-3xl border border-[var(--border)] shadow-xl p-8">
                {submitted ?
                <div className="flex flex-col items-center justify-center text-center py-16">
                    <div className="w-16 h-16 rounded-full brand-gradient flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--navy)] mb-2">
                      Thank You!
                    </h3>
                    <p className="text-[var(--text-gray)]">
                      We've received your message and will be in touch shortly.
                    </p>
                  </div> :

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-[var(--navy)] mb-2">
                          Full Name
                        </label>
                        <input
                        required
                        type="text"
                        placeholder="Jane Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={inputClass} />

                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[var(--navy)] mb-2">
                          Work Email
                        </label>
                        <input
                        required
                        type="email"
                        placeholder="jane@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={inputClass} />

                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-[var(--navy)] mb-2">
                          Company
                        </label>
                        <input
                        type="text"
                        placeholder="Company name"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className={inputClass} />

                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[var(--navy)] mb-2">
                          Business Type
                        </label>
                        <select
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                        className={inputClass}>
                          <option>Garage / Workshop</option>
                          <option>Tyre Shop</option>
                          <option>Car Dealership</option>
                          <option>Fleet Company</option>
                          <option>Service Center</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[var(--navy)] mb-2">
                        Message
                      </label>
                      <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your business and what you're looking for..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={inputClass} />

                    </div>
                    {error && <p className="text-sm font-semibold text-red-600">{error}</p>}
                    <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={submitting}
                    icon={<ArrowRight className="w-5 h-5" />}>

                      {submitting ? 'Sending…' : 'Book Live Demo'}
                    </Button>
                  </form>
                }
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>);

};
