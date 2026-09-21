import { Profile, ThinkingStep } from '@/types';

export interface PersonalStory {
  whyCS: string;
  whyDevOpsCloud: string;
  failures: {
    title: string;
    context: string;
    whatHappened: string;
    lessonLearned: string;
  }[];
  outsideCode: {
    activity: string;
    description: string;
  }[];
}

export interface ExploreMindDomain {
  id: string;
  label: string;
  tagline: string;
  description: string;
  technologies: string[];
  flagshipProject: {
    title: string;
    slug: string;
    highlight: string;
    githubRepo: string;
    metrics: string;
  };
}

export const exploreMindDomains: ExploreMindDomain[] = [
  {
    id: 'ai',
    label: 'AI & Machine Learning',
    tagline: 'Transparent reasoning and practical machine learning',
    description: 'Applying machine learning where it creates tangible clarity: Abstract Syntax Tree evaluation, vector similarity search with Qdrant, and explainable risk modeling with TreeSHAP.',
    technologies: ['PyTorch', 'Python', 'Qdrant Vector DB', 'Scikit-learn', 'TreeSHAP', 'AST Parsing'],
    flagshipProject: {
      title: 'VIREONIQ',
      slug: 'vireoniq',
      highlight: 'AST syntax code analysis & vector roadmaps with 153 automated test cases.',
      githubRepo: 'https://github.com/Priya-Ranjan-0201/VIREONIQ',
      metrics: '153 Tests Passing · Python 3.11 · Qdrant Vector DB',
    },
  },
  {
    id: 'cybersecurity',
    label: 'Cybersecurity & Trust',
    tagline: 'Defensive architecture, network auditing & cryptographic integrity',
    description: 'Building tools that verify system invariants: concurrent port scanners, HTTP security header auditors, and SHA-256 tamper-evident transaction logs.',
    technologies: ['Python 3.13 AsyncIO', 'Socket Programming', 'PyCryptodome', 'STIX 2.1', 'Security Invariants'],
    flagshipProject: {
      title: 'TrustShield X',
      slug: 'trustshield-x',
      highlight: 'Sub-15ms multi-vector network & header scanner with cryptographically signed logs.',
      githubRepo: 'https://github.com/Priya-Ranjan-0201/TrustShield-X',
      metrics: 'Sub-15ms Socket Scans · SHA-256 Tamper Proofing · Python AsyncIO',
    },
  },
  {
    id: 'fullstack',
    label: 'Full-Stack Architecture',
    tagline: 'Clean API design paired with high-performance client interfaces',
    description: 'Designing end-to-end applications with strict TypeScript typing, decoupled FastAPI asynchronous backends, and responsive, accessible UI states.',
    technologies: ['Next.js 16', 'React 19', 'FastAPI', 'TypeScript', 'PostgreSQL', 'Docker'],
    flagshipProject: {
      title: 'TECH-ON-TOUR',
      slug: 'tech-on-tour',
      highlight: 'Full-stack geospatial routing platform with GeoJSON 2dsphere indexes and real-time state.',
      githubRepo: 'https://github.com/Priya-Ranjan-0201/TECH-ON-TOUR',
      metrics: 'TypeScript · GeoJSON 2dsphere · Next.js · MongoDB',
    },
  },
  {
    id: 'vision',
    label: 'Computer Vision',
    tagline: 'Visual perception pipelines and image processing',
    description: 'Exploring real-time feature extraction, algorithmic edge detection, and visual pattern recognition for human-computer interaction and automation.',
    technologies: ['OpenCV', 'Python', 'NumPy', 'Image Filtering', 'Feature Matching'],
    flagshipProject: {
      title: 'HRCV',
      slug: 'hrcv',
      highlight: 'Computer vision pipeline detecting visual features and real-time interaction states.',
      githubRepo: 'https://github.com/Priya-Ranjan-0201/HRCV-',
      metrics: '60 FPS Realtime · OpenCV · NumPy · Feature Detection',
    },
  },
  {
    id: 'systems',
    label: 'Systems & OS Fundamentals',
    tagline: 'Hardware boundaries, process scheduling, and kernel primitives',
    description: 'Understanding low-level computing constraints: storage head seek algorithms, memory allocation models, asynchronous event loops, and POSIX socket concurrency.',
    technologies: ['C', 'Linux Internals', 'POSIX Sockets', 'Event Loops', 'Algorithmic Optimization'],
    flagshipProject: {
      title: 'Disk Scheduling Algorithm',
      slug: 'disk-scheduling',
      highlight: 'Kinematic 60 FPS HTML5 Canvas simulator modeling 11 OS disk scheduling strategies.',
      githubRepo: 'https://github.com/Priya-Ranjan-0201/Disk_Scheduling_Algorithm',
      metrics: '11 Scheduling Algorithms · 60 FPS Canvas · Seek Optimization',
    },
  },
  {
    id: 'product',
    label: 'Product Systems & UX',
    tagline: 'Human ergonomics, interactive simulation, and visual rhythm',
    description: 'Bridging engineering rigor with intuitive user workflows: interactive "what-if" state sliders, contextual navigation previews, and calm typography.',
    technologies: ['UI Design Systems', 'Zustand State', 'Framer Motion', 'Swiss Typography', 'Web Accessibility'],
    flagshipProject: {
      title: 'Priocardix AI',
      slug: 'priocardix-ai',
      highlight: 'Interactive cardiovascular risk simulator with real-time feedback sliders.',
      githubRepo: 'https://github.com/Priya-Ranjan-0201/Priocardix-AI',
      metrics: 'ROC-AUC 98.4% · TreeSHAP Explainability · React 19',
    },
  },
];

