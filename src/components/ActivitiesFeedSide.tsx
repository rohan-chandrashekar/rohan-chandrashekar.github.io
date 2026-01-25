import React, { useMemo, useRef } from "react";
import { motion, useInView, useReducedMotion, useScroll } from "framer-motion";
import { activities, type Activity } from "../lib/constants/activities";
import SmoothSlideshow from "./SmoothSlideshow";

function MediaPane({ activity }: { activity: Activity }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { margin: "-18% 0px -55% 0px", amount: 0.35 });
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <motion.div
      ref={ref}
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -25% 0px" }}
      transition={{ duration: 0.55, ease }}
      className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/60 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/30"
    >
      <SmoothSlideshow
        images={activity.images}
        altBase={activity.title}
        playing={true}
        fit="contain"
        aspectClass="aspect-[16/11]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent dark:from-black/20" />
    </motion.div>
  );
}

function TextPane({ activity }: { activity: Activity }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { margin: "-18% 0px -55% 0px", amount: 0.35 });
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <motion.div
      ref={ref}
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -25% 0px" }}
      transition={{ duration: 0.55, ease }}
      className="card rounded-3xl p-3 md:p-4"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-slate-900/90 px-3 py-1 text-[11px] font-semibold text-white dark:bg-slate-100 dark:text-slate-900">
          {activity.category}
        </span>
        <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">{activity.when}</span>
        {activity.location ? (
          <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">• {activity.location}</span>
        ) : null}
        <span className="ml-auto text-[11px] font-semibold text-slate-500 dark:text-slate-400">
          {activity.date?.slice(0, 4)}
        </span>
      </div>

      <h3 className="mt-2 text-base md:text-lg font-semibold tracking-tight text-slate-950 dark:text-slate-50">
        {activity.title}
      </h3>

      {activity.subtitle ? (
        <p className="mt-1 text-[13px] text-slate-600 dark:text-slate-300 line-clamp-1">{activity.subtitle}</p>
      ) : null}

      <div className="mt-2 text-[13px] leading-relaxed text-slate-700 dark:text-slate-200">
        <p>{activity.description}</p>

        {activity.highlights?.length ? (
          <ul className="mt-2 space-y-1.5">
            {activity.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-950/80 dark:bg-slate-100/80" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      
  <div className="mt-2 flex items-center justify-end">
    {activity.links?.length ? (
      <div className="flex flex-wrap gap-2">
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
    ) : (
      <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400"> </span>
    )}
  </div>
</motion.div>
  );
}

export default function ActivitiesFeedSide() {
  const items = useMemo(() => activities, []);
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.25", "end 0.9"],
  });

  return (
    <div ref={sectionRef} className="relative">
      {/* Center timeline line */}
      <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-slate-200/80 dark:bg-slate-800/80" />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-slate-950/80 dark:bg-slate-50/80"
        style={{ scaleY: scrollYProgress, transformOrigin: "top" as const }}
      />

      <div className="space-y-6 lg:space-y-8">
        {items.map((a, idx) => {
          const year = a.date?.slice(0, 4) || "";
          const prevYear = idx > 0 ? items[idx - 1].date?.slice(0, 4) || "" : "";
          const showYear = idx === 0 || year !== prevYear;

          return (
            <React.Fragment key={a.id}>
              {showYear ? (
                <div className="grid lg:grid-cols-[1fr,120px,1fr] items-center py-1">
                  <div className="hidden lg:block" />
                  <div className="flex justify-center">
                    <div className="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-[11px] font-semibold text-slate-700 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/35 dark:text-slate-200">
                      {year}
                    </div>
                  </div>
                  <div className="hidden lg:block" />
                </div>
              ) : null}

              <div className="grid gap-4 lg:grid-cols-[1fr,120px,1fr] lg:gap-8 items-start">
                {/* Left lane: alternates between media and text */}
                <div className="hidden lg:block lg:pr-2">
                  {idx % 2 === 0 ? <MediaPane activity={a} /> : <TextPane activity={a} />}
                </div>

                {/* Middle marker */}
                <div className="relative flex justify-center">
                  <div className="flex flex-col items-center">
                    <motion.div
                      initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-10% 0px -25% 0px" }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="mt-4 h-4 w-4 rounded-full bg-slate-950 ring-8 ring-slate-950/10 dark:bg-slate-50 dark:ring-white/10"
                    />
                    <div className="mt-2 max-w-[12rem] text-center text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                      {a.when}{a.location ? ` · ${a.location}` : ""}
                    </div>
                  </div>
                </div>

                {/* Right lane: alternates opposite of left */}
                <div className="hidden lg:block lg:pl-2">
                  {idx % 2 === 0 ? <TextPane activity={a} /> : <MediaPane activity={a} />}
                </div>

                {/* Mobile: stacked */}
                <div className="lg:hidden space-y-3">
                  <MediaPane activity={a} />
                  <TextPane activity={a} />
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
