'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Layers,
  Cpu,
  Shield,
  Eye,
  Globe,
  HardDrive,
  Terminal,
} from 'lucide-react';
import { projects } from '@/data/projects';
import { useSettingsStore } from '@/stores/settings-store';
import { playSound } from '@/lib/sound';
import ProjectVisual from '@/components/work/ProjectVisual';
import GitHubFeed from '@/components/home/GitHubFeed';

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const openArchitecture = useSettingsStore((s) => s.openArchitectureModal);

  const categories = ['ALL', 'AI / ML', 'SECURITY', 'SYSTEMS & CS', 'VISION & TOOLS'];

  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter((p) => {
        if (activeCategory === 'AI / ML') return p.category === 'AI/ML' || p.tags.includes('PyTorch') || p.tags.includes('AI');
        if (activeCategory === 'SECURITY') return p.category === 'SECURITY' || p.tags.includes('Security');
        if (activeCategory === 'SYSTEMS & CS') return p.category === 'SYSTEMS' || p.category === 'TOOLS' || p.slug === 'disk-scheduling';
        if (activeCategory === 'VISION & TOOLS') return p.category === 'VISION' || p.category === 'TOOLS' || p.category === 'WEB';
        return true;
      });

  const getStatusBadge = (status: string) => {
    switch (status.toUpperCase()) {
      case 'ACTIVE':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'COMPLETED':
        return 'bg-[rgb(var(--accent))]/15 text-[rgb(var(--accent))] border-[rgb(var(--accent))]/30';
      case 'ITERATING':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'PROTOTYPE':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      default:
        return 'bg-white/5 text-[rgb(var(--fg-muted))] border-white/10';
    }
  };

  return (
    <div className="work-page-wrapper">
      <div className="subpage-container">
        {/* ── SUBPAGE EDITORIAL HEADER ───────────────────────── */}
        <div className="subpage-header-block">
          <div className="subpage-eyebrow">
            <span className="w-2 h-2 rounded-full bg-[rgb(var(--accent))]" />
            <span>SELECTED WORK &bull; FIRST-PRINCIPLES SYSTEMS</span>
          </div>

          <h1 className="subpage-headline">
            Engineered Systems &amp; Case Studies.
          </h1>

          <p className="subpage-lead-para">
            Production-grade platforms, algorithmic simulators, and security tooling built to test hardware limits and solve concrete problems.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                    activeCategory === cat
                      ? 'bg-[rgb(var(--accent))] text-white border border-[rgb(var(--accent))] shadow-sm font-semibold'
                      : 'bg-[rgb(var(--bg-secondary))] text-[rgb(var(--fg-muted))] border border-[rgb(var(--border))] hover:text-[rgb(var(--fg-primary))] hover:border-[rgb(var(--accent))]/40'
                  }`}
                  onClick={() => {
                    playSound('click');
                    setActiveCategory(cat);
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="text-xs font-mono text-[rgb(var(--fg-muted))]">
              SHOWING <span className="text-[rgb(var(--fg-primary))] font-bold">{filteredProjects.length}</span> OF {projects.length} PROJECTS
            </div>
          </div>
        </div>

        {/* ── PROJECTS LIST ──────────────────────────────────── */}
        <div className="space-y-12">
          {filteredProjects.map((item, i) => {
            const isFlagship = item.slug === 'vireoniq' && activeCategory === 'ALL';

            return (
              <article
                key={item.slug}
                className={`p-6 sm:p-10 rounded-2xl bg-[rgb(var(--bg-secondary))] border transition-all duration-300 ${
                  isFlagship
                    ? 'border-[rgb(var(--accent))]/60 shadow-md ring-1 ring-[rgb(var(--accent))]/20'
                    : 'border-[rgb(var(--border))] hover:border-[rgb(var(--accent))]/40 shadow-sm'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column: Details & Typography */}
                  <div className="lg:col-span-7 space-y-5">
                    {/* Index & Status Header */}
                    <div className="flex items-center gap-3 text-xs font-mono">
                      <span className="font-extrabold text-[rgb(var(--accent))]">
                        0{i + 1}
                      </span>
                      <span className="text-[#32363F]">/</span>
                      <span className="text-[rgb(var(--fg-muted))]">{item.year}</span>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${getStatusBadge(
                          item.status
                        )}`}
                      >
                        {isFlagship ? 'FLAGSHIP' : item.status.toUpperCase()}
                      </span>
                      {item.category && (
                        <span className="text-[#6E7480] uppercase hidden sm:inline-block">
                          &bull; {item.category}
                        </span>
                      )}
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[rgb(var(--fg-primary))] mb-1.5">
                        <Link
                          href={`/work/${item.slug}`}
                          className="hover:text-[rgb(var(--accent))] transition-colors"
                          onClick={() => playSound('click')}
                        >
                          {item.title}
                        </Link>
                      </h2>
                      <h3 className="text-sm sm:text-base font-medium text-[rgb(var(--accent))]">
                        {item.subtitle}
                      </h3>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-sm text-[rgb(var(--fg-muted))] leading-relaxed max-w-xl">
                      {item.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {item.technologies.slice(0, 6).map((tech) => (
                        <span key={tech} className="tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-4 pt-3 text-xs font-mono">
                      <Link
                        href={`/work/${item.slug}`}
                        className="btn-solid-accent inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-all shadow-sm"
                        onClick={() => playSound('click')}
                      >
                        <span>VIEW CASE STUDY</span>
                        <ArrowRight size={13} />
                      </Link>

                      <button
                        onClick={() => {
                          playSound('click');
                          openArchitecture(item.slug);
                        }}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[rgb(var(--bg-secondary))] hover:bg-[rgb(var(--bg-tertiary))] text-[rgb(var(--fg-muted))] hover:text-[rgb(var(--fg-primary))] border border-[rgb(var(--border))] transition-all"
                      >
                        <Layers size={13} />
                        <span>System Architecture</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Bespoke Engineering Preview */}
                  <div className="lg:col-span-5">
                    <Link
                      href={`/work/${item.slug}`}
                      className="block group cursor-pointer"
                      onClick={() => playSound('click')}
                    >
                      <ProjectVisual slug={item.slug} title={item.title} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Real GitHub Activity Feed */}
        <div className="mt-20 sm:mt-24">
          <GitHubFeed />
        </div>
      </div>
    </div>
  );
}
