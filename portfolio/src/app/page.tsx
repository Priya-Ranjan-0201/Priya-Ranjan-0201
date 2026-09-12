'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ExternalLink,
  Code2,
  Cpu,
  Shield,
  Layers,
  Briefcase,
  Terminal,
  Mail,
  FileText,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { projects } from '@/data/projects';
import { skillCategories } from '@/data/skills';
import { useSettingsStore } from '@/stores/settings-store';
import { playSound } from '@/lib/sound';

export default function Home() {
  const setCoreState = useSettingsStore((s) => s.setCoreState);

  useEffect(() => {
    setCoreState('neural');
  }, [setCoreState]);

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="home-root">
      {/* ── 01. CLEAN EDITORIAL HERO ───────────────────────── */}
      <section className="hero-section" id="hero">
        <div className="hero-container">
          <div className="hero-left-col">
            {/* Professional Status Pill */}
            <motion.div
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono mb-6"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Software Engineering Roles &amp; Research</span>
            </motion.div>

            {/* Clean Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-2">
                Priya Ranjan
              </h1>
              <p className="text-lg sm:text-2xl font-medium text-cyan-400 font-mono tracking-tight">
                Software Engineer &bull; Systems Builder
              </p>
            </motion.div>

            {/* Narrative */}
            <motion.p
              className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed mb-8 font-light"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Undergraduate in Computer Science &amp; Engineering (B.Tech 2023&ndash;2027). Driven by first-principles problem decomposition: building verifiable AI systems, defensive cybersecurity engines, and high-performance distributed architectures.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-3.5 mb-8"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href="#selected-work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm transition-all shadow-md shadow-cyan-500/20"
              >
                <span>View Projects</span>
                <ArrowRight size={15} />
              </a>

              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-white text-sm font-medium transition-all"
              >
                <FileText size={15} />
                <span>Resume / CV</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-transparent hover:border-zinc-800 text-zinc-300 hover:text-white text-sm font-medium transition-all"
              >
                <Mail size={15} />
                <span>Contact</span>
              </Link>
            </motion.div>

            {/* Direct Verified Channels */}
            <motion.div
              className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 border-t border-zinc-800/80 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="https://github.com/Priya-Ranjan-0201"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <GithubIcon size={14} />
                <span>github.com/Priya-Ranjan-0201</span>
              </a>

              <span className="text-zinc-600">&bull;</span>

              <a
                href="https://linkedin.com/in/priye-ranjan"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon size={14} />
                <span>linkedin.com/in/priye-ranjan</span>
              </a>

              <span className="text-zinc-600">&bull;</span>

              <a
                href="mailto:priye0201@gmail.com"
                className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Mail size={14} />
                <span>priye0201@gmail.com</span>
              </a>
            </motion.div>

            {/* Horizontal Key Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 mt-8 max-w-xl"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="block text-2xl font-bold text-white font-mono">07</span>
                <span className="text-xs text-zinc-400">Verified Repositories</span>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="block text-2xl font-bold text-cyan-400 font-mono">B.Tech</span>
                <span className="text-xs text-zinc-400">CSE (2023&ndash;2027)</span>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="block text-2xl font-bold text-emerald-400 font-mono">100%</span>
                <span className="text-xs text-zinc-400">Open-Source Code</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-indicator">
          <div className="mouse-icon">
            <span className="mouse-wheel" />
          </div>
          <span className="scroll-text">SCROLL TO EXPLORE WORK</span>
        </div>
      </section>

      {/* ── 02. SELECTED WORK — EDITORIAL PROJECT ARCHIVE ─────── */}
      <section className="selected-work-section" id="selected-work">
        <div className="section-container">
          <div className="work-header-row">
            <div>
              <div className="section-head-badge">
                <Briefcase size={14} className="badge-icon" />
                <span>FLAGSHIP SYSTEMS</span>
              </div>
              <h2 className="section-title-massive">Selected Engineering</h2>
              <p className="text-sm text-white/60 mt-2 max-w-2xl">
                Real software platforms built from first principles with verified architectures, unit tests, and source code.
              </p>
            </div>
            <Link
              href="/work"
              className="view-archive-link inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-xs font-mono font-semibold"
              onClick={() => playSound('click')}
            >
              <span>View All 07 Projects</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Projects List */}
          <div className="editorial-projects-list">
            {featuredProjects.map((project, idx) => (
              <article key={project.id} className="editorial-project-row">
                <div className="row-number-col">
                  <span className="row-index">0{idx + 1}</span>
                  <span className="row-year">{project.year}</span>
                </div>

                <div className="row-main-content">
                  <div className="row-title-bar">
                    <h3 className="row-title">{project.title}</h3>
                    <span className="row-category-pill">{project.category}</span>
                  </div>

                  <p className="row-subtitle font-medium text-white/90">{project.subtitle}</p>
                  <p className="row-problem text-white/70">{project.description}</p>

                  {/* Quantitative Metric Badges */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="project-metrics-strip flex flex-wrap gap-2.5 my-3.5">
                      {project.metrics.map((m, mi) => (
                        <div key={mi} className="metric-pill">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff]" />
                          <span className="text-cyan-300 font-bold">{m.value}</span>
                          <span className="text-zinc-300 text-[11px]">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="row-techs-list">
                    {project.technologies.slice(0, 6).map((tech) => (
                      <span key={tech} className="row-tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="row-actions-group">
                    <Link
                      href={`/work/${project.slug}`}
                      className="row-action-btn primary"
                      onClick={() => playSound('click')}
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight size={14} />
                    </Link>
                    {project.links.find((l) => l.type === 'github') && (
                      <a
                        href={project.links.find((l) => l.type === 'github')!.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="row-action-btn secondary"
                      >
                        <GithubIcon size={14} />
                        <span>Source Code</span>
                        <ExternalLink size={12} className="opacity-60" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="row-visual-col">
                  <div className="row-preview-frame group/frame">
                    <Image
                      src={project.images[0] || '/images/vireoniq-thumb.jpg'}
                      alt={project.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 360px"
                      style={{ objectFit: 'cover' }}
                      className="row-preview-img"
                    />
                    <div className="row-preview-overlay" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03. CORE TECHNICAL CAPABILITIES ───────────────────────── */}
      <section className="skills-overview-section border-t border-white/10" id="skills-overview">
        <div className="section-container py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="section-head-badge inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono mb-2">
                <Code2 size={13} />
                <span>TECHNICAL COMPETENCIES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Core Capabilities</h2>
              <p className="text-sm text-white/60 mt-1 max-w-xl">
                Languages, frameworks, systems, and tools applied across my engineering projects.
              </p>
            </div>
            <Link
              href="/skills"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-xs font-mono font-semibold transition-colors"
              onClick={() => playSound('click')}
            >
              <span>Interactive Knowledge Graph</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.slice(0, 4).map((cat) => (
              <div
                key={cat.id}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
                  {cat.label}
                </h3>
                <ul className="space-y-2.5 text-xs text-white/80 font-mono">
                  {cat.skills.map((s) => (
                    <li key={s.name} className="flex items-center justify-between">
                      <span className="text-white/90">{s.name}</span>
                      <span className="text-[10px] text-white/40 uppercase">{s.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04. CLEAN CALL TO ACTION ─────────────────────── */}
      <section className="convergence-cta-section border-t border-white/10" id="contact-cta">
        <div className="section-container py-24">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
              Let&apos;s Build Something Useful.
            </h2>
            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
              Interested in collaboration, engineering internships, or discussing systems architecture, AI systems, and defensive cybersecurity?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-xl bg-cyan-500 text-black font-semibold text-sm hover:bg-cyan-400 transition-all shadow-[0_0_25px_rgba(0,240,255,0.3)] inline-flex items-center gap-2"
                onClick={() => playSound('click')}
              >
                <span>Start A Conversation</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/resume"
                className="px-6 py-3.5 rounded-xl border border-white/20 text-white text-sm hover:bg-white/10 hover:border-white/40 transition-all inline-flex items-center gap-2"
                onClick={() => playSound('click')}
              >
                <FileText size={15} />
                <span>Curriculum Vitae</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
