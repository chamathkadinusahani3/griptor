import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Button } from '../ui/Button';
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Users,
  Calendar,
  Settings } from
'lucide-react';
import { Reveal } from '../ui/Reveal';
export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = {
    damping: 25,
    stiffness: 150
  };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 25;
      const y = (e.clientY - top - height / 2) / 25;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);
  return (
    <section
      id="home"
      ref={containerRef}
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white min-h-screen flex items-center">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--light-blue)] blur-[120px] opacity-70" />
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[50%] rounded-full bg-[var(--cyan)] blur-[150px] opacity-20" />
        <div className="absolute bottom-[-10%] left-[20%] w-[30%] h-[30%] rounded-full bg-[var(--royal)] blur-[130px] opacity-10" />

        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0RDRUFGMCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50 mask-image:linear-gradient(to_bottom,white,transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="max-w-2xl">
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--light-blue)] border border-[var(--border)] text-[var(--teal)] text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--teal)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--teal)]"></span>
              </span>
              GRIPTOR OS 2.0 is now live
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-[var(--navy)] leading-[1.1] mb-6">
              Powering the Future of Automotive Businesses with{' '}
              <span className="brand-gradient-text">Intelligent Software</span>
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-lg lg:text-xl text-[var(--text-gray)] mb-8 leading-relaxed">
              The complete cloud-based ecosystem for garages, tyre shops,
              dealerships, and fleets. Automate operations, manage inventory,
              improve CRM, and optimize bookings from one unified platform.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto"
                  icon={<ArrowRight className="w-5 h-5" />}>
                  
                  Book Live Demo
                </Button>
              </Link>
              <Link to="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto">
                  
                  Explore Products
                </Button>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[var(--border)]">
              {[
              {
                label: 'Business Clients',
                value: '100+'
              },
              {
                label: 'Cloud Uptime',
                value: '99.9%'
              },
              {
                label: 'Support',
                value: '24/7'
              },
              {
                label: 'Vehicles Managed',
                value: '50,000+'
              }].
              map((stat, i) =>
              <div key={i}>
                  <div className="text-2xl font-bold text-[var(--navy)] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-[var(--text-gray)] uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>

        {/* Right Content - Floating Ecosystem */}
        <div className="relative h-[600px] hidden lg:block perspective-1000">
          <motion.div
            className="absolute inset-0 w-full h-full"
            style={{
              x: useTransform(springX, (x) => x * -1),
              y: useTransform(springY, (y) => y * -1)
            }}>
            
            {/* Main Dashboard Mockup */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] bg-white rounded-2xl shadow-2xl shadow-[var(--navy)]/10 border border-[var(--border)] overflow-hidden z-20"
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 20
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.2
              }}>
              
              {/* Fake Header */}
              <div className="h-12 border-b border-[var(--border)] bg-[var(--soft-gray)] flex items-center px-4 gap-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="h-6 flex-1 bg-white rounded-md border border-[var(--border)] mx-4" />
              </div>
              {/* Fake Content */}
              <div className="p-6 flex gap-6">
                <div className="w-48 space-y-4">
                  <div className="h-24 rounded-xl brand-gradient p-4 text-white flex flex-col justify-between">
                    <span className="text-xs opacity-80">Total Revenue</span>
                    <span className="text-2xl font-bold">$124,500</span>
                  </div>
                  <div className="h-24 rounded-xl bg-[var(--light-blue)] p-4 flex flex-col justify-between border border-[var(--border)]">
                    <span className="text-xs text-[var(--teal)] font-semibold">
                      Active Jobs
                    </span>
                    <span className="text-2xl font-bold text-[var(--navy)]">
                      42
                    </span>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="h-8 w-1/2 bg-[var(--soft-gray)] rounded-md" />
                  <div className="h-32 w-full bg-[var(--soft-gray)] rounded-xl relative overflow-hidden">
                    {/* Fake Chart */}
                    <svg
                      className="absolute bottom-0 w-full h-full"
                      preserveAspectRatio="none"
                      viewBox="0 0 100 100">
                      
                      <path
                        d="M0,100 L0,60 Q25,40 50,70 T100,30 L100,100 Z"
                        fill="var(--light-blue)"
                        opacity="0.5" />
                      
                      <path
                        d="M0,60 Q25,40 50,70 T100,30"
                        fill="none"
                        stroke="var(--teal)"
                        strokeWidth="3" />
                      
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-[10%] right-[5%] w-48 bg-white/90 backdrop-blur-md rounded-xl shadow-xl border border-white/50 p-4 z-30 animate-float"
              style={{
                x: useTransform(springX, (x) => x * 1.5),
                y: useTransform(springY, (y) => y * 1.5)
              }}>
              
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[var(--teal)]/10 flex items-center justify-center text-[var(--teal)]">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[var(--navy)]">
                    New Booking
                  </div>
                  <div className="text-[10px] text-[var(--text-gray)]">
                    Today, 2:30 PM
                  </div>
                </div>
              </div>
              <div className="h-1.5 w-full bg-[var(--soft-gray)] rounded-full overflow-hidden">
                <div className="h-full w-2/3 brand-gradient rounded-full" />
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-[15%] left-[0%] w-56 bg-white/90 backdrop-blur-md rounded-xl shadow-xl border border-white/50 p-4 z-30 animate-float-slow"
              style={{
                x: useTransform(springX, (x) => x * -1.2),
                y: useTransform(springY, (y) => y * -1.2)
              }}>
              
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[var(--royal)]/10 flex items-center justify-center text-[var(--royal)]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[var(--navy)]">
                    Vehicle Inspected
                  </div>
                  <div className="text-[10px] text-[var(--text-gray)]">
                    Toyota Camry - Passed
                  </div>
                </div>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) =>
                <div
                  key={i}
                  className="h-1 flex-1 bg-[var(--teal)] rounded-full" />

                )}
              </div>
            </motion.div>

            <motion.div
              className="absolute top-[25%] left-[5%] w-16 h-16 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 flex items-center justify-center z-10 animate-float"
              style={{
                x: useTransform(springX, (x) => x * -0.5),
                y: useTransform(springY, (y) => y * -0.5)
              }}>
              
              <Settings className="w-6 h-6 text-[var(--cyan)] animate-[spin_10s_linear_infinite]" />
            </motion.div>

            {/* Connecting Lines (SVG) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(30, 164, 182, 0.3))'
              }}>
              
              <motion.path
                d="M 150 200 Q 250 150 350 250"
                fill="none"
                stroke="url(#grad1)"
                strokeWidth="2"
                strokeDasharray="5 5"
                initial={{
                  pathLength: 0,
                  opacity: 0
                }}
                animate={{
                  pathLength: 1,
                  opacity: 0.5
                }}
                transition={{
                  duration: 2,
                  delay: 1
                }} />
              
              <motion.path
                d="M 350 350 Q 250 450 150 400"
                fill="none"
                stroke="url(#grad1)"
                strokeWidth="2"
                strokeDasharray="5 5"
                initial={{
                  pathLength: 0,
                  opacity: 0
                }}
                animate={{
                  pathLength: 1,
                  opacity: 0.5
                }}
                transition={{
                  duration: 2,
                  delay: 1.5
                }} />
              
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--teal)" />
                  <stop offset="100%" stopColor="var(--royal)" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>);

};