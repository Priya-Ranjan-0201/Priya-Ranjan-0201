'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  Terminal,
  Mail,
  FileText,
  CheckCircle2,
  Sparkles,
  Shield,
  Activity,
  Compass,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { projects } from '@/data/projects';
import { profile } from '@/data/profile';
import { journalEntries } from '@/data/journal';
import Hero3D from '@/components/home/Hero3D';
import ExploreMyMind from '@/components/home/ExploreMyMind';
import ConnectionSystem from '@/components/home/ConnectionSystem';
import GitHubFeed from '@/components/home/GitHubFeed';
import { playSound } from '@/lib/sound';

export default function Home() {
  const flagshipProject = projects.find((p) => p.slug === 'vireoniq') || projects[0];
  const secondaryProjects = projects.filter((p) => p.slug !== 'vireoniq' && p.featured).slice(0, 4);
  const recentArticles = journalEntries.slice(0, 3);

  return (
    <div className="home-root">
      {/* ── 01. EDITORIAL CINEMATIC HERO (Section 10, 11, 12) ──── */}
      <section className="hero-editorial-clean" id="hero">
        <div className="hero-container-clean">
          <div className="hero-grid-split">
            {/* Left Column: Oversized Typography & Positioning */}
            <div className="hero-copy-col">
              {/* Category Eyebrow */}
              <motion.div
                className="hero-eyebrow-pill"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                <span className="eyebrow-dot" />
                <span>COMPUTER SCIENCE ENGINEER</span>
              </motion.div>

              {/* Oversized Typography Name (Section 05 & 10) */}
              <motion.div
                className="hero-name-block"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
              >
                <h1 className="hero-giant-title" aria-label="PRIYA RANJAN">
                  <span className="name-line" aria-hidden="true">
                    {'PRIYA'.split('').map((char, i) => (
                      <span
                        key={i}
                        className="kinetic-char"
                        style={{ '--char-idx': i } as React.CSSProperties}
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                  <span className="name-line name-accent" aria-hidden="true">
                    {'RANJAN'.split('').map((char, i) => (
                      <span
                        key={i}
                        className="kinetic-char"
                        style={{ '--char-idx': i + 5 } as React.CSSProperties}
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                  <span className="hero-title-underline" aria-hidden="true" />
                </h1>
              </motion.div>

              {/* Positioning Statement (Section 10) */}
              <motion.p
                className="hero-lead-statement"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.16 }}
              >
                I build thoughtful software experiences at the intersection of technology, problem solving and intelligent systems.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                className="hero-actions-row"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.24 }}
              >
                <a
                  href="#featured-work"
                  className="btn-cobalt-primary"
                  onClick={() => playSound('click')}
                >
                  <span>VIEW MY WORK</span>
                  <ArrowRight size={14} />
                </a>

                <Link
                  href="/about"
                  className="btn-editorial-secondary"
                  onClick={() => playSound('click')}
                >
                  <span>ABOUT ME</span>
                </Link>

                <Link
                  href="/resume"
                  className="btn-editorial-ghost"
                  onClick={() => playSound('click')}
                >
                  <FileText size={14} />
                  <span>RESUME</span>
                </Link>
              </motion.div>

              {/* Metadata strip (Section 10) */}
              <motion.div
                className="hero-meta-strip"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.32 }}
              >
                <div className="meta-item">
                  <span className="meta-lbl">LOCATION</span>
                  <span className="meta-val">India, IN</span>
                </div>
                <span className="meta-sep">/</span>
                <div className="meta-item">
                  <span className="meta-lbl">DISCIPLINE</span>
                  <span className="meta-val">AI · Security · Full-Stack</span>
                </div>
                <span className="meta-sep">/</span>
                <div className="meta-item">
                  <span className="meta-lbl">DEGREE</span>
                  <span className="meta-val">B.Tech CSE (2023&ndash;2027)</span>
                </div>
              </motion.div>

              {/* Unique Hero Feature: EXPLORE MY MIND → (Section 13) */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.4 }}
              >
                <ExploreMyMind />
              </motion.div>
            </div>

            {/* Right Column: Refined Abstract 3D Geometric Sculpture (Section 11 & 12) */}
            <div className="hero-sculpture-col">
              <Hero3D />
              <div className="sculpture-annotation">
                <span className="sculpture-lbl">INTERCONNECTED IDEAS · 3D SYSTEM</span>
                <span className="sculpture-hint">Subtle rotation responsive to cursor &amp; depth scroll</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02. TRUST & CREDIBILITY STRIP (Section 14) ─────────── */}
      <section className="trust-strip-section" aria-label="Core Technical Disciplines">
        <div className="section-container-clean">
          <div className="trust-strip-inner">
            <span className="trust-node">COMPUTER SCIENCE</span>
            <span className="trust-divider">&bull;</span>
            <span className="trust-node">AI / ML</span>
            <span className="trust-divider">&bull;</span>
            <span className="trust-node">CYBERSECURITY</span>
            <span className="trust-divider">&bull;</span>
            <span className="trust-node">FULL STACK</span>
            <span className="trust-divider">&bull;</span>
            <span className="trust-node">PROJECT BUILDER</span>
          </div>
        </div>
      </section>

      {/* ── 03. SELECTED WORK (Section 18, 19, 20) ──────────────── */}
      <section className="work-editorial-section" id="featured-work">
        <div className="section-container-clean">
          <div className="section-header-clean">
            <div>
              <span className="section-eyebrow">SELECTED WORK</span>
              <h2 className="section-title-clean">A few things I&apos;ve built, explored and learned from.</h2>
            </div>
            <Link
              href="/work"
              className="view-all-link"
              onClick={() => playSound('click')}
            >
              <span>View All 7 Projects</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Asymmetrical Layout: Project 01 (VIREONIQ) Large Showcase */}
          <div className="flagship-showcase-card">
            <div className="flagship-copy-col">
              <div className="flagship-top-meta">
                <span className="flagship-num">{flagshipProject.number}</span>
                <span className="flagship-cat">{flagshipProject.category}</span>
                <span className="flagship-domain">{flagshipProject.domain || 'AI'}</span>
              </div>

              <h3 className="flagship-title">
                <Link
                  href={`/work/${flagshipProject.slug}`}
                  onClick={() => playSound('click')}
                >
                  {flagshipProject.title}
                </Link>
              </h3>

              <p className="flagship-sub">{flagshipProject.subtitle}</p>
              <p className="flagship-desc">{flagshipProject.longDescription || flagshipProject.description}</p>

              {/* Project DNA (Section 55) */}
              {flagshipProject.dna && (
                <div className="project-dna-strip">
                  <span className="dna-label">PROJECT DNA:</span>
                  <div className="dna-chain">
                    {flagshipProject.dna.nodes.map((node, i) => (
                      <span key={i} className="dna-node">
                        {node}
                        {i < flagshipProject.dna!.nodes.length - 1 && <span className="dna-link-dash">───</span>}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Real Metrics Strip */}
              {flagshipProject.metrics && (
                <div className="flagship-metrics-row">
                  {flagshipProject.metrics.map((m, i) => (
                    <div key={i} className="flagship-metric-chip">
                      <span className="m-val">{m.value}</span>
                      <span className="m-lbl">{m.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Technologies */}
              <div className="flagship-tech-row">
                {flagshipProject.technologies.slice(0, 5).map((tech) => (
                  <span key={tech} className="tech-chip-cobalt">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action */}
              <div className="flagship-actions">
                <Link
                  href={`/work/${flagshipProject.slug}`}
                  className="btn-cobalt-primary"
                  onClick={() => playSound('click')}
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowRight size={14} />
                </Link>

                {flagshipProject.links.find((l) => l.type === 'github') && (
                  <a
                    href={flagshipProject.links.find((l) => l.type === 'github')?.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-editorial-ghost"
                    onClick={() => playSound('click')}
                  >
                    <GithubIcon size={14} />
                    <span>Source Code</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>

            {/* Right Side: Architecture & Visual Preview */}
            <div className="flagship-visual-col">
              <div className="flagship-wire-frame">
                <div className="wire-header-bar">
                  <span className="wire-dot" />
                  <span className="wire-dot" />
                  <span className="wire-dot" />
                  <span className="wire-title">AST Syntax Analysis &amp; Qdrant Retrieval Engine</span>
                </div>
                <div className="wire-body">
                  <div className="wire-arch-flow">
                    <div className="arch-flow-node">Untrusted Python Source</div>
                    <span className="flow-arrow">&darr;</span>
                    <div className="arch-flow-node highlight">AST Complexity Visitor</div>
                    <span className="flow-arrow">&darr;</span>
                    <div className="arch-flow-node">Qdrant Vector Embeddings</div>
                    <span className="flow-arrow">&darr;</span>
                    <div className="arch-flow-node">Prerequisite Learning Tree</div>
                  </div>
                  <div className="wire-stat-row">
                    <span>153 Test Suites Passed</span>
                    <span>Zero Execution Sandbox Risk</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Projects: 2-Column Asymmetric Grid */}
          <div className="secondary-projects-grid">
            {secondaryProjects.map((proj) => (
              <article key={proj.id} className="secondary-project-card">
                <div className="card-top-row">
                  <span className="card-num">{proj.number}</span>
                  <span className="card-domain-badge">{proj.domain || proj.category}</span>
                </div>

                <h3 className="card-title-clean">
                  <Link
                    href={`/work/${proj.slug}`}
                    onClick={() => playSound('click')}
                  >
                    {proj.title}
                  </Link>
                </h3>

                <p className="card-sub-clean">{proj.subtitle}</p>
                <p className="card-desc-clean">{proj.description}</p>

                {/* DNA Chain */}
                {proj.dna && (
                  <div className="secondary-dna-chain">
                    {proj.dna.nodes.map((n, i) => (
                      <span key={i} className="sec-dna-node">
                        {n}
                        {i < proj.dna!.nodes.length - 1 && <span className="sec-dash">─</span>}
                      </span>
                    ))}
                  </div>
                )}

                {/* Tech Pills */}
                <div className="card-tech-wrap">
                  {proj.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-chip-muted">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom Action */}
                <div className="card-bottom-actions">
                  <Link
                    href={`/work/${proj.slug}`}
                    className="card-link-cobalt"
                    onClick={() => playSound('click')}
                  >
                    <span>Read Case Study</span>
                    <ArrowRight size={13} />
                  </Link>

                  {proj.links && proj.links[0] && (
                    <a
                      href={proj.links[0].url}
                      target="_blank"
                      rel="noreferrer"
                      className="card-repo-link"
                      onClick={() => playSound('click')}
                    >
                      <GithubIcon size={13} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Real GitHub Activity Feed */}
          <div className="mt-16 sm:mt-20">
            <GitHubFeed />
          </div>
        </div>
      </section>

      {/* ── 04. THE CONNECTION SYSTEM (Section 62 & 63) ────────── */}
      <section className="connection-section-wrap">
        <div className="section-container-clean">
          <ConnectionSystem />
        </div>
      </section>

      {/* ── 05. PHILOSOPHY / HOW I APPROACH ENGINEERING ───────── */}
      <section className="philosophy-clean-section">
        <div className="section-container-clean">
          <div className="section-header-clean">
            <div>
              <span className="section-eyebrow">DEVELOPMENT PHILOSOPHY</span>
              <h2 className="section-title-clean">How I Approach Engineering</h2>
              <p className="section-desc-clean">
                Guiding principles that keep software clear, dependable, and pleasant to maintain.
              </p>
            </div>
            <Link
              href="/about"
              className="view-all-link"
              onClick={() => playSound('click')}
            >
              <span>Read Full Philosophy</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="philosophy-grid-clean">
            <div className="philosophy-card-clean">
              <span className="phi-number">01</span>
              <h3 className="phi-title">Find the Real Friction First</h3>
              <p className="phi-text">
                Most software bugs and delays stem from misunderstanding the actual problem. I invest time mapping assumptions and clarifying requirements before writing a line of code.
              </p>
            </div>

            <div className="philosophy-card-clean">
              <span className="phi-number">02</span>
              <h3 className="phi-title">Earn the Right to Distribute</h3>
              <p className="phi-text">
                Premature microservices create accidental complexity. A well-architected modular monolith with a solid relational database and simple cache runs circles around bloated microservice graphs.
              </p>
            </div>

            <div className="philosophy-card-clean">
              <span className="phi-number">03</span>
              <h3 className="phi-title">Observability from Day One</h3>
              <p className="phi-text">
                Code running without timeouts, structured logs, and automated tests is an outage in waiting. Every network boundary needs an explicit deadline and graceful fallbacks.
              </p>
            </div>

            <div className="philosophy-card-clean">
              <span className="phi-number">04</span>
              <h3 className="phi-title">Clarity Over Cleverness</h3>
              <p className="phi-text">
                Code is read far more often than it is written. I prefer simple, typed functions with single responsibilities over dense, obscure one-liners that confuse the next engineer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06. LAB & EXPERIMENTS TEASER (Section 29) ──────────── */}
      <section className="lab-clean-teaser">
        <div className="section-container-clean">
          <div className="lab-teaser-box">
            <div className="lab-teaser-copy">
              <span className="section-eyebrow">CREATIVE PLAYGROUND</span>
              <h2 className="lab-teaser-title">The Interactive Lab</h2>
              <p className="lab-teaser-desc">
                Where creative technologist experiments happen: interactive particle dynamics, typography distortion, gravity simulations, and GLSL shaders.
              </p>
              <Link
                href="/lab"
                className="btn-cobalt-primary inline-flex"
                onClick={() => playSound('click')}
              >
                <span>EXPLORE THE LAB</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="lab-teaser-visual">
              <div className="lab-mini-grid">
                <div className="mini-exp-card">
                  <span className="mini-tag">PARTICLES</span>
                  <p className="mini-name">Kinematic Particle Field</p>
                </div>
                <div className="mini-exp-card">
                  <span className="mini-tag">TYPOGRAPHY</span>
                  <p className="mini-name">Interactive Type Distortion</p>
                </div>
                <div className="mini-exp-card">
                  <span className="mini-tag">SIMULATION</span>
                  <p className="mini-name">Gravitational Node Physics</p>
                </div>
                <div className="mini-exp-card">
                  <span className="mini-tag">SECURITY</span>
                  <p className="mini-name">STIX 2.1 Threat Canvas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 07. RECENT NOTES & WRITING (Section 30) ────────────── */}
      <section className="notes-clean-section">
        <div className="section-container-clean">
          <div className="section-header-clean">
            <div>
              <span className="section-eyebrow">NOTES &amp; WRITING</span>
              <h2 className="section-title-clean">Technical Notes &amp; Research</h2>
              <p className="section-desc-clean">
                Engineering breakdowns, architecture post-mortems, and reflections on systems.
              </p>
            </div>
            <Link
              href="/journal"
              className="view-all-link"
              onClick={() => playSound('click')}
            >
              <span>View All Notes</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="notes-list-clean">
            {recentArticles.map((article) => (
              <Link
                key={article.id}
                href={`/journal/${article.slug}`}
                className="note-row-clean"
                onClick={() => playSound('click')}
              >
                <div className="note-meta-col">
                  <span className="note-date">{article.date}</span>
                  <span className="note-time">{article.readTime}</span>
                </div>
                <div className="note-content-col">
                  <h3 className="note-title">{article.title}</h3>
                  <p className="note-excerpt">{article.excerpt}</p>
                </div>
                <div className="note-arrow-col">
                  <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 08. CONTACT CALLOUT (Section 32) ───────────────────── */}
      <section className="contact-callout-clean">
        <div className="section-container-clean">
          <div className="contact-box-clean">
            <span className="section-eyebrow">GET IN TOUCH</span>
            <h2 className="contact-box-title">Let&apos;s build something useful.</h2>
            <p className="contact-box-desc">
              Whether you want to discuss systems engineering, explore an internship opportunity, or review a codebase together, I&apos;d love to connect.
            </p>
            <div className="contact-box-actions">
              <Link
                href="/contact"
                className="btn-cobalt-primary"
                onClick={() => playSound('click')}
              >
                <Mail size={15} />
                <span>LET&apos;S TALK &rarr;</span>
              </Link>
              <a
                href="mailto:priye0201@gmail.com"
                className="btn-editorial-secondary"
                onClick={() => playSound('click')}
              >
                <span>priye0201@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
