import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let ticking = false;

    const compute = () => {
      ticking = false;
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      setShow(y > 600);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      if (reduce) compute();
      else requestAnimationFrame(compute);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    compute();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = () => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      window.scrollTo(0, 0);
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={go}
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-900 shadow-[0_18px_45px_rgba(16,24,40,0.12)] backdrop-blur hover:bg-white dark:border-slate-800/60 dark:bg-slate-950/70 dark:text-slate-100 dark:hover:bg-slate-950"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 19V5" />
            <path d="m5 12 7-7 7 7" />
          </svg>
          Top
        </motion.button>
      )}
    </AnimatePresence>
  );
}
