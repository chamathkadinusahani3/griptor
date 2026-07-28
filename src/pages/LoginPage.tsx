import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { postToAdminWithCredentials, adminUrl, ApiError } from '../lib/api';

const inputClass =
'w-full px-4 py-3 rounded-xl bg-[var(--soft-gray)] border border-[var(--border)] text-[var(--navy)] placeholder:text-[var(--text-gray)]/60 focus:outline-none focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/20 transition-all';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      await postToAdminWithCredentials('/auth/login', { email, password });
      // A real top-level navigation (not React Router) — required for the
      // sameSite:'lax' session cookie set by the request above to actually
      // be sent along once we land on griptoradmin's own origin.
      window.location.href = adminUrl('/app');
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Something went wrong. Please try again.');
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="pt-24 pb-24 bg-white">
        <div className="max-w-md mx-auto px-6">
          <SectionHeading
            badge="Welcome back"
            title="Sign in to GRIPTOR"
            subtitle="Access your garage's dashboard." />

          <Reveal delay={0.1}>
            <div className="bg-white rounded-3xl border border-[var(--border)] shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
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
                    Password
                  </label>
                  <input
                    required
                    type="password"
                    placeholder="Your password"
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
                  {submitting ? 'Signing in…' : 'Sign in'}
                </Button>
                <p className="text-center text-sm text-[var(--text-gray)]">
                  Don't have an account?{' '}
                  <Link to="/get-started" className="font-semibold text-[var(--teal)] hover:underline">
                    Start a free trial
                  </Link>
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
