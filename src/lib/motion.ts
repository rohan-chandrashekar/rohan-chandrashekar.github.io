export const motionTokens = {
  ease: [0.16, 1, 0.3, 1] as const, // “premium” springy ease
  duration: {
    fast: 0.28,
    base: 0.55,
    slow: 0.85,
    hero: 0.95,
  },
  stagger: {
    base: 0.06,
  },
};

export const fadeUp = (opts?: { y?: number; delay?: number }) => {
  const y = opts?.y ?? 14;
  const delay = opts?.delay ?? 0;
  return {
    initial: { opacity: 0, y },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: motionTokens.duration.base,
        ease: motionTokens.ease,
        delay,
      },
    },
  };
};

export const viewportOnce = {
  once: true,
  amount: 0.25,
} as const;
