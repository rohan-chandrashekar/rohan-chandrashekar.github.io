import React, { useEffect, useRef, useState } from 'react';
import { systemPrompt, starterQuestions, localAnswer } from '../lib/aiKnowledge';

type Msg = { role: 'user' | 'assistant'; text: string; local?: boolean };

const PUTER_SRC = 'https://js.puter.com/v2/';

declare global {
  interface Window {
    puter?: any;
  }
}

let puterLoading: Promise<any> | null = null;

// Lazily load Puter.js the first time the visitor opens the chat.
// If it fails (offline, blocked, service down), we fall back to local answers.
function loadPuter(): Promise<any> {
  if (typeof window === 'undefined') return Promise.reject(new Error('ssr'));
  if (window.puter?.ai) return Promise.resolve(window.puter);
  if (!puterLoading) {
    puterLoading = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = PUTER_SRC;
      s.async = true;
      const timer = setTimeout(() => reject(new Error('timeout')), 12000);
      s.onload = () => {
        clearTimeout(timer);
        window.puter?.ai ? resolve(window.puter) : reject(new Error('no puter.ai'));
      };
      s.onerror = () => {
        clearTimeout(timer);
        reject(new Error('load failed'));
      };
      document.head.appendChild(s);
    });
    puterLoading.catch(() => {
      puterLoading = null; // allow retry on a later question
    });
  }
  return puterLoading;
}

function withTimeout<T>(p: Promise<T>, ms: number): Promise<T> {
  return Promise.race([p, new Promise<T>((_, rej) => setTimeout(() => rej(new Error('timeout')), ms))]);
}

async function askLLM(history: Msg[], question: string): Promise<string> {
  const puter = await withTimeout(loadPuter(), 12000);
  const messages = [
    { role: 'system', content: systemPrompt },
    ...history.slice(-8).map((m) => ({ role: m.role, content: m.text })),
    { role: 'user', content: question },
  ];
  // Hard timeout: if Puter hangs (blocked popup, network issues), fall back
  // to the local knowledge base instead of leaving the visitor waiting.
  const resp = await withTimeout(puter.ai.chat(messages), 25000);
  const text =
    typeof resp === 'string'
      ? resp
      : resp?.message?.content?.[0]?.text ?? resp?.message?.content ?? resp?.text ?? '';
  if (!text || typeof text !== 'string') throw new Error('empty response');
  return text.trim();
}

