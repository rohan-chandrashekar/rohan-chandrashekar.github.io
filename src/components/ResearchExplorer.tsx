import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Item = {
  title: string;
  meta?: string[];
  link: string;
  cta: string;
  tags?: string[];
  summary?: string;
};

type Props = {
  items: Item[];
};

function ensurePeriod(s: string) {
  const t = s.trim();
  if (!t) return '';
  return /[.!?]$/.test(t) ? t : `${t}.`;
}

function metaToParagraph(meta?: string[]) {
  if (!meta?.length) return '';
  return meta.map(ensurePeriod).join(' ');
}

function uniq(arr: string[]) {
  return Array.from(new Set(arr));
}

function inferTags(title: string) {
  const t = title.toLowerCase();
  const tags: string[] = [];
  if (t.includes('quantum')) tags.push('Quantum');
  if (t.includes('crypt')) tags.push('Cryptography');
  if (t.includes('nlp')) tags.push('NLP');
  if (t.includes('mental health')) tags.push('Mental Health');
  if (t.includes('federated')) tags.push('Federated Learning');
  if (t.includes('bank') || t.includes('transaction')) tags.push('Finance');
  if (t.includes('anomal')) tags.push('Anomaly Detection');
  if (t.includes('large language') || t.includes('llm')) tags.push('LLM Security');
  if (t.includes('container')) tags.push('Container Security');
  if (t.includes('python')) tags.push('Python');
  if (t.includes('text editor')) tags.push('Tooling');
  return tags.length ? tags : ['Research'];
}

export default function ResearchExplorer({ items }: Props) {
  const reduce = useReducedMotion();
  const [q, setQ] = useState('');
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

  const normalized = useMemo(() => {
    return items.map((it) => {
      const tags = (it.tags?.length ? it.tags : inferTags(it.title)).map((s) => s.trim());
      const search = `${it.title} ${(it.meta || []).join(' ')} ${(it.summary || '')}`.toLowerCase();
      return { ...it, tags, search };
    });
  }, [items]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return normalized.filter((it) => {
      const qOK = query ? it.search.includes(query) : true;
      return qOK;
    });
  }, [normalized, q]);

  return (
    <div>
      <div className="card rounded-3xl p-4 backdrop-blur">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full">
            <input
              ref={inputRef}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search research…"
              className="w-full rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/70 dark:bg-slate-950/40 pl-4 pr-14 py-2.5 text-sm text-slate-900 dark:text-slate-50 shadow-soft backdrop-blur outline-none focus:ring-2 focus:ring-sky-400/50"
            />
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">⌘K</div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5">
        {filtered.map((r, idx) => {
          return (
            <motion.a
              key={r.link}
              href={r.link}
              target="_blank"
              rel="noreferrer"
              className="card block rounded-3xl p-6 transition hover:-translate-y-0.5"              whileHover={reduce ? undefined : { scale: 1.006 }}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{r.cta}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Open →</div>
              </div>

              <div className="mt-2 text-xl font-semibold text-slate-950 dark:text-slate-50">{r.title}</div>

              <div className="mt-3 flex flex-wrap gap-2">
                {r.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/70 dark:bg-slate-950/70 px-2.5 py-1 text-[11px] font-semibold text-slate-800 dark:text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {(r.summary || r.meta?.length) ? (
                <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {r.summary}{r.summary && r.meta?.length ? ' ' : ''}{metaToParagraph(r.meta)}
                </p>
              ) : null}
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
