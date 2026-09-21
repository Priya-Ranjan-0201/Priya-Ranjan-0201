'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Command, ArrowRight, Sparkles, Code2, FlaskConical, User, Mail, Sun, Moon, X, Search } from 'lucide-react';
import type { CoreState } from '@/types';
import { useSettingsStore } from '@/stores/settings-store';
import { navigation } from '@/data/navigation';
import { playSound } from '@/lib/sound';

interface NavItem {
  label: string;
  href: string;
  previewType?: 'work' | 'lab' | 'about' | 'contact';
}

const navItems: NavItem[] = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about', previewType: 'about' },
  { label: 'WORK', href: '/work', previewType: 'work' },
  { label: 'LAB', href: '/lab', previewType: 'lab' },
  { label: 'RESUME', href: '/resume' },
  { label: 'CONTACT', href: '/contact', previewType: 'contact' },
];

interface DirectoryRoute {
  num: string;
  label: string;
  path: string;
  tag: string;
  desc: string;
  specs: string;
  coreState: CoreState;
}

const directoryRoutes: DirectoryRoute[] = [
  {
    num: '01',
    label: 'Home',
    path: '/',
    tag: 'THE ENTRY',
    desc: 'Systems engineering foundations, core architecture, and selected production implementations.',
    specs: 'Python AST Code Inspection · Vector Embeddings · Real-time Architecture',
    coreState: 'neural',
  },
  {
    num: '02',
    label: 'About',
    path: '/about',
    tag: 'THE ENGINEER',
    desc: 'Journey, technical models, engineering philosophy, and the path from curiosity to distributed systems.',
    specs: 'CS Engineering · Distributed Systems · Problem Solving Philosophy',
    coreState: 'orbit',
  },
  {
    num: '03',
    label: 'Work',
    path: '/work',
    tag: 'CASE STUDIES',
    desc: 'Deep technical architecture breakdowns, design trade-offs, and verified production codebases.',
    specs: 'VIREONIQ (AST) · TravelSathi · Agent Systems · Production Code',
    coreState: 'nodes',
  },
  {
    num: '04',
    label: 'Lab',
    path: '/lab',
    tag: 'EXPERIMENTS',
    desc: 'Interactive research experiments exploring AST parsing, vector spaces, and algorithm visualizers.',
    specs: 'Interactive AST Parser · Vector Embedding Space · WebGL Visuals',
    coreState: 'nodes',
  },
  {
    num: '05',
    label: 'Journey',
    path: '/experience',
    tag: 'TURNING POINTS',
    desc: 'Chronological engineering milestones, academic background, and hard-earned production lessons.',
    specs: 'CS Foundation · Open Source Milestones · Production Lessons',
    coreState: 'journey',
  },
  {
    num: '06',
    label: 'Now',
    path: '/now',
    tag: 'ACTIVE FOCUS',
    desc: 'Current engineering priorities, active reading list, and topics under deep study.',
    specs: 'Distributed Systems · LLM Evaluation & Guardrails · Latency Optimization',
    coreState: 'network',
  },
  {
    num: '07',
    label: 'Resume',
    path: '/resume',
    tag: 'CURRICULUM VITAE',
    desc: 'Clean, printable summary of technical skills, project contributions, and academic background.',
    specs: 'Print-Ready PDF View · Verified Skills · Direct Contact Info',
    coreState: 'resume',
  },
  {
    num: '08',
    label: 'Contact',
    path: '/contact',
    tag: 'GET IN TOUCH',
    desc: 'Direct communication channel for engineering roles, technical collaboration, or deep-dive discussions.',
    specs: 'priye0201@gmail.com · GitHub: @Priya-Ranjan-0201 · Direct Inbox',
    coreState: 'convergence',
  },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredPreview, setHoveredPreview] = useState<'work' | 'lab' | 'about' | 'contact' | null>(null);
  const [hoveredPath, setHoveredPath] = useState<string>('/about');
  const navRef = useRef<HTMLElement>(null);
  const { theme, setTheme, setCommandPaletteOpen, setCoreState } = useSettingsStore();

  const toggleTheme = () => {
    playSound('click');
    setTheme(theme === 'dark' ? 'paper' : 'dark');
  };

  const hoveredDirectory = directoryRoutes.find((r) => r.path === hoveredPath) || directoryRoutes[0];
  const hoveredRoute = navigation.find((r) => r.path === hoveredPath) || navigation[0];

  // Lock body scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    setHoveredPreview(null);
  }, [pathname]);

  // Close on escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      {/* Sticky Navigation Bar */}
      <nav
        ref={navRef}
        className={`nav-bar ${isScrolled ? 'nav-scrolled' : 'nav-initial'}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="nav-container">
          {/* Monogram / Home */}
          <Link
            href="/"
            className="nav-monogram"
            aria-label="Priya Ranjan Home"
            onClick={() => playSound('click')}
          >
            <span className="monogram-text">PR</span>
          </Link>

          {/* Center Desktop Links */}
          <div className="nav-center-links relative">
            {navItems.map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <div
                  key={item.href}
                  className="nav-item-wrapper relative"
                  onMouseEnter={() => {
                    if (item.previewType) setHoveredPreview(item.previewType);
                  }}
                  onMouseLeave={() => setHoveredPreview(null)}
                >
                  <Link
                    href={item.href}
                    className={`header-nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => playSound('click')}
                  >
                    {item.label}
                  </Link>

                  {/* Contextual Preview Popover (Section 09) */}
                  <AnimatePresence>
                    {hoveredPreview === item.previewType && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.95 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="nav-contextual-preview"
                      >
                        {item.previewType === 'work' && (
                          <div className="preview-content-box">
                            <div className="preview-badge">FEATURED</div>
                            <span className="preview-title">VIREONIQ</span>
                            <span className="preview-sub">AST Skill Architecture</span>
                          </div>
                        )}
                        {item.previewType === 'lab' && (
                          <div className="preview-content-box">
                            <div className="preview-badge">EXPERIMENTS</div>
                            <span className="preview-title">Interactive Lab</span>
                            <span className="preview-sub">5 Creative Experiments</span>
                          </div>
                        )}
                        {item.previewType === 'about' && (
                          <div className="preview-content-box">
                            <div className="preview-badge">PROFILE</div>
                            <span className="preview-title">Priya Ranjan</span>
                            <span className="preview-sub">Philosophy &amp; Journey</span>
                          </div>
                        )}
                        {item.previewType === 'contact' && (
                          <div className="preview-content-box">
                            <div className="preview-badge">CONNECT</div>
                            <span className="preview-title">Direct Inbox</span>
                            <span className="preview-sub">priye0201@gmail.com</span>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Controls */}
          <div className="nav-controls">
            {/* Quick 1-Click Dark/Light Mode Toggle */}
            <button
              className="nav-icon-btn theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to Light Paper Mode' : 'Switch to Warm Graphite Dark Mode'}
              title={theme === 'dark' ? 'Light Paper' : 'Warm Graphite Dark'}
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Let's Talk CTA (Section 08 - Desktop only) */}
            <Link
              href="/contact"
              className="lets-talk-btn desktop-only-cta"
              onClick={() => playSound('click')}
            >
              <span>LET&apos;S TALK &rarr;</span>
            </Link>

            {/* Command Palette */}
            <button
              className="nav-icon-btn"
              onClick={() => {
                playSound('click');
                setCommandPaletteOpen(true);
              }}
              aria-label="Open command palette"
              title="Search (Cmd+K)"
            >
              <Command size={14} />
            </button>

            {/* Menu Toggle for Mobile */}
            <button
              className="nav-menu-btn"
              onClick={() => {
                playSound('click');
                setIsOpen(!isOpen)}
              }
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <div className={`menu-lines ${isOpen ? 'open' : ''}`}>
                <span />
                <span />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen Navigation Overlay (Panel 04: ARCHITECTURAL DIRECTORY) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsOpen(false);
            }}
          >
            <motion.div
              className="nav-overlay-content"
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Header inside overlay */}
              <div className="overlay-header">
                <div className="overlay-header-left">
                  <span className="overlay-pr">PR</span>
                  <span className="overlay-badge">DIRECTORY &middot; 08 SECTIONS</span>
                </div>

                <div className="overlay-header-right">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setCommandPaletteOpen(true);
                    }}
                    className="overlay-search-btn"
                    title="Quick Search"
                  >
                    <Search size={13} />
                    <span>Search</span>
                  </button>

                  <button
                    onClick={toggleTheme}
                    className="overlay-theme-btn"
                    title="Toggle Theme"
                  >
                    {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
                    <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
                  </button>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="overlay-close-btn"
                    aria-label="Close navigation"
                    title="Close (Esc)"
                  >
                    <X size={16} />
                    <span>ESC</span>
                  </button>
                </div>
              </div>

              {/* 2-Column Architectural Directory Layout */}
              <div className="overlay-grid-layout">
                {/* Left Column: Numbered Navigation Links */}
                <div className="overlay-links-panel">
                  <div className="overlay-links-list">
                    {directoryRoutes.map((route, i) => {
                      const isActive = pathname === route.path;
                      const isHovered = hoveredPath === route.path;
                      return (
                        <motion.div
                          key={route.path}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.03 + i * 0.02, duration: 0.22 }}
                          onMouseEnter={() => {
                            setHoveredPath(route.path);
                            setCoreState(route.coreState);
                          }}
                        >
                          <Link
                            href={route.path}
                            onClick={() => {
                              playSound('click');
                              setIsOpen(false);
                            }}
                            className={`overlay-nav-item ${isActive ? 'active' : ''} ${isHovered ? 'hovered' : ''}`}
                          >
                            <span className="nav-item-index">{route.num}</span>
                            <span className="nav-item-title">{route.label}</span>
                            <span className="nav-item-tag">{isActive ? 'CURRENT' : route.tag}</span>
                            <ArrowRight size={13} className="nav-item-arrow" />
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Column: Architectural Inspector Card (Dynamic on hover) */}
                <div className="overlay-inspector-panel">
                  <motion.div
                    key={hoveredDirectory.path}
                    className="inspector-card"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div>
                      <div className="inspector-card-header">
                        <div className="inspector-status-dot" />
                        <span className="inspector-status-label">ACTIVE SELECTION &middot; {hoveredDirectory.num}</span>
                      </div>

                      <h3 className="inspector-card-title">{hoveredDirectory.label}</h3>
                      <span className="inspector-card-concept">{hoveredDirectory.tag}</span>

                      <p className="inspector-card-desc">{hoveredDirectory.desc}</p>
                    </div>

                    <div className="inspector-specs-box">
                      <span className="specs-box-label">KEY ARCHITECTURE &amp; CONTENT</span>
                      <p className="specs-box-text">{hoveredDirectory.specs}</p>
                    </div>

                    <div>
                      <Link
                        href={hoveredDirectory.path}
                        onClick={() => {
                          playSound('click');
                          setIsOpen(false);
                        }}
                        className="inspector-enter-btn w-full"
                      >
                        <span>ENTER {hoveredDirectory.label.toUpperCase()}</span>
                        <ArrowRight size={13} />
                      </Link>

                      {/* Direct Contact Coordinates */}
                      <div className="inspector-footer-coords">
                        <div className="coord-item">
                          <span className="coord-lbl">GITHUB</span>
                          <a href="https://github.com/Priya-Ranjan-0201" target="_blank" rel="noopener noreferrer" className="coord-val">@Priya-Ranjan-0201</a>
                        </div>
                        <div className="coord-item">
                          <span className="coord-lbl">INBOX</span>
                          <a href="mailto:priye0201@gmail.com" className="coord-val">priye0201@gmail.com</a>
                        </div>
                        <div className="coord-item">
                          <span className="coord-lbl">LOCATION</span>
                          <span className="coord-val">India, IN</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
