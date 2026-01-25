import { profile } from "./profile";

export type ActivityLink = { label: string; href: string };
export type Activity = {
  id: string;
  date: string; // ISO-like for sorting (YYYY-MM-DD)
  when: string; // display string (e.g., "Jun 2024")
  category: "Education" | "Volunteering" | "Edu‑Ventures" | "Corporate" | "Research" | "Certification";
  title: string;
  subtitle?: string;
  description: string;
  location?: string;
  highlights?: string[];
  images: string[];
  links?: ActivityLink[];
};

// Default placeholders (used when you haven't added your own photos yet)
const placeholders = [
  "/images/activities/travel-1.svg",
  "/images/activities/travel-2.svg",
  "/images/activities/travel-3.svg",
];

const pick = (seed: number, extra?: string) => {
  const base = [
    placeholders[(seed + 0) % placeholders.length],
    placeholders[(seed + 3) % placeholders.length],
    placeholders[(seed + 6) % placeholders.length],
  ];
  return extra ? [extra, ...base.slice(0, 2)] : base;
};

const fmtMonthYear = (isoDate: string) => {
  // Ensure predictable parsing across environments
  const d = new Date(`${isoDate}T00:00:00`);
  return new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(d);
};

// Date maps (approximate where not explicitly provided)
const corporateDates: Record<string, string> = {
  "Rewards and Recognition": "2024-07-01",
  "HPE Young Employee Networking (YEN)": "2024-06-01",
  "Toastmasters Club - TM@DC": "2024-05-01",
  "Earth Day 2024": "2024-04-22",
  "Champions Ranch Outing": "2024-03-01",
};

const volunteeringDates: Record<string, string> = {
  "Youth For Seva (YFS) - Chiguru Volunteer": "2024-03-01",
  "Youth For Seva (YFS) - NMMS Teaching Volunteer": "2023-11-01",
  "U&I Trust - Spoken English Teaching Volunteer": "2023-08-01",
  "U&I Trust Pan-India Fundraiser Leader Volunteer": "2023-09-01",
  "Hewlett Packard Enterprise (HPE) Coporate Social Responsibiliy (CSR) Activities": "2024-06-15",
  "Youth For Seva (YFS) Mitra Award Recipient": "2024-09-29",
};

const eduDates: Record<string, string> = {
  "CERN Study Visit — Large Hadron Collider (LHC) Experience": "2016-10-01",
  "USA School Trip": "2015-10-01",
};

// Location maps (you can edit these anytime for accuracy)
const corporateLocations: Record<string, string> = {
  "Rewards and Recognition": "Bengaluru, India",
  "HPE Young Employee Networking (YEN)": "Bengaluru, India",
  "Toastmasters Club - TM@DC": "Bengaluru, India",
  "Earth Day 2024": "Bengaluru, India",
  "Champions Ranch Outing": "Bengaluru, India",
};

const volunteeringLocations: Record<string, string> = {
  "Youth For Seva (YFS) - Chiguru Volunteer": "Bengaluru, India",
  "Youth For Seva (YFS) - NMMS Teaching Volunteer": "Bengaluru, India",
  "U&I Trust - Spoken English Teaching Volunteer": "Bengaluru, India",
  "U&I Trust Pan-India Fundraiser Leader Volunteer": "Bengaluru, India",
  "Hewlett Packard Enterprise (HPE) Coporate Social Responsibiliy (CSR) Activities": "Bengaluru, India",
  "Youth For Seva (YFS) Mitra Award Recipient": "Bengaluru, India",
};

const eduLocations: Record<string, string> = {
  // Based on your profile story: NASA KSC (2015) + CERN Geneva (2016)
  "USA School Trip": "Kennedy Space Center, FL",
  "CERN Study Visit — Large Hadron Collider (LHC) Experience": "CERN, Geneva, Switzerland",
};

