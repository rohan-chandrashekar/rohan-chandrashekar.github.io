import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import StatsCounter from './StatsCounter';
import { motionTokens } from '../lib/motion';

type Stat = { value: number; suffix?: string; label: string; sublabel?: string };
type Proof = {
  stats: Stat[];
  badges: { title: string; detail?: string }[];
  logos: { name: string; note?: string; icon?: string }[];
};

export default function ProofSection({ proof }: { proof: Proof }) {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: reduce ? undefined : { staggerChildren: motionTokens.stagger.base },
    },
  };

  const item = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: motionTokens.duration.base, ease: motionTokens.ease },
    },
  };

  return (
    <section className="mt-10 relative z-10">
      <div className="card rounded-4xl p-7 sm:p-9">
        <div className="flex items-end justify-between gap-4">
          <div>
<h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
              Track record
            </h2>
            <p className="mt-2 max-w-2xl text-slate-700 dark:text-slate-300">
              A quick, skimmable view of awards, certifications, and impact. 
            </p>
          </div>

          <div className="hidden md:block">
            <div className="accent-bar"></div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {proof.stats.map((s) => (
            <StatsCounter key={s.label} {...s} />
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Awards & Credentials
            </div>

            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {proof.badges.map((b) => (
                <motion.div key={b.title} variants={item} className="mini-badge" data-spotlight>
                  <div className="font-medium text-slate-950 dark:text-slate-50">{b.title}</div>
                  {b.detail ? (
                    <div className="mt-1 text-xs text-slate-600 dark:text-slate-400">{b.detail}</div>
                  ) : null}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Platforms & places
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {proof.logos.map((l) => (
  <motion.div key={l.name} variants={item} className="logo-pill" data-spotlight>
    <div className="flex items-center gap-2">
      {l.icon ? (
        <span className="h-8 w-8 sm:h-9 sm:w-9 shrink-0 rounded-md bg-white/70 dark:bg-white/10 ring-1 ring-slate-900/10 dark:ring-white/10 grid place-items-center overflow-hidden">
          <img src={l.icon} alt={l.name} className="h-5 w-5 sm:h-6 sm:w-6 object-contain" loading="lazy" />
        </span>
      ) : (
        <span className="h-8 w-8 sm:h-9 sm:w-9 shrink-0 rounded-md bg-slate-900/5 dark:bg-white/10 ring-1 ring-slate-900/10 dark:ring-white/10 grid place-items-center text-[11px] font-semibold text-slate-700 dark:text-slate-200">
          {l.name
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((w) => w[0])
            .join("")
            .toUpperCase()}
        </span>
      )}

      <div className="min-w-0">
        <div className="text-[13px] font-semibold tracking-tight leading-tight text-slate-900 dark:text-slate-100">
          {l.name}
        </div>
        {l.note ? <div className="text-[11px] opacity-70 leading-tight">{l.note}</div> : null}
      </div>
    </div>
  </motion.div>
))}
            </div>

            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
