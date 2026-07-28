import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { postToAdmin, ApiError } from '../lib/api';

const inputClass =
'w-full px-4 py-3 rounded-xl bg-[var(--soft-gray)] border border-[var(--border)] text-[var(--navy)] placeholder:text-[var(--text-gray)]/60 focus:outline-none focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/20 transition-all';

const PLAN_LABELS: Record<string, string> = {
  starter: 'Starter',
  professional: 'Professional',
};

export const SignupPage = () => {
  const [searchParams] = useSearchParams();
  const plan = PLAN_LABELS[searchParams.get('plan') ?? ''] ? (searchParams.get('plan') as string) : 'starter';

  const [garageName, setGarageName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      await postToAdmin('/tenants/register', { garageName, contactName, email, password, phone, plan });
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
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading
            badge="Start Free Trial"
            title="Create your GRIPTOR account"
            subtitle={`Signing up for the ${PLAN_LABELS[plan]} plan. No credit card required to start your trial.`} />

          <Reveal delay={0.1}>
            <div className="bg-white rounded-3xl border border-[var(--border)] shadow-xl p-8">
              {submitted ?
              <div className="flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16 rounded-full brand-gradient flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--navy)] mb-2">
                    Account created!
                  </h3>
                  <p className="text-[var(--text-gray)] mb-8">
                    Sign in with the email and password you just chose to get started.
                  </p>
                  <Link to="/login">
                    <Button size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                      Go to your dashboard
                    </Button>
                  </Link>
                </div> :

              <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[var(--navy)] mb-2">
                        Garage / Business Name
                      </label>
                      <input
                      required
                      type="text"
                      placeholder="Apex Auto Care"
                      value={garageName}
                      onChange={(e) => setGarageName(e.target.value)}
                      className={inputClass} />

                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[var(--navy)] mb-2">
                        Your Name
                      </label>
                      <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className={inputClass} />

                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
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
                    <div>
                      <label className="block text-sm font-semibold text-[var(--navy)] mb-2">
                        Phone (optional)
                      </label>
                      <input
                      type="tel"
                      placeholder="+1 555 0142"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={inputClass} />

                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[var(--navy)] mb-2">
                      Password
                    </label>
                    <input
                    required
                    type="password"
                    minLength={8}
                    placeholder="At least 8 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={inputClass} />

                  </div>
                  {error && <p className="text-sm font-semibold text-red-600">{error}</p>}
                  <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={submitting}
                  icon={<ArrowRight className="w-5 h-5" />}>

                    {submitting ? 'Creating account…' : 'Start Free Trial'}
                  </Button>
                  <p className="text-center text-sm text-[var(--text-gray)]">
                    Already have an account?{' '}
                    <Link to="/login" className="font-semibold text-[var(--teal)] hover:underline">
                      Sign in
                    </Link>
                  </p>
                </form>
              }
            </div>
          </Reveal>

          <p className="mt-6 text-center text-sm text-[var(--text-gray)]">
            Need to talk to sales first?{' '}
            <Link to="/contact" className="font-semibold text-[var(--teal)] hover:underline">
              Contact us
            </Link>
          </p>
        </div>
      </section>
    </div>);

};
