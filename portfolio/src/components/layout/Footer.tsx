'use client';

import Link from 'next/link';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { playSound } from '@/lib/sound';

export default function Footer() {
  const scrollToTop = () => {
    playSound('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/work' },
    { label: 'Lab', href: '/lab' },
    { label: 'Resume', href: '/resume' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="footer-root">
      <div className="footer-container">
        {/* Main Grid */}
        <div className="footer-grid">
          {/* Left Brand Col */}
          <div className="footer-brand">
            <div className="footer-logo-row">
              <span className="footer-logo">PR</span>
              <div>
                <h3 className="footer-brand-name">PRIYA RANJAN</h3>
                <p className="footer-brand-sub">Computer Science Engineer · Builder · Problem Solver</p>
              </div>
            </div>
            <p className="footer-tagline">TURN IDEAS INTO IMPACT.</p>
          </div>

          {/* Center Navigation Col */}
          <div className="footer-center-nav">
            <span className="footer-col-title">NAVIGATION</span>
            <nav className="footer-links-grid">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="footer-nav-item"
                  onClick={() => playSound('click')}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Socials & Contact Col */}
          <div className="footer-social-col">
            <span className="footer-col-title">CONNECT</span>
            <div className="footer-socials-row">
              <a
                href="https://github.com/Priya-Ranjan-0201"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub"
                onClick={() => playSound('click')}
              >
                <GithubIcon size={15} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/priye-ranjan"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn"
                onClick={() => playSound('click')}
              >
                <LinkedinIcon size={15} />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:priye0201@gmail.com"
                className="social-btn"
                aria-label="Email"
                onClick={() => playSound('click')}
              >
                <Mail size={15} />
                <span>Email</span>
              </a>
            </div>
            <p className="footer-location-note">Based in India · B.Tech CSE (2023&ndash;2027)</p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="footer-bottom">
          <span className="footer-copy">
            &copy; {new Date().getFullYear()} PRIYA RANJAN. All rights reserved. &bull; TURN IDEAS INTO IMPACT.
          </span>
          <button
            onClick={scrollToTop}
            className="scroll-top-btn"
            aria-label="Scroll to top"
          >
            <ArrowUp size={15} />
            <span>TOP</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
