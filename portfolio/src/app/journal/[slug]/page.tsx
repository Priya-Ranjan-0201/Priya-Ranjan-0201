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
      case 'BUILD': return 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10';
      case 'SECURITY': return 'border-rose-500/40 text-rose-400 bg-rose-500/10';
      case 'AI': return 'border-purple-500/40 text-purple-400 bg-purple-500/10';
      case 'LEARN': return 'border-blue-500/40 text-blue-400 bg-blue-500/10';
      case 'WEB': return 'border-amber-500/40 text-amber-400 bg-amber-500/10';
      default: return 'border-white/20 text-white/70 bg-white/5';
    }
  };

  return (
    <div className="journal-article-root min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-white">
      {/* ── BREADCRUMB & METADATA ─────────────────── */}
      <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4 text-xs tracking-wider font-mono">
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 text-white/60 hover:text-cyan-400 transition-colors"
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
            className="flex items-center gap-1.5 text-white/50 hover:text-white transition-colors cursor-pointer"
            title="Copy link to note"
          >
            {copied ? <Check size={13} className="text-emerald-400" /> : <Share2 size={13} />}
            <span>{copied ? 'COPIED' : 'SHARE'}</span>
          </button>
        </div>
      </div>

      {/* ── HEADER ─────────────────── */}
      <header className="mb-12">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono mb-4">
          <Sparkles size={12} />
          <span>TECHNICAL NOTE &bull; RETROSPECTIVE 0{currentIndex + 1}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
          {entry.title}
        </h1>

        {entry.subtitle && (
          <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed mb-6">
            {entry.subtitle}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/50 border-t border-b border-white/5 py-3">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={13} className="text-white/40" />
            {entry.date}
          </span>
          <span>&bull;</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock size={13} className="text-white/40" />
            {entry.readTime}
          </span>
          <span>&bull;</span>
          <span className="text-white/60">Priya Ranjan &bull; Student Engineer</span>
        </div>
      </header>

      {/* ── EXCERPT CALLOUT ─────────────────── */}
      <div className="p-6 rounded-xl bg-cyan-950/20 border border-cyan-500/20 mb-10 text-cyan-200/90 font-mono text-sm leading-relaxed">
        <span className="text-xs uppercase text-cyan-400 font-bold block mb-1">Core Hypothesis:</span>
        {entry.excerpt}
      </div>

      {/* ── ARTICLE ESSAY BODY ─────────────────── */}
      <main className="prose prose-invert prose-lg max-w-none space-y-6 text-white/80 leading-relaxed font-sans">
        {entry.content.map((para, i) => (
          <p key={i} className="text-base sm:text-lg leading-relaxed font-normal">
            {para}
          </p>
        ))}
      </main>

      {/* ── TAGS ROW ─────────────────── */}
      <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
        <span className="text-xs font-mono text-white/40 uppercase mr-2">Topic Vectors:</span>
        {entry.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/70"
          >
            <Tag size={10} className="text-cyan-400" />
            {tag}
          </span>
        ))}
      </div>

      {/* ── DIRECT PROJECT MANIFESTATION ─────────────────── */}
      {relatedProject && (
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-white/[0.04] to-cyan-500/[0.04] border border-cyan-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-wider font-mono text-cyan-400 block mb-1">
              SYSTEM MANIFESTATION
            </span>
            <h3 className="text-lg font-bold text-white mb-1">
              Engineered into {relatedProject.title}
            </h3>
            <p className="text-xs text-white/60 max-w-md">
              {relatedProject.description}
            </p>
          </div>

          <Link
            href={`/work/${relatedProject.slug}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider transition-all duration-200"
            onClick={() => playSound('click')}
          >
            <span>EXPLORE ARCHITECTURE</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      )}

      {/* ── PREV / NEXT NAV ─────────────────── */}
      <nav className="mt-16 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href={`/journal/${prevEntry.slug}`}
          className="p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all group"
          onClick={() => playSound('click')}
        >
          <span className="text-[10px] font-mono text-white/40 uppercase block mb-1">
            &larr; Previous Note
          </span>
          <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
            {prevEntry.title}
          </span>
        </Link>

        <Link
          href={`/journal/${nextEntry.slug}`}
          className="p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all group text-right"
          onClick={() => playSound('click')}
        >
          <span className="text-[10px] font-mono text-white/40 uppercase block mb-1">
            Next Note &rarr;
          </span>
          <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
            {nextEntry.title}
          </span>
        </Link>
      </nav>
    </div>
  );
}
