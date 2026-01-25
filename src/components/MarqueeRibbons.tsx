import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { motionTokens } from '../lib/motion';
import { techLogos } from '../lib/techLogos';

type Props = {
  skills: string[];
  technologies: string[];
  className?: string;
};


function Row({
  items,
  duration = 26,
  reverse = false,
  withLogos = false,
}: {
  items: string[];
  duration?: number;
  reverse?: boolean;
  withLogos?: boolean;
}) {
  const reduce = useReducedMotion();

  // Duplicate for seamless looping
  const all = [...items, ...items];

  return (
    <div className="mx-auto w-full max-w-5xl relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/50 px-2 py-3 backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/20">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          maskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      />
      <div className="marquee">
        <div
          className={`marquee-track ${reverse ? 'marquee-reverse' : ''}`}
          style={
            {
              ['--marquee-duration' as any]: `${duration}s`,
            } as React.CSSProperties
          }
          aria-hidden={false}
          data-reduce={reduce ? 'true' : 'false'}
        >
          {all.map((p, idx) => {
            const logo = withLogos ? techLogos[p] : undefined;
            return (
              <span
                key={`${p}-${idx}`}
                className="mx-1 inline-flex min-w-max items-center gap-2 whitespace-nowrap rounded-full border border-slate-200/70 bg-white/70 px-3 py-2 text-xs sm:text-sm font-semibold leading-tight text-slate-800 shadow-[0_12px_30px_rgba(16,24,40,0.06)] backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/30 dark:text-slate-100"
              >
                {logo ? (
                  <img
                    src={logo}
                    alt=""
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0"
                    loading="lazy"
                    decoding="async"
                  />
                ) : null}
                <span className="whitespace-nowrap leading-none">{p}</span>
              </span>
            );
          })}
        </div>
      </div>

      <style>{`
        .marquee { overflow: hidden; }
        .marquee-track {
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
          will-change: transform;
          animation: marquee var(--marquee-duration, 26s) linear infinite;
        }
        .marquee-reverse { animation-direction: reverse; }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none !important; transform: none !important; }
        }
      `}</style>
    </div>
  );
}

export default function MarqueeRibbons({ skills, technologies, className }: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: motionTokens.duration.base, ease: motionTokens.ease }}
      className={className}
    >
      <div className="grid gap-4 text-center">
        {/* Technologies first */}
        <div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Technologies
          </div>
          <Row items={technologies} duration={24} reverse={false} withLogos />
        </div>

        <div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Skills
          </div>
          <Row items={skills} duration={28} reverse={true} />
        </div>
      </div>
    </motion.div>
  );
}
