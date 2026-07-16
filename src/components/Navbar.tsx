import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Logo } from './ui/Logo';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const NAV_LINKS = [
{
  label: 'Home',
  to: '/'
},
{
  label: 'Solutions',
  to: '/solutions'
},
{
  label: 'Products',
  to: '/products'
},
{
  label: 'Industries',
  to: '/industries'
},
{
  label: 'Pricing',
  to: '/pricing'
},
{
  label: 'About',
  to: '/about'
},
{
  label: 'Blog',
  to: '/blog'
},
{
  label: 'Contact',
  to: '/contact'
}];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-white/80 backdrop-blur-lg border-[var(--border)] shadow-sm py-3' : 'bg-transparent border-transparent py-5'}`}>
      
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" onClick={() => setMobileMenuOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-7">
          {NAV_LINKS.map((link) =>
          <NavLink
            key={link.label}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
            `text-sm font-semibold transition-colors ${isActive ? 'text-[var(--royal)]' : 'text-[var(--text-gray)] hover:text-[var(--royal)]'}`
            }>
            
              {link.label}
            </NavLink>
          )}
        </nav>

        <div className="hidden xl:flex items-center gap-4">
          <Link to="/contact">
            <Button variant="outline" size="sm">
              Free Trial
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="primary" size="sm">
              Book Demo
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="xl:hidden p-2 text-[var(--navy)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu">
          
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="xl:hidden bg-white border-b border-[var(--border)] overflow-hidden">
          
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) =>
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
              `text-base font-semibold py-3 border-b border-[var(--soft-gray)] ${isActive ? 'text-[var(--royal)]' : 'text-[var(--navy)]'}`
              }>
              
                  {link.label}
                </NavLink>
            )}
              <div className="flex flex-col gap-3 pt-4">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Free Trial
                  </Button>
                </Link>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="primary" className="w-full">
                    Book Demo
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

};