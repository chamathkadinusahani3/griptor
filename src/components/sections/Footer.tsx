import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo';
import {
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin } from
'lucide-react';
const PRODUCT_LINKS = [
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
}];

const COMPANY_LINKS = [
{
  label: 'About Us',
  to: '/about'
},
{
  label: 'Careers',
  to: '/careers'
},
{
  label: 'Blog',
  to: '/blog'
},
{
  label: 'Contact',
  to: '/contact'
}];

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-[var(--border)] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-6 text-[var(--text-gray)] leading-relaxed max-w-sm">
              GRIPTOR TECH PVT LTD provides world-class cloud software solutions
              for the automotive industry, empowering businesses to automate
              workflows and scale efficiently.
            </p>
            <div className="flex gap-4 mt-8">
              {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) =>
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-[var(--soft-gray)] flex items-center justify-center text-[var(--text-gray)] hover:bg-[var(--teal)] hover:text-white transition-colors">
                
                  <Icon className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-[var(--navy)] mb-6">Products</h4>
            <ul className="space-y-4">
              {PRODUCT_LINKS.map((link, i) =>
              <li key={i}>
                  <Link
                  to={link.to}
                  className="text-[var(--text-gray)] hover:text-[var(--teal)] transition-colors">
                  
                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[var(--navy)] mb-6">Company</h4>
            <ul className="space-y-4">
              {COMPANY_LINKS.map((link, i) =>
              <li key={i}>
                  <Link
                  to={link.to}
                  className="text-[var(--text-gray)] hover:text-[var(--teal)] transition-colors">
                  
                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[var(--navy)] mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[var(--text-gray)]">
                <Mail className="w-5 h-5 text-[var(--teal)] shrink-0" />
                <span>hello@griptortech.com</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--text-gray)]">
                <Phone className="w-5 h-5 text-[var(--teal)] shrink-0" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--text-gray)]">
                <MapPin className="w-5 h-5 text-[var(--teal)] shrink-0" />
                <span>123 Innovation Drive, Tech District, CA 94043</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter & Copyright */}
        <div className="border-t border-[var(--border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[var(--text-gray)] text-sm">
            © {new Date().getFullYear()} GRIPTOR TECH PVT LTD. All rights
            reserved.
          </div>

          <div className="flex items-center gap-4 text-sm text-[var(--text-gray)]">
            <a href="#" className="hover:text-[var(--teal)] transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-[var(--teal)] transition-colors">
              Terms of Service
            </a>
            <span>•</span>
            <a href="#" className="hover:text-[var(--teal)] transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>);

};