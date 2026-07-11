import { profile } from './constants/profile';

// ---------------------------------------------------------------------------
// A plain-text "knowledge document" about Rohan, generated from profile.ts at
// build time. It is the single source of truth for BOTH the LLM system prompt
// (Puter.js engine) and the local keyword-matching fallback engine.
// ---------------------------------------------------------------------------

const exp = profile.experience
  .map(
    (e) =>
      `- ${e.title} at ${e.org} (${e.team}), ${e.start} – ${e.end}. ${e.highlights.join(' ')}`
  )
  .join('\n');

const edu = profile.education
  .map((e) => `- ${e.degree}${e.notes ? `, ${e.notes}` : ''} — ${e.school} (${e.when})`)
  .join('\n');

const research = profile.research
  .map((r) => `- "${r.title}": ${r.summary} [${r.meta.join('; ')}]`)
  .join('\n');

const projects = profile.caseStudies
  .map((c) => `- ${c.title} (${c.when}): ${c.subtitle} Stack: ${c.sections.stack.join(', ')}. More: /projects/${c.slug}/`)
  .join('\n');

const awards = profile.proof.badges.map((b) => `- ${b.title}: ${b.detail ?? ''}`).join('\n');

const volunteering = profile.volunteering.map((v) => `- ${v.org}: ${v.description}`).join('\n');

export const knowledgeDocument = `
ABOUT
Name: ${profile.name} (${profile.pronoun})
Headline: ${profile.heroV2.oneLiner}
Location: ${profile.location}
Summary: ${profile.hero.paragraphs.join(' ')}
Focus areas: ${profile.heroV2.chips.join(', ')}

LINKS
GitHub: ${profile.links.github}
LinkedIn: ${profile.links.linkedin}
Resume: ${profile.links.resume} (on this site)
Contact: via the "Say Hi!" form on the home page

WORK EXPERIENCE
${exp}

EDUCATION
${edu}

PUBLICATIONS & RESEARCH
${research}

PROJECTS
${projects}

AWARDS & CERTIFICATIONS
${awards}

VOLUNTEERING & COMMUNITY
${volunteering}
`.trim();

export const systemPrompt = `You are the AI assistant on ${profile.name}'s portfolio website. Visitors (often recruiters) ask you questions about Rohan.

Rules:
- Answer ONLY using the facts in the knowledge document below. If something isn't covered, say you don't have that information and suggest contacting Rohan via the Say Hi! form on the home page.
- Be concise, friendly, and professional. Use short paragraphs or bullet points.
- When relevant, point visitors to pages on this site (e.g. /projects/, /research/, /resume/).
- If given a job description, honestly assess Rohan's fit for it based on the knowledge document, highlighting matching skills and experience.
- Never invent employers, dates, metrics, or publications. Never answer questions unrelated to Rohan — politely redirect instead.

KNOWLEDGE DOCUMENT:
${knowledgeDocument}`;

export const starterQuestions = [
  'What did Rohan do at HPE?',
  'Tell me about his research and publications',
  'What are his strongest projects?',
  'Does he have experience with AI security?',
];

// ---------------------------------------------------------------------------
// Local fallback engine: keyword-scored canned answers. Used when the LLM
// engine is unavailable (offline, blocked, rate-limited). Works everywhere.
// ---------------------------------------------------------------------------

type Topic = { keywords: string[]; answer: string };

const topics: Topic[] = [
  {
    keywords: ['hpe', 'hewlett', 'work', 'job', 'experience', 'career', 'intern', 'internship', 'employer', 'company'],
    answer: `Rohan's professional experience:\n${exp}\n\nSee the About page for the full timeline.`,
  },
  {
    keywords: ['research', 'publication', 'paper', 'ieee', 'springer', 'journal', 'conference', 'published'],
    answer: `Rohan's publications and research:\n${research}\n\nFull details on the Research page (/research/).`,
  },
  {
    keywords: ['project', 'built', 'build', 'portfolio', 'code', 'github', 'strongest', 'best'],
    answer: `Highlighted projects:\n${profile.caseStudies
      .filter((c) => (profile.featuredSlugs as readonly string[]).includes(c.slug))
      .map((c) => `- ${c.title}: ${c.highlight} (/projects/${c.slug}/)`)
      .join('\n')}\n\nAll ${profile.caseStudies.length}+ projects are on the Projects page (/projects/).`,
  },
  {
    keywords: ['education', 'degree', 'university', 'asu', 'masters', 'mscs', 'school', 'study', 'gpa', 'college', 'pes'],
    answer: `Education:\n${edu}`,
  },
  {
    keywords: ['award', 'certification', 'certificate', 'achievement', 'recognition', 'best paper', 'iso', 'mit'],
    answer: `Awards & certifications:\n${awards}`,
  },
  {
    keywords: ['volunteer', 'community', 'seva', 'teaching', 'social'],
    answer: `Community work:\n${volunteering}`,
  },
  {
    keywords: ['security', 'cybersecurity', 'ai security', 'llm', 'morpheus', 'nist', 'appsec', 'burp'],
    answer: `Yes — AI + security is Rohan's core focus. At HPE he architected AI-driven cybersecurity defenses using the NVIDIA Morpheus pipeline, worked on Web LLM attack mitigation with Burp Suite, mapped controls to NIST frameworks, and wrote white papers on securing large language models and container runtime security. He is ISO 27001 Lead Auditor trained.`,
  },
  {
    keywords: ['contact', 'email', 'reach', 'hire', 'hiring', 'available', 'availability', 'linkedin', 'connect', 'resume', 'cv'],
    answer: `You can reach Rohan through the "Say Hi!" form on the home page, connect on LinkedIn (${profile.links.linkedin}), or download his resume at ${profile.links.resume}. He is pursuing his MSCS at ASU (Spring 2026 cohort) and is targeting internships and full-time roles.`,
  },
  {
    keywords: ['skill', 'stack', 'technology', 'language', 'python', 'c++', 'java', 'quantum', 'ml', 'machine learning'],
    answer: `Core skills: AI/ML (PyTorch, Hugging Face, XGBoost, federated learning), cybersecurity (NVIDIA Morpheus, NIST, Burp Suite, ISO 27001), systems (C++, Linux, CMake), data engineering (Kafka, Spark, Docker), plus Python, Java, and Go. He also studies quantum computing (MIT xPRO certificate) and post-quantum cryptography.`,
  },
];

export function localAnswer(question: string): string {
  const q = question.toLowerCase();
  let best: Topic | null = null;
  let bestScore = 0;
  for (const t of topics) {
    const score = t.keywords.reduce((acc, k) => acc + (q.includes(k) ? (k.length > 4 ? 2 : 1) : 0), 0);
    if (score > bestScore) {
      bestScore = score;
      best = t;
    }
  }
  if (best && bestScore > 0) return best.answer;
  return `I can answer questions about Rohan's experience, projects, research, education, skills, and awards. Try one of the suggested questions — or browse the Projects (/projects/) and Research (/research/) pages. For anything else, use the "Say Hi!" form on the home page.`;
}
