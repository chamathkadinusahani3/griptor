import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { motion } from 'framer-motion';
import {
  Wrench,
  Users,
  Package,
  CreditCard,
  Calendar,
  Truck,
  Smartphone,
  ClipboardCheck,
  Calculator,
  BarChart,
  Cloud,
  Settings } from
'lucide-react';
const SOLUTIONS = [
{
  icon: Wrench,
  title: 'Garage Management',
  desc: 'End-to-end workflow automation for modern repair shops.',
  slug: 'garage-management-system'
},
{
  icon: Users,
  title: 'CRM',
  desc: 'Build lasting customer relationships and track interactions.',
  slug: 'customer-crm'
},
{
  icon: Package,
  title: 'Inventory Management',
  desc: 'Real-time stock tracking, low alerts, and supplier management.',
  slug: 'inventory-pos'
},
{
  icon: CreditCard,
  title: 'POS System',
  desc: 'Fast, secure checkout with integrated payment processing.',
  slug: 'inventory-pos'
},
{
  icon: Settings,
  title: 'Workshop Management',
  desc: 'Optimize bay utilization and technician scheduling.',
  slug: 'workshop-management'
},
{
  icon: Calendar,
  title: 'Booking System',
  desc: 'Online appointment scheduling with automated reminders.',
  slug: 'booking-system'
},
{
  icon: Truck,
  title: 'Fleet Management',
  desc: 'Comprehensive tools for managing large vehicle fleets.',
  slug: 'fleet-management'
},
{
  icon: Smartphone,
  title: 'Customer Mobile App',
  desc: 'White-labeled app for your customers to track services.',
  slug: 'customer-mobile-app'
},
{
  icon: ClipboardCheck,
  title: 'Vehicle Inspection',
  desc: 'Digital multi-point inspection forms with photo uploads.',
  slug: 'vehicle-inspection'
},
{
  icon: Calculator,
  title: 'Accounting',
  desc: 'Integrated financial tracking, invoicing, and tax reporting.',
  slug: 'accounting'
},
{
  icon: BarChart,
  title: 'Reports & Analytics',
  desc: 'Deep insights into revenue, performance, and growth.',
  slug: 'reports-analytics'
},
{
  icon: Cloud,
  title: 'Cloud Hosting',
  desc: 'Secure, 99.9% uptime enterprise-grade cloud infrastructure.',
  slug: 'cloud-hosting'
}];

export const Solutions = () => {
  return (
    <section id="solutions" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Our Solutions"
          title="Complete Software Solutions for Every Automotive Business"
          subtitle="A unified suite of tools designed specifically for the unique challenges of the automotive industry." />
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SOLUTIONS.map((solution, i) =>
          <Reveal key={i} delay={i * 0.05}>
              <Link to={`/products/${solution.slug}`} className="block h-full">
                <motion.div
                whileHover={{
                  y: -8
                }}
                className="group relative h-full p-6 bg-white rounded-2xl border border-[var(--border)] shadow-sm hover:shadow-xl hover:shadow-[var(--teal)]/10 transition-all duration-300 overflow-hidden">

                  {/* Hover Gradient Border Effect */}
                  <div
                  className="absolute inset-0 bg-gradient-to-br from-[var(--teal)] to-[var(--royal)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    padding: '2px'
                  }}>

                    <div className="w-full h-full bg-white rounded-2xl" />
                  </div>

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-[var(--light-blue)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <solution.icon className="w-6 h-6 text-[var(--teal)]" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--navy)] mb-3 group-hover:text-[var(--royal)] transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-[var(--text-gray)] text-sm leading-relaxed">
                      {solution.desc}
                    </p>
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

};