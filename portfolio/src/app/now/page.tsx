'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Clock,
  BookOpen,
  Terminal,
  Cpu,
  Coffee,
  HelpCircle,
  ArrowRight,
  ExternalLink,
  Calendar,
  MapPin,
} from 'lucide-react';
import { nowContent } from '@/data/now';

export default function NowPage() {
  return (
    <div className="subpage-wrapper">
      <div className="subpage-container">
        {/* Header */}
        <div className="subpage-header-block">
          <div className="subpage-eyebrow">
            <span className="w-2 h-2 rounded-full bg-[rgb(var(--accent))]" />
            <span>NOW &bull; {nowContent.updatedDate.toUpperCase()} &bull; {nowContent.location.toUpperCase()}</span>
          </div>

          <h1 className="subpage-headline">
            What I&apos;m focused on right now.
          </h1>

          <p className="subpage-lead-para">
            A public snapshot of my active projects, learning rabbit holes, reading list, and life priorities. Inspired by Derek Sivers&apos; /now movement.
          </p>
        </div>

        {/* 01. Building Now */}
        <section className="mb-16 pt-8 border-t border-[rgb(var(--border))]">
          <div className="now-section-title">
            <Terminal size={14} />
            <span>Currently Building</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nowContent.buildingNow.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] hover:border-[rgb(var(--accent))]/40 shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-[rgb(var(--fg-primary))] mb-2">{item.title}</h3>
                  <p className="text-sm text-[rgb(var(--fg-secondary))] leading-relaxed mb-4">{item.description}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-[rgb(var(--border))]/70">
                  <span className="font-mono text-xs text-[rgb(var(--fg-muted))]">{item.tech}</span>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[rgb(var(--accent))] hover:underline transition-colors"
                    >
                      <span>Repo</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 02. Learning Under the Hood */}
        <section className="mb-16 pt-8 border-t border-[rgb(var(--border))]">
          <div className="now-section-title">
            <Cpu size={14} />
            <span>Learning Under the Hood</span>
          </div>

          <div className="space-y-4">
            {nowContent.learningNow.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] shadow-sm"
              >
                <h4 className="text-base font-semibold text-[rgb(var(--fg-primary))] mb-1.5">{item.topic}</h4>
                <p className="text-sm text-[rgb(var(--fg-secondary))] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 03. Reading List */}
        <section className="mb-16 pt-8 border-t border-[rgb(var(--border))]">
          <div className="now-section-title">
            <BookOpen size={14} />
            <span>Reading Right Now</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nowContent.readingNow.map((book, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] shadow-sm"
              >
                <span className="text-xs font-mono text-[rgb(var(--fg-muted))] block mb-1">Book &bull; {book.author}</span>
                <h4 className="text-lg font-bold text-[rgb(var(--fg-primary))] mb-3">&ldquo;{book.title}&rdquo;</h4>
                <p className="text-sm text-[rgb(var(--fg-secondary))] leading-relaxed">
                  <strong className="text-[rgb(var(--fg-primary))] font-semibold">Core Takeaway: </strong>
                  {book.takeaway}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 04. Current Question & Outside Terminal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 pt-8 border-t border-[rgb(var(--border))]">
          <div className="p-6 rounded-xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] shadow-sm">
            <div className="now-section-title">
              <HelpCircle size={14} />
              <span>Current Architectural Question</span>
            </div>
            <p className="text-sm sm:text-base text-[rgb(var(--fg-secondary))] italic leading-relaxed">
              &ldquo;{nowContent.currentQuestion}&rdquo;
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] shadow-sm">
            <div className="now-section-title">
              <Coffee size={14} />
              <span>Outside the Terminal</span>
            </div>
            <p className="text-sm sm:text-base text-[rgb(var(--fg-secondary))] leading-relaxed">
              {nowContent.outsideTerminal}
            </p>
          </div>
        </div>

        {/* Callout */}
        <div className="p-8 rounded-xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] text-center max-w-xl mx-auto shadow-sm">
          <h4 className="text-base font-semibold text-[rgb(var(--fg-primary))] mb-2">Want to chat about any of these topics?</h4>
          <p className="text-sm text-[rgb(var(--fg-muted))] mb-6">
            I love trading book recommendations and discussing system trade-offs.
          </p>
          <Link href="/contact" className="btn-cobalt-primary inline-flex">
            <span>Say Hello</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
