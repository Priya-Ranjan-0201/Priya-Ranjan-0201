'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Download,
  Printer,
  ExternalLink,
  GraduationCap,
  Code2,
  Briefcase,
  Award,
  Sparkles,
  CheckCircle2,
  Mail,
  MapPin,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { skillCategories } from '@/data/skills';
import { playSound } from '@/lib/sound';

export default function ResumePage() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handlePrint = () => {
    playSound('click');
    window.print();
  };

  const handleCopyEmail = () => {
    playSound('click');
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="resume-page-root">
      <section className="resume-container-section">
        <div className="resume-screen-wrapper">
          {/* Top Actions Bar (Hidden in Print) */}
          <div className="resume-actions-bar no-print">
            <div className="resume-badge-group">
              <Sparkles size={13} className="text-cyan-400 inline mr-1" />
              <span>ACADEMIC CURRICULUM VITAE &bull; ATS VERIFIED FORMAT</span>
            </div>

            <div className="resume-action-buttons flex items-center gap-3">
              <button onClick={handlePrint} className="btn-print-primary">
                <Printer size={14} />
                <span>VIEW PDF / PRINT</span>
              </button>
              <button onClick={handlePrint} className="btn-print-secondary px-3 py-1.5 rounded-lg border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 text-xs font-mono transition-all flex items-center gap-1.5">
                <Download size={13} />
                <span>DOWNLOAD PDF</span>
              </button>
            </div>
          </div>

          {/* ── PRINT-OPTIMIZED RESUME DOCUMENT ── */}
          <div className="resume-sheet">
            {/* Header / Identity */}
            <header className="sheet-header">
              <div className="sheet-header-main">
                <h1 className="sheet-name">{profile.firstName} {profile.lastName}</h1>
                <p className="sheet-role">Computer Science Undergraduate &bull; Software &amp; Systems Builder</p>
                <p className="sheet-statement">&ldquo;{profile.statement}&rdquo;</p>
              </div>

              <div className="sheet-contact-grid">
                <div className="sheet-contact-item">
                  <Mail size={13} className="sheet-icon" />
                  <span onClick={handleCopyEmail} className="cursor-pointer hover:text-cyan-400">
                    {profile.email} {copiedEmail ? '(Copied!)' : ''}
                  </span>
                </div>
                <div className="sheet-contact-item">
                  <MapPin size={13} className="sheet-icon" />
                  <span>{profile.location}</span>
                </div>
                <div className="sheet-contact-item">
                  <GithubIcon size={13} className="sheet-icon" />
                  <a href="https://github.com/Priya-Ranjan-0201" target="_blank" rel="noreferrer">
                    github.com/Priya-Ranjan-0201
                  </a>
                </div>
                <div className="sheet-contact-item">
                  <LinkedinIcon size={13} className="sheet-icon" />
                  <a href="https://linkedin.com/in/priye-ranjan" target="_blank" rel="noreferrer">
                    linkedin.com/in/priye-ranjan
                  </a>
                </div>
              </div>
            </header>

            {/* 01. Education */}
            <section className="sheet-section">
              <h2 className="sheet-section-title">
                <GraduationCap size={15} className="sheet-title-icon" />
                <span>EDUCATION</span>
              </h2>

              <div className="sheet-entry">
                <div className="sheet-entry-head">
                  <div className="entry-title-box">
                    <strong className="entry-degree">Bachelor of Technology (B.Tech) in Computer Science &amp; Engineering</strong>
                    <span className="entry-sub">Specialization in Artificial Intelligence &amp; Distributed Systems</span>
                  </div>
                  <span className="entry-date">2023 &ndash; 2027</span>
                </div>
                <p className="entry-notes">
                  <strong>Core Coursework:</strong> Data Structures &amp; Algorithms, Operating Systems, Computer Networks, Database Management Systems, Theory of Computation, Discrete Mathematics, Object-Oriented Software Design.
                </p>
              </div>
            </section>

            {/* 02. Technical Competencies */}
            <section className="sheet-section">
              <h2 className="sheet-section-title">
                <Code2 size={15} className="sheet-title-icon" />
                <span>TECHNICAL SKILLS</span>
              </h2>

              <div className="sheet-skills-table">
                {skillCategories.map((cat) => (
                  <div key={cat.id} className="skills-table-row">
                    <strong className="skills-row-label">{cat.label}:</strong>
                    <span className="skills-row-items">
                      {cat.skills.map((s) => s.name).join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 03. Engineered Projects */}
            <section className="sheet-section">
              <h2 className="sheet-section-title">
                <Briefcase size={15} className="sheet-title-icon" />
                <span>KEY ENGINEERED PROJECTS &amp; VERIFIED SYSTEMS</span>
              </h2>

              <div className="sheet-projects-list">
                {projects.slice(0, 5).map((p) => (
                  <div key={p.slug} className="sheet-project-entry">
                    <div className="sheet-entry-head">
                      <div className="entry-title-box">
                        <strong className="entry-project-name">{p.title}</strong>
                        <span className="entry-project-sub">&mdash; {p.subtitle}</span>
                      </div>
                      <span className="entry-date">{p.year}</span>
                    </div>

                    <p className="project-desc-line">{p.description}</p>

                    <div className="project-bullets">
                      <div className="p-bullet">
                        &bull; <strong>Problem &amp; Architecture:</strong> {p.problem}
                      </div>
                      <div className="p-bullet">
                        &bull; <strong>Engineered Result:</strong> {p.solution}
                      </div>
                    </div>

                    <div className="project-tech-line">
                      <strong>Technologies:</strong> {p.technologies.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 04. CS Fundamentals & Open Source */}
            <section className="sheet-section">
              <h2 className="sheet-section-title">
                <Award size={15} className="sheet-title-icon" />
                <span>FOUNDATIONS &amp; ACHIEVEMENTS</span>
              </h2>

              <div className="sheet-achievements-list">
                <div className="achievement-bullet">
                  &bull; <strong>Operating System Kinematics Research:</strong> Built open-source Disk Scheduling Algorithm simulator comparing FCFS, SSTF, SCAN, and C-LOOK head traversals to evaluate seek latency limits.
                </div>
                <div className="achievement-bullet">
                  &bull; <strong>Algorithmic Problem Solving:</strong> Regular practice across competitive programming platforms, focusing on graph algorithms, dynamic programming, and asymptotic time complexity optimizations.
                </div>
                <div className="achievement-bullet">
                  &bull; <strong>Explainable Clinical AI:</strong> Integrated TreeSHAP game-theoretic attribution with cardiovascular gradient-boosted ensembles in Priocardix AI to ensure clinical transparency.
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
