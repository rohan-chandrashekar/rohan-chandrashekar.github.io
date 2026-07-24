export const profile = {
  name: "Rohan Chandrashekar",
  pronoun: "he/him",
  role: "Technical Solutions Consultant",
  brandTagline: "Cybersecurity AI · Automation · Research",
  tagline:
    "Engineer by degree, innovator by heart — from research to real-world solutions, I'm ready to design the future of tech!",
  location: "Tempe, AZ (ASU) · Bengaluru, India",
  contactEmail: "rchand56@asu.edu",

  links: {
    github: "https://github.com/rohan-chandrashekar",
    linkedin: "https://in.linkedin.com/in/rohan-chandrashekar1",
    handshake: "https://asu.joinhandshake.com/profiles/rohan-chandrashekar",
    resume: "/resume.pdf",
  },

  // V2 recruiter-first hero
  heroV2: {
    oneLiner: "MSCS @ ASU (4.0 GPA) · ex-HPE Cybersecurity & AI · 3 publications · IEEE Best Paper '23",
    intro:
      "I build AI-driven security systems — from NVIDIA Morpheus cyber-defense pipelines at HPE to agentic multi-agent architectures, with research spanning NLP, federated learning, and post-quantum cryptography.",
    chips: ["Agentic AI", "Cybersecurity", "ML Research", "C++ Systems", "Quantum"],
  },

  // Slugs of case studies featured on the homepage and top of /projects
  featuredSlugs: [
    "go-sluice-telemetry",
    "5g-network-slicing",
    "pitwall-ai",
    "kubemedic",
  ],

  hero: {
    greeting: "Hello World! I'm Rohan.",
    paragraphs: [
      "I am currently a Master of Science in Computer Science (MSCS) student at Arizona State University (ASU), joining the Spring 2026 cohort.",
      "Previously, I served as a Technology Solutions Consultant at Hewlett Packard Enterprise (HPE). During my tenure, I architected AI-driven cybersecurity defenses using NVIDIA Morpheus Pipeline, mitigated Web LLM vulnerabilities, and integrated NIST frameworks into enterprise automation workflows.",
      "My current focus is on the frontier of Agentic AI. I am designing autonomous multi-agent architectures that move beyond simple inference to complex, reasoning-based execution. My work also leverages modern C++ to optimize models for high-performance environments, while I study Quantum Computing and explore post-Quantum Cryptography to future-proof these systems for the next era of security.",
    ],
    heroImage: {
      src: "/images/hero.jpg",
      alt: "Corporate photo",
    },
  },

  homeSection: {
    title: "A glimpse into my journey: Capturing milestones and experiences",
    subtitle: "Highlights:",
    highlights: [
      "July 2026: 🎙️ Presenting the InfluxData webinar “Building an Agentic F1 Strategy Engine with InfluxDB 3” — showcasing PitWall-AI 🏎️",
      "April 2026: 🌱 Built ECOpath, a carbon-aware agentic route planner, at a hackathon 🏁",
      "January 2026: 🎓 Started my Master of Science in Computer Science (MSCS) at Arizona State University (ASU) — Tempe, Arizona, USA 🇺🇸",
      "April 2025: 🎓 Completed the MIT xPRO Quantum Computing Fundamentals Program ⚛️ — strengthening my foundation in quantum algorithms and applications 🚀",
      "October 2024: 🏅 Awarded the Youth For Seva (YFS) Mitra Award for community volunteering ❤️",
      "September 2024: 💼 Joined Hewlett Packard Enterprise (HPE) as a Technical Solutions Consultant (Cybersecurity) 🔐",
      "July 2024: 🌟 Recognized as the Best New Joiner (among 400+ peers) at Hewlett Packard Enterprise (HPE) 🏆",
      "February 2024: 🚀 Started my internship at Hewlett Packard Enterprise (HPE) — Cybersecurity / AppSec 🔍",
      "December 2023: ✍️ Presented my research paper “Mental Health in the Digital Era — NLP Models for Depression and Suicidal Tendency Detection” 🧠💡 at the Fifth International Conference on Computing and Network Communications (CoCoNet 2023)",
      "December 2023: ⚡ Delivered a lightning talk on “Emerging Trends in Quantum Computing and Cryptography” 🧑‍💻🔐 at the Fifth International Conference on Computing and Network Communications (CoCoNet 2023)",
      "November 2023: 🧑‍🏫 Volunteered with Youth For Seva (YFS) & U&I Trust — teaching STEM 📚 and Spoken English 📖, plus cultural carnival 🎨🎤 and fundraising 💰",
      "September 2023: 🏆 Best Paper Award for “PyEdit Pro: The Ultimate Advanced Text Editor — Empowering Text Editing Experience” ✍️ at the IEEE International Conference on Multidisciplinary Research in Technology and Management (IEEE MRTM)",
      "October 2016: 🧪 Visited CERN in Geneva, Switzerland 🇨🇭 — attended a workshop and saw the Large Hadron Collider (LHC) ⚛️",
      "January 2016: 🏏 Won the BTR 2nd Division Under‑14 Cricket Tournament representing Delhi Public School Bangalore North (DPS‑BN) 🥈",
      "October 2015: 🤖 Attended a 3‑day Robotics workshop at NASA’s Kennedy Space Center 🚀✨ — where my love for innovation and exploration took flight 🌌",
    ],
  },

  experience: [
    {
      org: "Hewlett Packard Enterprise (HPE)",
      logo: "/images/org/hpe.png",
      title: "Technical Solutions Consultant",
      team: "Automation & Cybersecurity AI",
      start: "Sep 2024",
      end: "May 2025",
      highlights: [
        "Built and delivered a customer PoC for AI-enabled email Data Loss Prevention on the NVIDIA Morpheus pipeline — Kafka ingestion, Morpheus pre/post-processing, and Triton-served Llama 2 inference, visualized in a custom web UI (team of 2, lead).",
        "Developed a Sensitive Information Detection workflow with a fine-tuned BERT Mini model — MLDM data pipelines, MLDE training and model registry, Triton/KServe serving, Kafka streaming, and Splunk integration, with a continual-learning loop.",
        "Stood up the full platform end-to-end on HPE DL380a-class GPU servers: Ubuntu, RKE2 Kubernetes, Rook Ceph, MetalLB, NVIDIA GPU Operator, and KServe — deployed via Ansible AWX workflow templates and managed as Helm releases.",
        "Sole author of all 30+ Ansible AWX playbooks for HPE's SQuest Everything-as-a-Service accelerator — SBOM generation, vulnerability scanning, OWASP Nettacker integration, and deployment automation — collaborating with the France team via code reviews.",
        "Served on the frontline response team securing company assets and firewalls during the July 2024 CrowdStrike outage.",
        "Recognized as Best New Joiner among 400+ peers.",
      ],
    },
    {
      org: "Hewlett Packard Enterprise (HPE)",
      logo: "/images/org/hpe.png",
      title: "Intern - Technical Consultant",
      team: "Cybersecurity & AI",
      start: "Feb 2024",
      end: "Aug 2024",
      highlights: [
        "Built a firewall configuration migration tool (Python regex parsers + web UI) covering 5 vendors — Cisco, Palo Alto, Fortinet, Check Point, Juniper — estimated by senior network engineers to cut manual migration effort by ~50%; adopted by engineers after handoff.",
        "Built an SBOM generation + vulnerability-scanning pipeline and OWASP Nettacker VAPT automation, later incorporated into HPE's SQuest accelerator.",
        "Researched Web LLM attack surfaces with Burp Suite and prototyped a chatbot for summarizing cybersecurity documents, mapping controls to NIST frameworks.",
        "Authored 2 award-winning internal technical white papers (HPE Parasparam 2024) on securing LLMs and container runtime security.",
      ],
    },
    {
      org: "Sattva Human",
      logo: "/images/org/sattva.png",
      title: "Intern - Technical Consultant",
      team: "Cybersecurity",
      start: "Jan 2024",
      end: "Feb 2024",
      highlights: [
        "Built a retrieval-augmented QA system over a large corpus of cybersecurity documentation using an Ollama-served LLM with a Pinecone vector database — reducing manual search time by ~40% per engineer feedback.",
      ],
    },
  ],

  education: [
    {
      school: "Arizona State University",
      logo: "/images/org/asu.jpeg",
      degree: "Master of Science (MS)",
      notes: "Computer Science (CS) · GPA 4.0/4.0",
      when: "Jan 2026",
    },
    {
      school: "PES University",
      degree: "Bachelor of Technology (B.Tech)",
      notes: "Computer Science and Engineering (CSE)",
      when: "Dec 2020 – Aug 2024",
      hideLogo: true,
      logo: null,
    },
    {
      school: "Deeksha Center for Learning (DCFL) PU College",
      degree: "Science",
      notes: "Pre-University",
      when: "May 2018 – Jun 2020",
      hideLogo: true,
      logo: null,
    },
    {
      school: "Delhi Public School Bangalore North",
      logo: "/images/org/dps.jpeg",
      degree: "School",
      when: "Jun 2006 – Mar 2018",
    },
  ],

  research: [
    {
      title: "PyEdit Pro- The Ultimate Advanced Text Editor in Python - Empowering Text Editing Experience",
      summary:
        "An award-winning Python-based advanced text editor that pairs clean software architecture with UX-first features to speed up real-world editing workflows.",
      tags: ["Python", "Tooling", "Software Engineering", "UX"],
      meta: [
        "Presented at IEEE International MRTM Conference - 2023 - Best Paper Award",
        "Accepted for publication in IEEE Xplore",
      ],
      link: "https://github.com/rohan-chandrashekar/ADVANCED-TEXT-EDITOR/blob/main/DOCUMENTS/PyEdit%20Pro%20-%20The%20Ultimate%20Advanced%20Text%20Editor%20in%20Python%20-%20Empowering%20Text%20Editing%20Experience.pdf",
      cta: "Research Paper Submitted - IEEE International MRTM Conference 2023",
    },
    {
      title: "Emerging Trends in Quantum Computing and Cryptography",
      summary:
        "Lightning talk connecting modern quantum advances to practical cryptography choices—what changes, what breaks, and what gets stronger as quantum capabilities evolve.",
      tags: ["Quantum", "Cryptography", "Trends"],
      meta: [
        "Lightning Talk delivered at 5th Conference for Communications and Networking (CoCoNet) - 2023",
      ],
      link: "https://github.com/rohan-chandrashekar/Emerging-Trends-in-Quantum-Computing-and-Cryptography/blob/main/main.pdf",
      cta: "Lightning Talk Materials - 5th Conference for Communications and Networking 2023",
    },
    {
      title: "Mental Health in the Digital Era-NLP Models for Depression and Suicidal Tendency Detection",
      summary:
        "End-to-end BERT-based NLP pipeline to detect signals of depression and suicidal tendency from text—covering data prep, fine-tuning, evaluation, and responsible interpretation.",
      tags: ["NLP", "Machine Learning", "Mental Health"],
      meta: [
        "Presented at 5th Conference for Communications and Networking (CoCoNet) - 2023",
        "Accepted for publication in Springer Lecture Notes in Electrical Engineering",
      ],
      link: "https://github.com/rohan-chandrashekar/NLP-BERT-Models-Depression-Detection/blob/main/Research%20Paper.pdf",
      cta: "Research Paper Submitted - 5th Conference for Communications and Networking 2023",
    },
    {
      title: "Detection of Bank Transaction Anomalies using Gradient Boosted Federated Learning",
      summary:
        "Gradient-Boosted Federated Learning to flag anomalous bank transactions while preserving data locality—designed for reproducible training and evaluation across distributed clients.",
      tags: ["Federated Learning", "Anomaly Detection", "Finance"],
      meta: [
        "Resubmitted to IEEE Access — under review",
      ],
      link: "https://github.com/rohan-chandrashekar/BoostFex",
      cta: "Journal Article Submitted - IEEE Access",
    },
    {
      title: "Securing Large Language Models",
      summary: "A security-focused white paper on LLM vulnerabilities, risk areas, and mitigation patterns.",
      tags: ["LLM Security", "AI Security", "Threat Modeling"],
      meta: ["Submitted to HPE Parasparam 2024"],
      link: "https://github.com/rohan-chandrashekar/HPE-Parasparam-2024/blob/main/Securing%20Large%20Language%20Models.pdf",
      cta: "Technical White Paper - HPE Parasparam 2024",
    },
    {
      title: "Detecting Malicious Activities and Behavioral Analysis of Runtime Containers",
      summary: "Runtime container behavior analytics for detecting suspicious activity in modern cloud-native stacks.",
      tags: ["Container Security", "Behavior Analytics", "Cloud"],
      meta: ["Submitted to HPE Parasparam 2024"],
      link: "https://github.com/rohan-chandrashekar/HPE-Parasparam-2024/blob/main/Detecting%20Malicious%20Activities%20and%20Behavioral%20Analysis%20of%20Runtime%20Containers.pdf",
      cta: "Technical White Paper - HPE Parasparam 2024",
    },
  ],

  volunteering: [
    {
      org: "Youth For Seva (YFS) - NMMS Teaching Volunteer",
      description:
        "Teaching government school students from 8th grade for the National Means cum Merit Scholarship (NMMS) exam, India to provide scholarships to financially challenged students.",
    },
    {
      org: "Youth For Seva (YFS) - Chiguru Volunteer",
      description:
        "Volunteered at Chiguru 2024, an annual carnival and a flagship event of (YFS) that empowers underprivileged children to showcase their talents. I had the incredible experience of working with these inspiring kids, helping them prepare and shine at this wonderful event.",
    },
    {
      org: "Youth For Seva (YFS) Mitra Award Recipient",
      description:
        "Received Seva Mitra Award on 29 September 2024 from YFS for commitment and dedication in Community Volunteering.",
    },
    {
      org: "U&I Trust - Spoken English Teaching Volunteer",
      description:
        "Completed 40 hours of volunteering with U&I where I provided Spoken English training to underprivileged children during the fall of 2023.",
    },
    {
      org: "U&I Trust Pan-India Fundraiser Leader Volunteer",
      description:
        "Recognized by U&I for my leadership and contribution during the Annual Pan-India Crowdfunding Campaign, where we together could successfully raise Rupees 1.76 Crores (USD 210K) to fund essential programs for underprivileged children.",
    },
    {
      org: "Hewlett Packard Enterprise (HPE) Corporate Social Responsibility (CSR) Activities",
      logo: "/images/org/hpe.png",
      description: "",
    },
  ],

  eduVentures: [
    {
      title: "USA School Trip",
      description:
        "8th-grade adventure, 2015: A 3-day Robotics workshop at NASA's Kennedy Space Center! Where dreams of innovation and exploration took flight! ✨",
    },
    {
      title: "CERN Study Visit — Large Hadron Collider (LHC) Experience",
      description:
        "Visited CERN in Geneva and experienced the Large Hadron Collider (LHC) up close — a memorable school trip that deepened my curiosity for advanced computing, big science, and physics at scale.",
      images: [
                "/images/activities/cern/1.JPEG",
                "/images/activities/cern/2.JPEG",
                "/images/activities/cern/3.JPEG",
                "/images/activities/cern/4.JPEG",
],
    },
  ],

  corporateActivities: [
    {
      title: "Rewards and Recognition",
      description:
        "Received multiple awards for my contributions and performance during my internship and full-time role.",
      image: "/images/awards.jpg",
    },
    {
      title: "HPE Young Employee Networking (YEN)",
      description:
        "An active member of the local organization for events and networking sessions that brings all young employees together.",
    },
    {
      title: "Toastmasters Club - TM@DC",
      description:
        "Active Member of the Toastmasters Club at the HPE Digital Center, helping me to enhance and refine my communication skills and confidence.",
      image: "/images/tmad.jpg",
    },
    {
      title: "Earth Day 2024",
      description:
        "Participated in tree plantation drive to promote environmental sustainability as part of Earth Day Celebration.",
      image: "/images/earthday.jpg",
    },
    {
      title: "Champions Ranch Outing",
      description:
        "Joined a fun-filled outing to Champions Ranch where we had fun games and activities, further strengthening bonds with colleagues.",
    },
  ],

  // Premium “Proof” section (use conservative numbers; swap with exact metrics anytime)
  proof: {
    stats: [
      { value: 60, suffix: "+", label: "Volunteer hours", sublabel: "Youth For Seva & U&I" },
      { value: 3, suffix: "+", label: "Publications", sublabel: "Papers + journal article" },
      { value: 4, suffix: "+", label: "Awards", sublabel: "Academic + industry" },
      { value: 2, suffix: "+", label: "Certifications", sublabel: "ISO 27001 + MIT xPRO" },
    ],
    badges: [
      { title: "Best Paper Award", detail: "IEEE MRTM International Conference 2023 (PyEdit Pro)" },
      { title: "Best New Joiner", detail: "HPE — among 400+ peers (2024)" },
      { title: "Youth For Seva Mitra Award", detail: "Volunteering recognition (Sep 2024)" },
      { title: "ISO 27001: Lead Auditor", detail: "Certified training completed" },
      { title: "MIT xPRO – Quantum Computing Fundamentals", detail: "Quantum Computing Fundamentals Program" },
      { title: "Wharton Online – Achieving Personal and Professional Success", detail: "4 Course Specialization - Online" },
    ],
    logos: [
{ name: "ASU", note: "MSCS", icon: "/images/platforms/asu.jpeg" },
{ name: "HPE", note: "Work + internship", icon: "/images/platforms/hpe.png" },
{ name: "MIT xPRO", note: "Quantum Computing Fundamentals Program", icon: "/images/platforms/mit.jpeg" },
{ name: "ISO Lead Auditor", note: "ISO 27001 Lead Auditor", icon: "/images/platforms/iso.jpeg" },
{ name: "Wharton Online", note: "Professional certificate", icon: "/images/platforms/wharton.jpeg" },
{ name: "Google", note: "Project Management Certification", icon: "/images/platforms/google.png" },
{ name: "Springer", note: "CoCoNet", icon: "/images/platforms/springer.jpeg" },
{ name: "IEEE", note: "Conference publication", icon: "/images/platforms/ieee.jpeg" },
{ name: "Linux Foundation", note: "LFD103", icon: "/images/platforms/lfd.png" },
{ name: "AWS Educate", note: "Cloud Computing 101", icon: "/images/platforms/aws.jpeg" },
{ name: "CERN", note: "Large Hadron Collider", icon: "/images/platforms/cern.png" },
{ name: "NASA", note: "Kennedy Space Center robotics workshop", icon: "/images/platforms/nasa.png" },
    ],
  },

  // Case-study-first projects (this is what makes the site stand out)
  caseStudies: [
    {
      slug: "go-sluice-telemetry",
      title: "Sluice",
      subtitle:
        "High-throughput telemetry ingestion pipeline in Go — gRPC gateway, Kafka, Redis dedup, TimescaleDB, load-tested to its real ceilings.",
      when: "2026 · Personal project",
      tags: ["Go", "Kafka", "Distributed Systems", "Observability"],
      highlight: "Effectively-once telemetry ingestion with measured backpressure ceilings.",
      cover: { src: "/images/projects/sluice.svg", alt: "Sluice architecture diagram" },
      sections: {
        overview:
          "A production-shaped telemetry ingestion path: a gRPC ingest gateway with a bounded worker pool, partitioned idempotent Kafka, a consumer group with Redis dedup and a batched TimescaleDB sink, a dead-letter topic for poison records, Prometheus/Grafana observability, and a Kubernetes deployment path via Helm, Terraform, and Ansible.",
        problem:
          "An ingestion path has one job that's easy to say and hard to keep true under load: don't lose data, and know exactly how much load you can take before you do. Most demo pipelines skip the backpressure story or never measure their own ceiling on real hardware.",
        approach:
          "Three architectural bets: bounded pool + blocking backpressure, batched writes to every downstream sink, and idempotent-producer + commit-after-write + dedup for effectively-once delivery.\nLoad-tested against real infrastructure to find genuine throughput ceilings — every number in the README comes from running the actual pipeline.\nBorn from operating Kafka streaming infrastructure at HPE: this is the ingestion path I had operated but never built.",
        impact:
          "Demonstrates real distributed-systems engineering: durability guarantees, backpressure, dead-lettering, and honest capacity measurement — the operations instincts of production streaming infra, built from scratch.",
        stack: ["Go", "gRPC", "Kafka", "Redis", "TimescaleDB", "Prometheus", "Grafana", "Helm", "Terraform", "Ansible"],
      },
      links: [{ label: "GitHub", href: "https://github.com/rohan-chandrashekar/Go-Sluice-Telemetry" }],
    },

    {
      slug: "pitwall-ai",
      title: "PitWall-AI",
      subtitle:
        "Agentic F1 race-strategy engine — five cooperating agents (LangGraph) making per-lap pit decisions with PyTorch tire models, genetic algorithms, and an LLM race engineer.",
      when: "2026 · Personal project",
      tags: ["Agentic AI", "LangGraph", "PyTorch", "Time Series"],
      highlight: "Five-agent pipeline: telemetry → rival prediction → GA strategy → ghost-car scoring → LLM briefings.",
      cover: { src: "/images/projects/pitwall-ai.svg", alt: "PitWall-AI architecture diagram" },
      sections: {
        overview:
          "An end-to-end Formula 1 race-strategy simulator that makes per-lap pit-stop and compound decisions with the reasoning of a real pitwall — fully automated. Replay any 2023–2025 race at up to 1000× speed, or point it at a live Grand Prix.",
        problem:
          "Race strategy is a multi-agent reasoning problem under uncertainty: live telemetry, rival behavior prediction, combinatorial strategy search, and clear communication — all per lap, in real time.",
        approach:
          "Scout ingests live telemetry from the OpenF1 API; Spy predicts rival pit stops with a Bayesian hazard model; Strategist evolves the optimal remaining-race plan with a DEAP genetic algorithm over a PyTorch tire-degradation network; Ghost Car scores strategies against the real driver's decisions; Principal writes team-radio briefings via LLaMA-3.3-70B.\nEverything streams to InfluxDB 3 Core (SQL-native, Apache Arrow) and renders on a 32-panel Grafana dashboard.",
        impact:
          "A flagship agentic-AI artifact: real multi-agent orchestration, ML + evolutionary search, time-series engineering, and LLM integration in one system — presented at an InfluxData webinar (July 2026).",
        stack: ["Python", "LangGraph", "PyTorch", "DEAP", "InfluxDB 3", "Grafana", "Groq LLaMA-3.3"],
      },
      links: [
        { label: "GitHub", href: "https://github.com/rohan-chandrashekar/Pitwall-AI" },
        { label: "InfluxData Webinar", href: "https://www.influxdata.com/resources/building-agentic-f1-strategy-engine-with-influxdb3/" },
      ],
    },

    {
      slug: "kubemedic",
      title: "KubeMedic",
      subtitle:
        "Safety-gated Kubernetes incident copilot — bounded agentic investigation, human-approved remediation, verified recovery. 100% root-cause accuracy over 35 benchmark incidents.",
      when: "2026 · Personal project",
      tags: ["Agentic AI", "Kubernetes", "SRE", "MCP"],
      highlight: "58s mean time to verified recovery, 100% remediation success across a 35-incident benchmark.",
      cover: { src: "/images/projects/kubemedic.svg", alt: "KubeMedic architecture diagram" },
      sections: {
        overview:
          "KubeMedic detects faults from Prometheus signals, investigates through read-only MCP tools with a hard call budget, emits a cited hypothesis, proposes one allow-listed remediation, waits for human approval, executes namespace-scoped, and verifies the recovery signal actually returned.",
        problem:
          "Kubernetes alerts identify symptoms, not causes. Under a page, an operator correlates metrics, pod state, events, logs, and config changes before acting — slow, repetitive, and risky under pressure. Agentic remediation without guardrails is worse.",
        approach:
          "Bounded investigation (read-only tools, hard call budget), evidence-cited hypotheses, an explicit human approval gate the agent cannot bypass, least-privilege execution, and post-remediation verification.\nBenchmarked on 7 scenarios × 5 seeds: 100% detection, 18.7s mean time-to-detect, 21.4s mean diagnosis, 58.0s mean time to verified recovery, 100% root-cause and remediation-class accuracy, 0% over-remediation on the red-herring scenario.",
        impact:
          "Shows agentic AI applied with safety engineering discipline — bounded autonomy, human gates, verification — exactly the posture production SRE tooling demands.",
        stack: ["Python", "Kubernetes", "Prometheus", "MCP", "LLM agents"],
      },
      links: [{ label: "GitHub", href: "https://github.com/rohan-chandrashekar/KubeMedic" }],
    },

    {
      slug: "triagegraph",
      title: "TriageGraph",
      subtitle:
        "Agentic SOC analyst that autonomously triages SIEM alerts across identity, endpoint, cloud, and email telemetry — grounded in a MITRE ATT&CK RAG corpus, containment gated behind human approval.",
      when: "2026 · Personal project",
      tags: ["Agentic AI", "Security Operations", "LangGraph", "RAG"],
      highlight: "100% triage accuracy and false-positive suppression on seeded scenarios; every containment action human-gated.",
      cover: { src: "/images/projects/triagegraph.svg", alt: "TriageGraph architecture diagram" },
      sections: {
        overview:
          "A LangGraph multi-agent pipeline with real MCP servers, ATT&CK RAG over 697 techniques, Groq LLaMA-3.3-70B with a deterministic fallback, and a live React console (FastAPI/WebSocket, d3-force).",
        problem:
          "SOC teams drown in alert volume — thousands of SIEM alerts a day, mostly noise, each costing analyst minutes to dismiss safely. The result: alert fatigue, missed true positives, slow containment.",
        approach:
          "An agent runs the tier-1 investigation for every alert: queries logs, pivots on entities, maps behavior to ATT&CK, and hands humans only the alerts that matter with evidence gathered and containment one approval click away.\nBenchmarked: 100% triage accuracy and 100% false-positive suppression (LLM mode), 25% alert-noise reduction, 100% MCP tool-call success at ~14.7s per investigation.",
        impact:
          "Bridges my HPE security background and agentic-AI focus: autonomous where safe, human-gated at the blast radius — with every number reproducible from saved runs.",
        stack: ["Python", "LangGraph", "MCP", "FastAPI", "React", "Groq LLaMA-3.3", "RAG"],
      },
      links: [{ label: "GitHub", href: "https://github.com/rohan-chandrashekar/TriageGraph" }],
    },

    {
      slug: "zero-context-retention-engine",
      title: "Zero-Retention Context Engine",
      subtitle:
        "On-device macOS engine that understands the screen while provably retaining no pixels — MobileCLIP embeddings on the Apple Neural Engine, privacy adversarially verified.",
      when: "2026 · Personal project",
      tags: ["On-Device AI", "Privacy", "Core ML", "macOS"],
      highlight: "3ms/frame screen embedding on the Neural Engine; pixels discarded in memory, only vectors kept.",
      cover: { src: "/images/projects/zero-context-retention-engine.svg", alt: "Zero-Retention Context Engine architecture diagram" },
      sections: {
        overview:
          "A context engine that watches the screen via ScreenCaptureKit, reads it with on-device Vision OCR, embeds frames with MobileCLIP via Core ML, and keeps only L2-normalized vectors — the meaning without the pixels. The privacy claim is adversarially verified, not just asserted.",
        problem:
          "Screen-context assistants are a privacy nightmare: they either stream your screen to the cloud or silently retain screenshots. Can a system remember what you saw without keeping anything a human could look at?",
        approach:
          "Frames are embedded on the Apple Neural Engine and discarded in memory — measured at 3.0ms median per frame on M1 (329 img/s) and 2.0ms on M5, ~9.6–11.8× faster than CPU, with export correctness verified against the PyTorch reference (0.9965 cosine).\nBuilt entirely on Apple's on-device stack: ScreenCaptureKit, Vision, MobileCLIP, Core ML.",
        impact:
          "Rigorous on-device ML engineering: hardware-aware benchmarking, verified model export, and a falsifiable privacy claim — systems thinking applied to the most sensitive data there is.",
        stack: ["Swift", "Python", "Core ML", "MobileCLIP", "ScreenCaptureKit", "Vision"],
      },
      links: [{ label: "GitHub", href: "https://github.com/rohan-chandrashekar/zero-context-retention-engine" }],
    },

    {
      slug: "aura",
      title: "Aura",
      subtitle:
        "On-device multimodal accessibility assistant for blind/low-vision and deaf/hard-of-hearing users — real-time scene description, captioning, and sound awareness with zero data leaving the device.",
      when: "2026 · Personal project",
      tags: ["Accessibility", "On-Device AI", "Multimodal", "Apple Silicon"],
      highlight: "29.4 FPS live vision, 3.6% caption WER, ~88× speech-denoiser speedup on the Neural Engine — 0 bytes leave the device.",
      cover: { src: "/images/projects/aura.svg", alt: "Aura architecture diagram" },
      sections: {
        overview:
          "A private, real-time perceptual aid: it describes the scene and reads text aloud, captions and enhances speech, and fuses sound events with visual context — running entirely on-device on Apple's native stack.",
        problem:
          "Existing aids for blind/low-vision and deaf/hard-of-hearing users either require a human or stream the most intimate data imaginable — everything the user sees and hears — to the cloud. That's a privacy violation and too slow for real-time use.",
        approach:
          "YOLOv8n detection + OCR + spoken description end-to-end at 40ms (29.4 FPS); on-device speech captioning at 3.6% WER; the speech denoiser moved onto the Neural Engine for an ~88× speedup (1149ms → 13ms per 4s chunk).\nProvably private: 0 bytes written to disk, 0 bytes on the network (verified with lsof). Fairness-audited across 6 English accents and 5 lighting conditions with significance testing.",
        impact:
          "Continues the assistive-tech thread from Acoustic Horizons with modern on-device ML: measured performance, fairness auditing, and privacy by construction.",
        stack: ["Swift", "Core ML", "AVFoundation", "Speech", "SoundAnalysis", "Vision", "YOLOv8"],
      },
      links: [{ label: "GitHub", href: "https://github.com/rohan-chandrashekar/Aura-multimodal-apple" }],
    },

    {
      slug: "longcache",
      title: "LongCache",
      subtitle:
        "On-device long-context LLM via KV-cache compression on Apple Silicon (MLX) — quantized cache, eviction heuristics, and a learned contextual-bandit eviction policy.",
      when: "2026 · Personal project",
      tags: ["LLM Systems", "On-Device AI", "MLX", "Memory Optimization"],
      highlight: "Long conversations on a fixed memory budget: INT4/8 KV cache + learned eviction vs StreamingLLM/H2O heuristics.",
      cover: { src: "/images/projects/longcache.svg", alt: "LongCache architecture diagram" },
      sections: {
        overview:
          "On-device LLMs choke on long conversations because the KV cache grows linearly with context. LongCache holds the longest possible conversation on a fixed memory budget by compressing the cache — with every claim measured, never estimated.",
        problem:
          "Evict old tokens and the model forgets; keep everything and it crashes with OOM. Offloading to the cloud destroys the privacy that justifies on-device inference in the first place.",
        approach:
          "Three levers, benchmarked against a baseline: quantize what you keep (INT4/INT8 K/V), evict with proven heuristics (recency window + heavy-hitter — the StreamingLLM/H2O family), and learn the eviction policy as a contextual bandit.\nQuality measured by perplexity on held-out long text and needle-in-a-haystack retrieval vs context length. The benchmark scripts refuse to run on unsupported hardware rather than emit fabricated numbers.",
        impact:
          "LLM-systems depth beyond API calls: memory hierarchies, quantization, eviction policy learning, and honest measurement discipline.",
        stack: ["Python", "MLX", "mlx-lm", "Apple Silicon"],
      },
      links: [{ label: "GitHub", href: "https://github.com/rohan-chandrashekar/KV-MLX-Cache-Optimization" }],
    },

    {
      slug: "ecopath",
      title: "ECOpath",
      subtitle:
        "Carbon-aware, agentic multi-modal route planner — hackathon build comparing every way from A to B by carbon, time, and cost, with LLM reasoning over verifiable EPA/IPCC/FTA data.",
      when: "Apr 2026 · Hackathon",
      tags: ["Agentic AI", "Sustainability", "Full-Stack", "Hackathon"],
      highlight: "Three-agent pipeline (routing → emissions → decision) with every gram of CO₂ traceable to a published dataset.",
      cover: { src: "/images/projects/ecopath.svg", alt: "ECOpath architecture diagram" },
      sections: {
        overview:
          "Most map apps tell you the fastest route. ECOpath shows the greenest, cheapest, and fastest options side-by-side, with a natural-language recommendation that respects real constraints ('be there by 10 AM', 'under $5', 'I care about emissions').",
        problem:
          "Carbon-aware routing needs live data, defensible emissions math, and reasoning over user constraints — without hardcoding or hand-waving the numbers.",
        approach:
          "A three-stage agentic pipeline with strict boundaries: a Routing Agent fetches live options from the Google Maps API, an Emissions Agent computes physics from EPA/IPCC/FTA datasets, and a Decision Agent (Groq Llama) reasons and explains — no agent reaches around another.\nBuilt with Kiro (hooks, steering, specs), FastAPI, Next.js, Supabase auth, and Google Calendar OAuth.",
        impact:
          "A complete agentic product built under hackathon time pressure: multi-agent boundaries, verifiable data lineage, and a polished full-stack UX.",
        stack: ["Python", "FastAPI", "Next.js", "TypeScript", "Groq Llama", "Google Maps API", "Supabase"],
      },
      links: [{ label: "GitHub", href: "https://github.com/rohan-chandrashekar/EcoPath" }],
    },

    {
      slug: "acoustic-horizons",
      title: "Acoustic Horizons",
      subtitle:
        "Bone‑conducting navigation headset prototype for the visually impaired (ESP‑32 camera modules) — capstone, patent‑track.",
      when: "Jan 2023 – Sep 2024 · PES University",
      tags: [
          "Accessibility",
          "Computer Vision",
          "Embedded Systems",
          "Human‑Computer Interaction",
        ],
      highlight: "Assistive navigation headset prototype (patent pending).",
      cover: { src: "https://opengraph.githubassets.com/514b9d2941eb27f6cfba8810587ded354da79c71/rohan-chandrashekar/Acoustic-Horizons", alt: "Acoustic Horizons" },
      sections: {
        overview:
          "A hands‑free assistive navigation prototype built around bone‑conduction audio and lightweight vision sensing. The public repository intentionally contains only safe‑to‑share documentation + selected implementation while the patent process is in progress.",
        problem:
          "Traditional navigation aids often compete with environmental awareness (earbuds) or demand constant attention (phone). The challenge: deliver clear cues, stay non‑intrusive, and remain usable outdoors — without blocking ambient sound.",
        approach:
          "Designed the headset interaction model around bone‑conduction for “hear the world + hear the cue” feedback.\nIntegrated ESP‑32 camera modules as the sensing layer and documented the full system architecture, data flow, and user‑first design constraints.\nFocused on ergonomics, cue clarity, and failure‑safe behavior for real‑world use.",
        impact:
          "Delivered a working prototype with an end‑to‑end story: design → integration → validation. Positioned as a real assistive tech candidate; currently patent-pending, with public artifacts optimized for reviewer confidence.",
        stack: [
          "C++",
          "Python",
          "OpenCV",
          "Arduino",
          "ESP32",
          "Git",
        ],
      },
      links: [{ label: "GitHub", href: "https://github.com/rohan-chandrashekar/Acoustic-Horizons" }],
    },

    {
      slug: "boostfex",
      title: "BoostFex",
      subtitle:
        "IEEE Access implementation: bank‑transaction anomaly detection via Gradient‑Boosted Federated Learning (privacy‑preserving).",
      when: "Feb 2024 – Aug 2024 · PES University",
      tags: [
          "Federated Learning",
          "Anomaly Detection",
          "Gradient Boosting",
          "Privacy",
        ],
      highlight: "Gradient‑boosted federated learning for financial anomaly detection.",
      cover: { src: "https://opengraph.githubassets.com/76f8edabc495db902994a638a7f0dfab127d204f/rohan-chandrashekar/BoostFex", alt: "BoostFex" },
      sections: {
        overview:
          "BoostFex hosts the official implementation of “Detection of Bank Transaction Anomalies using Gradient Boosted Federated Learning” (IEEE Access). It explores how gradient‑boosted models can be trained across distributed parties while keeping sensitive transaction data local.",
        problem:
          "Banks need anomaly detection that is accurate and fast — but centralizing transaction data is costly and creates privacy/compliance risk. The goal: learn from multiple data owners without moving raw data, while still achieving strong detection performance.",
        approach:
          "Implemented a federated learning workflow for gradient‑boosted models, separating client‑side training from server‑side aggregation.\nBuilt repeatable experiments to compare configurations and validate privacy‑aware training at scale.\nDesigned the codebase to be modular: data handling, training, federation logic, and evaluation are cleanly separated for extension.",
        impact:
          "A research‑grade, reproducible codebase aligned to a peer‑reviewed publication — ideal for demonstrating applied ML rigor, privacy‑by‑design thinking, and distributed systems engineering.",
        stack: [
          "Python",
          "XGBoost",
          "NumPy",
          "Pandas",
          "Scikit-Learn",
          "Git",
        ],
      },
      links: [{ label: "GitHub", href: "https://github.com/rohan-chandrashekar/BoostFex" }],
    },

    {
      slug: "nlp-bert-models-depression-detection",
      title: "BERT NLP Model for Depression Detection",
      subtitle:
        "BERT fine‑tuned to detect depression/suicidal ideation signals from text — reproducible NLP training + evaluation pipeline.",
      when: "Sep 2023 – Dec 2023 · PES University",
      tags: [
          "NLP",
          "Transformers",
          "Deep Learning",
          "AI for Social Good",
        ],
      highlight: "BERT‑based mental‑health text classification pipeline.",
      cover: {
        src: "https://opengraph.githubassets.com/628dcd0059aca95ec502fe1faa2836feb0e914cd/rohan-chandrashekar/NLP-BERT-Models-Depression-Detection",
        alt: "BERT NLP Model for Depression Detection",
      },
      sections: {
        overview:
          "A complete NLP research pipeline that fine‑tunes BERT to classify mental‑health related text. The repository includes code + dataset artifacts for repeatable training, inference, and evaluation.",
        problem:
          "Mental‑health signals in text are nuanced, context‑dependent, and easy to misclassify. The challenge is building a model that captures semantics beyond keywords while remaining measurable and reproducible.",
        approach:
          "Prepared a clean training pipeline: dataset handling, text normalization, tokenizer + BERT fine‑tuning, and structured evaluation.\nRan experiments to validate performance across categories and ensured the workflow is easy to rerun and extend.\nDocumented the project clearly so reviewers can understand assumptions, limitations, and next steps.",
        impact:
          "Demonstrates practical transformer fine‑tuning and research discipline. The outcome is a strong portfolio artifact at the intersection of NLP and social impact — designed for extension into safer, real‑world screening tools.",
        stack: [
          "Python",
          "PyTorch",
          "Hugging Face",
          "NumPy",
          "Git",
        ],
      },
      links: [
        { label: "GitHub", href: "https://github.com/rohan-chandrashekar/NLP-BERT-Models-Depression-Detection" },
      ],
    },

    {
      slug: "emerging-trends-in-quantum-computing-and-cryptography",
      title: "Emerging Trends in Quantum Computing and Cryptography",
      subtitle:
        "CoCoNet’23 lightning talk materials on quantum computing trends and cryptography impact (post‑quantum context).",
      when: "Nov 2023 – Dec 2023 · PES University",
      tags: [
          "Quantum Computing",
          "Cryptography",
          "Post‑Quantum Cryptography",
          "Research",
        ],
      highlight: "Conference lightning talk material on QC + cryptography.",
      cover: {
        src: "https://opengraph.githubassets.com/65b6ad2e534e33b68ffabc94261f163dd5c0a922/rohan-chandrashekar/Emerging-Trends-in-Quantum-Computing-and-Cryptography",
        alt: "Emerging Trends in Quantum Computing and Cryptography",
      },
      sections: {
        overview:
          "A curated, conference‑ready bundle of research and presentation materials used for a lightning talk at CoCoNet’23 (sponsored by Springer).",
        problem:
          "Quantum computing changes the assumptions behind modern cryptography. The real challenge isn’t just new algorithms — it’s migration strategy, interoperability, and risk‑based prioritization.",
        approach:
          "Synthesized recent developments in quantum computation and mapped them to cryptographic impact areas.\nTranslated technical concepts into a narrative suitable for a broad technical audience, balancing rigor with clarity.\nPackaged the talk with supporting artifacts to make the work reusable and citeable.",
        impact:
          "Shows research communication skills: taking a frontier topic and making it understandable, actionable, and presentation‑grade — a strong signal for security + emerging tech roles.",
        stack: [
          "PowerPoint",
          "LaTeX",
          "Git",
          "Markdown",
        ],
      },
      links: [
        { label: "GitHub", href: "https://github.com/rohan-chandrashekar/Emerging-Trends-in-Quantum-Computing-and-Cryptography" },
      ],
    },

    {
      slug: "c-graph-algorithm-library-callable-by-python",
      title: "C++ Graph Algorithm Library",
      subtitle:
        "Modular C++ graph‑algorithm library (BFS/DFS, shortest paths, MST, topo sort) with Python‑callable bindings for reuse in analytics workflows.",
      when: "Jan 2023 – May 2023 · PES University",
      tags: [
          "Graph Algorithms",
          "Data Structures",
          "Systems Programming",
          "Language Interop",
        ],
      highlight: "Reusable graph algorithms library — callable from Python.",
      cover: {
        src: "https://opengraph.githubassets.com/068ba8063d5567737c2fc772ff674dbc8e07963e/rohan-chandrashekar/C-Graph-Algorithm-Library-callable-by-Python",
        alt: "C++ Graph Algorithm Library",
      },
      sections: {
        overview:
          "A performance‑oriented graph algorithms library implemented in C++ and exposed to Python for easy use in higher‑level workflows. Designed to be modular, maintainable, and extensible.",
        problem:
          "Graph algorithms are core building blocks, but rewriting them in every project is error‑prone. The goal was to build a reusable, tested library that’s fast in C++ yet convenient from Python.",
        approach:
          "Implemented a clean API for common graph primitives and algorithms (traversals, shortest paths, spanning trees, etc.).\nAdded a Python‑callable interface to bridge low‑level performance with high‑level experimentation.\nOrganized the codebase for extension: clear separation of data structures, algorithms, and bindings.",
        impact:
          "A strong “systems + usability” artifact: proves algorithmic fundamentals, C++ engineering, and pragmatic interoperability — ideal for performance‑sensitive ML/analytics tooling.",
        stack: [
          "C++",
          "Python",
          "CMake",
          "Linux",
          "Git",
        ],
      },
      links: [
        { label: "GitHub", href: "https://github.com/rohan-chandrashekar/C-Graph-Algorithm-Library-callable-by-Python" },
      ],
    },

    {
      slug: "stream-and-batch-processing-of-tweets-with-apache-kafka-and-spark",
      title: "Stream & Batch Processing of Tweets (Kafka + Spark)",
      subtitle:
        "Lambda‑style pipeline for tweets using Kafka + Spark Streaming and batch jobs — real‑time insights with historical recomputation.",
      when: "Jan 2023 – May 2023 · PES University",
      tags: [
          "Streaming Systems",
          "Batch Analytics",
          "ETL Pipelines",
          "Scalable Data Processing",
        ],
      highlight: "End‑to‑end streaming + batch pipeline for tweets.",
      cover: {
        src: "https://opengraph.githubassets.com/d12349901604462fe8c8e420ab5b8ceb6f21841c/rohan-chandrashekar/Stream-and-Batch-Processing-of-Tweets-with-Apache-Kafka-and-Spark",
        alt: "Stream and Batch Processing of Tweets with Apache Kafka and Spark",
      },
      sections: {
        overview:
          "An end‑to‑end data engineering project that processes tweets in both real‑time and batch. Kafka handles ingestion, while Spark powers streaming transformations and batch recomputation for correctness.",
        problem:
          "Real‑time analytics is great — until you need to fix late data, schema changes, or logic bugs. The system must support low‑latency insights *and* reliable backfills without rewriting everything.",
        approach:
          "Built a Kafka ingestion layer, Spark Streaming jobs for near‑real‑time processing, and complementary batch pipelines for historical recomputation.\nStructured the pipeline to keep transformations consistent across streaming and batch paths.\nDocumented setup + run steps so the project is reproducible on a fresh machine.",
        impact:
          "Demonstrates modern big‑data thinking: low‑latency delivery, correct recomputation, and a pipeline you can explain in an interview from architecture down to operators.",
        stack: [
          "Apache Kafka",
          "Apache Spark",
          "Python",
          "Docker",
          "Git",
        ],
      },
      links: [
        { label: "GitHub", href: "https://github.com/rohan-chandrashekar/Stream-and-Batch-Processing-of-Tweets-with-Apache-Kafka-and-Spark" },
      ],
    },

    {
      slug: "quiz-application-using-mvp-architecture-java",
      title: "Quizzy",
      subtitle:
        "A quiz management system in Java using Model‑View‑Presenter for maintainability — create, administer, and attempt quizzes with clean separation of concerns.",
      when: "Jan 2023 – Apr 2023 · PES University",
      tags: [
          "Software Architecture",
          "Design Patterns",
          "OOP",
          "Product UX",
        ],
      highlight: "Quiz management app with MVP architecture.",
      cover: {
        src: "https://opengraph.githubassets.com/15866e9b32bda15030ae54412002f1be0517928f/rohan-chandrashekar/Quiz-Application-using-MVP-Architecture-Java",
        alt: "Quiz application using MVP Architecture in Java",
      },
      sections: {
        overview:
          "Quizzy is a Java quiz management application structured with the Model‑View‑Presenter architecture to keep logic testable and the UI clean.",
        problem:
          "Student projects often become unmaintainable as features grow. The goal here was to build something that scales: modular code, clear responsibilities, and room for future extension.",
        approach:
          "Applied MVP to separate UI rendering from business logic and data handling.\nDesigned flows for quiz creation, administration, and participation with attention to edge cases.\nKept the codebase organized and documented to make review easy and future changes safe.",
        impact:
          "A portfolio‑friendly demonstration of production‑minded Java: patterns, maintainability, and code quality — not just “it runs on my laptop.”",
        stack: [
          "Java",
          "Git",
          "JUnit",
          "SQLite",
        ],
      },
      links: [
        { label: "GitHub", href: "https://github.com/rohan-chandrashekar/Quiz-Application-using-MVP-Architecture-Java" },
      ],
    },

    {
      slug: "image-classification-using-cnn-on-cifar-10",
      title: "CNN for Image Classification (CIFAR‑10)",
      subtitle:
        "Convolutional neural network implementation for CIFAR‑10 with training pipeline, evaluation, and experiment‑ready structure.",
      when: "Aug 2022 – Dec 2022 · PES University",
      tags: [
          "Convolutional Networks",
          "Computer Vision",
          "Model Training",
          "Evaluation",
        ],
      highlight: "CNN model + training pipeline on CIFAR‑10.",
      cover: {
        src: "https://opengraph.githubassets.com/bd469c2e3fa0d766c3302898ffcd2a2f59ca782d/rohan-chandrashekar/Image-Classification-using-CNN-on-CIFAR-10",
        alt: "CNN for Image Classification on CIFAR-10 Dataset",
      },
      sections: {
        overview:
          "A practical computer vision project implementing a CNN for CIFAR‑10, with a clean training/evaluation workflow designed to be rerun and improved.",
        problem:
          "Image classification benchmarks are easy to start and hard to do well. The challenge is structuring the pipeline to support iteration: model changes, augmentation, and repeatable evaluation.",
        approach:
          "Implemented a CNN architecture with a disciplined training loop, validation, and evaluation reporting.\nOrganized code for experimentation: clear configuration points for architecture and training settings.\nDocumented results and next‑step improvements to show maturity beyond a single run.",
        impact:
          "Signals applied deep‑learning competence: not just building a model, but building a workflow you can iterate on like a real engineer.",
        stack: [
          "Python",
          "TensorFlow",
          "Keras",
          "NumPy",
          "Git",
        ],
      },
      links: [
        { label: "GitHub", href: "https://github.com/rohan-chandrashekar/Image-Classification-using-CNN-on-CIFAR-10" },
      ],
    },

    {
      slug: "customer-churn-prediction-using-decision-trees",
      title: "Customer Churn Prediction",
      subtitle:
        "Interpretable churn model using decision trees — feature engineering, evaluation, and explainable split logic for actionable retention insights.",
      when: "Aug 2022 – Dec 2022 · PES University",
      tags: [
          "Supervised Learning",
          "Feature Engineering",
          "Model Selection",
          "Evaluation",
        ],
      highlight: "Interpretable churn prediction with decision trees.",
      cover: {
        src: "https://opengraph.githubassets.com/66ba40abbe81ec25ad8bc8e6190e184c9a602474/rohan-chandrashekar/Customer-Churn-Prediction-using-Decision-Trees",
        alt: "Customer Churn Prediction Using Decision Trees",
      },
      sections: {
        overview:
          "A churn prediction project built around decision trees for interpretability. The emphasis is on creating a model that both predicts and explains *why* customers leave.",
        problem:
          "Churn models are only useful if teams can act on them. Black‑box accuracy without explanations often fails to translate into retention strategy.",
        approach:
          "Prepared the dataset with thoughtful preprocessing and feature engineering.\nTrained and tuned decision‑tree models, then analyzed splits to surface drivers behind churn.\nEvaluated performance with standard metrics while prioritizing interpretability and actionable outputs.",
        impact:
          "An interview‑friendly ML case study: it demonstrates modeling fundamentals and the product mindset of making predictions explainable and usable.",
        stack: [
          "Python",
          "Scikit-Learn",
          "Pandas",
          "NumPy",
          "Git",
        ],
      },
      links: [
        { label: "GitHub", href: "https://github.com/rohan-chandrashekar/Customer-Churn-Prediction-using-Decision-Trees" },
      ],
    },

    {
      slug: "yet-another-kafka",
      title: "Mini‑Kafka Implementation (Python)",
      subtitle:
        "A compact, educational Kafka‑like broker in Python: topics, producers/consumers, and message flow — built to understand distributed log systems from the inside.",
      when: "Aug 2022 – Dec 2022 · PES University",
      tags: [
          "Distributed Systems",
          "Pub/Sub",
          "Replication",
          "Concurrency",
        ],
      highlight: "Kafka‑style message broker built from scratch in Python.",
      cover: { src: "https://opengraph.githubassets.com/067b103a42e165d98ae61d55fba00667cfadf6ae/rohan-chandrashekar/Yet-Another-Kafka", alt: "Mini-Kafka Implementation using Python" },
      sections: {
        overview:
          "A from‑scratch mini implementation inspired by Kafka to learn how log‑based messaging systems work. It models core concepts like topics, producers, and consumers.",
        problem:
          "It’s easy to use Kafka and hard to truly understand it. The goal was to internalize the design by building a simplified broker — and documenting the trade‑offs.",
        approach:
          "Designed a simple broker protocol and implemented producer/consumer interactions.\nModeled topic storage and message retrieval patterns to mirror log semantics.\nKept the project intentionally compact so each component is readable and teachable.",
        impact:
          "Shows systems thinking and curiosity: building infrastructure primitives, reasoning about messaging, and explaining design choices — a standout for backend/distributed roles.",
        stack: [
          "Python",
          "Linux",
          "Git",
        ],
      },
      links: [{ label: "GitHub", href: "https://github.com/rohan-chandrashekar/Yet-Another-Kafka" }],
    },

    {
      slug: "mysql-imdb-database-with-front-end",
      title: "IMDb MySQL Database + Streamlit Front End",
      subtitle:
        "IMDb dataset loaded into MySQL with optimized queries and a Streamlit UI for exploration — a full data‑to‑app workflow.",
      when: "Aug 2022 – Dec 2022 · PES University",
      tags: [
          "Relational Modeling",
          "Query Optimization",
          "Data Apps",
          "Visualization",
        ],
      highlight: "SQL + Streamlit exploration app over IMDb data.",
      cover: {
        src: "https://opengraph.githubassets.com/682a89a5b8cd8dad0b662d282718956e584bbadb/rohan-chandrashekar/MySQL-IMDb-Database-with-Front-End",
        alt: "MySQL IMDb Database with Streamlit Front End",
      },
      sections: {
        overview:
          "A database‑centric project that stores the IMDb dataset in MySQL and exposes it through an interactive Streamlit front end for exploration and analytics.",
        problem:
          "Large datasets become valuable only when they’re queryable and approachable. The challenge: design a clean schema, write performant queries, and build a UI that invites exploration.",
        approach:
          "Modeled the dataset into relational tables and implemented queries for common analytical questions.\nBuilt a Streamlit UI to visualize results and make the database feel “alive.”\nDocumented the setup end‑to‑end so others can reproduce the database and run the app.",
        impact:
          "Demonstrates full‑stack data skills — schema design, SQL reasoning, and user‑facing visualization — which translates directly to analytics engineering work.",
        stack: [
          "MySQL",
          "Python",
          "Streamlit",
          "Git",
        ],
      },
      links: [
        { label: "GitHub", href: "https://github.com/rohan-chandrashekar/MySQL-IMDb-Database-with-Front-End" },
      ],
    },

    {
      slug: "stock-prediction-using-hmm",
      title: "Stock Market Prediction using HMMs",
      subtitle:
        "Time‑series modeling with HMMs to infer market regimes and forecast behavior — a probabilistic approach to noisy financial data.",
      when: "Aug 2022 – Dec 2022 · PES University",
      tags: [
          "Probabilistic Models",
          "Time Series",
          "State Estimation",
          "Evaluation",
        ],
      highlight: "Market regime modeling with Hidden Markov Models.",
      cover: { src: "https://opengraph.githubassets.com/ffa8fa434bd9733d769a6920848364f9d109e05a/rohan-chandrashekar/Stock-Prediction-using-HMM", alt: "Stock market prediction using HMMs" },
      sections: {
        overview:
          "A probabilistic modeling project that uses Hidden Markov Models to capture latent market regimes and make regime‑aware forecasts on stock price movements.",
        problem:
          "Financial time series are noisy and non‑stationary. Simple models struggle when the underlying regime shifts — bull, bear, volatile, calm.",
        approach:
          "Preprocessed time‑series data into observation features suitable for HMM training.\nTrained models to infer hidden states (regimes) and used those states to drive predictions.\nValidated results with careful evaluation and emphasized interpretability of learned regimes.",
        impact:
          "A strong “math‑meets‑engineering” project: showcases probabilistic reasoning, time‑series intuition, and the ability to explain why a model behaves the way it does.",
        stack: [
          "Python",
          "NumPy",
          "Pandas",
          "Matplotlib",
          "Git",
        ],
      },
      links: [{ label: "GitHub", href: "https://github.com/rohan-chandrashekar/Stock-Prediction-using-HMM" }],
    },

    {
      slug: "string-matching-using-burrows-wheeler-alignment-bwa",
      title: "String Matching using Burrows‑Wheeler Alignment (BWA)",
      subtitle:
        "Efficient string matching inspired by BWA: Burrows–Wheeler transform + alignment concepts — algorithmic rigor with real bioinformatics flavor.",
      when: "Aug 2022 – Dec 2022 · PES University",
      tags: [
          "String Matching",
          "Indexing",
          "Algorithm Design",
          "Complexity Analysis",
        ],
      highlight: "Burrows–Wheeler based string matching implementation.",
      cover: {
        src: "https://opengraph.githubassets.com/60f2e11626a7a8f4cbac86178e3feb17599ad090/rohan-chandrashekar/String-Matching-using-Burrows-Wheeler-Alignment-BWA",
        alt: "String matching using Burrows-Wheeler-Algorithm",
      },
      sections: {
        overview:
          "An algorithm‑focused project implementing string matching based on the Burrows–Wheeler Transform and alignment ideas popularized in bioinformatics tooling.",
        problem:
          "Exact and approximate matching over large strings demands smart indexing. Naïve search is too slow when data scales (think genomes).",
        approach:
          "Implemented the Burrows–Wheeler Transform and supporting index structures.\nBuilt a matching workflow that leverages the transform for efficient lookup.\nDocumented the algorithmic reasoning and complexity trade‑offs to make the project reviewer‑friendly.",
        impact:
          "A crisp demonstration of fundamentals: data structures + algorithms + performance thinking — and a great conversation starter for systems/algorithms interviews.",
        stack: [
          "C++",
          "Python",
          "Git",
        ],
      },
      links: [
        { label: "GitHub", href: "https://github.com/rohan-chandrashekar/String-Matching-using-Burrows-Wheeler-Alignment-BWA" },
      ],
    },

    {
      slug: "5g-network-slicing",
      title: "5G Network Slicing Simulation (Python)",
      subtitle:
        "Simulation of 5G network slicing across eMBB, mMTC, and URLLC with dynamic resource allocation and performance metrics.",
      when: "Jan 2022 – Apr 2022 · PES University",
      tags: [
          "Networking",
          "Simulation",
          "Resource Allocation",
          "Performance Metrics",
        ],
      highlight: "5G slicing simulation with metrics + modular architecture.",
      cover: { src: "/images/projects/5g-network-slicing.svg", alt: "5G Network Slicing architecture diagram" },
      sections: {
        overview:
          "A simulation project exploring how 5G network slicing can allocate resources across diverse service types — eMBB, mMTC, and URLLC — using a modular Python architecture.",
        problem:
          "5G promises “one network, many experiences.” The challenge is balancing competing slice demands under constrained resources while maintaining SLA‑like performance targets.",
        approach:
          "Modeled slice types and resource pools, then implemented dynamic allocation logic.\nTracked performance metrics to compare strategies and understand trade‑offs.\nKept the architecture modular so new allocation policies or metrics can be plugged in easily.",
        impact:
          "A networking‑meets‑systems project that shows you can translate theory into measurable simulation — and reason about optimization under constraints.",
        stack: [
          "Python",
          "NumPy",
          "Matplotlib",
          "Git",
        ],
      },
      links: [{ label: "GitHub", href: "https://github.com/rohan-chandrashekar/5G-Network-Slicing" }],
    },

    {
      slug: "kernel-task-viewer-module",
      title: "Linux Kernel Task Viewer Module",
      subtitle:
        "Linux kernel module that lists running tasks (PID, state, parent) for a real‑time process‑tree snapshot — built to learn kernel internals hands‑on.",
      when: "Jan 2022 – Apr 2022 · PES University",
      tags: [
          "Operating Systems",
          "Kernel Programming",
          "Process Management",
          "Systems Debugging",
        ],
      highlight: "Kernel module for dynamic task inspection.",
      cover: { src: "https://opengraph.githubassets.com/af8621a337c78dd4ae147e178f445f3bd63574a1/rohan-chandrashekar/Kernel-Task-Viewer-Module", alt: "Linux Kernel Task Viewer Module" },
      sections: {
        overview:
          "A Linux kernel module that dynamically enumerates all running tasks and exposes a real‑time snapshot of the system’s process tree, including PID, state, and parent relationship.",
        problem:
          "User‑space tools show processes, but kernel‑space visibility teaches *why* the OS behaves as it does. The aim was to learn task structures and iteration safely inside the kernel.",
        approach:
          "Implemented kernel‑space traversal over the task list and formatted results for easy reading.\nDesigned a simple user‑space access point (e.g., /proc entry) to retrieve the snapshot.\nKept safety and clarity in focus: clean module lifecycle, predictable output, and documented build/run steps.",
        impact:
          "A rare undergrad‑level portfolio piece: kernel programming, OS internals, and disciplined C engineering — a strong differentiator for systems roles.",
        stack: [
          "C",
          "Linux",
          "Git",
          "Make",
        ],
      },
      links: [{ label: "GitHub", href: "https://github.com/rohan-chandrashekar/Kernel-Task-Viewer-Module" }],
    },

    {
      slug: "en-zone-entertainment-website",
      title: "En‑Zone Entertainment Website",
      subtitle:
        "Full‑stack entertainment hub for music, comics, and manga — modern front‑end experience with robust backend support.",
      when: "Aug 2021 – Dec 2021 · PES University",
      tags: [
          "Full‑Stack Web",
          "REST APIs",
          "Database Design",
          "UI Engineering",
        ],
      highlight: "Entertainment platform combining multiple content types.",
      cover: { src: "https://opengraph.githubassets.com/743f81c2fe5ca435d08b563c85bd8002e91f26a0/rohan-chandrashekar/En-Zone-Entertainment-Website", alt: "En-Zone Entertainment Website" },
      sections: {
        overview:
          "En‑Zone is an entertainment web app that brings music, comics, and manga together under one experience. Built to feel interactive, responsive, and content‑rich.",
        problem:
          "Content apps often feel fragmented — separate experiences for separate media. The goal was to unify discovery and browsing into one cohesive product.",
        approach:
          "Designed a modern front end with thoughtful navigation and content presentation.\nImplemented backend support and data handling to keep the experience responsive.\nFocused on an “app‑like” feel: clean layouts, intuitive flows, and maintainable structure.",
        impact:
          "Shows product sense and full‑stack execution: turning an idea into a working, user‑facing experience with modern web tooling.",
        stack: [
          "JavaScript",
          "React",
          "Node.js",
          "MongoDB",
          "HTML",
          "CSS",
          "Git",
        ],
      },
      links: [{ label: "GitHub", href: "https://github.com/rohan-chandrashekar/En-Zone-Entertainment-Website" }],
    },

    {
      slug: "advanced-text-editor",
      title: "PyEdit Pro: The Ultimate Advanced Text Editor",
      subtitle:
        "Feature‑rich Python text editor built as a software‑engineering showcase — tied to an award‑winning paper (IEEE MRTM 2023).",
      when: "PES University · Project",
      tags: [
          "Software Craftsmanship",
          "UX Design",
          "Tooling",
          "Product Thinking",
        ],
      highlight: "Advanced Python text editor (best paper award).",
      cover: { src: "https://opengraph.githubassets.com/78e839954674dd351ad5a5032fb4fb0c3d68fe40/rohan-chandrashekar/ADVANCED-TEXT-EDITOR", alt: "PyEdit Pro" },
      sections: {
        overview:
          "An advanced text editor built in Python with a focus on usability and “power‑user” features. This project was also presented as a paper (“PyEdit Pro”) and won a best paper award (IEEE MRTM 2023).",
        problem:
          "Most student editors stop at basic open/save. The challenge was designing an editor that feels genuinely usable: fast navigation, better editing affordances, and polished workflow details.",
        approach:
          "Implemented core editing and file management flows, then layered advanced UX features to improve productivity.\nFocused on interaction design: discoverable controls, sensible defaults, and smooth handling of common editing tasks.\nPackaged the project with clear documentation so reviewers can run it and understand feature intent.",
        impact:
          "A standout “software craftsmanship” artifact: product thinking + implementation depth. It communicates that you build tools people would actually want to use — not just class demos.",
        stack: [
          "Python",
          "Tkinter",
          "Git",
        ],
      },
      links: [{ label: "GitHub", href: "https://github.com/rohan-chandrashekar/ADVANCED-TEXT-EDITOR" }],
    },
  ],


  otherBuilds: [
    {
      title: "Tic‑Tac‑Toe (Socket Programming)",
      subtitle:
        "A networked Tic‑Tac‑Toe game built on sockets — a compact playground for client/server communication and protocol thinking.",
      tags: ["Networking", "Sockets", "Systems"],
      href: "https://github.com/rohan-chandrashekar/Tic-Tac-Toe-using-Socket-Programming",
    },
    {
      title: "Raft Consensus (Go)",
      subtitle:
        "Hands‑on implementation of core Raft mechanics to understand leader election, log replication, and fault‑tolerant coordination.",
      tags: ["Go", "Distributed Systems", "Consensus"],
      href: "https://github.com/rohan-chandrashekar/Implementing-Raft-Logic-in-GoLang",
    },
    {
      title: "KMP Algorithm (C)",
      subtitle:
        "A clean C implementation of Knuth–Morris–Pratt for fast substring search — classic CS fundamentals, done right.",
      tags: ["C", "Algorithms", "String Matching"],
      href: "https://github.com/rohan-chandrashekar/KMP-Algorithm-in-C",
    },
    {
      title: "HPE Parasparam 2024 — Whitepapers",
      subtitle:
        "A small repo containing my technical whitepaper submissions — covering LLM security and anomaly detection with federated learning.",
      tags: ["Security", "LLMs", "Federated Learning", "Whitepaper"],
      href: "https://github.com/rohan-chandrashekar/HPE-Parasparam-2024",
    },
    {
      title: "BoostFex (Private Workspace)",
      subtitle:
        "Private development workspace for BoostFex — experiments, datasets, and iteration history (access on request).",
      tags: ["FinTech", "ML", "Private Repo"],
      href: "https://github.com/rohan-chandrashekar/BoostFex-Private",
      private: true,
    },
  ],

  recommendations: [
    {
      name: "Dr Sapna V M",
      headline: "Associate Professor — PES University, Bangalore",
      photo: "/images/recommendations/rec-1.jpeg",
      date: "Nov 12, 2024",
quote:
        `It has been an absolute pleasure to mentor Rohan during his time at PES University. His unwavering commitment to excellence, even in the face of adversity, is truly commendable. Throughout his undergraduate journey, Rohan consistently demonstrated resilience, intellectual curiosity, and an extraordinary work ethic. Rohan's passion for learning, coupled with his leadership and problem-solving skills, makes him an exceptional student and researcher. I am confident that he will continue to excel in all his future endeavors and make meaningful contributions to the field of technology.`,
      url: "https://www.linkedin.com/in/rohan-chandrashekar1/details/recommendations/?detailScreenTabIndex=0",
},
    {
      name: "Ashutosh Pattanayak",
      headline:
        "Ex‑HPE · Cloud Security · Cybersecurity · AppSec · Infra VAPT · IAM · Data Classification · DevSecOps · Ansible · VoIP",
      photo: "/images/recommendations/rec-2.jpeg",
      date: "Dec 3, 2024",
quote:
        `It has been a privilege to mentor Rohan during his journey in cybersecurity. Rohan has consistently demonstrated exceptional expertise and dedication in the areas of application security, API security, and vulnerability analysis and penetration testing.

His ability to address modern challenges such as securing AI and large language models (LLMs) highlights his adaptability and forward-thinking approach. Rohan’s knowledge of Software Bill of Materials (SBOM), system hardening, and automation has made him an invaluable asset to the team.

What sets Rohan apart is his passion for continuous learning and his commitment to excellence. His proactive approach to problem-solving and his collaborative nature ensure that he not only excels individually but also elevates the performance of those around him.

I am confident that Rohan will continue to make significant contributions to the cybersecurity field and beyond. Any team would be fortunate to have someone of his caliber.`,
      url: "https://www.linkedin.com/in/rohan-chandrashekar1/details/recommendations/?detailScreenTabIndex=0",
},
    {
      name: "Ashwani Kaushik",
      headline:
        "CEO at Career Weaver · Transforming Education & Empowering Students · Visionary Leader Driving Innovation and Growth",
      photo: "/images/recommendations/rec-3.jpeg",
      date: "Oct 30, 2025",
quote:
        `LinkedIn Recommendation for Rohan:

I have had the privilege of mentoring Rohan during his academic and professional journey, and I can confidently say he is one of the most intellectually curious and driven students I’ve worked with. His ability to blend technical depth with forward-thinking innovation truly sets him apart.

Currently pursuing his B.Tech in Computer Science and Engineering from PES University, Rohan has consistently demonstrated exceptional academic performance and a passion for continuous learning. He has earned multiple prestigious global certifications from MIT xPRO, Wharton Online, Google, and The Linux Foundation, among others — showcasing his dedication to mastering cutting-edge domains like Quantum Computing, Cybersecurity, and Cloud Engineering.

At Hewlett Packard Enterprise (HPE), Rohan’s journey from intern to Technical Solutions Consultant reflects his strong problem-solving abilities and professionalism. He contributed to impactful projects involving AI-driven cybersecurity workflows, Ansible automation, and vulnerability analysis, and authored technical white papers on Large Language Model security and container behavior analysis. His recognition as the Best New Joiner at HPE’s Rewards and Recognition event is a testament to his outstanding performance and initiative.

Beyond his technical expertise, Rohan’s leadership qualities, humility, and commitment to excellence are remarkable. From his school days at Delhi Public School, where he served as Jr. Head Boy and represented the school in cricket, to his recent accomplishments in the tech domain, he has consistently shown integrity, teamwork, and perseverance.

I wholeheartedly recommend Rohan for any future academic, professional, or research opportunity. His combination of technical brilliance, curiosity, and character makes him an invaluable asset to any institution or organization he joins.

— Ashwani Kaushik
University Admissions Counselor | Mentor | Ivy League Counselor`,
      url: "https://www.linkedin.com/in/rohan-chandrashekar1/details/recommendations/?detailScreenTabIndex=0",
},
  ],
} as const;

export type Profile = typeof profile;
