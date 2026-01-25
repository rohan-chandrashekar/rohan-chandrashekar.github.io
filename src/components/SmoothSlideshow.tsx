import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Props = {
  images: string[];
  altBase: string;
  intervalMs?: number;
  /** When false, disables autoplay (manual controls still work). */
  playing?: boolean;
  fit?: "cover" | "contain";
  aspectClass?: string;
};

export default function SmoothSlideshow({
  images,
  altBase,
  intervalMs = 4500,
  playing = true,
  fit = "cover",
  aspectClass = "aspect-[16/9]",
}: Props) {
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);
  const pausedRef = useRef(false);

  const imgs = useMemo(() => images.filter(Boolean), [images]);

  const next = () => setIdx((v) => (imgs.length ? (v + 1) % imgs.length : 0));
  const prev = () => setIdx((v) => (imgs.length ? (v - 1 + imgs.length) % imgs.length : 0));

  // Autoplay (unless reduced motion or only one image)
  useEffect(() => {
    if (!playing || reduce) return;
    if (imgs.length <= 1) return;

    const id = window.setInterval(() => {
      if (pausedRef.current) return;
      setIdx((v) => (v + 1) % imgs.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [imgs.length, intervalMs, playing, reduce]);

  // Keep idx in range if images change
  useEffect(() => {
    if (idx >= imgs.length) setIdx(0);
  }, [imgs.length, idx]);

  const ease = [0.22, 1, 0.36, 1] as const;

  const onDragEnd = (_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
    // Thresholds tuned for mouse / trackpad dragging
    const swipePower = Math.abs(info.offset.x) * info.velocity.x;
    if (info.offset.x > 80 || swipePower > 9000) prev();
    else if (info.offset.x < -80 || swipePower < -9000) next();
  };

  const showControls = imgs.length > 1;

  return (
    <div
      className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-slate-100/60 dark:border-slate-800/70 dark:bg-slate-900/30"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div className={`relative ${aspectClass} w-full`}>
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={`slide-${idx}`}
            className="absolute inset-0"
            drag={showControls ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={showControls ? onDragEnd : undefined}
            style={{ touchAction: "pan-y" }} // allow vertical scroll on touch devices
            initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 1.01 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.99 }}
            transition={reduce ? { duration: 0 } : { duration: 0.55, ease }}
          >
            {fit === "contain" ? (
              <>
                {/* blurred backdrop to avoid awkward letterboxing */}
                <motion.img
                  key={`bg-${idx}`}
                  src={imgs[idx]}
                  loading="lazy"
                  decoding="async"
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover blur-2xl scale-110 opacity-35"
                  initial={reduce ? { opacity: 0.35 } : { opacity: 0, scale: 1.12 }}
                  animate={reduce ? { opacity: 0.35 } : { opacity: 0.35, scale: 1.1 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.08 }}
                  transition={reduce ? { duration: 0 } : { duration: 0.9, ease }}
                />
                <motion.img
                  key={`fg-${idx}`}
                  src={imgs[idx]}
                  loading="lazy"
                  decoding="async"
                  alt={`${altBase} photo ${idx + 1}`}
                  className="absolute inset-0 h-full w-full object-contain p-1"
                  initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 1.01 }}
                  animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.99 }}
                  transition={reduce ? { duration: 0 } : { duration: 0.55, ease }}
                />
              </>
            ) : (
              <motion.img
                key={`img-${idx}`}
                src={imgs[idx]}
                loading="lazy"
                decoding="async"
                alt={`${altBase} photo ${idx + 1}`}
                className="absolute inset-0 h-full w-full object-cover"
                initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 1.03 }}
                animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.99 }}
                transition={reduce ? { duration: 0 } : { duration: 0.65, ease }}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* soft premium overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 via-slate-950/5 to-transparent opacity-70 dark:from-black/55 dark:via-black/10" />

        {/* arrows */}
        {showControls ? (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/35 p-2 text-white shadow-sm backdrop-blur transition-opacity duration-200 hover:bg-black/45 focus:outline-none focus:ring-2 focus:ring-white/40 dark:bg-black/45 dark:hover:bg-black/55 opacity-80 group-hover:opacity-100"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/35 p-2 text-white shadow-sm backdrop-blur transition-opacity duration-200 hover:bg-black/45 focus:outline-none focus:ring-2 focus:ring-white/40 dark:bg-black/45 dark:hover:bg-black/55 opacity-80 group-hover:opacity-100"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </>
        ) : null}

        {/* dots */}
        {showControls ? (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {imgs.map((_, i) => (
              <button
                key={i}
                aria-label={`Show image ${i + 1}`}
                onClick={() => setIdx(i)}
                className={
                  "h-1.5 w-1.5 rounded-full transition-all " +
                  (i === idx ? "bg-white/95 ring-4 ring-white/10" : "bg-white/50 hover:bg-white/75")
                }
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
