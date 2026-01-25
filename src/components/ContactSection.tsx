import React, { useMemo, useState } from 'react';
import MotionReveal from './MotionReveal';
import { motion, useReducedMotion } from 'framer-motion';
import { motionTokens } from '../lib/motion';

type Props = {
  email: string;
};

export default function ContactSection({ email }: Props) {
  const reduce = useReducedMotion();
  const [name, setName] = useState('');
  const [from, setFrom] = useState('');
  const [message, setMessage] = useState('');

  const mailtoHref = useMemo(() => {
    const safeEmail = (email && email.includes('@')) ? email : 'your-email@example.com';
    const subject = `Portfolio inquiry from ${name || 'Someone'}`;
    const body = `Name: ${name || '-'}\nEmail: ${from || '-'}\n\nMessage:\n${message || '-'}\n`;
    return `mailto:${safeEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [email, name, from, message]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Opens the user's default mail app with the message pre-filled.
    window.location.href = mailtoHref;
  };

  return (
    <section className="mt-10">
      <div className="mx-auto max-w-6xl px-4">
        <MotionReveal>
          <div className="card rounded-3xl p-6 dark:bg-slate-950/40 dark:border-slate-800/60">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Say Hi!</h2>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  My inbox is always open — for ideas, opportunities, and nerdy conversations.
                </p>
              </div>
              <div className="hidden sm:block">
                <div className="accent-bar" />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
              {/* Left: message */}
              <motion.div
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
                whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: motionTokens.duration.base, ease: motionTokens.ease }}
                className="rounded-3xl border border-slate-200/70 bg-white/60 p-5 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/30"
              >
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                  Want to reach out? Share an idea? Or just say “hi”?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                  I love collaborating with people who build things with taste, curiosity, and impact.
                </p>

                <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-950/80 dark:bg-slate-100/80" />
                    <span>Project collaboration / internships</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-950/80 dark:bg-slate-100/80" />
                    <span>Research, papers, and “what if we tried…” ideas</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-950/80 dark:bg-slate-100/80" />
                    <span>Talks, mentoring, and community work</span>
                  </li>
                </ul>
              </motion.div>

              {/* Right: form */}
              <motion.form
                onSubmit={onSubmit}
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
                whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: motionTokens.duration.base, ease: motionTokens.ease, delay: 0.05 }}
                className="grid grid-cols-1 gap-4"
              >
                <label className="grid gap-2">
                  <span className="text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-300">
                    Your name
                  </span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-950/10 dark:border-slate-800/70 dark:bg-slate-950/30 dark:text-slate-50 dark:placeholder:text-slate-500 dark:focus:border-slate-700 dark:focus:ring-slate-50/10"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-300">
                    Your email
                  </span>
                  <input
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    placeholder="jane@company.com"
                    type="email"
                    className="rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-950/10 dark:border-slate-800/70 dark:bg-slate-950/30 dark:text-slate-50 dark:placeholder:text-slate-500 dark:focus:border-slate-700 dark:focus:ring-slate-50/10"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-300">
                    Message
                  </span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="What would you like to build together?"
                    rows={6}
                    className="rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-950/10 dark:border-slate-800/70 dark:bg-slate-950/30 dark:text-slate-50 dark:placeholder:text-slate-500 dark:focus:border-slate-700 dark:focus:ring-slate-50/10"
                  />
                </label>

                <div className="flex flex-wrap items-center justify-between gap-3">

                  <button
                    type="submit"
                    className="group relative overflow-hidden rounded-full bg-slate-900 dark:bg-slate-100 px-5 py-2.5 text-sm font-semibold text-white dark:text-slate-900 shadow-soft transition btn-shimmer"
                  >
                    <span className="relative z-10">Send message</span>
                    <span className="absolute inset-0 opacity-0 transition group-hover:opacity-100 luxe-gradient" />
                  </button>
                </div>
              </motion.form>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
