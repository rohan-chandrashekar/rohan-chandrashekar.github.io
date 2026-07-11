import React from 'react';
import { motion } from 'framer-motion';
import { useReveal } from '../lib/useReveal';

type Props = {
  title: string;
  subtitle?: string;
  highlights: string[];
};

function HighlightItem({ text, delay }: { text: string; delay: number }) {
  const { ref, hidden } = useReveal<HTMLLIElement>();
  return (
    <motion.li
      ref={ref}
      initial={false}
      animate={hidden ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1], delay }}
      className="group relative mb-5 last:mb-0"
    >
      <span className="absolute -left-[27px] top-1.5 grid h-3.5 w-3.5 place-items-center rounded-full bg-white shadow-hairline dark:bg-slate-950">
        <span className="h-1.5 w-1.5 rounded-full bg-sky-500/80 group-hover:bg-violet-500/80 transition" />
      </span>

      <div className="rounded-2xl border border-slate-200/70 bg-white/60 px-4 py-3 shadow-[0_18px_45px_rgba(16,24,40,0.06)] backdrop-blur transition hover:bg-white dark:border-slate-800/60 dark:bg-slate-950/40 dark:hover:bg-slate-950/60">
        <div className="text-sm leading-relaxed text-slate-800 dark:text-slate-200">{text}</div>
      </div>
    </motion.li>
  );
}

export default function HomeHighlights({ title, subtitle, highlights }: Props) {
  return (
    <section className="mt-10">
      <div className="card rounded-4xl p-7 sm:p-9">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-2xl">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{subtitle}</p>
            ) : null}
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400/70 shadow-[0_0_0_6px_rgba(52,211,153,0.10)]" />
            <span>Milestones</span>
          </div>
        </div>

        <div className="mt-6">
          <ol className="relative border-l border-slate-200/80 pl-5 dark:border-slate-800/70">
            {highlights.map((h, i) => (
              <HighlightItem key={i} text={h} delay={i * 0.04} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
