import React, { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  ariaLabel?: string;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function MagneticButton({
  href,
  className,
  children,
  target,
  rel,
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const reduce = useReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, { stiffness: 260, damping: 18, mass: 0.2 });
  const y = useSpring(rawY, { stiffness: 260, damping: 18, mass: 0.2 });

  const onMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);

    const mx = clamp(dx / rect.width, -0.5, 0.5);
    const my = clamp(dy / rect.height, -0.5, 0.5);

    rawX.set(mx * 14);
    rawY.set(my * 14);
  };

  const onMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      aria-label={ariaLabel}
      target={target}
      rel={rel}
      onMouseMove={reduce ? undefined : onMouseMove}
      onMouseLeave={reduce ? undefined : onMouseLeave}
      style={reduce ? undefined : ({ x, y } as any)}
      className={className}
    >
      {children}
    </motion.a>
  );
}
