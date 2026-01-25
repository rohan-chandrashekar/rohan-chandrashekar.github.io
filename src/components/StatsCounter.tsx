import React, { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { motionTokens } from '../lib/motion';

type Props = {
  value: number;
  suffix?: string;
  label: string;
  sublabel?: string;
};

export default function StatsCounter({ value, suffix = '', label, sublabel }: Props) {
  const reduce = useReducedMotion();
  const [v, setV] = useState(reduce ? value : 0);

  const formatter = useMemo(() => new Intl.NumberFormat(undefined), []);

  useEffect(() => {
    if (reduce) return;
    let raf = 0;
    const duration = 900; // ms
    const start = performance.now();

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      // easeOutQuint
      const eased = 1 - Math.pow(1 - p, 5);
      setV(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce, value]);

  return (
    <motion.div
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: motionTokens.duration.fast, ease: motionTokens.ease }}
      className="stat-tile"
      data-spotlight
    >
      <div className="text-3xl sm:text-4xl font-display font-semibold tracking-tight text-slate-950 dark:text-slate-50">
        {formatter.format(v)}
        <span className="opacity-80">{suffix}</span>
      </div>
      <div className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">{label}</div>
      {sublabel ? (
        <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{sublabel}</div>
      ) : null}
    </motion.div>
  );
}
