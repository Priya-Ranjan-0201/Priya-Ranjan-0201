'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Cpu,
  Shield,
  Eye,
  HardDrive,
  Globe,
  Layers,
  Compass,
  Terminal,
  BookOpen,
} from 'lucide-react';
import { profile, interestMapNodes, thinkingSteps, InterestMapNode } from '@/data/profile';
import { projects } from '@/data/projects';
import { playSound } from '@/lib/sound';

export default function AboutPage() {
  const [selectedNode, setSelectedNode] = useState<InterestMapNode>(interestMapNodes[0]);
  const [activeStep, setActiveStep] = useState<number>(0);

  const scrollToSection = (id: string) => {
    playSound('click');
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="about-root">
      {/* ── 01. EDITORIAL MAGAZINE HERO ─────────────────── */}
      <section className="about-editorial-hero">
        <div className="about-container">
          <div className="editorial-hero-grid">
            <div className="editorial-hero-left">
              <div className="editorial-badge">
                <Sparkles size={13} className="text-cyan-400" />
                <span>ABOUT &bull; SYSTEMS PHILOSOPHY &bull; B.TECH CSE (2023&ndash;2027)</span>
              </div>

              <h1 className="editorial-headline">
                NOT TRYING TO KNOW EVERYTHING.<br />
                <span className="text-gradient-cyan">LEARNING TO BUILD</span><br />
                DIFFICULT THINGS WELL.
              </h1>

              <p className="editorial-lead-para">
                I am Priya Ranjan, a Computer Science undergraduate (B.Tech 2023&ndash;2027) exploring the intersection of intelligent AI systems, defensive cybersecurity, and reliable systems engineering.
              </p>

              <div className="editorial-hero-actions">
                <button
                  onClick={() => scrollToSection('interest-map-section')}
                  className="btn-primary-glow"
                >
                  <span>Explore Focus Areas</span>
                  <ArrowDown size={14} />
                </button>

                <Link
                  href="/resume"
                  className="btn-secondary-ghost"
                  onClick={() => playSound('click')}
                >
                  <BookOpen size={14} />
                  <span>Resume / CV</span>
                </Link>
              </div>
            </div>

            {/* Right: Editorial Silhouette Graphic */}
            <div className="editorial-hero-right">
              <div className="editorial-portrait-frame">
                <div className="portrait-image-wrapper">
                  <Image
                    src="/images/about-silhouette.jpg"
                    alt="Priya Ranjan - Creative Technologist"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 480px"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="portrait-gradient-overlay" />
                </div>

                <div className="portrait-caption-box">
                  <span className="caption-label">ENGINEERING PHILOSOPHY</span>
                  <p className="caption-text">
                    &ldquo;Code is not a static artifact; it is an executable hypothesis about how systems and human attention should behave.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02. INTERACTIVE PERSONAL INTEREST MAP ─────────────────── */}
      <section className="interest-map-section" id="interest-map-section">
        <div className="about-container">
          <div className="section-title-block">
            <span className="section-eyebrow">
              <Compass size={13} className="inline mr-1 text-cyan-400" />
              TECHNICAL INTERESTS &bull; APPLIED FOCUS
            </span>
            <h2 className="section-main-title">TECHNICAL DOMAINS &amp; EXPERTISE</h2>
            <p className="section-lead-text">
              Select any domain below to see how my research and learning translate into concrete code, architectures, and open repositories.
            </p>
          </div>

          <div className="map-interactive-layout">
            {/* Left: Interactive Canvas Map */}
            <div className="map-canvas-container">
              <div className="map-ambient-grid" />

              {/* Center Node: PRIYA RANJAN */}
              <div className="map-center-core">
                <div className="core-pulse-ring" />
                <div className="core-inner-dot">
                  <span className="core-name-text">PRIYA RANJAN</span>
                  <span className="core-sub-text">B.Tech CSE</span>
                </div>
              </div>

              {/* SVG Connecting Filaments */}
              <svg className="map-filaments-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                {interestMapNodes.map((node) => (
                  <line
                    key={node.id}
                    x1="50"
                    y1="50"
                    x2={node.x}
                    y2={node.y}
                    stroke={selectedNode.id === node.id ? 'rgba(0, 240, 255, 0.6)' : 'rgba(255, 255, 255, 0.12)'}
                    strokeWidth={selectedNode.id === node.id ? '0.8' : '0.4'}
                    strokeDasharray={selectedNode.id === node.id ? 'none' : '1.5 1.5'}
                  />
                ))}
              </svg>

              {/* Surrounding Nodes */}
              {interestMapNodes.map((node) => {
                const isSelected = selectedNode.id === node.id;
                return (
                  <button
                    key={node.id}
                    className={`map-node-pill ${isSelected ? 'active' : ''}`}
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    onClick={() => {
                      playSound('click');
                      setSelectedNode(node);
                    }}
                  >
                    <span className="node-indicator-dot" />
                    <span className="node-label-text">{node.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Right: Selected Node Context Card */}
            <motion.div
              key={selectedNode.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="map-node-detail-panel"
            >
              <div className="node-detail-head">
                <span className="node-domain-tag">{selectedNode.domain}</span>
                <h3 className="node-title">{selectedNode.label}</h3>
                <p className="node-tagline">&ldquo;{selectedNode.tagline}&rdquo;</p>
              </div>

              <p className="node-explanation">{selectedNode.description}</p>

              <div className="node-technologies-group">
                <span className="group-label">KEY INSTRUMENTS &amp; LANGUAGES</span>
                <div className="tech-pills-row">
                  {selectedNode.technologies.map((t) => (
                    <span key={t} className="tech-badge-cyan">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="node-projects-group">
                <span className="group-label">VERIFIED PROJECT MANIFESTATIONS</span>
                <div className="related-projects-list">
                  {selectedNode.relatedProjects.map((projSlug) => {
                    const p = projects.find((item) => item.slug === projSlug);
                    if (!p) return null;
                    return (
                      <Link
                        key={p.slug}
                        href={`/work/${p.slug}`}
                        className="related-project-chip"
                        onClick={() => playSound('click')}
                      >
                        <div className="chip-content">
                          <span className="chip-title">{p.title}</span>
                          <span className="chip-sub">{p.subtitle}</span>
                        </div>
                        <ArrowRight size={13} className="chip-arrow" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 03. HOW I THINK: THE 9-STEP PIPELINE ─────────────────── */}
      <section className="how-i-think-section">
        <div className="about-container">
          <div className="section-title-block">
            <span className="section-eyebrow">
              <Terminal size={13} className="inline mr-1 text-cyan-400" />
              MENTAL ALGORITHM
            </span>
            <h2 className="section-main-title">HOW I THINK &amp; CONSTRUCT SYSTEMS</h2>
            <p className="section-lead-text">
              Engineering is not chaotic improvisation. It is a systematic feedback loop running from observational insight to resilient, monitored software.
            </p>
          </div>

          <div className="thinking-pipeline-grid">
            {thinkingSteps.map((stepItem, index) => {
              const isActive = activeStep === index;
              return (
                <button
                  key={stepItem.step}
                  className={`pipeline-step-card ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    playSound('click');
                    setActiveStep(index);
                  }}
                >
                  <div className="step-card-top">
                    <span className="step-index-num">{stepItem.step}</span>
                    <span className="step-card-title">{stepItem.title}</span>
                  </div>
                  <p className="step-card-desc">{stepItem.desc}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 04. EDITORIAL ESSAYS: FOUNDATIONS & ROOTS ─────────────────── */}
      <section className="about-editorial-deep">
        <div className="about-container">
          <div className="editorial-columns-grid">
            {/* Column 1: Academic Trajectory */}
            <div className="editorial-essay-col">
              <span className="essay-num">01 / BACKGROUND</span>
              <h3 className="essay-title">The B.Tech CS Crucible</h3>
              <p className="essay-body">
                Studying Computer Science and Engineering (2023&ndash;2027) provides a rigorous laboratory. Instead of just consuming high-level cloud frameworks, my work begins in operating systems, algorithmic complexity, disk scheduling mechanics, and discrete mathematics.
              </p>
              <p className="essay-body">
                Understanding assembly instructions, thread locks, cache misses, and memory leaks grounds everything I build in physical reality.
              </p>
            </div>

            {/* Column 2: What Interests Me */}
            <div className="editorial-essay-col">
              <span className="essay-num">02 / CURIOSITY</span>
              <h3 className="essay-title">Where My Attention Converges</h3>
              <p className="essay-body">
                I am captivated by systems with high information density: explainable machine learning models that demystify predictions (like SHAP in Priocardix-AI), defensive vulnerability scanning with socket-level packet inspection, and spatial 3D user interfaces that make software tactile.
              </p>
              <p className="essay-body">
                The most exciting engineering challenges are those where mathematical models directly improve human clarity.
              </p>
            </div>

            {/* Column 3: What I Want to Build Next */}
            <div className="editorial-essay-col">
              <span className="essay-num">03 / HORIZON</span>
              <h3 className="essay-title">Next Frontiers &amp; Future Builds</h3>
              <p className="essay-body">
                Moving forward, I am architecting multi-agent reasoning systems that execute verifiable multi-step logic rather than speculative guessing.
              </p>
              <p className="essay-body">
                I am also diving into WebGPU shaders, zero-knowledge verification proofs, and distributed append-only log protocols.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
