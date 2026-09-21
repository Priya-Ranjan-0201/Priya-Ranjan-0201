'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Send,
  CheckCircle2,
  Copy,
  Check,
  AlertCircle,
  Clock,
  ArrowRight,
  Globe,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { profile } from '@/data/profile';
import { playSound } from '@/lib/sound';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    playSound('click');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    if (!formData.email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('sending');
    playSound('click');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        playSound('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Fallback to mailto
        const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`, '_blank');
        setStatus('success');
      }
    } catch {
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`, '_blank');
      setStatus('success');
    }
  };

  return (
    <div className="contact-page-wrapper">
      <div className="subpage-container">
        {/* ── SECTION 32: CLEAN EDITORIAL HEADING ───────────── */}
        <div className="subpage-header-block">
          <div className="subpage-eyebrow">
            <span className="w-2 h-2 rounded-full bg-[rgb(var(--accent))]" />
            <span>COORDINATES &bull; DIRECT CONTACT</span>
          </div>

          <h1 className="subpage-headline">
            Let&apos;s Build Something Useful.
          </h1>

          <p className="subpage-lead-para">
            I am open to software engineering internships, collaborative research, and challenging technical projects. Send a direct message below or reach out via email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] shadow-sm">
              <span className="text-[10px] font-mono text-[rgb(var(--accent))] uppercase tracking-wider block mb-2 font-bold">
                DIRECT INBOX
              </span>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="font-mono text-sm text-[rgb(var(--fg-primary))] hover:text-[rgb(var(--accent))] transition-colors break-all font-semibold"
                >
                  {profile.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[rgb(var(--bg-primary))] hover:bg-[rgb(var(--bg-tertiary))] text-[rgb(var(--fg-muted))] hover:text-[rgb(var(--fg-primary))] border border-[rgb(var(--border))] transition-colors shrink-0"
                  title="Copy email"
                >
                  {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 rounded-2xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] space-y-3 shadow-sm">
              <span className="text-[10px] font-mono text-[rgb(var(--accent))] uppercase tracking-wider block font-bold">
                STATUS &bull; AVAILABILITY
              </span>
              <div className="flex items-center gap-2 text-sm text-[rgb(var(--fg-primary))] font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for SWE &amp; DevOps Internships</span>
              </div>
              <p className="text-xs text-[rgb(var(--fg-secondary))] leading-relaxed">
                Undergraduate B.Tech CSE (2023&ndash;2027). Available for remote, hybrid, or on-site roles where engineering discipline and problem-solving matter.
              </p>
            </div>

            {/* Social Coordinates */}
            <div className="p-6 rounded-2xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] space-y-4 shadow-sm">
              <span className="text-[10px] font-mono text-[rgb(var(--accent))] uppercase tracking-wider block font-bold">
                CHANNELS &bull; PROFILES
              </span>
              <div className="flex flex-col gap-3 text-xs font-mono">
                <a
                  href="https://github.com/Priya-Ranjan-0201"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[rgb(var(--bg-primary))] border border-[rgb(var(--border))] text-[rgb(var(--fg-muted))] hover:text-[rgb(var(--fg-primary))] hover:border-[rgb(var(--accent))] transition-colors shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon size={14} />
                    <span className="font-semibold text-[rgb(var(--fg-primary))]">GitHub</span>
                  </span>
                  <span className="text-[rgb(var(--accent))] font-bold">@Priya-Ranjan-0201</span>
                </a>

                <a
                  href="https://linkedin.com/in/priye-ranjan"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[rgb(var(--bg-primary))] border border-[rgb(var(--border))] text-[rgb(var(--fg-muted))] hover:text-[rgb(var(--fg-primary))] hover:border-[rgb(var(--accent))] transition-colors shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon size={14} />
                    <span className="font-semibold text-[rgb(var(--fg-primary))]">LinkedIn</span>
                  </span>
                  <span className="text-[rgb(var(--accent))] font-bold">in/priye-ranjan</span>
                </a>

                <Link
                  href="/"
                  className="flex items-center justify-between p-3 rounded-xl bg-[rgb(var(--bg-primary))] border border-[rgb(var(--border))] text-[rgb(var(--fg-muted))] hover:text-[rgb(var(--fg-primary))] hover:border-[rgb(var(--accent))] transition-colors shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <Globe size={14} />
                    <span className="font-semibold text-[rgb(var(--fg-primary))]">Portfolio</span>
                  </span>
                  <span className="text-[rgb(var(--accent))] font-bold">priyaranjan.dev</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Working Clean Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] space-y-6 shadow-sm"
            >
              <div>
                <label htmlFor="name" className="block text-xs font-mono uppercase text-[rgb(var(--fg-muted))] mb-2 font-semibold">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Linus Torvalds"
                  className="w-full px-4 py-3 rounded-xl bg-[rgb(var(--bg-primary))] border border-[rgb(var(--border))] focus:border-[rgb(var(--accent))] text-sm text-[rgb(var(--fg-primary))] placeholder-[rgb(var(--fg-muted))]/60 focus:outline-none transition-colors"
                  disabled={status === 'sending'}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase text-[rgb(var(--fg-muted))] mb-2 font-semibold">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. linus@kernel.org"
                  className="w-full px-4 py-3 rounded-xl bg-[rgb(var(--bg-primary))] border border-[rgb(var(--border))] focus:border-[rgb(var(--accent))] text-sm text-[rgb(var(--fg-primary))] placeholder-[rgb(var(--fg-muted))]/60 focus:outline-none transition-colors"
                  disabled={status === 'sending'}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase text-[rgb(var(--fg-muted))] mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, internship role, or question..."
                  className="w-full px-4 py-3 rounded-xl bg-[rgb(var(--bg-primary))] border border-[rgb(var(--border))] focus:border-[rgb(var(--accent))] text-sm text-[rgb(var(--fg-primary))] placeholder-[rgb(var(--fg-muted))]/60 focus:outline-none transition-colors resize-y"
                  disabled={status === 'sending'}
                />
              </div>

              {/* Status Notice */}
              <AnimatePresence>
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-3.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-500 dark:text-amber-400 text-xs font-mono flex items-center gap-2"
                  >
                    <AlertCircle size={14} className="shrink-0" />
                    <span>{errorMessage || 'Something went wrong. Please verify your fields.'}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── SECTION 33: STATEFUL BUTTON INTERACTION ───── */}
              {/* Button transforms: SEND MESSAGE → SENDING → MESSAGE SENT / TRY AGAIN */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full py-4 px-6 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 ${
                  status === 'success'
                    ? 'bg-emerald-600 text-white'
                    : status === 'error'
                    ? 'bg-[rgb(var(--bg-tertiary))] text-amber-400 border border-amber-400/40 hover:bg-[#262A2F]'
                    : status === 'sending'
                    ? 'btn-solid-accent opacity-70 cursor-wait'
                    : 'btn-solid-accent shadow-sm'
                }`}
              >
                {status === 'sending' && (
                  <>
                    <Clock size={14} className="animate-spin" />
                    <span>SENDING...</span>
                  </>
                )}

                {status === 'success' && (
                  <>
                    <CheckCircle2 size={15} />
                    <span>MESSAGE SENT</span>
                  </>
                )}

                {status === 'error' && (
                  <>
                    <AlertCircle size={14} />
                    <span>TRY AGAIN</span>
                  </>
                )}

                {status === 'idle' && (
                  <>
                    <span>SEND MESSAGE</span>
                    <ArrowRight size={13} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
