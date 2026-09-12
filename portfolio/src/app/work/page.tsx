'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ExternalLink,
  Layers,
  Sparkles,
  Cpu,
  Shield,
  Eye,
  Globe,
  HardDrive,
  Activity,
  Terminal,
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { projects } from '@/data/projects';
import { useSettingsStore } from '@/stores/settings-store';
import { playSound } from '@/lib/sound';

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const openArchitecture = useSettingsStore((s) => s.openArchitectureModal);

  const categories = ['ALL', 'AI / ML', 'SECURITY', 'SYSTEMS & CS', 'VISION & TOOLS'];

  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter((p) => {
        if (activeCategory === 'AI / ML') return p.category === 'AI/ML';
        if (activeCategory === 'SECURITY') return p.category === 'SECURITY';
        if (activeCategory === 'SYSTEMS & CS') return p.category === 'SYSTEMS' || p.category === 'TOOLS';
        if (activeCategory === 'VISION & TOOLS') return p.category === 'VISION' || p.category === 'TOOLS' || p.category === 'WEB';
        return true;
      });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI/ML': return <Cpu size={14} className="text-cyan-400" />;
      case 'SECURITY': return <Shield size={14} className="text-emerald-400" />;
      case 'VISION': return <Eye size={14} className="text-purple-400" />;
      case 'SYSTEMS': return <HardDrive size={14} className="text-amber-400" />;
      case 'TOOLS': return <Terminal size={14} className="text-blue-400" />;
      default: return <Globe size={14} className="text-cyan-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'COMPLETED': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
      case 'ITERATING': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'PROTOTYPE': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-white/10 text-white/70 border-white/20';
    }
  };

  return (
    <div className="work-root">
      {/* ── WORK HERO: ARCHIVE OF ENGINEERED SYSTEMS ── */}
      <section className="archive-section">
        <div className="archive-container">
          {/* Header Banner */}
          <div className="work-editorial-header">
            <div className="work-header-meta">
              <span className="eyebrow-tag">
                <Sparkles size={12} className="inline mr-1" />
                INDEX OF WORK &mdash; 07 OPEN-SOURCE SYSTEMS
              </span>
              <span className="work-index-counter">
                PROJECTS: {filteredProjects.length} / {projects.length}
              </span>
            </div>

            <h1 className="work-hero-headline">
              SELECTED PROJECTS<br />
              <span className="text-gradient-cyan">&amp; SOFTWARE ARCHITECTURE</span>.
            </h1>

            <p className="work-hero-para">
              A curated collection of production applications, intelligent algorithms, and systems architectures.
              Every project represents a deep technical problem deconstructed and solved from first principles.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="filter-nav-bar">
            <div className="filter-tabs-group">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => {
                    playSound('click');
                    setActiveCategory(cat);
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="filter-stats-badge">
              <Activity size={13} className="text-cyan-400" />
              <span>07 VERIFIED REPOSITORIES &bull; OPEN-SOURCE</span>
            </div>
          </div>

          {/* Project Editorial Archive List */}
          <div className="projects-archive-list">
            {filteredProjects.map((item, i) => (
              <motion.article
                key={item.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`work-editorial-item ${hoveredSlug === item.slug ? 'is-hovered' : ''}`}
                onMouseEnter={() => {
                  setHoveredSlug(item.slug);
                  playSound('hover');
                }}
                onMouseLeave={() => setHoveredSlug(null)}
              >
                {/* Left: Project Number, Index & Main Details */}
                <div className="editorial-main-col">
                  <div className="editorial-meta-row">
                    <span className="editorial-num">0{i + 1}</span>
                    <span className={`editorial-status-tag ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                    <span className="editorial-year">{item.year}</span>
                    <div className="editorial-cat-badge">
                      {getCategoryIcon(item.category)}
                      <span>{item.category}</span>
                    </div>
                  </div>

                  <Link href={`/work/${item.slug}`} className="editorial-title-link">
                    <h2 className="editorial-title">{item.title}</h2>
                    <span className="editorial-sub-text">{item.subtitle}</span>
                  </Link>

                  <p className="editorial-problem-statement">
                    <strong className="text-white/80">Problem: </strong>
                    {item.problem}
                  </p>

                  {/* Tech stack badges */}
                  <div className="editorial-tech-pills">
                    {item.technologies.slice(0, 6).map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                    {item.technologies.length > 6 && (
                      <span className="tech-pill-more">
                        +{item.technologies.length - 6} more
                      </span>
                    )}
                  </div>

                  {/* Actions Row */}
                  <div className="editorial-actions-bar">
                    <Link
                      href={`/work/${item.slug}`}
                      className="btn-case-study"
                      data-cursor="VIEW"
                      onClick={() => playSound('click')}
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight size={14} />
                    </Link>

                    <button
                      onClick={() => {
                        playSound('click');
                        openArchitecture(item.slug);
                      }}
                      className="btn-arch-trigger"
                      title="Inspect Interactive Architecture Diagram"
                    >
                      <Layers size={14} />
                      <span>System Architecture</span>
                    </button>

                    {item.links.find((l) => l.type === 'github') && (
                      <a
                        href={item.links.find((l) => l.type === 'github')?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-source-link"
                        title="View GitHub Repository"
                      >
                        <GithubIcon size={14} />
                        <span>Source</span>
                      </a>
                    )}

                    {item.links.find((l) => l.type === 'live') && (
                      <a
                        href={item.links.find((l) => l.type === 'live')?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-demo-link"
                        title="Open Live Preview"
                      >
                        <ExternalLink size={14} />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: Project Visual with Inertia Hover Feel */}
                <div className="editorial-preview-col">
                  <Link
                    href={`/work/${item.slug}`}
                    className="editorial-preview-card"
                    data-cursor="EXPLORE"
                  >
                    <div className="preview-image-wrap">
                      <Image
                        src={item.heroImage || '/images/laptop-mockup.jpg'}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 420px"
                        style={{ objectFit: 'cover' }}
                      />
                      <div className="preview-mesh-overlay" />
                    </div>

                    <div className="preview-card-floating-badge">
                      <span>{item.title}</span>
                      <ArrowRight size={14} className="preview-arrow-icon" />
                    </div>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