// Minimal markdown renderer for assistant replies (bold, inline code, links,
// bullets, headings) — built with React elements, no raw HTML injection.
function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  // Tokenize **bold**, `code`, and [label](url)
  const re = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\((?:https?:\/\/|\/)[^)]+\))/g;
  let last = 0;
  let i = 0;
  for (const m of text.matchAll(re)) {
    const idx = m.index ?? 0;
    if (idx > last) out.push(text.slice(last, idx));
    const tok = m[0];
    if (tok.startsWith('**')) {
      out.push(<strong key={`${keyPrefix}-b${i}`}>{tok.slice(2, -2)}</strong>);
    } else if (tok.startsWith('`')) {
      out.push(
        <code key={`${keyPrefix}-c${i}`} className="rounded bg-slate-200/70 px-1 py-0.5 text-[0.85em] dark:bg-slate-800">
          {tok.slice(1, -1)}
        </code>
      );
    } else {
      const label = tok.slice(1, tok.indexOf(']'));
      const href = tok.slice(tok.indexOf('](') + 2, -1);
      const external = href.startsWith('http');
      out.push(
        <a
          key={`${keyPrefix}-a${i}`}
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noreferrer' : undefined}
          className="font-semibold underline underline-offset-2"
        >
          {label}
        </a>
      );
    }
    last = idx + tok.length;
    i++;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function FormattedText({ text }: { text: string }) {
  const lines = text.split('\n');
  return (
    <div className="space-y-1">
      {lines.map((line, i) => {
        const bullet = line.match(/^\s*[-*•]\s+(.*)$/);
        const heading = line.match(/^\s*#{1,4}\s+(.*)$/);
        if (bullet) {
          return (
            <div key={i} className="flex gap-1.5 pl-1">
              <span aria-hidden>•</span>
              <span>{renderInline(bullet[1], `l${i}`)}</span>
            </div>
          );
        }
        if (heading) {
          return (
            <div key={i} className="font-semibold">
              {renderInline(heading[1], `l${i}`)}
            </div>
          );
        }
        if (line.trim() === '') return <div key={i} className="h-1" />;
        return <div key={i}>{renderInline(line, `l${i}`)}</div>;
      })}
    </div>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener('open-ask-ai', onOpen);
    return () => window.removeEventListener('open-ask-ai', onOpen);
  }, []);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [msgs, busy, open]);

  const send = async (raw?: string) => {
    const q = (raw ?? input).trim();
    if (!q || busy) return;
    setInput('');
    setBusy(true);
    const history = msgs;
    setMsgs((m) => [...m, { role: 'user', text: q }]);
    try {
      const answer = await askLLM(history, q);
      setMsgs((m) => [...m, { role: 'assistant', text: answer }]);
    } catch {
      setMsgs((m) => [...m, { role: 'assistant', text: localAnswer(q), local: true }]);
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      {/* Floating launcher */}
      <button
        type="button"
        aria-label="Ask AI about Rohan"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-5 right-5 z-[70] flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(16,24,40,0.35)] transition hover:scale-[1.03]"
      >
        <span aria-hidden>✦</span>
        <span className="hidden sm:inline">Ask AI about Rohan</span>
        <span className="sm:hidden">Ask AI</span>
      </button>

      {open ? (
        <div
          role="dialog"
          aria-label="AI assistant"
          className="fixed bottom-20 right-4 left-4 z-[70] flex max-h-[70vh] flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_25px_70px_rgba(16,24,40,0.25)] backdrop-blur dark:border-slate-800/70 dark:bg-slate-950 sm:left-auto sm:w-[400px]"
        >
          <div className="flex items-center justify-between border-b border-slate-200/70 px-4 py-3 dark:border-slate-800/70">
            <div>
              <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">Ask AI about Rohan</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                Answers are grounded in this site's content
              </div>
            </div>
            <button
              type="button"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              className="rounded-full p-1.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-900 dark:hover:text-slate-50"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {msgs.length === 0 ? (
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Hi! Ask me anything about Rohan — his experience, projects, research, or skills. You can even paste a
                  job description and ask how well he fits.
                </p>
                <div className="mt-3 flex flex-col items-start gap-2">
                  {starterQuestions.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => send(q)}
                      className="rounded-2xl border border-slate-200/70 bg-white/70 px-3 py-1.5 text-left text-xs font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-800/70 dark:bg-slate-950/40 dark:text-slate-200 dark:hover:bg-slate-900"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {msgs.map((m, i) => (
              <div key={i} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                <div
                  className={
                    m.role === 'user'
                      ? 'max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-br-md bg-slate-900 px-3.5 py-2.5 text-sm text-white dark:bg-slate-100 dark:text-slate-900'
                      : 'max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-bl-md border border-slate-200/70 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-800 dark:border-slate-800/70 dark:bg-slate-900/60 dark:text-slate-100'
                  }
                >
                  {m.role === 'assistant' ? <FormattedText text={m.text} /> : m.text}
                  {m.local ? (
                    <div className="mt-1.5 text-[10px] uppercase tracking-wide opacity-60">from site knowledge base</div>
                  ) : null}
                </div>
              </div>
            ))}

            {busy ? (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md border border-slate-200/70 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-500 dark:border-slate-800/70 dark:bg-slate-900/60 dark:text-slate-400">
                  Thinking…
                </div>
              </div>
            ) : null}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="flex items-center gap-2 border-t border-slate-200/70 px-3 py-3 dark:border-slate-800/70"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Rohan…"
              aria-label="Your question"
              className="min-w-0 flex-1 rounded-2xl border border-slate-200/70 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-slate-300 dark:border-slate-800/70 dark:bg-slate-950 dark:text-slate-50 dark:placeholder:text-slate-500"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition disabled:opacity-40 dark:bg-slate-100 dark:text-slate-900"
            >
              Send
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
}
