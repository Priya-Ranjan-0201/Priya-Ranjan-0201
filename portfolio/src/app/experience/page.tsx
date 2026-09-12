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
} from 'lucide-react';
import { experiences } from '@/data/experience';
import { playSound } from '@/lib/sound';

export default function ExperiencePage() {
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
      case 'education': return <GraduationCap size={15} className="text-cyan-400" />;
      case 'project': return <Code2 size={15} className="text-emerald-400" />;
      case 'milestone': return <Cpu size={15} className="text-purple-400" />;
      default: return <Layers size={15} className="text-blue-400" />;
    }
  };

  return (
    <div className="experience-root">
      {/* ── 01. EXPERIENCE HERO ─────────────────── */}
      <section className="experience-hero-section">
        {/* Background Visual Texture */}
        <div className="experience-bg-wrapper">
          <Image
            src="/images/experience-journey.jpg"
            alt="Cosmic moon rising over mountain summit"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className="experience-bg-overlay" />
        </div>

        <div className="experience-container">
          <div className="experience-hero-header">
            <div className="experience-eyebrow">
              <Sparkles size={13} className="text-cyan-400 inline mr-1" />
              <span>ENGINEERING MILESTONES &bull; ACADEMIC TIMELINE</span>
            </div>

            <h1 className="experience-main-title">
              EXPERIENCE &amp;<br />
              <span className="text-gradient-cyan">ENGINEERING MILESTONES</span>.
            </h1>

            <p className="experience-lead-para">
              My engineering trajectory is defined by rigorous academic coursework in Computer Science (B.Tech 2023&ndash;2027), hands-on systems experimentation, and shipping robust open-source software.
            </p>
          </div>

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
              <Compass size={13} className="text-cyan-400" />
              <span>2023 &ndash; 2027 TIMELINE CHRONOLOGY</span>
            </div>
          </div>

          {/* ── 02. DIRECTIONAL TIMELINE SPINE ─────────────────── */}
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
                        <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
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
      </section>
    </div>
  );
}
