'use client';

import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Tag,
  ExternalLink,
  BookOpen,
  Share2,
  Check,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { journalEntries } from '@/data/journal';
import { getProjectBySlug } from '@/data/projects';
import { playSound } from '@/lib/sound';
import { useSettingsStore } from '@/stores/settings-store';

export default function JournalPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const entry = journalEntries.find((e) => e.slug === slug);
  const [copied, setCopied] = useState(false);
  const setCoreState = useSettingsStore((s) => s.setCoreState);

  useEffect(() => {
    setCoreState('network');
  }, [setCoreState]);

  if (!entry) {
    notFound();
  }

  const currentIndex = journalEntries.findIndex((e) => e.slug === slug);
  const prevEntry = journalEntries[(currentIndex - 1 + journalEntries.length) % journalEntries.length];
  const nextEntry = journalEntries[(currentIndex + 1) % journalEntries.length];
  const relatedProject = entry.relatedProject ? getProjectBySlug(entry.relatedProject) : null;

  const handleShare = () => {
    playSound('click');
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getCategoryBadgeColor = (cat: string) => {
    switch (cat) {
      case 'BUILD': return 'border-[rgb(var(--accent))]/40 text-[rgb(var(--accent))] bg-[rgb(var(--accent))]/10';
      case 'SECURITY': return 'border-rose-500/40 text-rose-400 bg-rose-500/10';
      case 'AI': return 'border-purple-500/40 text-purple-400 bg-purple-500/10';
      case 'LEARN': return 'border-blue-500/40 text-blue-400 bg-blue-500/10';
      case 'WEB': return 'border-amber-500/40 text-amber-400 bg-amber-500/10';
      default: return 'border-[rgb(var(--border))] text-[rgb(var(--fg-muted))] bg-[rgb(var(--bg-secondary))]';
    }
  };

  return (
    <div className="journal-article-root min-h-screen pt-36 sm:pt-44 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-[rgb(var(--fg-primary))]">
      {/* ── BREADCRUMB & METADATA ─────────────────── */}
      <div className="mb-8 flex items-center justify-between border-b border-[rgb(var(--border))] pb-4 text-xs tracking-wider font-mono">
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 text-[rgb(var(--fg-muted))] hover:text-[rgb(var(--accent))] transition-colors"
          onClick={() => playSound('click')}
        >
          <ArrowLeft size={14} />
          <span>/ JOURNAL / OVERVIEW</span>
        </Link>

        <div className="flex items-center gap-4">
          <span className={`px-2.5 py-0.5 rounded-full border text-[10px] uppercase font-mono ${getCategoryBadgeColor(entry.category)}`}>
            {entry.category}
          </span>
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 text-[rgb(var(--fg-muted))] hover:text-[rgb(var(--fg-primary))] transition-colors cursor-pointer"
            title="Copy link to note"
          >
            {copied ? <Check size={13} className="text-emerald-400" /> : <Share2 size={13} />}
            <span>{copied ? 'COPIED' : 'SHARE'}</span>
          </button>
        </div>
      </div>

      {/* ── HEADER ─────────────────── */}
      <header className="mb-12">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] text-[rgb(var(--accent))] text-xs font-mono mb-4 font-bold">
          <Sparkles size={12} />
          <span>TECHNICAL NOTE &bull; RETROSPECTIVE 0{currentIndex + 1}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4 text-[rgb(var(--fg-primary))]">
          {entry.title}
        </h1>

        {entry.subtitle && (
          <p className="text-lg sm:text-xl text-[rgb(var(--fg-muted))] font-light leading-relaxed mb-6">
            {entry.subtitle}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[rgb(var(--fg-muted))] border-t border-b border-[rgb(var(--border))] py-3">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={13} className="text-[rgb(var(--fg-muted))]" />
            {entry.date}
          </span>
          <span>&bull;</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock size={13} className="text-[rgb(var(--fg-muted))]" />
            {entry.readTime}
          </span>
          <span>&bull;</span>
          <span className="text-[rgb(var(--fg-primary))]">Priya Ranjan &bull; Student Engineer</span>
        </div>
      </header>

      {/* ── EXCERPT CALLOUT ─────────────────── */}
      <div className="p-6 rounded-xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--accent))]/30 mb-10 text-[rgb(var(--fg-primary))] font-mono text-sm leading-relaxed shadow-sm">
        <span className="text-xs uppercase text-[rgb(var(--accent))] font-bold block mb-1">Core Hypothesis:</span>
        {entry.excerpt}
      </div>

      {/* ── ARTICLE ESSAY BODY ─────────────────── */}
      <main className="prose prose-invert prose-lg max-w-none space-y-6 text-[rgb(var(--fg-secondary))] leading-relaxed font-sans">
        {entry.content.map((para, i) => (
          <p key={i} className="text-base sm:text-lg leading-relaxed font-normal">
            {para}
          </p>
        ))}
      </main>

      {/* ── TAGS ROW ─────────────────── */}
      <div className="mt-12 pt-6 border-t border-[rgb(var(--border))] flex flex-wrap items-center gap-2">
        <span className="text-xs font-mono text-[rgb(var(--fg-muted))] uppercase mr-2">Topic Vectors:</span>
        {entry.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] text-xs font-mono text-[rgb(var(--fg-primary))]"
          >
            <Tag size={10} className="text-[rgb(var(--accent))]" />
            {tag}
          </span>
        ))}
      </div>

      {/* ── DIRECT PROJECT MANIFESTATION ─────────────────── */}
      {relatedProject && (
        <div className="mt-10 p-6 rounded-2xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-wider font-mono text-[rgb(var(--accent))] block mb-1 font-bold">
              SYSTEM MANIFESTATION
            </span>
            <h3 className="text-lg font-bold text-[rgb(var(--fg-primary))] mb-1">
              Engineered into {relatedProject.title}
            </h3>
            <p className="text-xs text-[rgb(var(--fg-muted))] max-w-md">
              {relatedProject.description}
            </p>
          </div>

          <Link
            href={`/work/${relatedProject.slug}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[rgb(var(--accent))] hover:opacity-90 text-white text-xs font-mono tracking-wider transition-all duration-200 font-semibold shadow-xs"
            onClick={() => playSound('click')}
          >
            <span>EXPLORE ARCHITECTURE</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      )}

      {/* ── PREV / NEXT NAV ─────────────────── */}
      <nav className="mt-16 pt-8 border-t border-[rgb(var(--border))] grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href={`/journal/${prevEntry.slug}`}
          className="p-5 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-secondary))] hover:border-[rgb(var(--accent))]/50 transition-all group"
          onClick={() => playSound('click')}
        >
          <span className="text-[10px] font-mono text-[rgb(var(--fg-muted))] uppercase block mb-1">
            &larr; Previous Note
          </span>
          <span className="text-sm font-semibold text-[rgb(var(--fg-primary))] group-hover:text-[rgb(var(--accent))] transition-colors line-clamp-1">
            {prevEntry.title}
          </span>
        </Link>

        <Link
          href={`/journal/${nextEntry.slug}`}
          className="p-5 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-secondary))] hover:border-[rgb(var(--accent))]/50 transition-all group text-right"
          onClick={() => playSound('click')}
        >
          <span className="text-[10px] font-mono text-[rgb(var(--fg-muted))] uppercase block mb-1">
            Next Note &rarr;
          </span>
          <span className="text-sm font-semibold text-[rgb(var(--fg-primary))] group-hover:text-[rgb(var(--accent))] transition-colors line-clamp-1">
            {nextEntry.title}
          </span>
        </Link>
      </nav>
    </div>
  );
}
