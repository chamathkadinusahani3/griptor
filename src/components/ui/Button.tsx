import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
  { variant = 'primary', size = 'md', children, className, icon, ...props },
  ref) =>
  {
    const baseStyles =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 ease-out active:scale-95';
    const variants = {
      primary:
      'brand-gradient text-white shadow-lg shadow-[var(--teal)]/25 hover:shadow-[var(--teal)]/40 hover:-translate-y-0.5',
      outline:
      'border-2 border-[var(--border)] text-[var(--navy)] hover:border-[var(--teal)] hover:text-[var(--teal)] hover:bg-[var(--light-blue)]/50',
      ghost:
      'text-[var(--text-gray)] hover:text-[var(--navy)] hover:bg-[var(--soft-gray)]'
    };
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };
    return (
      <motion.button
        ref={ref}
        whileHover={{
          scale: variant === 'ghost' ? 1 : 1.02
        }}
        whileTap={{
          scale: 0.98
        }}
        className={twMerge(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}>
        
        {children}
        {icon && <span className="ml-1">{icon}</span>}
      </motion.button>);

  }
);
Button.displayName = 'Button';