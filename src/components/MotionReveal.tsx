import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { motionTokens, viewportOnce } from '../lib/motion';

type Props = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export default function MotionReveal({ children, delay = 0, y = 14, className }: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: motionTokens.duration.base, ease: motionTokens.ease, delay }}
    >
      {children}
    </motion.div>
  );
}
