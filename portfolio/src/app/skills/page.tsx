'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Layers,
  Cpu,
  Shield,
  Database,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Workflow,
  Search,
  CheckCircle2,
} from 'lucide-react';
import { skillCategories } from '@/data/skills';
import { projects } from '@/data/projects';
import { playSound } from '@/lib/sound';

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filterProject, setFilterProject] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSkillName, setActiveSkillName] = useState<string>('Python');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'code': return <Code2 size={16} />;
      case 'layers': return <Layers size={16} />;
      case 'cpu': return <Cpu size={16} />;
      case 'shield': return <Shield size={16} />;
      case 'database': return <Database size={16} />;
      default: return <Workflow size={16} />;
    }
  };

  // Find active skill object across categories
  const allSkills = skillCategories.flatMap((cat) =>
    cat.skills.map((s) => ({ ...s, categoryLabel: cat.label, categoryColor: cat.color }))
  );

  const activeSkill = allSkills.find((s) => s.name === activeSkillName) || allSkills[0];

  return (
    <div className="skills-root">
      {/* ── 01. SKILLS HERO & TOPOLOGY ─────────────────── */}
      <section className="skills-editorial-hero">
        <div className="skills-container">
          <div className="skills-hero-header">
            <div className="hero-eyebrow">
              <Sparkles size={13} className="text-cyan-400 inline mr-1" />
              <span>TECHNICAL STACK &bull; VERIFIED OPEN-SOURCE SYSTEMS</span>
            </div>

            <h1 className="skills-hero-headline">
              TECHNICAL SKILLS<br />
              <span className="text-gradient-cyan">&amp; APPLIED PROFICIENCIES</span>.
            </h1>

            <p className="skills-hero-desc">
              Every technology below is directly applied across verified open-source repositories and running architectures in my portfolio.
            </p>
          </div>

          {/* ── 02. INTERACTION CONTROLS BAR ─────────────────── */}
          <div className="skills-controls-bar">
            {/* Search Filter */}
            <div className="skills-search-box">
              <Search size={14} className="text-white/40" />
              <input
                type="text"
                placeholder="Search languages, tools, frameworks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="skills-search-input"
              />
            </div>

            {/* Project Filter Switcher */}
            <div className="project-filter-group">
              <span className="filter-label">HIGHLIGHT BY PROJECT:</span>
              <select
                value={filterProject}
                onChange={(e) => {
                  playSound('toggle');
                  setFilterProject(e.target.value);
                }}
                className="project-select-dropdown"
              >
                <option value="all">All Projects</option>
                {projects.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* ── 03. CATEGORY TABS ─────────────────── */}
          <div className="category-tabs-row">
            <button
              className={`cat-tab-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => {
                playSound('click');
                setSelectedCategory('all');
              }}
            >
              All Domains
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                className={`cat-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => {
                  playSound('click');
                  setSelectedCategory(cat.id);
                }}
              >
                <span className="tab-icon">{getCategoryIcon(cat.icon)}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* ── 04. CONSTELLATION GRID & INSPECTOR LAYOUT ─────────────────── */}
          <div className="skills-main-layout">
            {/* Left Column: Skills Constellation Matrix */}
            <div className="skills-matrix-column">
              {skillCategories
                .filter((cat) => selectedCategory === 'all' || selectedCategory === cat.id)
                .map((cat) => {
                  const matchingSkills = cat.skills.filter((s) => {
                    const matchesSearch =
                      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      (s.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ?? false);
                    const matchesProject =
                      filterProject === 'all' || (s.relatedProjects?.includes(filterProject) ?? false);
                    return matchesSearch && matchesProject;
                  });

                  if (matchingSkills.length === 0) return null;

                  return (
                    <div key={cat.id} className="skill-category-block">
                      <div className="cat-block-header">
                        <div className="cat-header-title">
                          <span
                            className="cat-color-dot"
                            style={{ backgroundColor: cat.color }}
                          />
                          <h3>{cat.label}</h3>
                        </div>
                        <p className="cat-header-desc">{cat.description}</p>
                      </div>

                      <div className="skills-nodes-grid">
                        {matchingSkills.map((skill) => {
                          const isSelected = activeSkillName === skill.name;
                          const isProjectActive =
                            filterProject !== 'all' && (skill.relatedProjects?.includes(filterProject) ?? false);

                          return (
                            <button
                              key={skill.name}
                              className={`skill-node-card ${isSelected ? 'is-selected' : ''} ${
                                isProjectActive ? 'is-project-match' : ''
                              }`}
                              onClick={() => {
                                playSound('click');
                                setActiveSkillName(skill.name);
                              }}
                            >
                              <div className="skill-node-top">
                                <span className="skill-node-name">{skill.name}</span>
                                <span className={`skill-level-badge ${skill.level}`}>
                                  {skill.level}
                                </span>
                              </div>

                              <div className="skill-tags-strip">
                                {skill.tags?.map((tag) => (
                                  <span key={tag} className="tag-micro">
                                    {tag}
                                  </span>
                                ))}
                              </div>

                              {(skill.relatedProjects?.length ?? 0) > 0 && (
                                <div className="skill-proof-count">
                                  <CheckCircle2 size={11} className="text-cyan-400" />
                                  <span>{skill.relatedProjects?.length} Verified Projects</span>
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* Right Column: Active Skill Detailed Inspector Card */}
            <div className="skill-inspector-column">
              <motion.div
                key={activeSkill.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="skill-inspector-card"
              >
                <div className="inspector-top-meta">
                  <span
                    className="inspector-cat-pill"
                    style={{ borderColor: activeSkill.categoryColor, color: activeSkill.categoryColor }}
                  >
                    {activeSkill.categoryLabel}
                  </span>
                  <span className={`inspector-level-badge ${activeSkill.level}`}>
                    {activeSkill.level.toUpperCase()} COMPETENCY
                  </span>
                </div>

                <h2 className="inspector-skill-title">{activeSkill.name}</h2>

                <div className="inspector-tags-list">
                  {activeSkill.tags?.map((t) => (
                    <span key={t} className="inspector-tag-pill">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="inspector-divider" />

                <div className="inspector-proofs-section">
                  <span className="proofs-heading">APPLIED IN PRODUCTION &amp; RESEARCH:</span>
                  <div className="proofs-projects-list">
                    {activeSkill.relatedProjects?.map((pSlug) => {
                      const p = projects.find((item) => item.slug === pSlug);
                      if (!p) return null;

                      return (
                        <Link
                          key={p.slug}
                          href={`/work/${p.slug}`}
                          className="inspector-proj-row"
                          onClick={() => playSound('click')}
                        >
                          <div className="proj-row-text">
                            <span className="proj-row-title">{p.title}</span>
                            <span className="proj-row-sub">{p.subtitle}</span>
                          </div>
                          <div className="proj-row-action">
                            <span className="view-text">Case Study</span>
                            <ArrowRight size={13} />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="inspector-quote-box">
                  <p>
                    &ldquo;Proficiency is evaluated through architectural boundary design, edge-case handling, and runtime stability &mdash; not memorization.&rdquo;
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
