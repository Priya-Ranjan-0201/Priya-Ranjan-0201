'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Code2,
  Cpu,
  Layers,
  CheckCircle2,
  Compass,
  ExternalLink,
  BookOpen,
} from 'lucide-react';
import { experiences, turningPoints } from '@/data/experience';
import { playSound } from '@/lib/sound';

export default function ExperiencePage() {
  const [viewMode, setViewMode] = useState<'TURNING_POINTS' | 'CHRONOLOGY'>('TURNING_POINTS');
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const filteredExperiences = activeFilter === 'ALL'
    ? experiences
    : experiences.filter((e) => {
        if (activeFilter === 'EDUCATION') return e.type === 'education';
        if (activeFilter === 'PROJECTS') return e.type === 'project';
        if (activeFilter === 'MILESTONES') return e.type === 'milestone';
        return true;
      });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'education': return <GraduationCap size={15} className="text-[rgb(var(--accent))]" />;
      case 'project': return <Code2 size={15} className="text-emerald-400" />;
      case 'milestone': return <Cpu size={15} className="text-purple-400" />;
      default: return <Layers size={15} className="text-blue-400" />;
    }
  };

  return (
    <div className="experience-page-wrapper">
      <div className="subpage-container relative z-10">
        <div className="subpage-header-block">
          <div className="subpage-eyebrow">
            <span className="w-2 h-2 rounded-full bg-[rgb(var(--accent))]" />
            <span>THE ENGINEERING JOURNEY &bull; 2023 &ndash; PRESENT</span>
          </div>

          <h1 className="subpage-headline">
            Turning Points &amp; Engineering Evolution.
          </h1>

          <p className="subpage-lead-para">
            A career is not a static list of dates and job titles; it is a sequence of mental model shifts, humbled assumptions, and architectural breakthroughs. Here is how I evolved from writing syntax to designing resilient systems.
          </p>
        </div>

          {/* Mode Switcher: Turning Points vs Full Chronology */}
          <div className="view-mode-switch">
            <button
              className={`view-mode-btn ${viewMode === 'TURNING_POINTS' ? 'active' : ''}`}
              onClick={() => {
                playSound('toggle');
                setViewMode('TURNING_POINTS');
              }}
            >
              Key Turning Points ({turningPoints.length})
            </button>
            <button
              className={`view-mode-btn ${viewMode === 'CHRONOLOGY' ? 'active' : ''}`}
              onClick={() => {
                playSound('toggle');
                setViewMode('CHRONOLOGY');
              }}
            >
              Chronological Log ({experiences.length})
            </button>
          </div>

          {/* ── TURNING POINTS VIEW (EDITORIAL) ─────────────────── */}
          {viewMode === 'TURNING_POINTS' && (
            <div className="turning-points-list">
              {turningPoints.map((tp, idx) => (
                <motion.article
                  key={tp.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="tp-card"
                >
                  <div className="tp-header">
                    <span className="tp-period-badge">Chapter 0{idx + 1} &bull; {tp.period}</span>
                    <span className="tp-year-badge">{tp.year}</span>
                  </div>

                  <h2 className="tp-title">{tp.title}</h2>
                  <p className="tp-headline">&ldquo;{tp.turningPointHeadline}&rdquo;</p>
                  <p className="tp-narrative">{tp.narrative}</p>

                  <div className="tp-takeaways-grid">
                    <div className="tp-box">
                      <span className="tp-box-label">What Changed in My Thinking</span>
                      <p className="tp-box-text">{tp.whatChanged}</p>
                    </div>
                    <div className="tp-box">
                      <span className="tp-box-label">The Core Engineering Rule</span>
                      <p className="tp-box-text">{tp.keyTakeaway}</p>
                    </div>
                  </div>

                  <div className="tp-footer">
                    <div className="card-technologies-row" style={{ margin: 0 }}>
                      {tp.technologies.map((tech) => (
                        <span key={tech} className="tech-chip">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {tp.proofLink && (
                      <a
                        href={tp.proofLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tp-proof-link"
                        onClick={() => playSound('click')}
                      >
                        <span>{tp.proofLabel || 'Inspect Verified Repo'}</span>
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {/* ── CHRONOLOGICAL TIMELINE VIEW ─────────────────── */}
          {viewMode === 'CHRONOLOGY' && (
            <>
              {/* Filter Bar */}
              <div className="experience-filter-bar">
                <div className="filter-tabs-group">
                  {['ALL', 'EDUCATION', 'PROJECTS', 'MILESTONES'].map((f) => (
                    <button
                      key={f}
                      className={`tab-btn ${activeFilter === f ? 'active' : ''}`}
                      onClick={() => {
                        playSound('click');
                        setActiveFilter(f);
                      }}
                    >
                      {f === 'ALL' ? 'Complete Journey' : f}
                    </button>
                  ))}
                </div>

                <div className="timeline-scroll-hint">
                  <Compass size={13} className="text-[rgb(var(--accent))]" />
                  <span>2023 &ndash; 2027 TIMELINE CHRONOLOGY</span>
                </div>
              </div>

              {/* Directional Timeline Spine */}
              <div className="experience-timeline-spine">
            {filteredExperiences.map((item, idx) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="timeline-entry-card"
              >
                {/* Left Timeline Indicator Column */}
                <div className="timeline-marker-col">
                  <div className="timeline-node-dot">
                    {getTypeIcon(item.type)}
                  </div>
                  {idx < filteredExperiences.length - 1 && <div className="timeline-connecting-line" />}
                </div>

                {/* Right Content Body */}
                <div className="timeline-card-body">
                  <div className="card-top-metadata">
                    <span className="card-year-badge">
                      <Calendar size={12} className="inline mr-1" />
                      {item.year} {item.endYear ? `\u2013 ${item.endYear}` : ''}
                    </span>
                    <span className="card-type-label">{item.label}</span>
                    <span className="card-org-name">{item.organization}</span>
                  </div>

                  <h2 className="card-entry-title">{item.title}</h2>
                  <p className="card-entry-desc">{item.description}</p>

                  {/* Highlights Bullet Grid */}
                  <div className="card-highlights-list">
                    {item.highlights.map((high, hIdx) => (
                      <div key={hIdx} className="highlight-bullet-row">
                        <CheckCircle2 size={14} className="text-[rgb(var(--accent))] shrink-0 mt-0.5" />
                        <span>{high}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Strip */}
                  <div className="card-technologies-row">
                    {item.technologies?.map((tech) => (
                      <span key={tech} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </>
      )}

          {/* ── 03. FOOTER MANIFESTO & RESUME CTA ─────────────────── */}
          <div className="experience-footer-card">
            <div className="footer-card-content">
              <span className="footer-card-eyebrow">AUTHENTIC TRANSPARENCY</span>
              <h3 className="footer-card-heading">
                Looking for the formal academic vitae or verified course syllabus?
              </h3>
              <p className="footer-card-desc">
                Review the comprehensive academic transcript, coursework listings, and verified engineering credentials on the dedicated resume page.
              </p>
            </div>

            <Link
              href="/resume"
              className="btn-primary-glow"
              onClick={() => playSound('click')}
            >
              <span>View Verified Resume</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
    </div>
  );
}