const asuActivity: Activity = {
  id: "asu-mscs-spring-2026",
  date: "2026-01-01",
  when: fmtMonthYear("2026-01-01"),
  category: "Education",
  title: "Joined Arizona State University (ASU) — MS in Computer Science",
  subtitle: "Tempe, Arizona · Agentic AI, ML, Quantum, and C++ systems",
  description:
    "Started my MSCS at ASU with a focus on agentic AI systems, machine learning, quantum computing, and systems-level engineering in C++. I’m turning advanced coursework into portfolio-grade projects at the intersection of cybersecurity and AI — where learning becomes leverage.",
  location: "Tempe, AZ",
  images: ["/images/activities/asu/1.jpg"],
  // links removed to avoid exposing email/resume in source; use the Home "Say Hi!" form instead.
};

const corporate: Activity[] = (profile.corporateActivities || []).map((c: any, idx: number) => {
  const date = corporateDates[c.title] || "2024-01-01";
  const images =
    (Array.isArray(c.images) && c.images.length ? c.images : null) ||
    pick(6 + idx, c.image);

  return {
    id: `corp-${idx}-${c.title}`.replace(/\s+/g, "-").toLowerCase(),
    date,
    when: fmtMonthYear(date),
    category: "Corporate",
    title: c.title,
    description: c.description,
    location: c.location || corporateLocations[c.title],
    images,
  };
});

const volunteering: Activity[] = (profile.volunteering || []).map((v: any, idx: number) => {
  const date = volunteeringDates[v.org] || "2023-01-01";
  const images =
    (Array.isArray(v.images) && v.images.length ? v.images : null) ||
    pick(3 + idx, v.image);

  return {
    id: `vol-${idx}-${v.org}`.replace(/\s+/g, "-").toLowerCase(),
    date,
    when: fmtMonthYear(date),
    category: "Volunteering",
    title: v.org,
    description: v.description || "",
    location: v.location || volunteeringLocations[v.org],
    images,
  };
});

const edu: Activity[] = (profile.eduVentures || []).map((e: any, idx: number) => {
  const date = eduDates[e.title] || "2015-01-01";
  const images =
    (Array.isArray(e.images) && e.images.length ? e.images : null) ||
    pick(9 + idx, e.image);

  return {
    id: `edu-${idx}-${e.title}`.replace(/\s+/g, "-").toLowerCase(),
    date,
    when: fmtMonthYear(date),
    category: "Edu‑Ventures",
    title: e.title,
    description: e.description,
    location: e.location || eduLocations[e.title],
    images,
  };
});


