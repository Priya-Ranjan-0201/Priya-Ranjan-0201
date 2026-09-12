'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  BookOpen,
  Tag,
  X,
  ExternalLink,
  Search,
} from 'lucide-react';
import { journalEntries } from '@/data/journal';
import { projects } from '@/data/projects';
import { playSound } from '@/lib/sound';
import { JournalEntry } from '@/types';

export default function JournalPage() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);

  const categories = ['ALL', 'BUILD', 'LEARN', 'SECURITY', 'AI', 'WEB', 'EXPERIMENTS'];

  const filteredEntries = journalEntries.filter((entry) => {
    const matchesCat = activeCategory === 'ALL' || entry.category === activeCategory;
    const matchesSearch =
      entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (entry.subtitle?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
      entry.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'BUILD': return 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10';
      case 'SECURITY': return 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10';
      case 'AI': return 'border-purple-500/40 text-purple-400 bg-purple-500/10';
      case 'LEARNING':
      case 'LEARN': return 'border-blue-500/40 text-blue-400 bg-blue-500/10';
      case 'WEB': return 'border-amber-500/40 text-amber-400 bg-amber-500/10';
      case 'EXPERIMENTS': return 'border-pink-500/40 text-pink-400 bg-pink-500/10';
      default: return 'border-white/20 text-white/70 bg-white/5';
    }
  };

  return (
    <div className="journal-root">
      {/* ── 01. JOURNAL HERO ─────────────────── */}
      <section className="journal-hero-section">
        <div className="journal-container">
          <div className="journal-hero-header">
            <div className="journal-eyebrow">
              <Sparkles size={13} className="text-cyan-400 inline mr-1" />
              <span>OBSERVATORY OF ENGINEERING NOTES &bull; 06 TECHNICAL ESSAYS</span>
            </div>

            <h1 className="journal-main-title">
              THOUGHTS, SYSTEMS<br />
              <span className="text-gradient-cyan">&amp; ARCHITECTURAL</span> RETROSPECTIVES.
            </h1>

            <p className="journal-lead-desc">
              Writing forces clear thinking. Here are technical dissections of real project obstacles, operating system mechanics, explainable AI, and software design principles.
            </p>
          </div>

          {/* ── 02. CONTROLS BAR: CATEGORIES & SEARCH ─────────────────── */}
          <div className="journal-controls-bar">
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

            <div className="journal-search-wrap">
              <Search size={14} className="text-white/40" />
              <input
                type="text"
                placeholder="Search essays, algorithms, tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="journal-search-input"
              />
            </div>
          </div>

          {/* ── 03. ARTICLES EDITORIAL STREAM ─────────────────── */}
          <div className="journal-articles-stream">
            {filteredEntries.map((entry, idx) => (
              <motion.article
                key={entry.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="journal-entry-card"
                onClick={() => {
                  playSound('click');
                  setSelectedEntry(entry);
                }}
              >
                <div className="entry-card-top">
                  <span className={`entry-cat-pill ${getCategoryColor(entry.category)}`}>
                    {entry.category}
                  </span>
                  <div className="entry-meta-indicators">
                    <span className="meta-item">
                      <Calendar size={12} className="inline mr-1" />
                      {entry.date}
                    </span>
                    <span className="meta-dot">&bull;</span>
                    <span className="meta-item">
                      <Clock size={12} className="inline mr-1" />
                      {entry.readTime}
                    </span>
                  </div>
                </div>

                <h2 className="entry-card-title">{entry.title}</h2>
                <p className="entry-card-subtitle">{entry.subtitle}</p>
                <p className="entry-card-excerpt">{entry.excerpt}</p>

                <div className="entry-card-footer">
                  <div className="entry-tags-row">
                    {entry.tags.map((tag) => (
                      <span key={tag} className="entry-tag-micro">
                        <Tag size={10} className="inline mr-0.5 opacity-60" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="entry-read-cta flex items-center gap-3">
                    <Link
                      href={`/journal/${entry.slug}`}
                      className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors text-xs font-mono"
                      onClick={(e) => {
                        e.stopPropagation();
                        playSound('click');
                      }}
                    >
                      <span>Dedicated Page</span>
                      <ArrowRight size={13} />
                    </Link>
                    <span className="text-white/40 text-xs">&bull;</span>
                    <span className="text-xs text-white/60">Quick View &rarr;</span>
                  </div>
                </div>
              </motion.article>
            ))}

            {filteredEntries.length === 0 && (
              <div className="journal-empty-state">
                <BookOpen size={28} className="text-white/30 mb-2" />
                <p className="text-white/60">No essays matching the current query.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── 04. EDITORIAL ESSAY READER MODAL ─────────────────── */}
      <AnimatePresence>
        {selectedEntry && (
          <div className="journal-modal-overlay">
            <motion.div
              className="journal-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEntry(null)}
            />

            <motion.div
              className="journal-modal-container"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6">
                <Link
                  href={`/journal/${selectedEntry.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300"
                  onClick={() => playSound('click')}
                >
                  <ExternalLink size={13} />
                  <span>Open Dedicated URL (/journal/{selectedEntry.slug})</span>
                </Link>

                <button
                  className="journal-modal-close"
                  onClick={() => setSelectedEntry(null)}
                  aria-label="Close reader"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="reader-header">
                <span className={`entry-cat-pill ${getCategoryColor(selectedEntry.category)}`}>
                  {selectedEntry.category}
                </span>
                <h1 className="reader-title">{selectedEntry.title}</h1>
                <p className="reader-subtitle">{selectedEntry.subtitle}</p>

                <div className="reader-meta-row">
                  <span>{selectedEntry.date}</span>
                  <span>&bull;</span>
                  <span>{selectedEntry.readTime}</span>
                </div>
              </div>

              <div className="reader-body-content">
                {selectedEntry.content.map((paragraph, pIdx) => (
                  <p key={pIdx} className="reader-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>

              {selectedEntry.relatedProject && (
                <div className="reader-footer-project">
                  <span className="related-label">DIRECTLY MANIFESTED IN PROJECT:</span>
                  <Link
                    href={`/work/${selectedEntry.relatedProject}`}
                    className="reader-proj-link"
                    onClick={() => {
                      playSound('click');
                      setSelectedEntry(null);
                    }}
                  >
                    <span>View {selectedEntry.relatedProject.toUpperCase()} Case Study</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
