import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

/**
 * Robust reveal-on-scroll state.
 *
 * Content is visible by default (SSR markup and no-JS clients see everything).
 * After hydration, elements not yet in view report `hidden: true` so they can
 * animate in on scroll. A safety timer force-reveals everything in case the
 * in-view trigger never fires (older browsers, embedded webviews, etc.).
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(opts?: {
  amount?: number;
  margin?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<T | null>(null);
  const inView = useInView(ref, {
    once: true,
    amount: opts?.amount ?? 0.2,
    margin: (opts?.margin ?? '0px 0px -10% 0px') as any,
  });

  const [mounted, setMounted] = useState(false);
  const [forceVisible, setForceVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setForceVisible(true), 2500);
    return () => clearTimeout(t);
  }, []);

  const hidden = mounted && !reduce && !inView && !forceVisible;
  return { ref, hidden, reduce };
}
