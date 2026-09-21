import { ExperienceEntry } from '@/types';

export interface TurningPoint {
  id: string;
  year: string;
  period: string;
  title: string;
  turningPointHeadline: string;
  narrative: string;
  whatChanged: string;
  keyTakeaway: string;
  technologies: string[];
  proofLink?: string;
  proofLabel?: string;
}

export const turningPoints: TurningPoint[] = [
  {
    id: 'tp-1',
    year: '2023',
    period: 'The First Awakening',
    title: 'From "Writing Code" to Understanding the Machine',
    turningPointHeadline: 'Realizing that programming is not about memorizing syntax, but managing hardware resources.',
    narrative:
      'Early in my Computer Science degree, I wrote small programs that worked, but I had no intuition for what the computer was actually doing. In our operating systems course, I saw how a mechanical hard drive arm physically seeks across magnetic cylinders. To truly understand it, I built an interactive HTML5 Canvas simulator modeling 11 disk scheduling algorithms (FCFS, SSTF, SCAN, LOOK).',
    whatChanged:
      'I stopped treating the computer as a magic black box. I started caring about cache locality, memory allocation in C, and why algorithmic Big-O matters in the physical world.',
    keyTakeaway: 'High-level abstractions always leak. The closer you understand the bare machine, the better software you build.',
    technologies: ['C', 'Linux Internals', 'Data Structures', 'Operating Systems', 'HTML5 Canvas'],
    proofLink: 'https://github.com/Priya-Ranjan-0201/Disk_Scheduling_Algorithm',
    proofLabel: 'View Disk Simulator Repo',
  },
  {
    id: 'tp-2',
    year: '2024',
    period: 'The Reality Check',
    title: 'When Local Code Meets Cloud Reality (The Hard Failure)',
    turningPointHeadline: 'Learning that software is only complete when it survives bad networks, timeouts, and concurrent load.',
    narrative:
      'While building TrustShield X (my concurrent network scanner) and VIREONIQ, I experienced my first real architectural humble pie. An unthrottled asynchronous loop exhausted operating system socket descriptors within seconds and hung the server. Soon after, an over-engineered microservice setup caused more deployment headaches than actual value.',
    whatChanged:
      'I tore down the unnecessary microservices, unified into a clean modular monolith with Redis caching, and instituted strict concurrency semaphores and timeouts on every network call.',
    keyTakeaway: 'Concurrency without bounded limits is self-inflicted denial of service. Earn the right to distribute through scale, not ego.',
    technologies: ['Python 3.13', 'FastAPI', 'AsyncIO', 'Redis', 'Docker Compose', 'Qdrant'],
    proofLink: 'https://github.com/Priya-Ranjan-0201/TrustShield-X',
    proofLabel: 'View TrustShield-X Repo',
  },
  {
    id: 'tp-3',
    year: '2024–2025',
    period: 'The Infrastructure Shift',
    title: 'The Deep Dive into DevOps, Docker & Automation',
    turningPointHeadline: 'Discovering that predictable deployments and clean infrastructure are forms of engineering craftsmanship.',
    narrative:
      'I fell in love with infrastructure-as-code and containerization. I spent weeks learning how to craft hardened multi-stage Dockerfiles with non-root UIDs (<180MB footprint), setting up automated GitHub Actions pipelines with linting and unit testing, and configuring reverse proxies with Nginx.',
    whatChanged:
      'Deployment went from a nerve-wracking manual chore to a calm, automated, repeatable git push. If an application cannot be spun up deterministically with one command, it is not production-ready.',
    keyTakeaway: 'A great deployment pipeline allows developers to move fast without the fear of breaking things at 2 AM.',
    technologies: ['Docker', 'GitHub Actions', 'Linux CLI', 'Nginx', 'PostgreSQL', 'Bash'],
    proofLink: 'https://github.com/Priya-Ranjan-0201/VIREONIQ',
    proofLabel: 'View Containerized VIREONIQ Repo',
  },
  {
    id: 'tp-4',
    year: '2025–Present',
    period: 'The Craft of Restraint',
    title: 'Building Software with Empathy, Speed & Restraint',
    turningPointHeadline: 'Rejecting artificial complexity and focusing on what users actually need: speed, clarity, and reliability.',
    narrative:
      'Today, my engineering philosophy is anchored in restraint. Whether building clinical cardiovascular risk calculators that explain their reasoning (Priocardix AI) or designing fast web applications with zero gratuitous animations, I believe the best software respects user attention and battery life.',
    whatChanged:
      'I actively remove dependencies that do not pull their weight. I choose clean types, clear database schemas, and accessible typography over superficial flashiness.',
    keyTakeaway: 'Simplicity is not the lack of sophistication; it is the ultimate resolution of complexity.',
    technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Zustand', 'Tailwind CSS', 'PostgreSQL'],
    proofLink: 'https://github.com/Priya-Ranjan-0201/Priocardix-AI',
    proofLabel: 'View Priocardix AI Repo',
  },
];

