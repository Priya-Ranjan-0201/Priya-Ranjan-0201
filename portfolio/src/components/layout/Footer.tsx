'use client';

import Link from 'next/link';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-root">
      <div className="footer-container">
        {/* Main Grid */}
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand">
            <div className="footer-logo-row">
              <span className="footer-logo">PR</span>
              <span className="footer-tagline">Turn ideas into impact.</span>
            </div>
            <div className="footer-socials">
              <a
                href="https://github.com/Priya-Ranjan-0201"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href="https://linkedin.com/in/priye-ranjan"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href="mailto:priye0201@gmail.com"
                className="social-btn"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Navigate Col */}
          <div className="footer-col">
            <span className="footer-col-title">Navigate</span>
            <nav className="footer-nav">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/work">Work</Link>
              <Link href="/lab">Lab</Link>
              <Link href="/experience">Experience</Link>
              <Link href="/journal">Journal</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/resume">Resume</Link>
            </nav>
          </div>

          {/* Let's Connect Col */}
          <div className="footer-col">
            <span className="footer-col-title">Let&apos;s Connect</span>
            <p className="footer-connect-text">
              Open for collaborations, systems engineering opportunities, or technical inquiries.
            </p>
            <a href="mailto:priye0201@gmail.com" className="footer-email">
              priye0201@gmail.com
            </a>
            <div className="footer-location">
              <span className="location-dot" />
              <span>India, IN</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright and scroll to top */}
        <div className="footer-bottom">
          <span className="footer-copy">
            &copy; 2026 Priya Ranjan. All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            className="scroll-top-btn"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      {/* Marquee / Ticker bottom banner */}
      <div className="footer-ticker">
        <div className="ticker-track">
          <span>PRIYA RANJAN &bull; COMPUTER SCIENCE &amp; SYSTEMS BUILDER &bull; ARTIFICIAL INTELLIGENCE &bull; CYBERSECURITY &bull; SPATIAL COMPUTING &bull; B.TECH CSE (2023&ndash;2027) &bull;&nbsp;</span>
          <span>PRIYA RANJAN &bull; COMPUTER SCIENCE &amp; SYSTEMS BUILDER &bull; ARTIFICIAL INTELLIGENCE &bull; CYBERSECURITY &bull; SPATIAL COMPUTING &bull; B.TECH CSE (2023&ndash;2027) &bull;&nbsp;</span>
        </div>
      </div>

    </footer>
  );
}
