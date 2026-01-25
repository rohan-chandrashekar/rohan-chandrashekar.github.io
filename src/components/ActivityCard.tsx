import React, { useMemo, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { Activity } from "../lib/constants/activities";
import SmoothSlideshow from "./SmoothSlideshow";

export default function ActivityCard({ activity }: { activity: Activity }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { margin: "-20% 0px -55% 0px", amount: 0.35 });

  const ease = [0.22, 1, 0.36, 1] as const;
  const year = useMemo(() => activity.date?.slice(0, 4) || "", [activity.date]);

  return (
    <motion.article
      ref={ref}
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -25% 0px" }}
      transition={{ duration: 0.6, ease }}
      className="card rounded-3xl overflow-hidden"
    >
      {/* Slightly larger photo column, still scan-friendly */}
      <div className="grid md:grid-cols-[280px,1fr]">
        {/* Left: thumbnail slideshow */}
        <div className="relative border-b border-slate-200/60 dark:border-slate-800/70 md:border-b-0 md:border-r">
          <div className="p-3">
            <div className="overflow-hidden rounded-3xl">
              <SmoothSlideshow
                images={activity.images}
                altBase={activity.title}
                playing={inView}
                fit="contain"
                aspectClass="aspect-[16/11]"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/30 dark:to-black/15" />
        </div>

        {/* Right: content */}
        <div className="p-3 md:p-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-slate-900/90 px-3 py-1 text-[11px] font-semibold text-white dark:bg-slate-100 dark:text-slate-900">
              {activity.category}
            </span>
            <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">{activity.when}</span>
            {activity.location ? (
              <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">• {activity.location}</span>
            ) : null}
            <span className="ml-auto text-[11px] font-semibold text-slate-500 dark:text-slate-400">{year}</span>
          </div>

          <h3 className="mt-2 text-base md:text-lg font-semibold tracking-tight text-slate-950 dark:text-slate-50">
            {activity.title}
          </h3>

          {activity.subtitle ? (
            <p className="mt-1 text-[13px] text-slate-600 dark:text-slate-300 line-clamp-1">
              {activity.subtitle}
            </p>
          ) : null}

          <div className="mt-2 text-[13px] leading-relaxed text-slate-700 dark:text-slate-200">
            {activity.description}
          </div>
          {activity.highlights?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {activity.highlights.slice(0, 3).map((h) => (
                <span
                  key={h}
                  className="rounded-full border border-slate-200/70 bg-white/50 px-2.5 py-0.5 text-[10px] font-semibold text-slate-700 dark:border-slate-800/70 dark:bg-slate-950/30 dark:text-slate-200"
                >
                  {h}
                </span>
              ))}
            </div>
          ) : null}

          {activity.links?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {activity.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-200/70 bg-white/50 px-2.5 py-1 text-[11px] font-semibold text-slate-800 transition hover:bg-white/80 dark:border-slate-800/70 dark:bg-slate-950/40 dark:text-slate-50 dark:hover:bg-slate-950/60"
                >
                  {l.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
