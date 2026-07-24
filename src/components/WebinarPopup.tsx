import React, { useEffect, useState } from 'react';

// Promo popup for the InfluxData webinar (July 28, 2026).
// - Shows on every visit (once per browser session) until EXPIRY, then never again.
// - Closable via the top-right ✕.
// To reuse for a future event: update the constants below and drop a new banner
// image at public/images/webinar-banner.png (1200×1200 or 1200×630 works).
const EXPIRY = new Date('2026-07-30T00:00:00'); // gone from July 30 onward (day after +1)
const REGISTER_URL =
  'https://www.influxdata.com/resources/building-agentic-f1-strategy-engine-with-influxdb3/';
const BANNER_SRC = '/images/webinar-banner.jpg';
const SESSION_KEY = 'webinar-popup-dismissed';

export default function WebinarPopup() {
  const [open, setOpen] = useState(false);
  const [imgOk, setImgOk] = useState(true);

  useEffect(() => {
    if (new Date() >= EXPIRY) return;
    try {
      if (sessionStorage.getItem(SESSION_KEY) === '1') return;
    } catch {}
    const t = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(SESSION_KEY, '1');
    } catch {}
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Upcoming webinar announcement"
      onClick={close}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-200/20 bg-[#131046] shadow-[0_35px_120px_rgba(2,6,23,0.6)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close announcement"
          onClick={close}
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-slate-950/50 text-white backdrop-blur transition hover:bg-slate-950/80"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <a href={REGISTER_URL} target="_blank" rel="noreferrer" className="block">
          {imgOk ? (
            <img
              src={BANNER_SRC}
              alt="InfluxData webinar — Building an Agentic F1 Strategy Engine with InfluxDB 3, July 28 2026, with speaker Rohan Chandrashekar"
              className="w-full"
              onError={() => setImgOk(false)}
            />
          ) : (
            // Styled fallback if the banner image is missing
            <div className="px-7 py-9 text-white">
              <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-indigo-300">Webinar</div>
              <div className="mt-3 font-display text-2xl font-semibold leading-snug">
                Building an Agentic F1 Strategy Engine with InfluxDB 3
              </div>
              <div className="mt-3 text-sm text-indigo-200">July 28, 2026 · 8AM PT / 4PM BST</div>
              <div className="mt-5 text-sm text-indigo-100">
                Presented by <span className="font-semibold">Rohan Chandrashekar</span> — MS Computer Science Candidate,
                Arizona State University
              </div>
            </div>
          )}
        </a>

        <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-[#0d0a38] px-5 py-4">
          <div className="text-xs text-indigo-200">I'm speaking at InfluxData — join live!</div>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
}
