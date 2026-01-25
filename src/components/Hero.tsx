import React, { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useScroll,
  useTransform,
} from 'framer-motion';
import { motionTokens } from '../lib/motion';

type Props = {
  greeting: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function Hero({ greeting, paragraphs, imageSrc, imageAlt }: Props) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const p1 = useTransform(scrollY, [0, 800], [0, -48]);
  const p2 = useTransform(scrollY, [0, 800], [0, 28]);
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Luxury micro-interaction: subtle tilt + depth on hover.
  const rawRX = useMotionValue(0);
  const rawRY = useMotionValue(0);
  const rx = useSpring(rawRX, { stiffness: 140, damping: 16, mass: 0.2 });
  const ry = useSpring(rawRY, { stiffness: 140, damping: 16, mass: 0.2 });

  const onMove = (e: React.MouseEvent) => {
    if (reduce) return;
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
    const py = (e.clientY - (rect.top + rect.height / 2)) / rect.height;

    const tiltY = clamp(px, -0.5, 0.5) * 10;
    const tiltX = clamp(-py, -0.5, 0.5) * 10;

    rawRY.set(tiltY);
    rawRX.set(tiltX);
  };

  const onLeave = () => {
    rawRX.set(0);
    rawRY.set(0);
  };

  return (
    <section className="relative mx-auto max-w-6xl px-4 pt-6 sm:pt-10">
      <div className="card relative overflow-hidden rounded-4xl p-7 sm:p-9">
      {/* Parallax luxe blobs */}
      {!reduce && (
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-28 -left-36 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-sky-400/30 via-violet-400/20 to-emerald-400/20 blur-3xl"
            style={{ y: p1 }}
          />
          <motion.div
            className="absolute -bottom-32 -right-40 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-emerald-400/20 via-sky-400/20 to-violet-400/25 blur-3xl"
            style={{ y: p2 }}
          />
        </div>
      )}

      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="relative">
          <motion.h1
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: motionTokens.duration.slow, ease: motionTokens.ease }}
            className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl"
          >
            {greeting}
          </motion.h1>

          <div className="mt-6 space-y-4">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: motionTokens.duration.medium, ease: motionTokens.ease, delay: 0.08 + i * 0.06 }}
                className="text-pretty text-base leading-relaxed text-slate-700 dark:text-slate-300"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>

        <motion.div
          initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: motionTokens.duration.slow, ease: motionTokens.ease, delay: 0.12 }}
          className="relative"
          style={{ perspective: 1000 }}
        >
          <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-sky-500/20 via-violet-500/20 to-emerald-500/15 dark:from-sky-500/25 dark:via-violet-500/25 dark:to-emerald-500/20" />

          <motion.div
            ref={cardRef}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className="card relative overflow-hidden rounded-[28px] p-3"
            style={reduce ? undefined : ({ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' } as any)}
          >
            <div className="absolute inset-0 pointer-events-none shine" />
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-auto w-full rounded-2xl object-cover"
              loading="eager"
            />
          </motion.div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
