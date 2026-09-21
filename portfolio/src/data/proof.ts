export interface OpenSourceContribution {
  id: string;
  name: string;
  repoUrl: string;
  description: string;
  role: string;
  impact: string;
  stars?: number;
  language: string;
}

export interface SetupItem {
  category: string;
  items: {
    name: string;
    description: string;
    link?: string;
  }[];
}

export const openSourceContributions: OpenSourceContribution[] = [
  {
    id: 'os-1',
    name: 'VIREONIQ',
    repoUrl: 'https://github.com/Priya-Ranjan-0201/VIREONIQ',
    description: 'Autonomous career roadmap & static AST code analyzer built with FastAPI and Qdrant.',
    role: 'Creator & Lead Maintainer',
    impact: '153/153 passing test cases, modular architecture, and zero-execution AST parsing.',
    language: 'Python / TypeScript',
  },
  {
    id: 'os-2',
    name: 'TrustShield-X',
    repoUrl: 'https://github.com/Priya-Ranjan-0201/TrustShield-X',
    description: 'High-speed concurrent security and header scanner built on Python 3.13 asyncio.',
    role: 'Creator & Lead Maintainer',
    impact: 'Sub-15ms concurrent socket & HTTP inspection with SHA-256 signed audit records.',
    language: 'Python / AsyncIO',
  },
  {
    id: 'os-3',
    name: 'Disk_Scheduling_Algorithm',
    repoUrl: 'https://github.com/Priya-Ranjan-0201/Disk_Scheduling_Algorithm',
    description: 'Pure client-side HTML5 Canvas kinematic simulator comparing 11 OS disk scheduling algorithms.',
    role: 'Creator & Lead Maintainer',
    impact: 'Visualizes disk arm movement at 60 FPS with seek distance calculations.',
    language: 'JavaScript / Canvas',
  },
  {
    id: 'os-4',
    name: 'Priocardix-AI',
    repoUrl: 'https://github.com/Priya-Ranjan-0201/Priocardix-AI',
    description: 'Explainable cardiovascular risk stratification tool with real-time Zustand state sliders.',
    role: 'Creator & Lead Maintainer',
    impact: 'Educational clinical simulation tool with 100% client-side privacy.',
    language: 'React / Zustand',
  },
];

export const usesSetup: SetupItem[] = [
  {
    category: 'Hardware & Desk',
    items: [
      {
        name: 'Primary Workstation',
        description: 'Windows Dev Rig with WSL2 Linux for kernel experiments, Docker daemon, and systems programming.',
      },
      {
        name: 'Custom Mechanical Keyboard',
        description: '75% layout with lubricated tactile switches and tuned stabilizers. Hand-assembled for long typing sessions.',
      },
      {
        name: 'Display',
        description: 'High-resolution IPS display with crisp typography scaling for multiple side-by-side terminal and code splits.',
      },
      {
        name: 'Audio',
        description: 'Noise-cancelling headphones for deep focus and listening to instrumental music while engineering.',
      },
    ],
  },
  {
    category: 'Development Environment & Tools',
    items: [
      {
        name: 'Editor',
        description: 'VS Code with minimal chrome. Key extensions: Error Lens, GitLens, Docker, and Prettier.',
      },
      {
        name: 'Terminal & Shell',
        description: 'PowerShell / Bash with Git CLI integration and custom aliases for Docker, npm, and Python venvs.',
      },
      {
        name: 'Monospace Font',
        description: 'JetBrains Mono with font ligatures enabled. Clear character distinction for 0/O and 1/l/I.',
      },
      {
        name: 'Color Theme',
        description: 'Warm editorial paper in daylight, warm charcoal at night. No eye-straining neon.',
      },
    ],
  },
  {
    category: 'Daily Workflow & Philosophy',
    items: [
      {
        name: 'Version Control',
        description: 'Git with disciplined, atomic commits. Meaningful commit messages that explain the architectural rationale.',
      },
      {
        name: 'Containerization First',
        description: 'Every backend service gets a Dockerfile and docker-compose.yml so environments are completely reproducible.',
      },
      {
        name: 'Note Taking & Thinking',
        description: 'Pen and paper for initial architectural state machines and database schema diagrams before writing code.',
      },
    ],
  },
];
