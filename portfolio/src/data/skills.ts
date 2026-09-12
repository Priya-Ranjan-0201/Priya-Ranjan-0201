import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'core-languages',
    label: 'Core Languages',
    description: 'Foundational programming languages used across systems, web, and algorithmic pipelines.',
    icon: 'code',
    color: '#00f0ff',
    skills: [
      { name: 'Python', level: 'advanced', tags: ['Backend', 'AI/ML', 'Automation'], relatedProjects: ['vireoniq', 'trustshield-x', 'hrcv', 'priocardix-ai'] },
      { name: 'TypeScript', level: 'proficient', tags: ['Frontend', 'Full-Stack', 'Type Safety'], relatedProjects: ['vireoniq', 'braincheck', 'tech-on-tour'] },
      { name: 'JavaScript (ES6+)', level: 'advanced', tags: ['Web', 'DOM', 'Canvas'], relatedProjects: ['disk-scheduling-algorithm', 'tech-on-tour'] },
      { name: 'C', level: 'familiar', tags: ['Systems', 'Memory Management', 'Data Structures'], relatedProjects: ['disk-scheduling-algorithm'] },
      { name: 'SQL', level: 'proficient', tags: ['Databases', 'Relational Schemas', 'Query Optimization'], relatedProjects: ['vireoniq', 'trustshield-x'] },
      { name: 'HTML5 / Modern CSS', level: 'advanced', tags: ['Layouts', 'Canvas API', 'Animations'], relatedProjects: ['vireoniq', 'disk-scheduling-algorithm', 'braincheck'] },
    ],
  },
  {
    id: 'frameworks-libraries',
    label: 'Frameworks & Engines',
    description: 'Modern application frameworks and web runtime environments.',
    icon: 'layers',
    color: '#38bdf8',
    skills: [
      { name: 'Next.js 15 (App Router)', level: 'proficient', tags: ['Full-Stack', 'Server Components', 'SSR'], relatedProjects: ['vireoniq'] },
      { name: 'React 18', level: 'advanced', tags: ['State Machines', 'Hooks', 'Component Architecture'], relatedProjects: ['vireoniq', 'braincheck', 'tech-on-tour'] },
      { name: 'FastAPI', level: 'proficient', tags: ['Async Python', 'Pydantic', 'OpenAPI'], relatedProjects: ['vireoniq', 'priocardix-ai'] },
      { name: 'Node.js / Express', level: 'proficient', tags: ['Asynchronous I/O', 'REST APIs', 'Middleware'], relatedProjects: ['tech-on-tour'] },
      { name: 'Flask', level: 'proficient', tags: ['Lightweight API', 'Task Coordination'], relatedProjects: ['trustshield-x', 'hrcv'] },
      { name: 'TailwindCSS / CSS Modules', level: 'advanced', tags: ['Design Systems', 'Responsive UI', 'Glassmorphism'], relatedProjects: ['vireoniq', 'braincheck'] },
    ],
  },
  {
    id: 'ai-machine-learning',
    label: 'AI & Data Science',
    description: 'Machine learning frameworks, vector retrieval, and computer vision tools.',
    icon: 'cpu',
    color: '#818cf8',
    skills: [
      { name: 'PyTorch', level: 'familiar', tags: ['Deep Learning', 'Neural Tensors', 'Embeddings'], relatedProjects: ['vireoniq', 'hrcv'] },
      { name: 'OpenCV', level: 'proficient', tags: ['Image Processing', 'Contrast CLAHE', 'Keypoint Tracking'], relatedProjects: ['hrcv'] },
      { name: 'Scikit-Learn', level: 'proficient', tags: ['Ensemble Classifiers', 'Preprocessing', 'Metrics'], relatedProjects: ['priocardix-ai'] },
      { name: 'XGBoost', level: 'proficient', tags: ['Gradient Boosted Trees', 'Tabular ML', 'Tuning'], relatedProjects: ['priocardix-ai'] },
      { name: 'SHAP (Explainable AI)', level: 'proficient', tags: ['TreeSHAP', 'Attribution', 'Feature Importance'], relatedProjects: ['priocardix-ai'] },
      { name: 'NumPy & Pandas', level: 'advanced', tags: ['Vectorized Math', 'Data Cleaning', 'Matrices'], relatedProjects: ['vireoniq', 'hrcv', 'priocardix-ai'] },
    ],
  },
  {
    id: 'cybersecurity-networks',
    label: 'Cybersecurity & Networks',
    description: 'Security testing tools, network socket analysis, and threat modeling methodologies.',
    icon: 'shield',
    color: '#f43f5e',
    skills: [
      { name: 'Nmap & Port Auditing', level: 'proficient', tags: ['Socket Sweeps', 'NSE Scripts', 'Fingerprinting'], relatedProjects: ['trustshield-x'] },
      { name: 'OWASP ZAP / Web Security', level: 'proficient', tags: ['Top 10 Vulnerabilities', 'Auth Flaws', 'XSS/CSRF'], relatedProjects: ['trustshield-x'] },
      { name: 'STRIDE Threat Modeling', level: 'familiar', tags: ['Risk Classification', 'CVSS Scoring', 'Attack Trees'], relatedProjects: ['trustshield-x'] },
      { name: 'Wireshark & Packet Analysis', level: 'familiar', tags: ['PCAP Inspection', 'Protocol Debugging', 'DNS Traffic'], relatedProjects: ['trustshield-x'] },
      { name: 'Linux Socket Scripting', level: 'proficient', tags: ['TCP/UDP Streams', 'Asyncio Sockets', 'Banner Grabs'], relatedProjects: ['trustshield-x'] },
    ],
  },
  {
    id: 'systems-databases-tools',
    label: 'Systems & Infrastructure',
    description: 'Databases, containerization, and operating system fundamental concepts.',
    icon: 'database',
    color: '#34d399',
    skills: [
      { name: 'OS Disk Scheduling Algorithms', level: 'advanced', tags: ['FCFS', 'SSTF', 'SCAN', 'C-LOOK'], relatedProjects: ['disk-scheduling-algorithm'] },
      { name: 'PostgreSQL', level: 'proficient', tags: ['Relational Schema', 'Indexes', 'ACID Pool'], relatedProjects: ['vireoniq', 'trustshield-x'] },
      { name: 'MongoDB & Geospatial (2dsphere)', level: 'proficient', tags: ['GeoJSON', 'Document Store', 'Proximity'], relatedProjects: ['tech-on-tour'] },
      { name: 'Redis', level: 'proficient', tags: ['In-Memory Cache', 'Key-Value', 'Job Queues'], relatedProjects: ['vireoniq'] },
      { name: 'Docker & Compose', level: 'proficient', tags: ['Containerization', 'Multi-Stage Builds', 'Networking'], relatedProjects: ['vireoniq', 'trustshield-x'] },
      { name: 'Git & GitHub Collaboration', level: 'advanced', tags: ['Version Control', 'Branching', 'CI/CD Basics'], relatedProjects: ['vireoniq', 'trustshield-x', 'tech-on-tour', 'hrcv', 'priocardix-ai', 'braincheck', 'disk-scheduling-algorithm'] },
    ],
  },
];

export const getSkillByName = (name: string) => {
  for (const cat of skillCategories) {
    const found = cat.skills.find(s => s.name.toLowerCase() === name.toLowerCase());
    if (found) return { skill: found, category: cat };
  }
  return null;
};