export const thinkingSteps: ThinkingStep[] = [
  {
    step: '01',
    title: 'Listen & Understand',
    tagline: 'Find the real friction point before touching code.',
    desc: 'Most software problems are misunderstanding problems in disguise. I start by carefully mapping how people actually use a tool and where the true bottleneck hides.',
    invariant: 'The real problem is almost never what was initially assumed.',
    telemetry: 'Discovery phase: interview users, inspect edge cases, clarify requirements',
    color: '#1B4332',
  },
  {
    step: '02',
    title: 'Question Defaults',
    tagline: 'Do not build complexity that does not need to exist.',
    desc: 'Before adding a distributed cache or a new framework, I ask if a straightforward relational query or a clean data structure solves it in two lines.',
    invariant: 'The best code is the code you did not need to write.',
    telemetry: 'Architecture review: strip out unnecessary services before writing code',
    color: '#1B4332',
  },
  {
    step: '03',
    title: 'Build Simply',
    tagline: 'Write clear, readable, and well-typed code.',
    desc: 'I choose clear names, clean interfaces, and predictable data flow. Code is read ten times more often than it is written.',
    invariant: 'Clever code is a liability; clear code is a relief.',
    telemetry: 'Implementation: strong types, modular functions, single responsibilities',
    color: '#1B4332',
  },
  {
    step: '04',
    title: 'Test What Breaks',
    tagline: 'Simulate bad network, bad data, and edge conditions.',
    desc: 'Every endpoint gets tested against timeouts, missing payloads, and concurrent requests. Catching errors in staging is an act of user respect.',
    invariant: 'Untested edge cases will always find their way to production.',
    telemetry: 'Verification: automated unit tests, timeout policies, boundary checks',
    color: '#1B4332',
  },
  {
    step: '05',
    title: 'Ship & Maintain',
    tagline: 'Deployment is the start of stewardship, not the end.',
    desc: 'Release with clear logs, honest documentation, and simple rollback paths. Reliable software is maintained with long-term care.',
    invariant: 'Good software is quiet, predictable, and dependable.',
    telemetry: 'Operations: health monitors, clear error logs, reproducible environments',
    color: '#1B4332',
  },
];

export const personalStory: PersonalStory = {
  whyCS: "I didn't grow up disassembling circuit boards in a workshop. My path started with simple, stubborn curiosity: I wanted to understand what actually happens in the silent milliseconds between pressing Enter in a browser address bar and having a webpage appear on my screen. Once I discovered network sockets, operating system processes, and algorithmic trade-offs, I was completely hooked. It transformed the computer from a magical black box into a machine built by human hands—one that I could learn to build, improve, and understand from the ground up.",
  whyDevOpsCloud: "Early on, I built projects that ran fine on my local laptop, only to watch them fall over in embarrassing ways the instant I tried deploying them to a cloud server. That humbled me quickly. It taught me that writing code is only the first chapter—keeping that code alive, observable, performant, and secure under real-world conditions is where the true engineering craft lives. I fell in love with Linux system administration, containerization with Docker, structured networking, and automated CI/CD pipelines. There is a deep, honest satisfaction in building an infrastructure where deployments are predictable, repeatable, and calm.",
  failures: [
    {
      title: "The Unbounded Connection Storm",
      context: "During an early test of my network scanner project (TrustShield X), I attempted to scan a wide subnet concurrently.",
      whatHappened: "I spawned hundreds of asynchronous socket connections without enforcing a concurrency pool semaphore. Within seconds, the script exhausted available operating system file descriptors, choked my local network interface, and froze the runtime.",
      lessonLearned: "Concurrency without strict rate-limiting and explicit timeouts is indistinguishable from a self-inflicted denial-of-service. I re-architected the scanner around bounded async semaphores and mandatory connection timeouts. Now, every single network boundary I build has deterministic limits."
    },
    {
      title: "The Premature Microservices Trap",
      context: "When starting my career intelligence project (VIREONIQ), I initially broke the prototype into four separate microservices with an asynchronous message broker.",
      whatHappened: "I spent three weeks debugging Docker internal network bridges, payload serialization bugs, and cross-service latency instead of improving the core algorithms and user experience.",
      lessonLearned: "Premature distribution is an expensive mistake. I tore down the separate services and consolidated the codebase into a clean, modular FastAPI application with Redis caching. Development speed quadrupled immediately. I learned to earn the right to distribute through real scale, not imaginary future requirements."
    }
  ],
  outsideCode: [
    {
      activity: "Reading & Tech History",
      description: "Fascinated by the history of computing—from the design of the Unix operating system at Bell Labs to how Apollo mission guidance software handled hardware glitches."
    },
    {
      activity: "Mechanical Keyboards",
      description: "Enjoy building and modding mechanical keyboards. There is something grounding about lubing switches and tuning stabilizers for a tactile, tactile typing experience."
    },
    {
      activity: "Running & Long Walks",
      description: "My favorite way to debug a stubborn race condition is to close the laptop and go for a 5km run. The solution almost always surfaces once I step away."
    },
    {
      activity: "Pour-Over Coffee",
      description: "Treating morning brew ratios, grind size, and water temperature with the same steady attention to detail as a well-crafted build pipeline."
    }
  ]
};

