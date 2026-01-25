import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

type ThemePref = 'system' | 'light' | 'dark';
type ThemeResolved = 'light' | 'dark';

const STORAGE_KEY = 'theme';

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function readPref(): ThemePref {
  const stored = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
  return stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'system';
}

function resolve(pref: ThemePref): ThemeResolved {
  if (pref === 'light' || pref === 'dark') return pref;
  const prefersDark =
    typeof window !== 'undefined' &&
    !!window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

function applyResolved(theme: ThemeResolved) {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.dataset.theme = theme;
}

export default function ThemeToggle() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLButtonElement | null>(null);

  const [pref, setPref] = useState<ThemePref>(() => (typeof window === 'undefined' ? 'system' : readPref()));
  const [resolved, setResolved] = useState<ThemeResolved>(() => (typeof window === 'undefined' ? 'light' : resolve(readPref())));

  // magnetic micro-move
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 300, damping: 18, mass: 0.2 });
  const y = useSpring(rawY, { stiffness: 300, damping: 18, mass: 0.2 });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia('(prefers-color-scheme: dark)');

    const sync = () => {
      const p = readPref();
      const r = resolve(p);
      setPref(p);
      setResolved(r);
      applyResolved(r);
    };

    sync();

    const onChange = () => {
      if (readPref() === 'system') sync();
    };

    try {
      mql.addEventListener('change', onChange);
    } catch {
      // Safari
      mql.addListener(onChange);
    }

    return () => {
      try {
        mql.removeEventListener('change', onChange);
      } catch {
        mql.removeListener(onChange);
      }
    };
  }, []);

  const cycle = () => {
    const next: ThemePref = pref === 'system' ? 'light' : pref === 'light' ? 'dark' : 'system';
    localStorage.setItem(STORAGE_KEY, next);
    const r = resolve(next);
    setPref(next);
    setResolved(r);
    applyResolved(r);
  };

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    rawX.set(clamp(dx / r.width, -0.5, 0.5) * 10);
    rawY.set(clamp(dy / r.height, -0.5, 0.5) * 10);
  };

  const onLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  const label =
    pref === 'system'
      ? `Theme: System (${resolved})`
      : `Theme: ${pref.charAt(0).toUpperCase() + pref.slice(1)}`;

  return (
    <motion.button
      ref={ref}
      type="button"
      aria-label={label}
      title={`${label} — click to cycle`}
      onClick={cycle}
      onMouseMove={reduce ? undefined : onMove}
      onMouseLeave={reduce ? undefined : onLeave}
      style={reduce ? undefined : ({ x, y } as any)}
      className="group relative grid h-10 w-10 place-items-center rounded-full border border-slate-200/70 bg-white/70 shadow-hairline backdrop-blur transition hover:bg-white dark:border-slate-800/60 dark:bg-slate-950/50 dark:hover:bg-slate-950"
    >
      {/* subtle ring glow */}
      <span className="pointer-events-none absolute -inset-px rounded-full opacity-0 transition group-hover:opacity-100 ring-1 ring-sky-400/30 dark:ring-sky-300/20" />

      <span className="relative z-10 grid place-items-center">
        {pref === 'system' ? (
          // System / Monitor
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-700 transition dark:text-slate-200">
            <path
              d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v9A2.5 2.5 0 0 1 17.5 17h-11A2.5 2.5 0 0 1 4 14.5v-9Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path d="M9 21h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M12 17v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        ) : resolved === 'dark' ? (
          // Moon
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-700 transition dark:text-slate-200">
            <path
              d="M21 13.2A8.5 8.5 0 0 1 10.8 3 7.5 7.5 0 1 0 21 13.2Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          // Sun
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-700 transition dark:text-slate-200">
            <path
              d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path
              d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        )}
      </span>
    </motion.button>
  );
}
