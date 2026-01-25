import React, { useMemo, useState } from "react";

type Recommendation = {
  name: string;
  headline?: string;
  photo?: string;
  date?: string;
  quote?: string;
  url: string;
};

export default function LinkedInRecommendations({
  items,
}: {
  items: Recommendation[];
}) {
  const recs = useMemo(() => (items || []).filter(Boolean), [items]);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="mt-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
            LinkedIn Recommendations
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            A few words from people I&apos;ve worked with — clipped for readability, expandable when you want the full story.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {recs.map((r, idx) => {
          const key = `${r.name}-${idx}`;
          const isOpen = !!expanded[key];

          return (
            <a
              key={key}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-[0_12px_45px_rgba(16,24,40,0.06)] backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-300/80 dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex items-start gap-3">
                <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full ring-1 ring-slate-900/10 dark:ring-white/10 bg-white/60 dark:bg-white/10">
                  {r.photo ? (
                    <img
                      src={r.photo}
                      alt={r.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-full w-full grid place-items-center text-xs font-semibold text-slate-700 dark:text-slate-200">
                      {r.name
                        .split(" ")
                        .filter(Boolean)
                        .slice(0, 2)
                        .map((s) => s[0])
                        .join("")
                        .toUpperCase()}
                    </div>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-slate-900 dark:text-white whitespace-normal break-words">
                        {r.name}
                      </div>
                      {r.headline ? (
                        <div className="mt-0.5 text-xs text-slate-600 dark:text-slate-300 whitespace-normal break-words">
                          {r.headline}
                        </div>
                      ) : null}
                    </div>

                    <div className="shrink-0">
                      <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 px-2 py-1 text-[11px] font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-slate-200">
                        <LinkedInMark className="h-3.5 w-3.5" />
                        LinkedIn
                      </span>
                    </div>
                  </div>

                  {r.quote ? (
                    <div className="mt-3">
                      <p
                        className={
                          "text-sm leading-6 text-slate-700 dark:text-slate-200 whitespace-pre-line " +
                          (isOpen ? "" : "quote-clamp")
                        }
                      >
                        {r.quote}
                      </p>

                      <div className="mt-2 flex items-center gap-3">
                        <button
                          type="button"
                          className="text-xs font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white underline underline-offset-4"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggle(key);
                          }}
                        >
                          {isOpen ? "Show less" : "Read more"}
                        </button>

                        <span className="text-xs text-slate-400">•</span>

                        <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                          Verified via LinkedIn
                        </span>
                      </div>
                    </div>
                  ) : null}

                  <div className="mt-3 flex items-center justify-between gap-3">
                    {r.date ? (
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {r.date}
                      </span>
                    ) : (
                      <span />
                    )}

                    <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                      Read on LinkedIn →
                    </span>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/80 to-transparent opacity-0 transition group-hover:opacity-100 dark:from-slate-950/40" />
            </a>
          );
        })}
      </div>

      <style>{`
        .quote-clamp{
          display:-webkit-box;
          -webkit-box-orient:vertical;
          -webkit-line-clamp:6;
          overflow:hidden;
        }
      `}</style>
    </section>
  );
}

function LinkedInMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.369-1.85 3.602 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z" />
    </svg>
  );
}
