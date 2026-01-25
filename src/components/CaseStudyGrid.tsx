import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { motionTokens } from '../lib/motion';

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  when?: string;
  tags: string[];
  highlight?: string;
  cover?: { src: string; alt: string };
};

function uniq<T>(arr: T[]) {
  return Array.from(new Set(arr));
}

function timelineOf(when?: string) {
  if (!when) return '';
  // "Jan 2023 – Sep 2024 · PES University" -> "Jan 2023 – Sep 2024"
  return when.split('·')[0].trim();
}

export default function CaseStudyGrid({ studies }: { studies: CaseStudy[] }) {
  const reduce = useReducedMotion();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const key = (e.key || '').toLowerCase();
      if ((e.metaKey || e.ctrlKey) && key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.select();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);


  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return studies.filter((s) => {
      const hay = (s.title + ' ' + s.subtitle + ' ' + s.tags.join(' ') + ' ' + (s.highlight ?? '')).toLowerCase();
      const matchesQ = !q || hay.includes(q);
      return matchesQ;
    });
  }, [studies, query]);

  const grid = {
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
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: motionTokens.duration.base, ease: motionTokens.ease },
    },
  };

  return (
    <section className="mt-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full">
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects…"
            className="w-full rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/70 dark:bg-slate-950/40 pl-4 pr-14 py-2.5 text-sm text-slate-900 dark:text-slate-50 shadow-soft backdrop-blur outline-none focus:ring-2 focus:ring-sky-400/50"
          />
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">⌘K</div>
        </div>
      </div>

      <motion.div variants={grid} initial="hidden" animate="show" className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        {filtered.map((s) => (
          <motion.a
            key={s.slug}
            variants={item}
            href={`/projects/${s.slug}/`}
            className="card group relative overflow-hidden rounded-3xl p-6 focus:outline-none focus:ring-2 focus:ring-sky-400/50"
            data-spotlight
          >
            <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
              <div className="absolute -inset-24 luxe-gradient blur-3xl opacity-20" />
            </div>

            <div className="relative z-10">
{s.cover ? (
  <div className="mb-4 overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5">
    <div className="aspect-[1200/630] w-full">
      <img
        src={s.cover.src}
        alt={s.cover.alt}
        className="h-full w-full object-contain"
        loading="lazy"
      />
    </div>
  </div>
) : null}

              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {timelineOf(s.when)}
                  </div>
                  <div className="mt-2 text-xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
                    {s.title}
                  </div>
                  <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{s.subtitle}</p>
                </div>

                
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-slate-200/70 dark:border-slate-800/70 bg-white/70 dark:bg-slate-950/40 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {s.highlight ? (
                <div className="mt-4 rounded-2xl border border-slate-200/60 dark:border-slate-800/70 bg-white/50 dark:bg-slate-950/30 p-3 text-xs text-slate-700 dark:text-slate-300">
                  <span className="font-semibold">Impact:</span> {s.highlight}
                </div>
              ) : null}

              <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-slate-50">
                <span>Explore project further</span>
                <span className="transition group-hover:translate-x-1">→</span>
              </div>
            </div>
          </motion.a>
        ))}

        {!filtered.length ? (
          <div className="col-span-full text-sm text-slate-600 dark:text-slate-400">
            No results. Try a different search.
          </div>
        ) : null}
      </motion.div>
    </section>
  );
}
