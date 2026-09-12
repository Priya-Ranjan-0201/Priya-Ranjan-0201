'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Command, ArrowRight } from 'lucide-react';
import { navigation } from '@/data/navigation';
import { useSettingsStore } from '@/stores/settings-store';

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string>('/work');
  const navRef = useRef<HTMLElement>(null);
  const { setCommandPaletteOpen, setSettingsPanelOpen, setCoreState } = useSettingsStore();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close on escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const primaryPaths = ['/work', '/about', '/skills', '/experience', '/resume', '/contact'];
  const headerNavLinks = navigation
    .filter((route) => primaryPaths.includes(route.path))
    .map((route) => ({
      label: route.label === 'Work' ? 'Projects' : route.label,
      href: route.path,
      coreState: route.coreState,
    }));

  const hoveredRoute = navigation.find(r => r.path === hoveredPath) || navigation[2];

  return (
    <>
      {/* Fixed Navigation Bar */}
      <nav
        ref={navRef}
        className="nav-bar"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="nav-container">
          {/* Monogram / Home */}
          <Link
            href="/"
            className="nav-monogram"
            aria-label="Home"
            onMouseEnter={() => setCoreState('neural')}
          >
            <span className="monogram-text">PR</span>
          </Link>

          {/* Center Desktop Links */}
          <div className="nav-center-links">
            {headerNavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`header-nav-link ${isActive ? 'active' : ''}`}
                  onMouseEnter={() => setCoreState(link.coreState)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Controls */}
          <div className="nav-controls">
            {/* Location Badge */}
            <div className="location-badge">
              <span className="location-dot" />
              <span className="location-text">India, IN</span>
            </div>

            {/* Let's Talk CTA */}
            <Link href="/contact" className="lets-talk-btn">
              <span>Let&apos;s Talk</span>
              <ArrowRight size={12} />
            </Link>

            {/* Command Palette */}
            <button
              className="nav-icon-btn"
              onClick={() => setCommandPaletteOpen(true)}
              aria-label="Open command palette"
              title="Cmd+K"
            >
              <Command size={15} />
            </button>

            {/* Menu Toggle */}
            <button
              className="nav-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
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

      {/* Full-screen Navigation Overlay (Panel 04: NAVIGATION & PAGE TRANSITION) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="nav-overlay-bg"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
              style={{ transformOrigin: 'top' }}
            />

            <div className="nav-overlay-content">
              {/* Top Row inside overlay */}
              <div className="overlay-header">
                <span className="overlay-pr">PR</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="overlay-close-btn"
                  aria-label="Close"
                >
                  &times;
                </button>
              </div>

              {/* 3-Column Layout from Panel 04 */}
              <div className="overlay-columns">
                {/* Column 1: Vertical Links */}
                <div className="overlay-links-col">
                  {navigation.map((route, i) => (
                    <motion.div
                      key={route.path}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.04, duration: 0.4 }}
                      onMouseEnter={() => {
                        setHoveredPath(route.path);
                        setCoreState(route.coreState);
                      }}
                    >
                      <Link
                        href={route.path}
                        className={`overlay-link ${pathname === route.path ? 'active' : ''} ${hoveredPath === route.path ? 'hovered' : ''}`}
                      >
                        <span className="overlay-link-label">{route.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Column 2: Hover Preview Card */}
                <motion.div
                  className="overlay-preview-col"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="preview-card">
                    <div className="preview-card-image-wrap">
                      <Image
                        src="/images/vireoniq-thumb.jpg"
                        alt="Project preview"
                        fill
                        sizes="300px"
                        style={{ objectFit: 'cover' }}
                      />
                      <div className="preview-card-overlay" />
                    </div>
                    <div className="preview-card-body">
                      <Link href={hoveredPath} className="preview-card-cta">
                        <span>Explore my {hoveredRoute.label.toLowerCase()}</span>
                        <ArrowRight size={14} />
                      </Link>
                      <p className="preview-card-desc">{hoveredRoute.description}</p>
                    </div>
                  </div>
                  <span className="hover-previews-tag">Hover previews</span>
                </motion.div>

                {/* Column 3: Large Typographic Feature with Light Streak */}
                <motion.div
                  className="overlay-feature-col"
                  key={hoveredRoute.path}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="feature-streak-wrap">
                    <svg className="light-streak-svg" viewBox="0 0 400 300" fill="none">
                      <path
                        d="M 50,280 C 150,260 220,180 320,80 C 370,30 380,20 390,10"
                        stroke="url(#streakGradient)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="streakGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#ff4d00" stopOpacity="0.1" />
                          <stop offset="60%" stopColor="#ffaa00" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h2 className="feature-big-title">
                    {hoveredRoute.label.toUpperCase()}
                  </h2>
                  <div className="feature-sub-row">
                    <span className="feature-sub-label">
                      ENTERING {hoveredRoute.concept.toUpperCase()}
                    </span>
                    <ArrowRight size={18} className="feature-arrow" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
