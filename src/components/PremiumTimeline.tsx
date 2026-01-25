import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';

type TimelineItem = {
  title: string;
  subtitle?: string;
  logo?: string | null;
  date: string;
  bullets?: string[];
  hideLogo?: boolean;
};

type Props = {
  items: TimelineItem[];
  compact?: boolean;
};

export default function PremiumTimeline({ items, compact = false }: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'end 0.25'],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.25,
  });

  return (
    <div ref={ref} className="relative">
      {/* base line */}
      <div className="absolute left-[13px] top-0 h-full w-px bg-slate-200/80" />

      {/* animated progress line */}
      <motion.div
        className="absolute left-[13px] top-0 h-full w-px origin-top bg-gradient-to-b from-slate-900 dark:from-slate-100 via-slate-900 to-transparent"
        style={reduce ? undefined : ({ scaleY: progress } as any)}
      />

      <div className={compact ? 'space-y-4 pl-10' : 'space-y-6 pl-10'}>
        {items.map((it, idx) => (
          <motion.div
            key={`${it.title}-${idx}`}
            className="relative"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: idx * 0.03 }}
          >
            {/* dot */}
            <div className="absolute left-[-30px] top-[10px]">
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-sky-200/70 via-violet-200/50 to-emerald-200/50 blur" />
                <div className="h-3 w-3 rounded-full bg-slate-900 dark:bg-slate-100 ring-4 ring-white" />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800/70 bg-white dark:bg-slate-950/60 dark:bg-slate-950/60 p-4 shadow-[0_18px_45px_rgba(16,24,40,0.06)] backdrop-blur">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex items-start gap-3">
  {it.hideLogo ? null : (
  <div className="mt-0.5 h-10 w-10 shrink-0 overflow-hidden rounded-full ring-1 ring-slate-900/10 dark:ring-white/10 bg-white/70 dark:bg-white/10 backdrop-blur">
    {it.logo ? (
      <img
        src={it.logo}
        alt={`${it.title} logo`}
        className="h-10 w-10 rounded-xl object-contain bg-white/5 ring-1 ring-white/10 p-2"
        loading="lazy"
      />
    ) : (
      <div className="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-xs font-semibold text-slate-700 dark:text-slate-200">
        {(it.title || "")
          .split(" ")
          .filter(Boolean)
          .slice(0, 2)
          .map((w) => w[0]?.toUpperCase())
          .join("")}
      </div>
    )}
  </div>
)}

  <div className="min-w-0">
    <div className="text-sm font-semibold text-slate-900 dark:text-slate-50 leading-snug">
      {it.title}
    </div>
    {it.subtitle && (
      <div className="mt-1 text-sm text-slate-700 dark:text-slate-300 whitespace-normal break-words">
        {it.subtitle}
      </div>
    )}
  </div>
</div>

                <div className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">{it.date}</div>
              </div>

              {it.bullets?.length ? (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-300">
                  {it.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
