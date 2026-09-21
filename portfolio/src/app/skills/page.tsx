'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Globe,
  Cpu,
  Shield,
  Wrench,
  Server,
  ArrowRight,
  ExternalLink,
  Search,
  CheckCircle2,
  Network,
  Eye,
} from 'lucide-react';
import { projects } from '@/data/projects';
import { playSound } from '@/lib/sound';

interface SkillGroup {
  category: string;
  domainKey: string;
  description: string;
  icon: any;
  skills: {
    name: string;
    verifiedUse: string;
    relatedProjects: string[];
  }[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'LANGUAGES',
    domainKey: 'LANGUAGES',
    description: 'Foundational programming languages used for systems, automation, and algorithmic pipelines.',
    icon: Code2,
    skills: [
      { name: 'Python', verifiedUse: 'FastAPI backends, PyTorch ML pipelines, AST syntax parsing', relatedProjects: ['vireoniq', 'trustshield-x', 'priocardix-ai', 'hrcv'] },
      { name: 'JavaScript / TypeScript', verifiedUse: 'Next.js App Router, React state systems, interactive UI', relatedProjects: ['vireoniq', 'tech-on-tour', 'braincheck'] },
      { name: 'C', verifiedUse: 'Memory allocation, process scheduling, operating system algorithms', relatedProjects: ['disk-scheduling'] },
      { name: 'SQL', verifiedUse: 'Relational schema design, indexes, transactional queries', relatedProjects: ['vireoniq', 'trustshield-x'] },
      { name: 'HTML5 & Modern CSS', verifiedUse: 'Semantic markup, accessibility, design systems, canvas', relatedProjects: ['vireoniq', 'tech-on-tour', 'disk-scheduling'] },
      { name: 'Bash / Shell', verifiedUse: 'Linux automation, deployment scripts, environment setup', relatedProjects: ['trustshield-x', 'vireoniq'] },
    ],
  },
  {
    category: 'WEB',
    domainKey: 'WEB',
    description: 'Modern frameworks, client-server architectures, and responsive interface systems.',
    icon: Globe,
    skills: [
      { name: 'React 18 / 19', verifiedUse: 'Component architectures, custom hooks, state trees', relatedProjects: ['vireoniq', 'braincheck', 'tech-on-tour'] },
      { name: 'Next.js 15', verifiedUse: 'Server Components, dynamic routing, metadata & SEO', relatedProjects: ['vireoniq'] },
      { name: 'FastAPI', verifiedUse: 'Asynchronous Python endpoints, Pydantic data schemas', relatedProjects: ['vireoniq', 'priocardix-ai'] },
      { name: 'Node.js / Express', verifiedUse: 'RESTful API routing, middleware, asynchronous I/O', relatedProjects: ['tech-on-tour'] },
      { name: 'Tailwind CSS', verifiedUse: 'Tokenized design systems, responsive grid layouts', relatedProjects: ['vireoniq', 'braincheck'] },
      { name: 'REST & JSON APIs', verifiedUse: 'Clean contract design, error envelopes, rate limits', relatedProjects: ['vireoniq', 'trustshield-x', 'tech-on-tour'] },
    ],
  },
  {
    category: 'AI / ML',
    domainKey: 'AI',
    description: 'Machine learning models, vector similarity retrieval, and explainable AI pipelines.',
    icon: Cpu,
    skills: [
      { name: 'PyTorch', verifiedUse: 'Neural tensor modeling, feature embeddings, loss functions', relatedProjects: ['vireoniq', 'hrcv'] },
      { name: 'Qdrant Vector DB', verifiedUse: 'Cosine similarity vector matching, dense embeddings', relatedProjects: ['vireoniq'] },
      { name: 'Scikit-Learn', verifiedUse: 'Ensemble classifiers, cross-validation, standard scalers', relatedProjects: ['priocardix-ai'] },
      { name: 'XGBoost', verifiedUse: 'Gradient boosted trees on structured tabular data', relatedProjects: ['priocardix-ai'] },
      { name: 'SHAP (Explainable AI)', verifiedUse: 'TreeSHAP attribution, feature impact visualization', relatedProjects: ['priocardix-ai'] },
      { name: 'NumPy & Pandas', verifiedUse: 'Matrix manipulation, vector math, dataframe cleaning', relatedProjects: ['vireoniq', 'priocardix-ai', 'hrcv'] },
    ],
  },
  {
    category: 'COMPUTER VISION',
    domainKey: 'VISION',
    description: 'Image processing algorithms, spatial matrices, and frame analysis.',
    icon: Eye,
    skills: [
      { name: 'OpenCV', verifiedUse: 'CLAHE contrast enhancement, thresholding, edge filters', relatedProjects: ['hrcv'] },
      { name: 'Keypoint Detection', verifiedUse: 'Coordinate mapping, bounding boxes, spatial tracking', relatedProjects: ['hrcv'] },
      { name: 'Image Preprocessing', verifiedUse: 'Normalization, channel splitting, morphological ops', relatedProjects: ['hrcv'] },
    ],
  },
  {
    category: 'SECURITY',
    domainKey: 'SECURITY',
    description: 'Defensive vulnerability assessment, network socket inspection, and risk modeling.',
    icon: Shield,
    skills: [
      { name: 'Nmap & Socket Auditing', verifiedUse: 'Network sweeps, banner grabs, port fingerprinting', relatedProjects: ['trustshield-x'] },
      { name: 'OWASP Security Top 10', verifiedUse: 'Vulnerability taxonomy, auth audits, injection defense', relatedProjects: ['trustshield-x'] },
      { name: 'STRIDE Threat Modeling', verifiedUse: 'Spoofing, tampering, information disclosure triage', relatedProjects: ['trustshield-x'] },
      { name: 'Wireshark & Packet Capture', verifiedUse: 'TCP stream inspection, DNS queries, PCAP debugging', relatedProjects: ['trustshield-x'] },
      { name: 'Linux Socket Scripting', verifiedUse: 'Raw TCP sockets, async network pingers in Python', relatedProjects: ['trustshield-x'] },
    ],
  },
  {
    category: 'TOOLS & SYSTEMS',
    domainKey: 'SYSTEMS',
    description: 'Infrastructure, version control, containerization, and operating system concepts.',
    icon: Server,
    skills: [
      { name: 'Git & GitHub', verifiedUse: 'Trunk-based workflow, code review, branching strategy', relatedProjects: ['vireoniq', 'trustshield-x', 'tech-on-tour', 'disk-scheduling'] },
      { name: 'Docker & Docker Compose', verifiedUse: 'Multi-stage builds, isolated container environments', relatedProjects: ['vireoniq', 'trustshield-x'] },
      { name: 'Linux / Unix OS', verifiedUse: 'Process management, POSIX permissions, CLI mastery', relatedProjects: ['trustshield-x', 'disk-scheduling'] },
      { name: 'PostgreSQL', verifiedUse: 'Relational ACID storage, foreign key constraints', relatedProjects: ['vireoniq', 'trustshield-x'] },
      { name: 'Redis', verifiedUse: 'In-memory key-value caching, session state management', relatedProjects: ['vireoniq'] },
      { name: 'OS Disk Scheduling Algorithms', verifiedUse: 'FCFS, SSTF, SCAN, C-LOOK, head seek time math', relatedProjects: ['disk-scheduling'] },
    ],
  },
];