// LinkedIn post highlights mapped 1:1 to the Activities timeline
const linkedInPostActivities: Activity[] = [
  {
    id: "li-0-mit-xpro-quantum-algorithms-for-cybersecurity",
    date: "2025-04-20",
    when: "April 2025",
    category: "Education",
    title: "MIT xPRO — Quantum Algorithms for Cybersecurity",
    description: "I completed MIT xPRO’s Quantum Algorithms for Cybersecurity, applying quantum techniques to security, optimization, and real‑world problem framing.",
    location: "Online",
    links: [
      {
        label: "View on LinkedIn",
        href: "https://www.linkedin.com/in/rohan-chandrashekar1/recent-activity/all/",
      },
    ],
    images: ["/images/activities/quantum/3.jpg"],
  },
  {
    id: "li-1-mit-xpro-introduction-to-quantum-computing",
    date: "2025-03-05",
    when: "March 2025",
    category: "Education",
    title: "MIT xPRO — Introduction to Quantum Computing",
    description: "I completed MIT xPRO’s Introduction to Quantum Computing, strengthening my fundamentals in qubits, gates, measurement, and quantum intuition.",
    location: "Online",
    links: [
      {
        label: "View on LinkedIn",
        href: "https://www.linkedin.com/in/rohan-chandrashekar1/recent-activity/all/",
      },
    ],
    images: ["/images/activities/quantum/2.jpg"],
  },
  {
    id: "li-2-mit-xpro-quantum-computing-fundamentals-program",
    date: "2025-04-05",
    when: "April 2025",
    category: "Education",
    title: "MIT xPRO — Quantum Computing Fundamentals Program",
    description: "I completed the MIT xPRO Quantum Computing Fundamentals Program, building a solid base across quantum concepts, tools, and practical applications.",
    location: "Online",
    links: [
      {
        label: "View on LinkedIn",
        href: "https://www.linkedin.com/in/rohan-chandrashekar1/recent-activity/all/",
      },
    ],
    images: ["/images/activities/quantum/1.jpg"],
  },
  {
    id: "li-3-iso-27001-lead-auditor-certification",
    date: "2025-02-10",
    when: "February 2025",
    category: "Education",
    title: "ISO 27001 — Lead Auditor Certification",
    description: "I earned the ISO 27001 Lead Auditor certification, sharpening my ISMS audit mindset across controls, risk, compliance, and evidence‑based reporting.",
    location: "Bengaluru, India",
    links: [
      {
        label: "View on LinkedIn",
        href: "https://www.linkedin.com/in/rohan-chandrashekar1/recent-activity/all/",
      },
    ],
    images: [
              "/images/activities/iso/1.jpeg",
              "/images/activities/iso/2.jpeg",
],
  },
  {
    id: "li-4-hpe-parasparam-2024-diverse-minds-boundless-creativity",
    date: "2024-11-10",
    when: "November 2024",
    category: "Corporate",
    title: "HPE Parasparam 2024 — Diverse Minds, Boundless Creativity",
    description: "I showcased work and ideas at HPE Parasparam 2024, engaging with cross‑team innovation and celebrating diverse thinking through impactful problem‑solving.",
    location: "Bengaluru, India",
    links: [
      {
        label: "View on LinkedIn",
        href: "https://www.linkedin.com/in/rohan-chandrashekar1/recent-activity/all/",
      },
    ],
    images: [
              "/images/activities/hpe parasparam/1.jpeg",
              "/images/activities/hpe parasparam/2.jpeg",
],
  },
  {
    id: "li-5-hpe-internship-completed-6-month-journey",
    date: "2024-08-25",
    when: "August 2024",
    category: "Corporate",
    title: "HPE Internship — Completed 6‑Month Journey",
    description: "I successfully completed a 6‑month cybersecurity internship at Hewlett Packard Enterprise, contributing to security engineering work and strengthening hands‑on delivery skills.",
    location: "Bengaluru, India",
    links: [
      {
        label: "View on LinkedIn",
        href: "https://www.linkedin.com/in/rohan-chandrashekar1/recent-activity/all/",
      },
    ],
    images: ["/images/activities/hpe internship completion/1.jpg"],
  },
  {
    id: "li-6-youth-for-seva-mitra-award-50-hours",
    date: "2024-10-10",
    when: "October 2024",
    category: "Volunteering",
    title: "Youth For Seva — Mitra Award (50+ Hours)",
    description: "I received the Youth For Seva Mitra Award for 50+ hours of community volunteering, reflecting consistent commitment and service‑driven leadership.",
    location: "Bengaluru, India",
    links: [
      {
        label: "View on LinkedIn",
        href: "https://www.linkedin.com/in/rohan-chandrashekar1/recent-activity/all/",
      },
    ],
    images: [
              "/images/activities/yfs mitra/1.jpeg",
              "/images/activities/yfs mitra/2.jpeg",
],
  },
  {
    id: "li-7-hpe-joined-full-time-after-internship",
    date: "2024-09-05",
    when: "September 2024",
    category: "Corporate",
    title: "HPE — Joined Full‑Time After Internship",
    description: "After my internship, I joined Hewlett Packard Enterprise full‑time as a Technical Solutions Consultant in Cybersecurity, moving from learning mode to owning real outcomes.",
    location: "Bengaluru, India",
    links: [
      {
        label: "View on LinkedIn",
        href: "https://www.linkedin.com/in/rohan-chandrashekar1/recent-activity/all/",
      },
    ],
    images: [
              "/images/activities/hpe full time/1.jpeg",
              "/images/activities/hpe full time/2.jpeg",
              "/images/activities/hpe full time/3.jpeg",
              "/images/activities/hpe full time/4.jpeg",
              "/images/activities/hpe full time/5.jpeg",
              "/images/activities/hpe full time/6.jpeg",
              "/images/activities/hpe full time/7.jpeg",
              "/images/activities/hpe full time/8.jpeg",
              "/images/activities/hpe full time/9.jpeg",
              "/images/activities/hpe full time/10.jpeg",
              "/images/activities/hpe full time/11.jpeg",
],
  },
  {
    id: "li-8-hpe-independence-day-2024-quiz-winner",
    date: "2024-08-15",
    when: "August 2024",
    category: "Corporate",
    title: "HPE Independence Day 2024 — Quiz Winner",
    description: "I won an Independence Day 2024 quiz at HPE, blending curiosity and teamwork into a fun, high‑energy win.",
    location: "Bengaluru, India",
    links: [
      {
        label: "View on LinkedIn",
        href: "https://www.linkedin.com/in/rohan-chandrashekar1/recent-activity/all/",
      },
    ],
    images: [
              "/images/activities/hpe independence day/1.jpeg",
              "/images/activities/hpe independence day/2.jpeg",
],
  },
  {
    id: "li-9-hpe-best-new-joinee-recognition",
    date: "2024-08-05",
    when: "August 2024",
    category: "Corporate",
    title: "HPE — Best New Joinee Recognition",
    description: "I was recognized as the Best New Joinee at Hewlett Packard Enterprise, a proud early signal of impact and execution.",
    location: "Bengaluru, India",
    links: [
      {
        label: "View on LinkedIn",
        href: "https://www.linkedin.com/in/rohan-chandrashekar1/recent-activity/all/",
      },
    ],
    images: [
              "/images/activities/hpe rr/1.jpeg",
              "/images/activities/hpe rr/2.jpeg",
],
  },
  {
    id: "li-10-hpe-intern-day-2024-team-moments",
    date: "2024-07-10",
    when: "July 2024",
    category: "Corporate",
    title: "HPE Intern Day 2024 — Team Moments",
    description: "I celebrated Intern Day 2024 at HPE, reflecting on team collaboration, learning moments, and the sprint of shipping meaningful work.",
    location: "Bengaluru, India",
    links: [
      {
        label: "View on LinkedIn",
        href: "https://www.linkedin.com/in/rohan-chandrashekar1/recent-activity/all/",
      },
    ],
    images: [
              "/images/activities/hpe intern day/1.jpeg",
              "/images/activities/hpe intern day/2.jpeg",
              "/images/activities/hpe intern day/3.jpeg",
],
  },
  {
    id: "li-11-hpe-csr-government-school-outreach",
    date: "2024-06-20",
    when: "June 2024",
    category: "Corporate",
    title: "HPE CSR — Government School Outreach",
    description: "I participated in an HPE CSR outreach for a government school—supporting students with stationery/snacks and creating an energizing learning experience.",
    location: "Bengaluru, India",
    links: [
      {
        label: "View on LinkedIn",
        href: "https://www.linkedin.com/in/rohan-chandrashekar1/recent-activity/all/",
      },
    ],
    images: ["/images/activities/hpe csr/1.png"],
  },
  {
    id: "li-12-hpe-pride-community-inclusion",
    date: "2024-06-10",
    when: "June 2024",
    category: "Corporate",
    title: "HPE Pride — Community & Inclusion",
    description: "I joined HPE Pride celebrations, supporting inclusion and allyship while appreciating the power of community in the workplace.",
    location: "Bengaluru, India",
    links: [
      {
        label: "View on LinkedIn",
        href: "https://www.linkedin.com/in/rohan-chandrashekar1/recent-activity/all/",
      },
    ],
    images: [
              "/images/activities/hpe pride/1.jpeg",
              "/images/activities/hpe pride/2.jpeg",
              "/images/activities/hpe pride/3.jpeg",
],
  },
  {
    id: "li-13-hpe-tmad-team-member-appreciation-day",
    date: "2024-05-20",
    when: "May 2024",
    category: "Corporate",
    title: "HPE TMAD — Team Member Appreciation Day",
    description: "I took part in HPE’s Team Member Appreciation Day - TMAD event, recognizing the people and culture that make high‑performing teams possible.",
    location: "Bengaluru, India",
    links: [
      {
        label: "View on LinkedIn",
        href: "https://www.linkedin.com/in/rohan-chandrashekar1/recent-activity/all/",
      },
    ],
    images: [
              "/images/activities/hpe tmad/1.jpeg",
              "/images/activities/hpe tmad/2.jpeg",
              "/images/activities/hpe tmad/3.jpeg",
              "/images/activities/hpe tmad/4.jpeg",
],
  },
  {
    id: "li-14-aws-educate-introduction-to-cloud-101",
    date: "2023-02-01",
    when: "February 2023",
    category: "Certification",
    title: "AWS Educate — Introduction to Cloud 101 (Certification)",
    description: "Earned the AWS Educate Introduction to Cloud 101 credential, strengthening my cloud fundamentals across core services, deployment basics, and security-aware cloud principles.",
    location: "Online",
    links: [
      {
        label: "View on LinkedIn",
        href: "https://www.linkedin.com/in/rohan-chandrashekar1/recent-activity/all/",
      },
    ],
    images: ["/images/activities/aws educate/1.png"],
  },
  {
    id: "li-15-linux-foundation-lfd103-kernel-development",
    date: "2022-02-01",
    when: "February 2022",
    category: "Certification",
    title: "Linux Foundation — LFD103: Linux Kernel Development (Certification)",
    description: "Completed the Linux Foundation LFD103 certification track, diving into kernel internals, low-level systems concepts, and disciplined engineering workflows. gaining deeper exposure to low‑level systems and kernel internals.",
    location: "Online",
    links: [
      {
        label: "View on LinkedIn",
        href: "https://www.linkedin.com/in/rohan-chandrashekar1/recent-activity/all/",
      },
    ],
    images: ["/images/activities/lfd/1.png"],
  },
  {
    id: "li-18-google-project-management-foundations",
    date: "2024-04-10",
    when: "April 2024",
    category: "Education",
    title: "Google — Project Management Foundations",
    description: "I completed Google’s Project Management Foundations, building structured thinking around planning, stakeholders, and execution discipline.",
    location: "Online",
    links: [
      {
        label: "View on LinkedIn",
        href: "https://www.linkedin.com/in/rohan-chandrashekar1/recent-activity/all/",
      },
    ],
    images: ["/images/activities/google/1.jpg"],
  },
  {
    id: "li-19-wharton-online-personal-professional-success",
    date: "2024-03-20",
    when: "March 2024",
    category: "Education",
    title: "Wharton Online — Personal & Professional Success",
    description: "Completed Wharton Online’s 4‑course ‘Achieving Personal and Professional Success’ specialization, covering: Success, Improving Communication Skills, Influence, and Negotiations — sharpening my goal-setting, communication, and influence toolkit for high-impact work. sharpening leadership habits, resilience, and goal execution.",
    location: "Online",
    links: [
      {
        label: "View on LinkedIn",
        href: "https://www.linkedin.com/in/rohan-chandrashekar1/recent-activity/all/",
      },
    ],
    images: ["/images/activities/wharton/1.jpg"],
  },
  {
    id: "li-20-hpe-started-internship-cybersecurity",
    date: "2024-02-25",
    when: "February 2024",
    category: "Corporate",
    title: "HPE — Started Internship (Cybersecurity)",
    description: "I started my cybersecurity internship at Hewlett Packard Enterprise in February 2024, stepping into hands‑on security work and rapid learning.",
    location: "Bengaluru, India",
    links: [
      {
        label: "View on LinkedIn",
        href: "https://www.linkedin.com/in/rohan-chandrashekar1/recent-activity/all/",
      },
    ],
    images: [
              "/images/activities/hpe internship/1.jpeg",
              "/images/activities/hpe internship/2.jpeg",
              "/images/activities/hpe internship/3.jpeg",
],
  },
  {
    id: "li-21-cybersecurity-internship-sattva-human-hpe",
    date: "2024-01-15",
    when: "January 2024",
    category: "Corporate",
    title: "Cybersecurity Internship — Sattva Human @ HPE",
    description: "Worked on Cybersecurity + AI during my internship (Sattva Human @ HPE), with a hands‑on focus on LLM security — including prompt‑injection testing against GPT‑4 to validate guardrails, identify bypass patterns, and document mitigations. gaining early exposure to real security problems and the rhythm of industry delivery.",
    location: "Bengaluru, India",
    links: [
      {
        label: "View on LinkedIn",
        href: "https://www.linkedin.com/in/rohan-chandrashekar1/recent-activity/all/",
      },
    ],
    images: [
              "/images/activities/sattva/1.jpg",
              "/images/activities/sattva/2.jpeg",
              "/images/activities/sattva/3.jpeg",
],
  },
  {
    id: "li-22-u-i-crowdfunding-1-76-cr-raised",
    date: "2024-03-05",
    when: "March 2024",
    category: "Volunteering",
    title: "U&I Crowdfunding — ₹1.76 Cr Raised",
    description: "Served as a national‑level leader for U&I’s crowdfunding campaign, coordinating and executing on‑ground fundraising across Bengaluru — from city activations to awareness drives — helping raise ₹1.76 Cr (≈$212K USD) to support underprivileged children’s education. driving outreach and execution that contributed to a record ₹1.76 crore raised for education programs.",
    location: "Bengaluru, India",
    links: [
      {
        label: "View on LinkedIn",
        href: "https://www.linkedin.com/in/rohan-chandrashekar1/recent-activity/all/",
      },
    ],
    images: [
              "/images/activities/u&i crowdfunding/1.jpeg",
              "/images/activities/u&i crowdfunding/2.jpeg",
              "/images/activities/u&i crowdfunding/3.jpeg",
              "/images/activities/u&i crowdfunding/4.jpeg",
],
  },
  {
    id: "li-23-youth-for-seva-chiguru-2024-volunteer",
    date: "2024-02-20",
    when: "February 2024",
    category: "Volunteering",
    title: "Youth For Seva — Chiguru 2024 Volunteer",
    description: "I volunteered at Youth For Seva’s Chiguru 2024 fest, supporting students through creative activities, coordination, and a joyful learning environment.",
    location: "Bengaluru, India",
    links: [
      {
        label: "View on LinkedIn",
        href: "https://www.linkedin.com/in/rohan-chandrashekar1/recent-activity/all/",
      },
    ],
    images: [
              "/images/activities/yfs chiguru/1.jpeg",
              "/images/activities/yfs chiguru/2.jpeg",
              "/images/activities/yfs chiguru/3.jpeg",
              "/images/activities/yfs chiguru/4.jpeg",
],
  },
  {
    id: "li-24-u-i-trust-spoken-english-volunteer",
    date: "2024-02-05",
    when: "February 2024",
    category: "Volunteering",
    title: "U&I Trust — Spoken English Volunteer",
    description: "Volunteered 40+ hours with U&I Trust, training underprivileged children in Spoken English — focusing on vocabulary, confidence, and real-world communication through structured practice. improving students’ confidence and communication through consistent mentoring.",
    location: "Bengaluru, India",
    links: [
      {
        label: "View on LinkedIn",
        href: "https://www.linkedin.com/in/rohan-chandrashekar1/recent-activity/all/",
      },
    ],
    images: [
              "/images/activities/u&i spoken english/1.jpeg",
              "/images/activities/u&i spoken english/2.jpeg",
],
  },
  {
    id: "li-25-youth-for-seva-nmms-stem-teaching",
    date: "2024-01-05",
    when: "January 2024",
    category: "Volunteering",
    title: "Youth For Seva — NMMS STEM Teaching",
    description: "Taught STEM and mental‑ability fundamentals to government‑school students preparing for the National Merit‑cum‑Means Scholarship (NMMS) exam. I broke down problem‑solving into simple, repeatable strategies (speed math, reasoning patterns, and exam tactics), and focused on building confidence in students who had limited access to resources — turning “I can’t” into “watch me.” helping students from underserved backgrounds build critical thinking and exam readiness.",
    location: "Bengaluru, India",
    links: [
      {
        label: "View on LinkedIn",
        href: "https://www.linkedin.com/in/rohan-chandrashekar1/recent-activity/all/",
      },
    ],
    images: [
              "/images/activities/yfs nmms/1.jpeg",
              "/images/activities/yfs nmms/2.jpeg",
              "/images/activities/yfs nmms/3.jpeg",
              "/images/activities/yfs nmms/4.jpeg",
],
  },
  {
    id: "li-26-coconet-2023-mental-health-nlp-paper",
    date: "2023-12-01",
    when: "December 2023",
    category: "Research",
    title: "CoCoNet 2023 — Mental Health NLP Paper",
    description: "I presented the research paper ‘Mental Health in the Digital Era: NLP Models for Depression and Suicidal Tendency Detection’ at the Fifth International Conference on Computing and Network Communications (CoCoNet’23).",
    location: "Bengaluru, India",
    links: [
      {
        label: "View on LinkedIn",
        href: "https://www.linkedin.com/in/rohan-chandrashekar1/recent-activity/all/",
      },
    ],
    images: [
              "/images/activities/nlp/1.jpeg",
              "/images/activities/nlp/2.jpeg",
],
  },
  {
    id: "li-27-coconet-2023-lightning-talk-quantum-crypto",
    date: "2023-11-01",
    when: "November 2023",
    category: "Research",
    title: "CoCoNet 2023 — Lightning Talk (Quantum & Crypto)",
    description: "Delivered a lightning talk at the Fifth International Conference on Computing and Network Communications (CoCoNet 2023), exploring why classical public‑key cryptography (like RSA) struggles against quantum capabilities, and how to quantum‑proof private data using NIST-aligned Post‑Quantum Cryptography (PQC) migration thinking.",
    location: "Bengaluru, India",
    links: [
      {
        label: "View on LinkedIn",
        href: "https://www.linkedin.com/in/rohan-chandrashekar1/recent-activity/all/",
      },
    ],
    images: [
              "/images/activities/lightning/1.jpeg",
              "/images/activities/lightning/2.jpeg",
],
  },
  {
    id: "li-28-ieee-mrtm-2023-best-paper-award-pyedit-pro",
    date: "2023-09-01",
    when: "September 2023",
    category: "Research",
    title: "IEEE International Conference on Multidisciplinary Research in Technology and Management (IEEE MRTM) — Best Paper Award (PyEdit Pro)",
    description: "Received the Best Paper Award at the IEEE International Conference on Multidisciplinary Research in Technology and Management (IEEE MRTM), Bengaluru, for “PyEdit Pro” — an advanced Python text editor focused on usability and engineering depth.",
    location: "Bengaluru, India",
    links: [
      {
        label: "View on LinkedIn",
        href: "https://www.linkedin.com/in/rohan-chandrashekar1/recent-activity/all/",
      },
    ],
    images: [
              "/images/activities/ieee/1.jpeg",
              "/images/activities/ieee/2.jpeg",
              "/images/activities/ieee/3.jpeg",
              "/images/activities/ieee/4.jpeg",
              "/images/activities/ieee/5.jpeg",
              "/images/activities/ieee/6.jpeg",
],

  },
  {
    id: "li-29-nasa-ksc-2015-robotics-workshop",
    date: "2015-10-01",
    when: "October 2015",
    category: "Edu‑Ventures",
    title: "NASA KSC 2015 — Robotics Workshop",
    description: "I attended a 3‑day robotics workshop at NASA’s Kennedy Space in Florida USA. An early spark for engineering, exploration, and big‑dream curiosity.",
    location: "Florida, USA",
    links: [
      {
        label: "View on LinkedIn",
        href: "https://www.linkedin.com/in/rohan-chandrashekar1/recent-activity/all/",
      },
    ],
    images: [
              "/images/activities/nasa/1.jpeg",
              "/images/activities/nasa/2.jpeg",
              "/images/activities/nasa/3.jpeg",
],

  }
];

export const activities: Activity[] = [
  asuActivity,
  ...linkedInPostActivities,
  // Keep the CERN trip entry as-is
  ...edu.filter((a) => a.title === "CERN Study Visit — Large Hadron Collider (LHC) Experience" || (a.location || "").toLowerCase().includes("cern")),
].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));