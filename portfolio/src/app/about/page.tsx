'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Coffee,
  Cpu,
  Layers,
  Terminal,
  Activity,
  AlertTriangle,
  CheckCircle2,
  FileText,
  Mail,
  Check,
  Sparkles,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { profile, personalStory } from '@/data/profile';
import { playSound } from '@/lib/sound';

export default function AboutPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    playSound('click');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-primary))] text-[rgb(var(--fg-primary))] overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* ── 01. SIMPLIFIED HERO SECTION ─────────────────────── */}
        {/* Exact vertical rhythm: 16px (eyebrow) -> 24px (headline) -> 32px (subtext) -> 2 CTA buttons */}
        <section className="about-hero-clean-section">
          {/* Eyebrow tag: 16px bottom margin */}
          <div>
            <span className="about-eyebrow-tag">
              <span className="about-eyebrow-dot" />
              ABOUT &bull; PERSONAL PHILOSOPHY
            </span>
          </div>

          {/* One Headline: 24px bottom margin */}
          <h1 className="about-headline-one">
            I like difficult problems.
          </h1>

          {/* One Subtext Paragraph: 32px bottom margin */}
          <p className="about-subtext-para">
            They create better questions, and better questions create better systems. I am Priya Ranjan, a Computer Science undergraduate (B.Tech 2023&ndash;2027) building software that respects hardware limits, operational boundaries, and human clarity.
          </p>

          {/* Exactly Two CTA Buttons: 16px gap */}
          <div className="about-cta-row">
            <Link
              href="/resume"
              className="btn-solid-accent inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-semibold text-sm transition-all shadow-sm"
              onClick={() => playSound('click')}
            >
              <FileText size={15} />
              <span>View Resume</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[rgb(var(--bg-secondary))] hover:bg-[rgb(var(--bg-tertiary))] text-[rgb(var(--fg-primary))] border border-[rgb(var(--border))] font-semibold text-sm transition-all"
              onClick={() => playSound('click')}
            >
              <Mail size={15} />
              <span>Get in Touch</span>
            </Link>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-3 py-3.5 text-xs font-mono text-[rgb(var(--fg-muted))] hover:text-[rgb(var(--accent))] transition-colors ml-auto sm:ml-0"
              title="Copy direct email"
            >
              {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Mail size={14} />}
              <span>{copiedEmail ? 'Copied to Clipboard!' : profile.email}</span>
            </button>
          </div>
        </section>

        {/* ── CLEAR SECTION DIVIDER ───────────────────────────── */}
        <div className="about-section-divider" />

        {/* ── 02. TIMELINE: CAREER JOURNEY ────────────────────── */}
        <section className="pb-24 border-b border-[rgb(var(--border))]" id="timeline">
          <div className="mb-14">
            <span className="text-xs font-mono tracking-widest text-[rgb(var(--accent))] uppercase block mb-3 font-bold">
              CAREER &bull; JOURNEY
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[rgb(var(--fg-primary))] mb-3">
              The Learning &amp; Engineering Timeline
            </h2>
            <p className="text-sm sm:text-base text-[rgb(var(--fg-muted))] max-w-xl leading-relaxed">
              A line-drawn progression from fundamental exploration to production systems.
            </p>
          </div>

          <div className="relative pl-6 sm:pl-10 space-y-12 sm:space-y-16 before:content-[''] before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-px before:bg-[rgb(var(--border))]">
            {/* 2023 */}
            <div className="relative group">
              <div className="absolute -left-[27px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-[rgb(var(--bg-secondary))] border-2 border-[rgb(var(--fg-muted))] group-hover:border-[rgb(var(--accent))] transition-colors" />
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-2">
                <span className="text-xl font-mono font-bold text-[rgb(var(--fg-primary))]">2023</span>
                <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] text-[rgb(var(--accent))] font-semibold">
                  Learning &bull; Fundamentals
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[rgb(var(--fg-primary))] mb-2">
                Computer Science Foundations &amp; Systems Logic
              </h3>
              <p className="text-sm text-[rgb(var(--fg-muted))] leading-relaxed max-w-3xl">
                Began formal B.Tech in Computer Science. Studied computer architecture, data structures, algorithms, and low-level C programming. Focused on memory allocation, pointers, and understanding how software maps to hardware limits.
              </p>
            </div>

            {/* 2024 */}
            <div className="relative group">
              <div className="absolute -left-[27px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-[rgb(var(--bg-secondary))] border-2 border-[rgb(var(--fg-muted))] group-hover:border-[rgb(var(--accent))] transition-colors" />
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-2">
                <span className="text-xl font-mono font-bold text-[rgb(var(--fg-primary))]">2024</span>
                <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] text-[rgb(var(--accent))] font-semibold">
                  Building &bull; Applications &amp; Open Source
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[rgb(var(--fg-primary))] mb-2">
                Interactive Platforms &amp; Algorithmic Tools
              </h3>
              <p className="text-sm text-[rgb(var(--fg-muted))] leading-relaxed max-w-3xl">
                Built complete systems including the Disk Scheduling Algorithm visualizer (FCFS, SSTF, SCAN, C-LOOK) and Tech on Tour (geospatial MongoDB routing). Expanded into TypeScript, Node, and responsive web systems.
              </p>
            </div>

            {/* 2025 */}
            <div className="relative group">
              <div className="absolute -left-[27px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-[rgb(var(--bg-secondary))] border-2 border-[rgb(var(--fg-muted))] group-hover:border-[rgb(var(--accent))] transition-colors" />
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-2">
                <span className="text-xl font-mono font-bold text-[rgb(var(--fg-primary))]">2025</span>
                <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] text-[rgb(var(--accent))] font-semibold">
                  Exploring &bull; Intelligence &amp; Security
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[rgb(var(--fg-primary))] mb-2">
                AI/ML Pipelines, Computer Vision &amp; Defensive Cybersecurity
              </h3>
              <p className="text-sm text-[rgb(var(--fg-muted))] leading-relaxed max-w-3xl">
                Engineered TrustShield X (security auditing &amp; automated vulnerability scoring), HRCV (computer vision keypoint tracking), and Priocardix AI (explainable cardiac risk modeling with TreeSHAP). Dove deeply into vector retrieval, embeddings, and network socket inspection.
              </p>
            </div>

            {/* 2026 */}
            <div className="relative group">
              <div className="absolute -left-[27px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-[rgb(var(--accent))] border-2 border-white transition-colors" />
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-2">
                <span className="text-xl font-mono font-bold text-[rgb(var(--accent))]">2026</span>
                <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded bg-[rgb(var(--accent))]/15 border border-[rgb(var(--accent))]/40 text-[rgb(var(--accent))] font-bold">
                  Engineering &bull; Production Systems
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[rgb(var(--fg-primary))] mb-2">
                Vireoniq &amp; Autonomous Placement Intelligence
              </h3>
              <p className="text-sm text-[rgb(var(--fg-muted))] leading-relaxed max-w-3xl">
                Architecting Vireoniq, an end-to-end placement intelligence platform combining vector search (Qdrant), async processing (FastAPI/Celery), and deterministic skill matching. Preparing for software engineering internships and collaborative research.
              </p>
            </div>
          </div>
        </section>

        {/* ── 03. CHAPTERS: WHY CS & WHY DEVOPS ────────────────── */}
        <section className="py-24 border-b border-[rgb(var(--border))]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <span className="text-xs font-mono tracking-widest text-[rgb(var(--accent))] uppercase block mb-2 font-bold">
                CHAPTER 01 &bull; THE PATH
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[rgb(var(--fg-primary))] mb-4">
                Why I Chose Computer Science
              </h2>
            </div>

            <div className="md:col-span-8 space-y-6 text-[rgb(var(--fg-muted))] text-base leading-relaxed">
              <p>{personalStory.whyCS}</p>
              <p>
                As I started writing C and assembly programs in my university coursework, I found my greatest joy wasn&apos;t just seeing a UI render on screen, but writing code that respected hardware limits—understanding memory allocation, cache locality, and how processes share CPU time.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-16 pt-16 border-t border-[rgb(var(--border))]/60">
            <div className="md:col-span-4">
              <span className="text-xs font-mono tracking-widest text-[rgb(var(--accent))] uppercase block mb-2 font-bold">
                CHAPTER 02 &bull; SYSTEMS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[rgb(var(--fg-primary))] mb-4">
                Why DevOps &amp; Cloud Infrastructure
              </h2>
            </div>

            <div className="md:col-span-8 space-y-6 text-[rgb(var(--fg-muted))] text-base leading-relaxed">
              <p>{personalStory.whyDevOpsCloud}</p>
              <div className="p-6 rounded-xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] text-[rgb(var(--fg-primary))] font-mono text-sm leading-relaxed">
                &ldquo;Writing software is only half the battle. Keeping it alive, observable, and resilient in the wild is where the real craft begins.&rdquo;
              </div>
              <p>
                I spend significant time studying how resilient teams automate infrastructure: writing Dockerfiles with multi-stage non-root builds, configuring reverse proxies with Nginx, setting up GitHub Actions CI/CD pipelines, and establishing structured logging so that when an error occurs, you don&apos;t have to guess why.
              </p>
            </div>
          </div>
        </section>

        {/* ── 04. CHAPTER 03: LESSONS FROM FAILURE ─────────────── */}
        <section className="py-24 border-b border-[rgb(var(--border))]">
          <div className="mb-12">
            <span className="text-xs font-mono tracking-widest text-[rgb(var(--accent))] uppercase block mb-2 font-bold">
              CHAPTER 03 &bull; RETROSPECTIVE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[rgb(var(--fg-primary))]">
              What I Learned When Systems Broke
            </h2>
            <p className="text-sm text-[rgb(var(--fg-muted))] mt-2 max-w-xl leading-relaxed">
              The most enduring engineering lessons rarely come from tutorials where everything works on the first try.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalStory.failures.map((f, idx) => (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-2xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] flex flex-col justify-between hover:border-[rgb(var(--accent))]/50 transition-all shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-500 dark:text-amber-400 border border-amber-500/25">
                      <AlertTriangle size={13} className="text-amber-500 dark:text-amber-400" />
                      <span>MISTAKE 0{idx + 1}</span>
                    </span>
                    <span className="text-[11px] font-mono text-[rgb(var(--fg-muted))] uppercase tracking-wider">
                      INCIDENT POST-MORTEM
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[rgb(var(--fg-primary))] mb-4 leading-snug">
                    {f.title}
                  </h3>
                  
                  <div className="space-y-3.5 mb-6">
                    <div className="p-3.5 rounded-xl bg-[rgb(var(--bg-primary))] border border-[rgb(var(--border))]">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[rgb(var(--fg-primary))] block mb-1">
                        System Context:
                      </span>
                      <p className="text-xs text-[rgb(var(--fg-secondary))] leading-relaxed">
                        {f.context}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[rgb(var(--bg-primary))] border border-[rgb(var(--border))]">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-500 dark:text-rose-400 block mb-1">
                        What Happened:
                      </span>
                      <p className="text-xs text-[rgb(var(--fg-secondary))] leading-relaxed">
                        {f.whatHappened}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[rgb(var(--border))]">
                  <div className="p-4 rounded-xl bg-[rgb(var(--accent))]/10 border border-[rgb(var(--accent))]/25">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[rgb(var(--accent))] font-bold block mb-1.5">
                      The Hard Lesson Learned:
                    </span>
                    <p className="text-xs sm:text-sm text-[rgb(var(--fg-primary))] font-medium leading-relaxed">
                      {f.lessonLearned}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 05. CHAPTER 04: LIFE BEYOND THE TERMINAL ─────────── */}
        <section className="py-24 border-b border-[rgb(var(--border))]">
          <div className="mb-12">
            <span className="text-xs font-mono tracking-widest text-[rgb(var(--accent))] uppercase block mb-2 font-bold">
              CHAPTER 04 &bull; HUMAN CONTEXT
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[rgb(var(--fg-primary))]">
              Life Beyond the Terminal
            </h2>
            <p className="text-sm text-[rgb(var(--fg-muted))] mt-2 max-w-xl leading-relaxed">
              Engineering is central to what I do, but the best technical minds cultivate curiosity across disparate domains.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalStory.outsideCode.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] flex flex-col justify-between hover:border-[rgb(var(--accent))]/40 hover:-translate-y-1 transition-all duration-200 shadow-sm group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[rgb(var(--accent))]/10 border border-[rgb(var(--accent))]/25 flex items-center justify-center text-[rgb(var(--accent))] mb-5 group-hover:scale-105 transition-transform">
                    {idx === 0 && <BookOpen size={20} />}
                    {idx === 1 && <Terminal size={20} />}
                    {idx === 2 && <Activity size={20} />}
                    {idx === 3 && <Coffee size={20} />}
                  </div>
                  <h3 className="text-base font-bold text-[rgb(var(--fg-primary))] mb-2 tracking-tight">
                    {item.activity}
                  </h3>
                  <p className="text-xs sm:text-sm text-[rgb(var(--fg-secondary))] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 06. FOOTER CONNECT CARD ──────────────────────────── */}
        <section className="my-24 p-8 sm:p-12 rounded-2xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div>
            <span className="text-xs font-mono text-[rgb(var(--accent))] uppercase tracking-wider block mb-2 font-bold">
              OPEN FOR OPPORTUNITIES
            </span>
            <h3 className="text-2xl font-bold text-[rgb(var(--fg-primary))] mb-2">
              Want to discuss engineering or internship roles?
            </h3>
            <p className="text-sm text-[rgb(var(--fg-muted))] max-w-xl leading-relaxed">
              I am actively seeking software engineering and DevOps internship opportunities. If you value engineers who care about fundamentals and clean architectures, my inbox is open.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[rgb(var(--accent))] hover:opacity-90 text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-sm"
              onClick={() => playSound('click')}
            >
              <Mail size={14} />
              <span>Email Priya</span>
            </a>

            <a
              href="https://github.com/Priya-Ranjan-0201"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-[rgb(var(--bg-primary))] hover:bg-[rgb(var(--bg-tertiary))] text-[rgb(var(--fg-muted))] hover:text-[rgb(var(--fg-primary))] border border-[rgb(var(--border))] text-xs font-mono transition-all"
            >
              <GithubIcon size={14} />
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/priye-ranjan"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-[rgb(var(--bg-primary))] hover:bg-[rgb(var(--bg-tertiary))] text-[rgb(var(--fg-muted))] hover:text-[rgb(var(--fg-primary))] border border-[rgb(var(--border))] text-xs font-mono transition-all"
            >
              <LinkedinIcon size={14} />
              <span>LinkedIn</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

