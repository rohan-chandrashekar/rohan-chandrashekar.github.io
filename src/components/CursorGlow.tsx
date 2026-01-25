import React, { useEffect } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const reduce = useReducedMotion();
  const rawX = useMotionValue(-2000);
  const rawY = useMotionValue(-2000);

  const x = useSpring(rawX, { stiffness: 260, damping: 32, mass: 0.2 });
  const y = useSpring(rawY, { stiffness: 260, damping: 32, mass: 0.2 });

  useEffect(() => {
    if (reduce) return;

    const onMove = (e: PointerEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [reduce, rawX, rawY]);

  if (reduce) return null;

  return (
    <motion.div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      <motion.div
        className="cursor-glow"
        style={{
          left: x,
          top: y,
        }}
      />
    </motion.div>
  );
}
