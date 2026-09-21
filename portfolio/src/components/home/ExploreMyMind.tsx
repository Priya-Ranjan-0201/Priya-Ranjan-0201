'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Compass, Sparkles, Code2, ExternalLink } from 'lucide-react';
import { exploreMindDomains, ExploreMindDomain } from '@/data/profile';
import { playSound } from '@/lib/sound';

export default function ExploreMyMind() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDomainId, setSelectedDomainId] = useState<string>('ai');

  const activeDomain = exploreMindDomains.find((d) => d.id === selectedDomainId) || exploreMindDomains[0];

  return (
    <div className="explore-mind-root">
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => {
          playSound('click');
          setIsOpen(!isOpen);
        }}
        className={`explore-mind-toggle ${isOpen ? 'active' : ''}`}
        aria-expanded={isOpen}
      >
        <Compass size={14} className="explore-icon" />
        <span>EXPLORE MY MIND</span>
        <span className="explore-arrow">{isOpen ? '↑' : '→'}</span>
      </button>

      {/* Interactive Mind Map Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="explore-mind-panel"
          >
            <div className="explore-panel-header">
              <div className="explore-eyebrow">
                <Sparkles size={12} className="text-[rgb(var(--accent))]" />
                <span>INTERACTIVE DOMAIN MAP · SELECT AN AREA OF ENGINEERING</span>
              </div>
              <span className="explore-hint">6 Core Focus Areas</span>
            </div>

            {/* Domain Tabs Grid */}
            <div className="explore-domains-nav">
              {exploreMindDomains.map((domain) => {
                const isSelected = domain.id === selectedDomainId;
                return (
                  <button
                    key={domain.id}
                    onClick={() => {
                      playSound('click');
                      setSelectedDomainId(domain.id);
                    }}
                    className={`explore-domain-chip ${isSelected ? 'active' : ''}`}
                  >
                    <span className="domain-chip-dot" />
                    <span className="domain-chip-label">{domain.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Domain Insight Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDomain.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="explore-detail-card shadow-sm"
              >
                <div className="explore-card-top">
                  <div>
                    <span className="explore-card-tagline">{activeDomain.tagline}</span>
                    <h3 className="explore-card-title">{activeDomain.label}</h3>
                  </div>

                  <div className="explore-flagship-pill">
                    <span className="flagship-lbl">FLAGSHIP PROJECT</span>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <Link
                        href={`/work/${activeDomain.flagshipProject.slug}`}
                        className="flagship-title-link inline-flex items-center gap-1.5 font-bold"
                        onClick={() => playSound('click')}
                      >
                        <span>{activeDomain.flagshipProject.title}</span>
                        <ArrowRight size={13} />
                      </Link>

                      <a
                        href={activeDomain.flagshipProject.githubRepo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] text-[11px] font-mono text-[rgb(var(--fg-secondary))] hover:text-[rgb(var(--accent))] hover:border-[rgb(var(--accent))] transition-all"
                        onClick={() => playSound('click')}
                      >
                        <span>GitHub</span>
                        <ExternalLink size={10} />
                      </a>
                    </div>
                  </div>
                </div>

                <p className="explore-card-desc">{activeDomain.description}</p>

                <div className="explore-card-footer">
                  <div className="explore-skills-row">
                    <span className="skills-row-label">CORE TECHNOLOGIES:</span>
                    <div className="skills-tags-wrap">
                      {activeDomain.technologies.map((tech) => (
                        <span key={tech} className="explore-tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                    <p className="flagship-highlight-note text-xs">
                      <strong className="text-[rgb(var(--fg-primary))]">Project Insight:</strong> {activeDomain.flagshipProject.highlight}
                    </p>

                    <span className="shrink-0 text-[11px] font-mono px-2.5 py-1 rounded-md bg-[rgb(var(--accent))]/10 border border-[rgb(var(--accent))]/25 text-[rgb(var(--accent))] font-semibold">
                      {activeDomain.flagshipProject.metrics}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
