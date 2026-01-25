import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { motionTokens } from '../lib/motion';

type Props = {
  text: string;
  className?: string;
};

export default function BrandBadges({ text, className }: Props) {
  const reduce = useReducedMotion();
  const parts = text
    .split('·')
    .map((s) => s.trim())
    .filter(Boolean);

  if (!parts.length) return null;

  const container = {
    hidden: {},
    show: {
      transition: reduce
        ? undefined
        : {
            staggerChildren: motionTokens.stagger.base,
          },
    },
  };

  const item = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: motionTokens.duration.fast,
        ease: motionTokens.ease,
      },
    },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show" className={className}>
      <div className="flex flex-wrap gap-2">
        {parts.map((p) => (
          <motion.span
            key={p}
            variants={item}
            className="inline-flex items-center rounded-full border border-slate-200/70 dark:border-slate-800/70 bg-white/70 dark:bg-slate-950/50 px-3 py-1 text-xs font-medium text-slate-800 dark:text-slate-200 shadow-[0_12px_30px_rgba(16,24,40,0.06)] backdrop-blur"
          >
            {p}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
