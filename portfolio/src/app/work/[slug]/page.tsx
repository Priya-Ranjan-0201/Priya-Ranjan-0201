'use client';

import { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Layers,
  Sparkles,
  CheckCircle2,
  Cpu,
  Shield,
  Eye,
  HardDrive,
  Activity,
  AlertTriangle,
  Lightbulb,
  Workflow,
  Code2,
  Terminal,
  Compass,
  GitBranch,
  Network,
  Share2,
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import ProjectVisual from '@/components/work/ProjectVisual';
import { projects, getProjectBySlug } from '@/data/projects';
import { useSettingsStore } from '@/stores/settings-store';
import { playSound } from '@/lib/sound';

export default function ProjectCaseStudy() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);

  const [perspective, setPerspective] = useState<'PRODUCT' | 'ENGINEERING'>('PRODUCT');
  const [thinkingTab, setThinkingTab] = useState<'BUILT' | 'THOUGHT'>('BUILT');
  const [selectedArchNode, setSelectedArchNode] = useState<number>(0);
  const openArchitecture = useSettingsStore((s) => s.openArchitectureModal);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const productMode = project.productMode || (project as any).productModeData;
  const systemMode = project.systemMode || (project as any).systemModeData;
  const learnings = project.learnings || (project as any).learned;

  return (
    <div className="case-study-root min-h-screen bg-[rgb(var(--bg-primary))] text-[rgb(var(--fg-primary))] pt-36 sm:pt-44 pb-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* ── BREADCRUMB ROW ───────────────────────────────── */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-[rgb(var(--border))]">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono text-[rgb(var(--fg-muted))] hover:text-[rgb(var(--accent))] transition-colors"
            onClick={() => playSound('click')}
          >
            <ArrowLeft size={13} />
            <span>/ WORK / {project.slug.toUpperCase()}</span>
          </Link>

          <div className="flex items-center gap-4 text-xs font-mono text-[rgb(var(--fg-muted))]">
            <span className="px-2.5 py-0.5 rounded bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] text-[rgb(var(--accent))] font-bold uppercase">
              {project.status}
            </span>
            <span>
              PROJECT 0{currentIndex + 1} / 0{projects.length}
            </span>
          </div>
        </div>

        {/* ── PROJECT HERO ─────────────────────────────────── */}
        <section className="mb-20 sm:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 min-w-0">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[rgb(var(--accent))] font-bold uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[rgb(var(--accent))]" />
                CASE STUDY &bull; {project.year} &bull; {project.category}
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[rgb(var(--fg-primary))] mb-4 leading-[1.08]">
                {project.title}
              </h1>

              <h2 className="text-lg sm:text-xl font-medium text-[rgb(var(--fg-muted))] mb-6">
                {project.subtitle}
              </h2>

              <p className="text-base sm:text-lg text-[rgb(var(--fg-muted))] leading-relaxed mb-8 max-w-2xl font-normal">
                {project.longDescription || project.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-8">
                {project.links.find((l) => l.type === 'live') && (
                  <a
                    href={project.links.find((l) => l.type === 'live')?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[rgb(var(--accent))] hover:opacity-90 text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-sm"
                    onClick={() => playSound('click')}
                  >
                    <span>Live Application</span>
                    <ExternalLink size={13} />
                  </a>
                )}

                {project.links.find((l) => l.type === 'github') && (
                  <a
                    href={project.links.find((l) => l.type === 'github')?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[rgb(var(--bg-secondary))] hover:bg-[rgb(var(--bg-tertiary))] text-[rgb(var(--fg-primary))] hover:text-[rgb(var(--accent))] border border-[rgb(var(--border))] text-xs font-mono uppercase tracking-wider transition-all shadow-sm"
                    onClick={() => playSound('click')}
                  >
                    <GithubIcon size={14} />
                    <span>View Repository</span>
                  </a>
                )}

                <button
                  onClick={() => {
                    playSound('click');
                    openArchitecture(project.slug);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[rgb(var(--bg-secondary))] hover:bg-[rgb(var(--bg-tertiary))] text-[rgb(var(--fg-muted))] hover:text-[rgb(var(--fg-primary))] border border-[rgb(var(--border))] text-xs font-mono transition-all"
                >
                  <Layers size={13} />
                  <span>Architecture Modal</span>
                </button>
              </div>

              {/* ── SECTION 55: PROJECT DNA ─────────────────────── */}
              {project.dna && (
                <div className="mt-8 p-4 rounded-xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] flex flex-col gap-2 w-full max-w-xl shadow-xs">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[rgb(var(--fg-muted))] tracking-wider uppercase">
                    <span>PROJECT DNA</span>
                    <span className="text-[rgb(var(--accent))] font-bold">STRUCTURAL COMPOSITION</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono pt-1">
                    {project.dna.nodes.map((node, i) => (
                      <span key={node} className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded bg-[rgb(var(--bg-tertiary))] border border-[rgb(var(--border))] text-[rgb(var(--fg-primary))] font-semibold">
                          {node}
                        </span>
                        {i < project.dna!.nodes.length - 1 && (
                          <span className="text-[rgb(var(--accent))] font-bold">───</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Technical Inspector / Architecture Visual */}
            <div className="lg:col-span-5 min-w-0 w-full">
              <div className="relative rounded-2xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] overflow-hidden shadow-2xl p-2 sm:p-3">
                <ProjectVisual slug={project.slug} title={project.title} />
              </div>

              {/* Metadata strip */}
              <div className="mt-4 p-4 rounded-xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] grid grid-cols-3 gap-3 text-xs font-mono">
                <div>
                  <span className="text-[rgb(var(--fg-muted))] block text-[10px] uppercase">Domain</span>
                  <span className="text-[rgb(var(--fg-primary))] font-bold">{project.domain || project.category}</span>
                </div>
                <div>
                  <span className="text-[rgb(var(--fg-muted))] block text-[10px] uppercase">Status</span>
                  <span className="text-[rgb(var(--accent))] font-bold">{project.status.toUpperCase()}</span>
                </div>
                <div>
                  <span className="text-[rgb(var(--fg-muted))] block text-[10px] uppercase">GitHub Source</span>
                  <a
                    href={project.links.find((l) => l.type === 'github')?.url || 'https://github.com/Priya-Ranjan-0201'}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[rgb(var(--accent))] font-bold hover:underline inline-flex items-center gap-1"
                  >
                    <span>Verified</span>
                    <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 57: UNIQUE FEATURE: THINKING MODE ─────── */}
        {project.thinkingMode && (
          <section className="mb-20 sm:mb-24 p-6 sm:p-8 rounded-2xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[rgb(var(--border))]">
              <div>
                <span className="text-xs font-mono tracking-widest text-emerald-400 dark:text-emerald-400 uppercase block mb-1 font-bold">
                  ENGINEERING MATURITY
                </span>
                <h3 className="text-lg font-bold text-[rgb(var(--fg-primary))]">
                  Thinking Mode &bull; Design Tradeoffs
                </h3>
              </div>

              {/* Toggle Buttons: WHAT I BUILT vs HOW I THOUGHT */}
              <div className="inline-flex items-center gap-1.5 rounded-lg bg-[rgb(var(--bg-primary))] p-1 border border-[rgb(var(--border))] shadow-inner">
                <button
                  className={`px-4 py-2 rounded-md text-xs font-mono font-semibold transition-all cursor-pointer ${
                    thinkingTab === 'BUILT'
                      ? 'bg-[rgb(var(--accent))] text-white shadow-sm'
                      : 'text-[rgb(var(--fg-muted))] hover:text-[rgb(var(--fg-primary))]'
                  }`}
                  onClick={() => {
                    playSound('toggle');
                    setThinkingTab('BUILT');
                  }}
                >
                  WHAT I BUILT
                </button>
                <button
                  className={`px-4 py-2 rounded-md text-xs font-mono font-semibold transition-all cursor-pointer ${
                    thinkingTab === 'THOUGHT'
                      ? 'bg-[rgb(var(--accent))] text-white shadow-sm'
                      : 'text-[rgb(var(--fg-muted))] hover:text-[rgb(var(--fg-primary))]'
                  }`}
                  onClick={() => {
                    playSound('toggle');
                    setThinkingTab('THOUGHT');
                  }}
                >
                  HOW I THOUGHT
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {thinkingTab === 'BUILT' ? (
                <motion.div
                  key="built"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <p className="text-base text-[rgb(var(--fg-primary))] leading-relaxed font-medium">
                    {project.thinkingMode.whatIBuilt}
                  </p>
                  <div className="p-4 rounded-xl bg-[rgb(var(--bg-primary))] border border-[rgb(var(--border))] text-xs font-mono text-[rgb(var(--fg-muted))]">
                    <strong className="text-emerald-400 dark:text-emerald-400 font-bold">Outcome: </strong>
                    <span className="text-[rgb(var(--fg-primary))]">{project.solution}</span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="thought"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                  <div className="p-4 rounded-xl bg-[rgb(var(--bg-primary))] border border-[rgb(var(--border))]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-500 dark:text-amber-400 font-bold block mb-1">
                      01 &bull; PROBLEM
                    </span>
                    <p className="text-xs text-[rgb(var(--fg-secondary))] leading-relaxed">
                      {project.thinkingMode.problem}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[rgb(var(--bg-primary))] border border-[rgb(var(--border))]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 dark:text-emerald-400 font-bold block mb-1">
                      02 &bull; TRADEOFF
                    </span>
                    <p className="text-xs text-[rgb(var(--fg-secondary))] leading-relaxed">
                      {project.thinkingMode.tradeoff}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[rgb(var(--bg-primary))] border border-[rgb(var(--border))]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-purple-500 dark:text-purple-400 font-bold block mb-1">
                      03 &bull; DECISION
                    </span>
                    <p className="text-xs text-[rgb(var(--fg-secondary))] leading-relaxed">
                      {project.thinkingMode.decision}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[rgb(var(--bg-primary))] border border-[rgb(var(--border))]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-500 dark:text-emerald-400 font-bold block mb-1">
                      04 &bull; LEARNING
                    </span>
                    <p className="text-xs text-[rgb(var(--fg-secondary))] leading-relaxed">
                      {project.thinkingMode.learning}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        )}

        {/* ── SECTION 24: PRODUCT / ENGINEERING TOGGLE ──────── */}
        <section className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[rgb(var(--border))]">
            <div>
              <span className="text-xs font-mono tracking-widest text-emerald-400 dark:text-emerald-400 uppercase block mb-1 font-bold">
                DUAL PERSPECTIVE
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-[rgb(var(--fg-primary))]">
                Product vs. Engineering Architecture
              </h2>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-lg bg-[rgb(var(--bg-secondary))] p-1 border border-[rgb(var(--border))] shadow-inner">
              <button
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs font-mono font-semibold transition-all cursor-pointer ${
                  perspective === 'PRODUCT'
                    ? 'bg-[rgb(var(--accent))] text-white shadow-sm'
                    : 'text-[rgb(var(--fg-muted))] hover:text-[rgb(var(--fg-primary))]'
                }`}
                onClick={() => {
                  playSound('toggle');
                  setPerspective('PRODUCT');
                }}
              >
                <Activity size={13} />
                <span>PRODUCT</span>
              </button>
              <button
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs font-mono font-semibold transition-all cursor-pointer ${
                  perspective === 'ENGINEERING'
                    ? 'bg-[rgb(var(--accent))] text-white shadow-sm'
                    : 'text-[rgb(var(--fg-muted))] hover:text-[rgb(var(--fg-primary))]'
                }`}
                onClick={() => {
                  playSound('toggle');
                  setPerspective('ENGINEERING');
                }}
              >
                <Workflow size={13} />
                <span>ENGINEERING</span>
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {perspective === 'PRODUCT' ? (
              <motion.div
                key="product-perspective"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-12"
              >
                {/* Problem & Solution Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-mono text-amber-400 dark:text-amber-300 mb-3 uppercase tracking-wider font-bold">
                      <AlertTriangle size={14} />
                      <span>THE CORE PROBLEM</span>
                    </div>
                    <p className="text-sm sm:text-base text-[rgb(var(--fg-secondary))] leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 dark:text-emerald-400 mb-3 uppercase tracking-wider font-bold">
                      <Lightbulb size={14} />
                      <span>THE SOLUTION APPROACH</span>
                    </div>
                    <p className="text-sm sm:text-base text-[rgb(var(--fg-secondary))] leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Key Engineered Capabilities */}
                <div>
                  <h3 className="text-lg font-bold text-[rgb(var(--fg-primary))] mb-4">
                    Key Product Capabilities
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {project.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] flex items-start gap-3 shadow-sm hover:border-[rgb(var(--accent))]/40 transition-colors"
                      >
                        <CheckCircle2 size={16} className="text-emerald-400 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-[rgb(var(--fg-primary))] leading-relaxed font-normal">
                          {feat}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Product Mode Deep Dive if available */}
                {productMode && (
                  <div className="p-6 rounded-2xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] space-y-4 shadow-sm">
                    <span className="text-xs font-mono text-[rgb(var(--accent))] uppercase tracking-wider block font-bold">
                      USER EXPERIENCE HIGHLIGHTS
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                      <div className="p-4 rounded-xl bg-[rgb(var(--bg-primary))] border border-[rgb(var(--border))]">
                        <span className="text-[rgb(var(--fg-muted))] block text-[10px] uppercase mb-1">Target Audience</span>
                        <p className="text-[rgb(var(--fg-primary))] font-semibold">{productMode.userAudience || productMode.targetAudience}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-[rgb(var(--bg-primary))] border border-[rgb(var(--border))]">
                        <span className="text-[rgb(var(--fg-muted))] block text-[10px] uppercase mb-1">Primary Outcome</span>
                        <p className="text-[rgb(var(--fg-primary))] font-semibold">{productMode.measurableOutcome || productMode.keyDifferentiator}</p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="engineering-perspective"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-10"
              >
                {/* ── SECTION 25: INTERACTIVE ARCHITECTURE ─────── */}
                <div className="p-6 rounded-2xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-[rgb(var(--border))]">
                    <div>
                      <span className="text-xs font-mono text-[rgb(var(--accent))] uppercase tracking-wider block font-bold">
                        SYSTEM ARCHITECTURE &bull; INTERACTIVE PIPELINE
                      </span>
                      <h3 className="text-base font-bold text-[rgb(var(--fg-primary))]">
                        Click any subsystem node to inspect component responsibilities
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-[rgb(var(--fg-muted))]">
                      {project.architecture?.length || 0} DECOUPLED NODES
                    </span>
                  </div>

                  {/* Nodes pipeline */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
                    {project.architecture?.map((layer, idx) => (
                      <button
                        key={layer.label}
                        className={`p-3.5 rounded-xl border text-left transition-all ${
                          selectedArchNode === idx
                            ? 'bg-[rgb(var(--accent))]/10 border-[rgb(var(--accent))] shadow-sm ring-1 ring-[rgb(var(--accent))]/30'
                            : 'bg-[rgb(var(--bg-primary))] border-[rgb(var(--border))] hover:border-[rgb(var(--accent))]/40'
                        }`}
                        onClick={() => {
                          playSound('click');
                          setSelectedArchNode(idx);
                        }}
                      >
                        <span className="text-[10px] font-mono text-[rgb(var(--fg-muted))] block">0{idx + 1}</span>
                        <span className={`text-xs font-mono font-semibold block truncate ${
                          selectedArchNode === idx ? 'text-[rgb(var(--accent))] font-bold' : 'text-[rgb(var(--fg-primary))]'
                        }`}>
                          {layer.label}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Selected Node Details */}
                  {project.architecture?.[selectedArchNode] && (
                    <div className="p-5 rounded-xl bg-[rgb(var(--bg-primary))] border border-[rgb(var(--border))] shadow-inner">
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <div className="flex items-center gap-2">
                          <Terminal size={14} className="text-[rgb(var(--accent))]" />
                          <span className="text-xs font-mono font-bold text-[rgb(var(--fg-primary))]">
                            SUBSYSTEM 0{selectedArchNode + 1}: {project.architecture[selectedArchNode].label}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-[rgb(var(--bg-secondary))] text-[rgb(var(--accent))] border border-[rgb(var(--border))] font-semibold">
                          {project.architecture[selectedArchNode].protocol || 'Internal Service'}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[rgb(var(--fg-secondary))] leading-relaxed">
                        {project.architecture[selectedArchNode].description}
                      </p>
                    </div>
                  )}
                </div>

                {/* System details */}
                {systemMode && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-5 rounded-xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] shadow-sm">
                      <span className="text-[10px] font-mono uppercase text-[rgb(var(--accent))] font-bold block mb-2">
                        DATA FLOW ORCHESTRATION
                      </span>
                      <p className="text-xs text-[rgb(var(--fg-secondary))] leading-relaxed">{systemMode.dataFlow}</p>
                    </div>
                    <div className="p-5 rounded-xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] shadow-sm">
                      <span className="text-[10px] font-mono uppercase text-[rgb(var(--accent))] font-bold block mb-2">
                        ENGINEERING TRADEOFFS
                      </span>
                      <p className="text-xs text-[rgb(var(--fg-secondary))] leading-relaxed">
                        {systemMode.tradeoffs || systemMode.securityTradeoffs || 'Defensive boundary validation & latency optimization.'}
                      </p>
                    </div>
                    <div className="p-5 rounded-xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] shadow-sm">
                      <span className="text-[10px] font-mono uppercase text-[rgb(var(--accent))] font-bold block mb-2">
                        SECURITY &amp; PERFORMANCE POSTURE
                      </span>
                      <p className="text-xs text-[rgb(var(--fg-secondary))] leading-relaxed">
                        {systemMode.securityOrPerf || systemMode.architectureSummary || 'Resilient zero-trust design.'}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* ── SECTION 58: BUILD TRACE ──────────────────────── */}
        {project.buildTrace && project.buildTrace.length > 0 && (
          <section className="mb-20 pb-16 border-b border-[rgb(var(--border))]">
            <div className="mb-8">
              <span className="text-xs font-mono tracking-widest text-[rgb(var(--accent))] uppercase block mb-1 font-bold">
                EVOLUTIONARY HISTORY
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-[rgb(var(--fg-primary))]">
                Build Trace: Idea to Production
              </h2>
              <p className="text-xs text-[rgb(var(--fg-muted))] mt-1 font-mono">
                IDEA &rarr; PROTOTYPE &rarr; BUILD &rarr; REVISE &rarr; CURRENT
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {project.buildTrace.map((step, idx) => (
                <div
                  key={step.phase}
                  className="p-4 rounded-xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-[rgb(var(--accent))] font-bold">
                        0{idx + 1} &bull; {step.phase}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[rgb(var(--accent))]" />
                    </div>
                    <h4 className="text-xs font-bold text-[rgb(var(--fg-primary))] mb-2">{step.title}</h4>
                    <p className="text-xs text-[rgb(var(--fg-secondary))] leading-relaxed">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── SECTION 56: PROJECT RELATIONSHIPS / RELATED TO ─ */}
        {project.relatedItems && (
          <section className="mb-20 p-6 sm:p-8 rounded-2xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] shadow-sm">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[rgb(var(--border))]">
              <div className="flex items-center gap-2">
                <Network size={16} className="text-[rgb(var(--accent))]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[rgb(var(--accent))] font-bold">
                  RELATED TO &bull; CONNECTION MAPPING
                </span>
              </div>
              <span className="text-[11px] font-mono text-[rgb(var(--fg-muted))]">CROSS-SYSTEM EDGES</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Related Skills */}
              <div>
                <span className="text-xs font-mono uppercase text-[rgb(var(--fg-muted))] block mb-3 font-semibold">
                  Applied Skills:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.relatedItems.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded bg-[rgb(var(--bg-primary))] border border-[rgb(var(--border))] text-xs font-mono text-[rgb(var(--fg-primary))] font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related Projects */}
              <div>
                <span className="text-xs font-mono uppercase text-[rgb(var(--fg-muted))] block mb-3 font-semibold">
                  Related Projects:
                </span>
                <div className="flex flex-col gap-2">
                  {project.relatedItems.projects.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/work/${p.slug}`}
                      className="inline-flex items-center justify-between p-2.5 rounded bg-[rgb(var(--bg-primary))] border border-[rgb(var(--border))] text-xs font-mono text-[rgb(var(--fg-primary))] hover:border-[rgb(var(--accent))] transition-colors"
                      onClick={() => playSound('click')}
                    >
                      <span>{p.title}</span>
                      <ArrowRight size={12} className="text-[rgb(var(--accent))]" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Related Experiments */}
              <div>
                <span className="text-xs font-mono uppercase text-[rgb(var(--fg-muted))] block mb-3 font-semibold">
                  Lab Experiments:
                </span>
                <div className="flex flex-col gap-2">
                  {project.relatedItems?.experiments?.map((exp) => (
                    <Link
                      key={exp}
                      href="/lab"
                      className="inline-flex items-center justify-between p-2.5 rounded bg-[rgb(var(--bg-primary))] border border-[rgb(var(--border))] text-xs font-mono text-[rgb(var(--fg-muted))] hover:text-[rgb(var(--fg-primary))] hover:border-[rgb(var(--accent))] transition-colors"
                    >
                      <span>/lab #{exp}</span>
                      <ArrowRight size={12} className="text-[rgb(var(--fg-muted))]" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── TECHNOLOGIES LIST ────────────────────────────── */}
        <section className="mb-20 pb-16 border-b border-[rgb(var(--border))]">
          <h3 className="text-sm font-mono text-[rgb(var(--fg-muted))] uppercase tracking-wider mb-4 font-bold">
            VERIFIED TECHNOLOGIES IN THIS REPOSITORY
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] text-xs font-mono text-[rgb(var(--fg-primary))] font-medium shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* ── PREVIOUS / NEXT FOOTER NAV ───────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          <Link
            href={`/work/${prevProject.slug}`}
            className="p-4 rounded-xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] hover:border-[rgb(var(--accent))] transition-colors flex items-center gap-3 text-left group shadow-sm"
            onClick={() => playSound('click')}
          >
            <ArrowLeft size={14} className="text-[rgb(var(--fg-muted))] group-hover:text-[rgb(var(--accent))] transition-colors" />
            <div>
              <span className="text-[10px] font-mono text-[rgb(var(--fg-muted))] block uppercase">PREVIOUS</span>
              <span className="text-xs font-semibold text-[rgb(var(--fg-primary))] block truncate">{prevProject.title}</span>
            </div>
          </Link>

          <Link
            href="/work"
            className="p-4 rounded-xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] hover:border-[rgb(var(--accent))] transition-colors text-center text-xs font-mono text-[rgb(var(--fg-muted))] hover:text-[rgb(var(--fg-primary))] shadow-sm"
            onClick={() => playSound('click')}
          >
            ALL PROJECTS ARCHIVE
          </Link>

          <Link
            href={`/work/${nextProject.slug}`}
            className="p-4 rounded-xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] hover:border-[rgb(var(--accent))] transition-colors flex items-center justify-between text-right group shadow-sm"
            onClick={() => playSound('click')}
          >
            <div className="w-full text-right">
              <span className="text-[10px] font-mono text-[rgb(var(--fg-muted))] block uppercase">NEXT</span>
              <span className="text-xs font-semibold text-[rgb(var(--fg-primary))] block truncate">{nextProject.title}</span>
            </div>
            <ArrowRight size={14} className="text-[rgb(var(--fg-muted))] group-hover:text-[rgb(var(--accent))] transition-colors shrink-0 ml-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
