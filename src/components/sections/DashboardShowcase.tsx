import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3,
  Users,
  Package,
  Calendar,
  DollarSign,
  PieChart,
  FileText,
  Wrench } from
'lucide-react';
const TABS = [
{
  id: 'garage',
  label: 'Garage',
  icon: Wrench
},
{
  id: 'crm',
  label: 'CRM',
  icon: Users
},
{
  id: 'inventory',
  label: 'Inventory',
  icon: Package
},
{
  id: 'bookings',
  label: 'Bookings',
  icon: Calendar
},
{
  id: 'sales',
  label: 'Sales',
  icon: DollarSign
},
{
  id: 'reports',
  label: 'Reports',
  icon: PieChart
},
{
  id: 'invoices',
  label: 'Invoices',
  icon: FileText
},
{
  id: 'technicians',
  label: 'Technicians',
  icon: Wrench
}];

export const DashboardShowcase = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  return (
    <section className="py-24 bg-[var(--soft-gray)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Interactive Preview"
          title="Experience the GRIPTOR OS"
          subtitle="Switch between modules to see how our unified platform handles every aspect of your business." />
        

        {/* Tabs */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {TABS.map((tab) =>
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === tab.id ? 'brand-gradient text-white shadow-lg shadow-[var(--teal)]/20' : 'bg-white text-[var(--text-gray)] border border-[var(--border)] hover:border-[var(--teal)] hover:text-[var(--teal)]'}`}>
              
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            )}
          </div>
        </Reveal>

        {/* Dashboard Mockup Container */}
        <Reveal delay={0.2}>
          <div className="relative w-full max-w-5xl mx-auto aspect-[16/10] md:aspect-[16/9] bg-white rounded-2xl shadow-2xl shadow-[var(--navy)]/10 border border-[var(--border)] overflow-hidden flex flex-col">
            {/* Fake Browser/App Header */}
            <div className="h-12 border-b border-[var(--border)] bg-[var(--soft-gray)] flex items-center px-4 justify-between">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--light-blue)]" />
                <div className="w-8 h-8 rounded-full bg-[var(--navy)]" />
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 relative bg-[var(--soft-gray)]/30 p-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{
                    opacity: 0,
                    y: 10,
                    scale: 0.98
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                    scale: 0.98
                  }}
                  transition={{
                    duration: 0.3
                  }}
                  className="w-full h-full flex flex-col gap-6">
                  
                  {/* Dynamic Content based on tab */}
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-[var(--navy)] capitalize">
                      {activeTab} Overview
                    </h3>
                    <div className="h-8 w-32 bg-white rounded-md border border-[var(--border)]" />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) =>
                    <div
                      key={i}
                      className="bg-white p-4 rounded-xl border border-[var(--border)] shadow-sm">
                      
                        <div className="h-4 w-24 bg-[var(--soft-gray)] rounded mb-3" />
                        <div className="h-8 w-16 bg-[var(--light-blue)] rounded" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 flex gap-6">
                    <div className="flex-[2] bg-white rounded-xl border border-[var(--border)] shadow-sm p-4 relative overflow-hidden">
                      <div className="h-4 w-32 bg-[var(--soft-gray)] rounded mb-6" />
                      {/* Fake Chart Lines */}
                      <div className="absolute bottom-0 left-0 w-full h-[70%] flex items-end justify-between px-4 pb-4 gap-2">
                        {[40, 70, 45, 90, 65, 85, 100, 60, 75, 50].map(
                          (h, i) =>
                          <motion.div
                            key={i}
                            initial={{
                              height: 0
                            }}
                            animate={{
                              height: `${h}%`
                            }}
                            transition={{
                              duration: 0.5,
                              delay: i * 0.05
                            }}
                            className="w-full bg-gradient-to-t from-[var(--teal)] to-[var(--cyan)] rounded-t-sm opacity-80" />


                        )}
                      </div>
                    </div>
                    <div className="flex-1 bg-white rounded-xl border border-[var(--border)] shadow-sm p-4 flex flex-col gap-4">
                      <div className="h-4 w-24 bg-[var(--soft-gray)] rounded" />
                      {[1, 2, 3, 4].map((i) =>
                      <div key={i} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[var(--light-blue)]" />
                          <div className="flex-1">
                            <div className="h-3 w-full bg-[var(--soft-gray)] rounded mb-1" />
                            <div className="h-2 w-2/3 bg-[var(--soft-gray)] rounded" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

};