export const profileManifesto = {
  line1: "I like difficult problems.",
  line2: "They create better questions.",
  line3: "Better questions create better systems.",
};

export const profile: Profile = {
  firstName: 'Priya',
  lastName: 'Ranjan',
  title: 'Computer Science Engineer · Builder · Problem Solver',
  roles: ['Computer Science Engineer', 'Builder', 'Problem Solver'],
  statement: "I build thoughtful software experiences at the intersection of technology, problem solving and intelligent systems.",
  bio: [
    "I'm an undergraduate studying Computer Science & Engineering (B.Tech 2023–2027) in India. My primary interests sit across Artificial Intelligence, Machine Learning, Cybersecurity, Full-Stack Development, Computer Vision, and Software Engineering.",
    "I like understanding how things work under the hood, building reliable systems, and writing software that solves real problems without unnecessary noise. I care about first principles: why a particular architecture fits the problem, how an operating system schedules disk heads, and how to write clean, maintainable software.",
    "When I'm not writing code or experimenting with new algorithms, you'll find me studying computing history, modding mechanical keyboards, or running."
  ],
  avatar: '/images/priya-portrait.jpg',
  email: 'priye0201@gmail.com',
  location: 'India',
  resume: '/resume',
  socialLinks: [
    {
      platform: 'GitHub',
      url: 'https://github.com/Priya-Ranjan-0201',
      label: 'GitHub',
      icon: 'github',
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/priye-ranjan',
      label: 'LinkedIn',
      icon: 'linkedin',
    },
    {
      platform: 'Email',
      url: 'mailto:priye0201@gmail.com',
      label: 'Email',
      icon: 'mail',
    },
  ],
  identityNodes: [
    {
      id: 'systems',
      label: 'Systems & OS',
      subtitle: 'Low-Level Mechanics & Performance',
      description: 'Understanding operating systems, storage arm seek physics, process scheduling, and memory boundaries.',
      color: '#1B4332',
      iconName: 'Cpu',
      technologies: ['C', 'Linux Internals', 'Data Structures', 'POSIX Sockets'],
      focusAreas: ['Memory Management', 'Process Scheduling', 'Storage Kinematics'],
    },
    {
      id: 'devops',
      label: 'Cloud & DevOps',
      subtitle: 'Reliable Infrastructure & Automation',
      description: 'Deploying containerized applications, automating CI/CD pipelines, and ensuring systems remain observable and resilient.',
      color: '#1B4332',
      iconName: 'Layers',
      technologies: ['Docker', 'Linux CLI', 'GitHub Actions', 'Nginx', 'PostgreSQL'],
      focusAreas: ['Automated Deployments', 'Container Hardening', 'Network Boundaries'],
    },
    {
      id: 'ai',
      label: 'Applied AI',
      subtitle: 'Explainable Models & Intelligence',
      description: 'Applying machine learning where it adds tangible clarity—such as explainable healthcare risk models and syntax tree code evaluation.',
      color: '#1B4332',
      iconName: 'Brain',
      technologies: ['Python', 'PyTorch', 'Scikit-learn', 'XGBoost', 'SHAP'],
      focusAreas: ['Model Explainability', 'Vector Similarity', 'AST Parsing'],
    },
  ],
};
