import React from 'react';
import { motion } from 'framer-motion';
interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  width?: 'fit-content' | '100%';
}
export const Reveal = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  width = '100%'
}: RevealProps) => {
  const directions = {
    up: {
      y: 40,
      x: 0
    },
    down: {
      y: -40,
      x: 0
    },
    left: {
      x: 40,
      y: 0
    },
    right: {
      x: -40,
      y: 0
    },
    none: {
      x: 0,
      y: 0
    }
  };
  return (
    <div
      style={{
        width
      }}
      className={`relative overflow-hidden ${className}`}>
      
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            ...directions[direction]
          },
          visible: {
            opacity: 1,
            x: 0,
            y: 0
          }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: '-50px'
        }}
        transition={{
          duration: 0.7,
          delay,
          ease: [0.25, 0.1, 0.25, 1]
        }}>
        
        {children}
      </motion.div>
    </div>);

};