const networkSatellites = [
  { id: 'ALL', label: 'ALL SKILLS', domain: 'ALL' },
  { id: 'AI', label: 'AI / ML', domain: 'AI' },
  { id: 'SECURITY', label: 'SECURITY', domain: 'SECURITY' },
  { id: 'WEB', label: 'WEB SYSTEMS', domain: 'WEB' },
  { id: 'VISION', label: 'VISION', domain: 'VISION' },
  { id: 'SYSTEMS', label: 'SYSTEMS', domain: 'SYSTEMS' },
  { id: 'LANGUAGES', label: 'LANGUAGES', domain: 'LANGUAGES' },
];

export default function SkillsPage() {
  const [activeDomain, setActiveDomain] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredGroups = skillGroups
    .filter((group) => activeDomain === 'ALL' || group.domainKey === activeDomain)
    .map((group) => ({
      ...group,
      skills: group.skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.verifiedUse.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((group) => group.skills.length > 0);

  return (
    <div className="skills-page-wrapper">
      <div className="subpage-container">
        {/* ── HEADER ───────────────────────────────────────── */}
        <div className="subpage-header-block">
          <div className="subpage-eyebrow">
            <span className="w-2 h-2 rounded-full bg-[rgb(var(--accent))]" />
            <span>TECHNICAL PROFICIENCIES &bull; NO PERCENTAGE BARS</span>
          </div>
          <h1 className="subpage-headline">
            Technical Stack &amp; Applied Disciplines
          </h1>
          <p className="subpage-lead-para">
            I do not assign arbitrary percentage ratings to tools. Every skill below is evaluated by how it was applied in real software repositories, architectural decisions, and production constraints.
          </p>
        </div>

        {/* ── SECTION 27: CLEAN INTERACTIVE NETWORK ─────────── */}
        <section className="mb-16 p-6 sm:p-8 rounded-2xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[rgb(var(--border))]">
            <div>
              <span className="text-xs font-mono text-[rgb(var(--accent))] uppercase tracking-wider block mb-1 font-bold">
                DISCIPLINE TOPOLOGY
              </span>
              <h2 className="text-lg font-bold text-[rgb(var(--fg-primary))]">
                Interactive Engineering Network
              </h2>
            </div>
            <span className="text-xs font-mono text-[rgb(var(--fg-muted))]">
              SELECT A NODE TO FILTER CONNECTED SKILLS
            </span>
          </div>

          {/* Network Map */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-4">
            {/* Center Node */}
            <div className="px-4 py-2 rounded-lg bg-[rgb(var(--bg-tertiary))] border border-[rgb(var(--accent))] text-[rgb(var(--accent))] font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
              &bull; ENGINEERING &bull;
            </div>

            <span className="text-[rgb(var(--fg-muted))] font-mono hidden sm:inline">&mdash;</span>

            {/* Satellites */}
            {networkSatellites.map((sat) => (
              <button
                key={sat.id}
                className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer ${
                  activeDomain === sat.domain
                    ? 'bg-[rgb(var(--accent))] text-white font-semibold shadow-sm'
                    : 'bg-[rgb(var(--bg-primary))] text-[rgb(var(--fg-muted))] border border-[rgb(var(--border))] hover:text-[rgb(var(--fg-primary))] hover:border-[rgb(var(--accent))]/40'
                }`}
                onClick={() => {
                  playSound('click');
                  setActiveDomain(sat.domain);
                }}
              >
                {sat.label}
              </button>
            ))}
          </div>
        </section>

        {/* ── SEARCH & FILTER CONTROLS ─────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="relative w-full max-w-sm">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[rgb(var(--fg-muted))]" />
            <input
              type="text"
              placeholder="Filter by skill, framework, or concept..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] focus:border-[rgb(var(--accent))] text-xs font-mono text-[rgb(var(--fg-primary))] placeholder-[#8E939B] focus:outline-none transition-colors"
            />
          </div>

          <div className="text-xs font-mono text-[rgb(var(--fg-muted))]">
            SHOWING {filteredGroups.reduce((acc, g) => acc + g.skills.length, 0)} VERIFIED SKILLS
          </div>
        </div>

        {/* ── SECTION 26: CLEAN CATEGORIES (NO PERCENTAGE BARS) */}
        <div className="space-y-12">
          {filteredGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.category}
                className="p-6 sm:p-8 rounded-2xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[rgb(var(--bg-tertiary))] border border-[rgb(var(--border))] flex items-center justify-center text-[rgb(var(--accent))]">
                    <Icon size={16} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[rgb(var(--fg-primary))] tracking-tight">
                      {group.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-[rgb(var(--fg-muted))] mb-6 max-w-2xl">
                  {group.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="p-4 rounded-xl bg-[rgb(var(--bg-primary))] border border-[rgb(var(--border))] hover:border-[rgb(var(--accent))]/50 transition-colors flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-[rgb(var(--fg-primary))]">
                            {skill.name}
                          </span>
                          <CheckCircle2 size={13} className="text-[rgb(var(--accent))]" />
                        </div>
                        <p className="text-xs text-[rgb(var(--fg-muted))] leading-relaxed mb-3">
                          {skill.verifiedUse}
                        </p>
                      </div>

                      {skill.relatedProjects.length > 0 && (
                        <div className="pt-2.5 border-t border-[rgb(var(--border))]/60 flex items-center justify-between text-[11px] font-mono">
                          <span className="text-[rgb(var(--fg-muted))]">Verified Project:</span>
                          <Link
                            href={`/work/${skill.relatedProjects[0]}`}
                            className="text-[rgb(var(--accent))] hover:underline font-bold"
                            onClick={() => playSound('click')}
                          >
                            {skill.relatedProjects[0].toUpperCase()}
                          </Link>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── FOOTER CALLOUT ───────────────────────────────── */}
        <div className="mt-20 p-8 rounded-2xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-[rgb(var(--fg-primary))] mb-1">
              Want to see these skills in live applications?
            </h3>
            <p className="text-xs sm:text-sm text-[rgb(var(--fg-muted))]">
              Browse the dedicated case studies with architectural diagrams and source repositories.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[rgb(var(--accent))] hover:opacity-90 text-white text-xs font-mono uppercase tracking-wider font-semibold transition-colors shrink-0 shadow-xs"
            onClick={() => playSound('click')}
          >
            <span>View All Projects</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
