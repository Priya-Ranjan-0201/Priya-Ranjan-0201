'use client';

import Link from 'next/link';
import { Eye, Download, X, ArrowRight } from 'lucide-react';
import { useSettingsStore } from '@/stores/settings-store';

export default function RecruiterBanner() {
  const { recruiterMode, setRecruiterMode } = useSettingsStore();

  if (!recruiterMode) return null;

  return (
    <aside className="recruiter-bar" aria-label="Recruiter quick access toolbar">
      <div className="recruiter-bar-inner">
        <div className="recruiter-left">
          <Eye size={14} className="recruiter-badge-icon" />
          <span className="recruiter-headline">RECRUITER VIEW ACTIVE &mdash; Rapid Review Mode</span>
        </div>
        <nav className="recruiter-links-row" aria-label="Recruiter navigation">
          <Link href="/about" className="recruiter-link">About Priya</Link>
          <Link href="/work/vireoniq" className="recruiter-link">Flagship: VIREONIQ</Link>
          <Link href="/skills" className="recruiter-link">Skills Grid</Link>
          <Link href="/resume" className="recruiter-link resume-pill">
            <Download size={12} />
            <span>Resume PDF</span>
          </Link>
          <Link href="/contact" className="recruiter-link contact-pill">
            <span>Hire Me</span>
            <ArrowRight size={11} />
          </Link>
        </nav>
        <button
          onClick={() => setRecruiterMode(false)}
          className="recruiter-close-btn"
          aria-label="Exit Recruiter View"
        >
          <X size={13} />
        </button>
      </div>
    </aside>
  );
}
