import React from 'react';
import { Reveal } from './Reveal';
import { twMerge } from 'tailwind-merge';
interface SectionHeadingProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  badge?: string;
  align?: 'left' | 'center';
  className?: string;
  light?: boolean;
}
export const SectionHeading = ({
  title,
  subtitle,
  badge,
  align = 'center',
  className,
  light = false
}: SectionHeadingProps) => {
  return (
    <div
      className={twMerge(
        `flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'} max-w-3xl mx-auto mb-16`,
        className
      )}>
      
      {badge &&
      <Reveal delay={0.1}>
          <div
          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mb-6 ${light ? 'bg-white/10 text-white border border-white/20' : 'bg-[var(--light-blue)] text-[var(--teal)] border border-[var(--border)]'}`}>
          
            {badge}
          </div>
        </Reveal>
      }

      <Reveal delay={0.2}>
        <h2
          className={`text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight ${light ? 'text-white' : 'text-[var(--navy)]'}`}>
          
          {title}
        </h2>
      </Reveal>

      {subtitle &&
      <Reveal delay={0.3}>
          <p
          className={`text-lg md:text-xl ${light ? 'text-white/80' : 'text-[var(--text-gray)]'} leading-relaxed`}>
          
            {subtitle}
          </p>
        </Reveal>
      }
    </div>);

};