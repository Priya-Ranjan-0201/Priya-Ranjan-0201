'use client';

import { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
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
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { projects, getProjectBySlug } from '@/data/projects';
import { useSettingsStore } from '@/stores/settings-store';
import { playSound } from '@/lib/sound';

export default function ProjectCaseStudy() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);

  const [viewMode, setViewMode] = useState<'PRODUCT' | 'SYSTEM'>('PRODUCT');
  const [selectedArchNode, setSelectedArchNode] = useState<number>(0);
  const openArchitecture = useSettingsStore((s) => s.openArchitectureModal);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="case-root">
      {/* ── PROJECT HERO ─────────────────────────────────── */}
      <section className="case-hero-section">
        <div className="case-container">
          {/* Breadcrumb Row */}
          <div className="case-breadcrumb-row">
            <Link
              href="/work"
              className="back-link"
              onClick={() => playSound('click')}
            >
              <ArrowLeft size={14} />
              <span>/ WORK / {project.slug.toUpperCase()}</span>
            </Link>

            <div className="breadcrumb-meta">
              <span className="project-status-pill">{project.status}</span>
              <span className="breadcrumb-index">
                0{currentIndex + 1} / 0{projects.length}
              </span>
            </div>
          </div>

          {/* Hero Header Area */}
          <div className="case-hero-grid">
            <div className="case-left-col">
              <div className="case-eyebrow">
                <Sparkles size={12} className="inline mr-1 text-cyan-400" />
                <span>CASE STUDY &mdash; {project.year}</span>
              </div>

              <h1 className="case-main-title">{project.title}</h1>
              <h2 className="case-sub-title">{project.subtitle}</h2>

              <p className="case-description">
                {project.longDescription || project.description}
              </p>

              {/* Action Buttons */}
              <div className="case-actions-row">
                {project.links.find((l) => l.type === 'live') && (
                  <a
                    href={project.links.find((l) => l.type === 'live')?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-glow"
                    onClick={() => playSound('click')}
                  >
                    <span>Live Application</span>
                    <ExternalLink size={14} />
                  </a>
                )}

                {project.links.find((l) => l.type === 'github') && (
                  <a
                    href={project.links.find((l) => l.type === 'github')?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary-ghost"
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
                  className="btn-arch-modal"
                >
                  <Layers size={14} />
                  <span>Architecture Modal</span>
                </button>
              </div>
            </div>

            {/* Right: Mockup / Visual */}
            <div className="case-right-col">
              <div className="laptop-mockup-wrap">
                <div className="laptop-glow-ambient" />
                <Image
                  src={project.heroImage || '/images/laptop-mockup.jpg'}
                  alt={project.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 620px"
                  style={{ objectFit: 'cover' }}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* ── DUAL PERSPECTIVE TOGGLE: PRODUCT VS SYSTEM ── */}
          <div className="perspective-toggle-container">
            <div className="perspective-toggle-box">
              <span className="perspective-label">VIEW PERSPECTIVE:</span>
              <div className="perspective-buttons">
                <button
                  className={`perspective-btn ${viewMode === 'PRODUCT' ? 'active' : ''}`}
                  onClick={() => {
                    playSound('toggle');
                    setViewMode('PRODUCT');
                  }}
                >
                  <Activity size={14} />
                  <span>PRODUCT EXPERIENCE</span>
                </button>
                <button
                  className={`perspective-btn ${viewMode === 'SYSTEM' ? 'active' : ''}`}
                  onClick={() => {
                    playSound('toggle');
                    setViewMode('SYSTEM');
                  }}
                >
                  <Workflow size={14} />
                  <span>SYSTEM &amp; ARCHITECTURE</span>
                </button>
              </div>
            </div>
          </div>

          {/* ── PERSPECTIVE CONTENT ── */}
          <AnimatePresence mode="wait">
            {viewMode === 'PRODUCT' ? (
              <motion.div
                key="product-mode"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="perspective-panel"
              >
                {/* 1. Core Problem & Solution Narrative */}
                <div className="case-section-grid">
                  <div className="case-card-bordered">
                    <div className="card-badge-header">
                      <AlertTriangle size={15} className="text-amber-400" />
                      <span>THE CORE PROBLEM</span>
                    </div>
                    <p className="card-body-text">{project.problem}</p>
                  </div>

                  <div className="case-card-bordered">
                    <div className="card-badge-header">
                      <Lightbulb size={15} className="text-cyan-400" />
                      <span>THE SOLUTION APPROACH</span>
                    </div>
                    <p className="card-body-text">{project.solution}</p>
                  </div>
                </div>

                {/* 2. Key User Capabilities */}
                <div className="case-features-section">
                  <h3 className="section-subtitle">ENGINEERED CAPABILITIES &amp; FLOWS</h3>
                  <div className="features-grid-3col">
                    {project.features.map((feat, idx) => (
                      <div key={idx} className="feature-item-card">
                        <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="feature-text">{feat}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Product Mode Deep Dive Highlights */}
                {project.productMode && (
                  <div className="product-highlights-box">
                    <h3 className="section-subtitle">USER-FACING EXPERIENCE HIGHLIGHTS</h3>
                    <div className="product-grid">
                      <div className="product-info-card">
                        <span className="info-label">PRIMARY USER AUDIENCE</span>
                        <p className="info-val">{project.productMode.userAudience || project.productMode.targetAudience}</p>
                      </div>
                      <div className="product-info-card">
                        <span className="info-label">MEASURABLE OUTCOME</span>
                        <p className="info-val">{project.productMode.measurableOutcome || project.productMode.keyDifferentiator}</p>
                      </div>
                    </div>

                    {((project.productMode.keyFlows && project.productMode.keyFlows.length > 0) || (project.productMode.visualHighlights && project.productMode.visualHighlights.length > 0)) && (
                      <div className="flows-list-container">
                        <span className="info-label">CRITICAL FLOWS &amp; HIGHLIGHTS</span>
                        <div className="flows-grid">
                          {(project.productMode.keyFlows || project.productMode.visualHighlights || []).map((flow, i) => (
                            <div key={i} className="flow-step-pill">
                              <span className="flow-step-num">0{i + 1}</span>
                              <span className="flow-step-desc">{flow}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="system-mode"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="perspective-panel"
              >
                {/* 1. Interactive Architecture Flow Canvas */}
                <div className="interactive-arch-container">
                  <div className="arch-header-row">
                    <h3 className="section-subtitle">INTERACTIVE SYSTEM PIPELINE</h3>
                    <span className="arch-hint">CLICK ANY NODE TO INSPECT SUBSYSTEM DETAILS</span>
                  </div>

                  <div className="arch-nodes-pipeline">
                    {project.architecture?.map((layer, idx) => (
                      <button
                        key={layer.label}
                        className={`arch-pipeline-node ${selectedArchNode === idx ? 'active' : ''}`}
                        onClick={() => {
                          playSound('click');
                          setSelectedArchNode(idx);
                        }}
                      >
                        <span className="node-num">0{idx + 1}</span>
                        <span className="node-name">{layer.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Selected Node Details Box */}
                  <div className="arch-node-detail-card">
                    <div className="node-detail-header">
                      <Terminal size={15} className="text-cyan-400" />
                      <span className="node-detail-title">
                        SUBSYSTEM {selectedArchNode + 1}: {project.architecture?.[selectedArchNode]?.label}
                      </span>
                    </div>
                    <p className="node-detail-desc">
                      {project.architecture?.[selectedArchNode]?.description}
                    </p>
                  </div>
                </div>

                {/* 2. System Mode Technical Details & Tradeoffs */}
                {project.systemMode && (
                  <div className="system-deep-dive-grid">
                    <div className="system-card">
                      <span className="info-label">DATA FLOW ORCHESTRATION</span>
                      <p className="system-card-text">{project.systemMode.dataFlow}</p>
                    </div>

                    <div className="system-card">
                      <span className="info-label">ENGINEERING TRADEOFFS</span>
                      <p className="system-card-text">{project.systemMode.tradeoffs || project.systemMode.securityTradeoffs || 'Defensive boundary validation & latency optimization.'}</p>
                    </div>

                    <div className="system-card">
                      <span className="info-label">SECURITY &amp; PERFORMANCE POSTURE</span>
                      <p className="system-card-text">{project.systemMode.securityOrPerf || project.systemMode.architectureSummary || 'Resilient zero-trust design.'}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── TECHNICAL CHALLENGES & RESOLUTIONS ── */}
          <div className="case-challenges-section">
            <h3 className="section-subtitle">DIFFICULT ENGINEERING CHALLENGES</h3>
            <div className="challenges-grid">
              {(project.challenges || []).map((ch, idx) => {
                const isString = typeof ch === 'string';
                const title = isString ? `Challenge 0${idx + 1}` : ch.title;
                const obstacle = isString ? ch : ch.obstacle;
                const resolution = isString ? 'Engineered defensive isolation and streamlined data pipelines.' : ch.resolution;

                return (
                  <div key={idx} className="challenge-card">
                    <div className="challenge-head">
                      <span className="challenge-num">0{idx + 1}</span>
                      <h4 className="challenge-title">{title}</h4>
                    </div>
                    <div className="challenge-body">
                      <p className="challenge-problem">
                        <strong className="text-white/80">Obstacle: </strong>
                        {obstacle}
                      </p>
                      <p className="challenge-solution">
                        <strong className="text-cyan-400">Resolution: </strong>
                        {resolution}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── BUILD JOURNEY & ITERATIONS ── */}
          {project.iterations && project.iterations.length > 0 && (
            <div className="case-iterations-section">
              <h3 className="section-subtitle">BUILD JOURNEY &amp; EVOLUTION</h3>
              <div className="iterations-timeline">
                {project.iterations.map((iter, idx) => (
                  <div key={idx} className="iteration-node">
                    <div className="iter-marker">
                      <span className="iter-dot" />
                      {idx < (project.iterations?.length || 0) - 1 && <span className="iter-line" />}
                    </div>
                    <div className="iter-content">
                      <div className="iter-top">
                        <span className="iter-version">{iter.version || iter.phase || `Stage 0${idx + 1}`}</span>
                        <span className="iter-date">{iter.date || iter.title || ''}</span>
                      </div>
                      <p className="iter-desc">{iter.description || iter.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── WHAT I LEARNED ── */}
          {project.learnings && (
            <div className="case-learnings-section">
              <h3 className="section-subtitle">RETROSPECTIVE &amp; LEARNINGS</h3>
              <div className="learnings-grid">
                <div className="learning-box">
                  <span className="learning-label">TECHNICAL LEARNING</span>
                  <p className="learning-text">{project.learnings.technical}</p>
                </div>
                <div className="learning-box">
                  <span className="learning-label">SYSTEMS / ARCHITECTURE LESSON</span>
                  <p className="learning-text">{project.learnings.systems || project.learnings.product || 'Robust state management and decoupling.'}</p>
                </div>
                <div className="learning-box">
                  <span className="learning-label">INITIAL MISTAKE RECTIFIED</span>
                  <p className="learning-text">{project.learnings.mistake}</p>
                </div>
                <div className="learning-box">
                  <span className="learning-label">NEXT PLANNED IMPROVEMENT</span>
                  <p className="learning-text">{project.learnings.nextStep || project.learnings.nextImprovement || 'Comprehensive performance test coverage.'}</p>
                </div>
              </div>
            </div>
          )}

          {/* ── TECHNOLOGIES MATRIX ── */}
          <div className="case-tech-matrix">
            <h3 className="section-subtitle">TECHNOLOGY MATRIX</h3>
            <div className="tech-matrix-tags">
              {project.technologies.map((t) => (
                <span key={t} className="tech-tag-badge">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ── NAVIGATION: PREVIOUS / INDEX / NEXT ── */}
          <div className="case-footer-nav">
            <Link
              href={`/work/${prevProject.slug}`}
              className="case-nav-btn prev"
              onClick={() => playSound('click')}
            >
              <ArrowLeft size={14} />
              <div>
                <span className="nav-dir">PREVIOUS PROJECT</span>
                <span className="nav-proj-name">{prevProject.title}</span>
              </div>
            </Link>

            <Link
              href="/work"
              className="case-nav-index"
              onClick={() => playSound('click')}
            >
              <span>PROJECT ARCHIVE</span>
            </Link>

            <Link
              href={`/work/${nextProject.slug}`}
              className="case-nav-btn next"
              onClick={() => playSound('click')}
            >
              <div>
                <span className="nav-dir">NEXT PROJECT</span>
                <span className="nav-proj-name">{nextProject.title}</span>
              </div>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