// Retain legacy interface compatibility
export const experiences: ExperienceEntry[] = [
  {
    id: 'exp-btech-cse',
    year: '2023',
    endYear: '2027',
    title: 'B.Tech in Computer Science & Engineering',
    organization: 'University Engineering Curriculum',
    type: 'education',
    description: 'Specializing in Operating Systems, Relational Database Modeling, Computer Networks, and Cloud Systems.',
    highlights: [
      'Foundations in Data Structures, Advanced Algorithms, and Computer Architecture',
      'Systems labs in C, POSIX socket programming, and memory allocation',
      'Open-source project development and peer mentorship in engineering study circles',
    ],
    technologies: ['C', 'Data Structures', 'Operating Systems', 'Computer Networks', 'PostgreSQL'],
    label: 'FOUNDATION',
  },
  {
    id: 'exp-2023-systems',
    year: '2023',
    title: 'Low-Level Storage Kinematics & Algorithms',
    organization: 'Independent Systems Research',
    type: 'milestone',
    description: 'Built interactive 60 FPS HTML5 Canvas simulator to visualize disk read/write head traversal and analyze seek time minimization.',
    highlights: [
      'Implemented 11 OS disk scheduling algorithms from first principles',
      'Modeled physical seek kinematics across cylinder boundaries',
      'Compared mechanical platter seeks against solid-state drive block remapping',
    ],
    technologies: ['C', 'JavaScript', 'HTML5 Canvas', 'Data Structures', 'Algorithms'],
    label: 'SYSTEMS',
  },
  {
    id: 'exp-2024-vireoniq-trustshield',
    year: '2024',
    title: 'Full-Stack Architecture & Defensive Engineering',
    organization: 'Project Engineering Phase',
    type: 'project',
    description: 'Architected and launched VIREONIQ (AST static code analyzer & career roadmap) and TrustShield-X (concurrent security scanner).',
    highlights: [
      'Engineered FastAPI backend with Python AST parsing and Qdrant vector retrieval',
      'Built concurrent socket and HTTP header scanner achieving sub-15ms audit runs',
      'Orchestrated development environments with Docker Compose and Redis task queues',
    ],
    technologies: ['Python', 'FastAPI', 'Next.js', 'PyTorch', 'PostgreSQL', 'Redis', 'Docker'],
    label: 'BUILD',
  },
  {
    id: 'exp-2024-vision-healthcare',
    year: '2024',
    endYear: '2025',
    title: 'Explainable AI & Clinical Risk Systems',
    organization: 'Applied Machine Learning',
    type: 'project',
    description: 'Built Priocardix AI to make cardiovascular risk prediction auditable and interactive with real-time scenario simulation.',
    highlights: [
      'Integrated deterministic clinical risk models with reactive Zustand state orchestration',
      'Created what-if simulation sliders allowing users to see how lifestyle modifications impact health',
      'Zero unencrypted health data sent across networks; 100% ephemeral client computation',
    ],
    technologies: ['React', 'Zustand', 'Chart.js', 'Tailwind CSS', 'Python', 'Scikit-Learn'],
    label: 'HEALTH TECH',
  },
  {
    id: 'exp-2025-devops',
    year: '2025',
    endYear: 'Present',
    title: 'DevOps Automation & Systems Craftsmanship',
    organization: 'Production Systems & Open Source',
    type: 'milestone',
    description: 'Focusing on reliable infrastructure, automated CI/CD pipelines, container security, and high-performance, accessible web engineering.',
    highlights: [
      'Authored multi-stage hardened Dockerfiles with non-root user execution',
      'Automated testing workflows with GitHub Actions',
      'Advocating for software simplicity, honest metrics, and human-crafted ergonomics',
    ],
    technologies: ['Docker', 'GitHub Actions', 'Linux', 'Next.js 16', 'TypeScript', 'PostgreSQL'],
    label: 'HORIZON',
  },
];
