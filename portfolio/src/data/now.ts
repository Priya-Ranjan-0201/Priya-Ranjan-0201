export interface NowPageData {
  updatedDate: string;
  location: string;
  buildingNow: {
    title: string;
    description: string;
    tech: string;
    link?: string;
  }[];
  learningNow: {
    topic: string;
    description: string;
  }[];
  readingNow: {
    title: string;
    author: string;
    takeaway: string;
  }[];
  currentQuestion: string;
  outsideTerminal: string;
}

export const nowContent: NowPageData = {
  updatedDate: 'September 2026',
  location: 'India',
  buildingNow: [
    {
      title: 'Automated CI/CD Test Pipeline for VIREONIQ',
      description:
        'Refactoring AST static parsing into parallel worker jobs with Redis caching to cut analysis latency from 450ms down to under 80ms.',
      tech: 'Python 3.12, Celery, Redis, Docker',
      link: 'https://github.com/Priya-Ranjan-0201/VIREONIQ',
    },
    {
      title: 'Lightweight Network Probe Benchmark Tool',
      description:
        'Writing a small CLI tool in Go to compare connection throughput and latency jitter across local network interfaces under synthetic packet drops.',
      tech: 'Go, POSIX Sockets, Linux CLI',
    },
    {
      title: 'Personal Editorial Engineering Portfolio',
      description:
        'Rebuilding this very site to be 100% human-crafted, typography-driven, and focused on plain engineering clarity without AI-generated tropes.',
      tech: 'Next.js 16, React 19, TypeScript, Tailwind CSS',
    },
  ],
  learningNow: [
    {
      topic: 'Linux Kernel Epoll & Async Event Demultiplexing',
      description:
        'Diving deep into how the Linux kernel notifies user space of socket read/write readiness without busy-waiting. Learning why epoll scales to 100k+ connections while select() and poll() stall.',
    },
    {
      topic: 'Database B-Tree Index Mechanics & Execution Plans',
      description:
        'Inspecting PostgreSQL `EXPLAIN (ANALYZE, BUFFERS)` outputs to understand when sequential scans beat index scans, and how index bloat impacts disk cache hits.',
    },
    {
      topic: 'Modern Container Security & Non-Root Hardening',
      description:
        'Auditing Docker container escape vectors, dropped Linux capabilities (`cap_drop`), read-only root filesystems, and minimal Alpine scratch containers.',
    },
  ],
  readingNow: [
    {
      title: 'Designing Data-Intensive Applications',
      author: 'Martin Kleppmann',
      takeaway:
        'A masterclass on replication lag, consensus, and fault tolerance. It cured me of the desire to use distributed systems when a reliable single-node Postgres instance will do.',
    },
    {
      title: 'The Design of the UNIX Operating System',
      author: 'Maurice J. Bach',
      takeaway:
        'Fascinating look at how early Bell Labs engineers designed inode tables, buffer caches, and process forks with extreme hardware constraints.',
    },
  ],
  currentQuestion:
    'How can we make cloud deployments and software architectures simpler, quieter, and more predictable instead of endlessly stacking transient layers of abstraction?',
  outsideTerminal:
    'Running 5km three times a week, tuning switch springs on my mechanical keyboard, and practicing brewing V60 pour-over coffee.',
};

export interface MindScanCluster {
  id: string;
  name: string;
  tagline: string;
  summary: string;
  philosophy: string;
  keyConcepts: string[];
  relatedProjects: string[];
  color: string;
}

export const mindScanClusters: MindScanCluster[] = [
  {
    id: 'ai-ml',
    name: 'AI & Systems Architecture',
    tagline: 'Deterministic Logic Meets Machine Intelligence',
    summary: 'Focusing on efficient inference, AST static analysis, and verifiable pipelines.',
    philosophy: 'AI tools are only as reliable as the deterministic pipelines and safeguards wrapping them.',
    keyConcepts: ['AST Parsing', 'Model Quantization', 'Vector Embeddings', 'Safe Fallbacks'],
    relatedProjects: ['vireoniq', 'code-sentinel'],
    color: '#1B4332',
  },
  {
    id: 'infrastructure',
    name: 'Cloud & Infrastructure Reliability',
    tagline: 'Resilient Micro-architectures',
    summary: 'Building reproducible containerized environments with strict resource constraints.',
    philosophy: 'Simple architectures tested under failure scenarios outperform complex fragile distributed setups.',
    keyConcepts: ['Docker Scratch', 'Linux cgroups', 'CI/CD Pipelines', 'Zero-Downtime Rolling Deploys'],
    relatedProjects: ['cloud-guardian', 'vireoniq'],
    color: '#D97706',
  },
];
