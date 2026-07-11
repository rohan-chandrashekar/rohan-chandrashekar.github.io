import React from 'react';
import { motion } from 'framer-motion';
import { motionTokens } from '../lib/motion';
import { useReveal } from '../lib/useReveal';

type Props = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

// Content is visible by default (SSR output and no-JS clients see everything).
// After hydration, elements not yet in view are hidden and reveal on scroll.
export default function MotionReveal({ children, delay = 0, y = 14, className }: Props) {
  const { ref, hidden } = useReveal();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={hidden ? { opacity: 0, y } : { opacity: 1, y: 0 }}
      transition={{ duration: motionTokens.duration.base, ease: motionTokens.ease, delay }}
    >
      {children}
    </motion.div>
  );
}
