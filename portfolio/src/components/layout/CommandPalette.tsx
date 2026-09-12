'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Home, User, Briefcase, FlaskConical, History, Mail, Palette, FileText, Cpu, Shield, Sparkles, Terminal, Activity, Eye } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useSettingsStore } from '@/stores/settings-store';
import { projects } from '@/data/projects';
import { skillCategories } from '@/data/skills';
import { experiments } from '@/data/lab';
import { journalEntries } from '@/data/journal';
import { sound } from '@/lib/sound';

interface PaletteAction {
  id: string;
  label: string;
  category: 'Navigation' | 'Projects' | 'Skills' | 'Lab' | 'Journal' | 'Settings' | 'Developer';
  icon: React.ReactNode;
  shortcut?: string[];
  action: () => void;
  keywords?: string[];
}

export default function CommandPalette() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const {
    commandPaletteOpen,
    setCommandPaletteOpen,
    setSettingsPanelOpen,
    theme,
    setTheme,
    font,
    setFont,
    motion: motionLevel,
    setMotion,
    devModeActive,
    setDevModeActive,
    recruiterMode,
    setRecruiterMode,
    sound: soundEnabled,
  } = useSettingsStore();

  const baseCommands: PaletteAction[] = useMemo(() => [
    // ── Navigation ─────────────────────────
    {
      id: 'nav-home',
      label: 'Home — The Core',
      category: 'Navigation',
      icon: <Home size={15} />,
      shortcut: ['G', 'H'],
      action: () => router.push('/'),
      keywords: ['landing', 'hero', 'priya', 'ranjan', 'main'],
    },
    {
      id: 'nav-about',
      label: 'About — The Mind',
      category: 'Navigation',
      icon: <User size={15} />,
      shortcut: ['G', 'A'],
      action: () => router.push('/about'),
      keywords: ['who', 'background', 'learning', 'interests', 'philosophy'],
    },
    {
      id: 'nav-work',
      label: 'Work — The Archive',
      category: 'Navigation',
      icon: <Briefcase size={15} />,
      shortcut: ['G', 'W'],
      action: () => router.push('/work'),
      keywords: ['projects', 'case studies', 'software', 'code'],
    },
    {
      id: 'nav-skills',
      label: 'Skills — The Network',
      category: 'Navigation',
      icon: <Cpu size={15} />,
      shortcut: ['G', 'S'],
      action: () => router.push('/skills'),
      keywords: ['python', 'typescript', 'pytorch', 'nmap', 'react', 'stack'],
    },
    {
      id: 'nav-experience',
      label: 'Experience — The Timeline',
      category: 'Navigation',
      icon: <History size={15} />,
      shortcut: ['G', 'E'],
      action: () => router.push('/experience'),
      keywords: ['btech', 'education', 'university', 'journey', 'hackathons'],
    },
    {
      id: 'nav-lab',
      label: 'Lab — Experimental Playground',
      category: 'Navigation',
      icon: <FlaskConical size={15} />,
      shortcut: ['G', 'L'],
      action: () => router.push('/lab'),
      keywords: ['physics', 'particles', 'shaders', 'experiments', 'sandbox'],
    },
    {
      id: 'nav-journal',
      label: 'Journal — The Observatory',
      category: 'Navigation',
      icon: <FileText size={15} />,
      shortcut: ['G', 'J'],
      action: () => router.push('/journal'),
      keywords: ['articles', 'essays', 'notes', 'insights', 'technical'],
    },
    {
      id: 'nav-resume',
      label: 'Resume — The Codex',
      category: 'Navigation',
      icon: <FileText size={15} />,
      shortcut: ['G', 'R'],
      action: () => router.push('/resume'),
      keywords: ['cv', 'pdf', 'hire', 'academics', 'certifications'],
    },
    {
      id: 'nav-contact',
      label: 'Contact — Convergence',
      category: 'Navigation',
      icon: <Mail size={15} />,
      shortcut: ['G', 'C'],
      action: () => router.push('/contact'),
      keywords: ['email', 'message', 'reach', 'talk'],
    },

    // ── Projects ───────────────────────────
    ...projects.map((p) => ({
      id: `proj-${p.slug}`,
      label: `${p.title} — ${p.subtitle}`,
      category: 'Projects' as const,
      icon: <Briefcase size={15} />,
      action: () => router.push(`/work/${p.slug}`),
      keywords: [...p.tags, ...p.technologies, p.category, p.problem],
    })),

    // ── Lab Experiments ────────────────────
    ...experiments.map((e) => ({
      id: `lab-${e.slug}`,
      label: `Experiment: ${e.title}`,
      category: 'Lab' as const,
      icon: <FlaskConical size={15} />,
      action: () => router.push(`/lab/${e.slug}`),
      keywords: [...e.tags, e.category, e.whyExists],
    })),

    // ── Journal Entries ────────────────────
    ...journalEntries.map((j) => ({
      id: `journal-${j.slug}`,
      label: `Note: ${j.title}`,
      category: 'Journal' as const,
      icon: <FileText size={15} />,
      action: () => router.push('/journal'),
      keywords: [...j.tags, j.category, j.subtitle || ''],
    })),

    // ── Skills Search ──────────────────────
    ...skillCategories.flatMap((cat) =>
      cat.skills.map((s) => ({
        id: `skill-${s.name.toLowerCase().replace(/\s+/g, '-')}`,
        label: `Skill: ${s.name} (${cat.label})`,
        category: 'Skills' as const,
        icon: <Cpu size={15} />,
        action: () => router.push('/skills'),
        keywords: [s.name, cat.label, ...(s.tags || []), ...(s.relatedProjects || [])],
      }))
    ),

    // ── Settings & Modes ───────────────────
    {
      id: 'set-recruiter',
      label: `Recruiter View: ${recruiterMode ? 'ON' : 'OFF'}`,
      category: 'Settings',
      icon: <Eye size={15} />,
      action: () => setRecruiterMode(!recruiterMode),
      keywords: ['recruiter', 'view', 'summary', 'quick'],
    },
    {
      id: 'set-theme-midnight',
      label: 'Theme: Midnight (Deep Void & Cyan)',
      category: 'Settings',
      icon: <Palette size={15} />,
      action: () => setTheme('midnight'),
      keywords: ['theme', 'dark', 'cyan', 'midnight'],
    },
    {
      id: 'set-theme-obsidian',
      label: 'Theme: Obsidian (Stealth & Warm Gold)',
      category: 'Settings',
      icon: <Palette size={15} />,
      action: () => setTheme('obsidian'),
      keywords: ['theme', 'gold', 'amber', 'obsidian'],
    },
    {
      id: 'set-theme-paper',
      label: 'Theme: Paper (Stark Architectural Light)',
      category: 'Settings',
      icon: <Palette size={15} />,
      action: () => setTheme('paper'),
      keywords: ['theme', 'light', 'paper', 'white'],
    },
    {
      id: 'set-theme-mono',
      label: 'Theme: Mono (High-Contrast Brutalist)',
      category: 'Settings',
      icon: <Palette size={15} />,
      action: () => setTheme('mono'),
      keywords: ['theme', 'monochrome', 'black and white', 'mono'],
    },
    {
      id: 'set-motion-cinematic',
      label: 'Motion: Cinematic (Maximum Expressive Depth)',
      category: 'Settings',
      icon: <Sparkles size={15} />,
      action: () => setMotion('cinematic'),
      keywords: ['motion', 'animation', 'cinematic'],
    },
    {
      id: 'set-motion-calm',
      label: 'Motion: Calm (Subtle Easing / Reduced)',
      category: 'Settings',
      icon: <Sparkles size={15} />,
      action: () => setMotion('calm'),
      keywords: ['motion', 'reduced', 'calm', 'accessible'],
    },
    {
      id: 'open-settings',
      label: 'Open Experience Settings Panel',
      category: 'Settings',
      icon: <Palette size={15} />,
      action: () => setSettingsPanelOpen(true),
      keywords: ['settings', 'preferences', 'customize', 'audio', 'fonts'],
    },

    // ── Secret Developer Diagnostics ───────
    {
      id: 'dev-diagnostics',
      label: 'system: Toggle Live Telemetry HUD (Easter Egg)',
      category: 'Developer',
      icon: <Terminal size={15} />,
      action: () => setDevModeActive(!devModeActive),
      keywords: ['system', 'diagnostics', 'fps', 'telemetry', 'dev', 'secret', 'hud', 'benchmark'],
    },
  ], [router, setRecruiterMode, recruiterMode, setTheme, setMotion, setSettingsPanelOpen, setDevModeActive, devModeActive]);

  // Filter commands by query
  const filteredCommands = useMemo(() => {
    if (!query.trim()) return baseCommands.slice(0, 18);
    const q = query.toLowerCase();
    return baseCommands.filter((cmd) => {
      if (cmd.label.toLowerCase().includes(q)) return true;
      if (cmd.category.toLowerCase().includes(q)) return true;
      if (cmd.keywords?.some((k) => k.toLowerCase().includes(q))) return true;
      return false;
    });
  }, [baseCommands, query]);

  // Reset selected index on query change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Global keydown handler for Cmd+K and shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K toggle
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(!commandPaletteOpen);
        if (soundEnabled) sound.playClick();
        return;
      }

      // Escape close
      if (e.key === 'Escape' && commandPaletteOpen) {
        setCommandPaletteOpen(false);
        return;
      }

      // Arrow navigation inside open palette
      if (commandPaletteOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredCommands.length));
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % Math.max(1, filteredCommands.length));
        } else if (e.key === 'Enter') {
          e.preventDefault();
          const target = filteredCommands[selectedIndex];
          if (target) {
            if (soundEnabled) sound.playClick();
            target.action();
            setCommandPaletteOpen(false);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [commandPaletteOpen, filteredCommands, selectedIndex, setCommandPaletteOpen, soundEnabled]);

  // Focus input when opened
  useEffect(() => {
    if (commandPaletteOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [commandPaletteOpen]);

  return (
    <AnimatePresence>
      {commandPaletteOpen && (
        <div className="palette-overlay" role="dialog" aria-modal="true">
          <motion.div
            className="palette-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCommandPaletteOpen(false)}
          />

          <motion.div
            className="palette-box"
            initial={{ opacity: 0, scale: 0.96, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Input Row */}
            <div className="palette-input-row">
              <Search size={17} className="palette-search-icon" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Type a command, project, skill, or 'system'..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="palette-input-field"
                aria-label="Search portfolio"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="palette-clear-btn"
                  aria-label="Clear query"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Commands List */}
            <div className="palette-list-wrapper">
              {filteredCommands.length === 0 ? (
                <div className="palette-empty-state">
                  <span>No results matching &quot;{query}&quot;</span>
                  <p className="palette-empty-tip">Try searching for &quot;vireoniq&quot;, &quot;security&quot;, &quot;python&quot;, or &quot;system&quot;.</p>
                </div>
              ) : (
                filteredCommands.map((cmd, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={cmd.id}
                      className={`palette-item-btn ${isSelected ? 'selected' : ''}`}
                      onClick={() => {
                        if (soundEnabled) sound.playClick();
                        cmd.action();
                        setCommandPaletteOpen(false);
                      }}
                      onMouseEnter={() => setSelectedIndex(idx)}
                    >
                      <div className="palette-item-left">
                        <span className="palette-item-icon">{cmd.icon}</span>
                        <span className="palette-item-label">{cmd.label}</span>
                      </div>
                      <div className="palette-item-right">
                        <span className="palette-cat-tag">{cmd.category}</span>
                        {cmd.shortcut && (
                          <div className="palette-shortcut-pills">
                            {cmd.shortcut.map((key) => (
                              <kbd key={key} className="palette-key-badge">
                                {key}
                              </kbd>
                            ))}
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Palette Footer */}
            <div className="palette-footer-bar">
              <div className="palette-footer-tips">
                <span><kbd className="palette-mini-key">↑↓</kbd> Navigate</span>
                <span><kbd className="palette-mini-key">↵</kbd> Select</span>
                <span><kbd className="palette-mini-key">esc</kbd> Close</span>
              </div>
              <span className="palette-tip-text">Tip: Type &quot;system&quot; for live diagnostics HUD</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
