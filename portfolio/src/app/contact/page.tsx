'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Send,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Copy,
  Check,
  FileText,
  AlertCircle,
  Terminal,
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
    playSound('click');
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    playSound('click');

    // Validation
    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus('error');
      setErrorMessage('Please enter a message of at least 10 characters.');
      return;
    }

    setStatus('sending');

    try {
      // Prefill and open native email client with the message payload
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`, '_blank');

      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus('success');
      playSound('scan');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
      setErrorMessage('Transmission failed. Please use direct email link.');
    }
  };

  return (
    <div className="contact-root">
      {/* ── 01. CONTACT DESTINATION HERO ─────────────────── */}
      <section className="contact-hero-section">
        <div className="contact-container">
          <div className="contact-editorial-layout">
            {/* Left Column: Philosophical Closing Narrative */}
            <div className="contact-left-col">
              <div className="contact-eyebrow">
                <Sparkles size={13} className="text-cyan-400 inline mr-1" />
                <span>GET IN TOUCH &bull; OPEN COMMUNICATION</span>
              </div>

              <h1 className="contact-main-headline">
                LET&apos;S BUILD<br />
                <span className="text-gradient-cyan">SOMETHING</span><br />
                USEFUL.
              </h1>

              <p className="contact-lead-para">
                I am interested in complex problems, innovative systems engineering, AI research, and high-performance software. Whether you have an open opportunity, an interesting technical dilemma, or want to discuss systems architecture, my inbox is open.
              </p>

              {/* Direct Quick Actions */}
              <div className="contact-quick-actions">
                <button
                  onClick={handleCopyEmail}
                  className="btn-copy-email"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  <span>{copiedEmail ? 'Email Copied!' : profile.email}</span>
                </button>

                <a
                  href={`mailto:${profile.email}`}
                  className="btn-mailto-direct"
                  onClick={() => playSound('click')}
                >
                  <Mail size={14} />
                  <span>Open Mail Client</span>
                </a>
              </div>

              {/* Social Channels Strip */}
              <div className="contact-social-strip">
                <span className="social-strip-label">DIRECT CHANNELS:</span>
                <div className="social-links-row">
                  <a
                    href="https://github.com/Priya-Ranjan-0201"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-chip"
                    onClick={() => playSound('click')}
                  >
                    <GithubIcon size={14} />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/priye-ranjan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-chip"
                    onClick={() => playSound('click')}
                  >
                    <LinkedinIcon size={14} />
                    <span>LinkedIn</span>
                  </a>

                  <Link
                    href="/resume"
                    className="contact-social-chip"
                    onClick={() => playSound('click')}
                  >
                    <FileText size={14} />
                    <span>Resume / CV</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Communication Card */}
            <div className="contact-right-col">
              <div className="terminal-card-wrap">
                <div className="terminal-card-header">
                  <div className="terminal-dots">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                  </div>
                  <div className="terminal-title">
                    <Mail size={12} className="inline mr-1 text-cyan-400" />
                    <span>SEND A MESSAGE</span>
                  </div>
                </div>

                <div className="terminal-body">
                  <AnimatePresence mode="wait">
                    {status === 'success' ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="terminal-success-view"
                      >
                        <div className="success-icon-badge">
                          <CheckCircle2 size={36} className="text-cyan-400" />
                        </div>
                        <h3 className="success-heading">MESSAGE SENT</h3>
                        <p className="success-desc">
                          Thank you for reaching out! Your email client has been prepared, or you can write directly to priye0201@gmail.com. I will reply promptly.
                        </p>
                        <button
                          onClick={() => setStatus('idle')}
                          className="btn-send-another"
                        >
                          <span>Send Another Message</span>
                          <ArrowRight size={13} />
                        </button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="terminal-form">
                        {status === 'error' && (
                          <div className="terminal-error-banner">
                            <AlertCircle size={14} className="text-rose-400 shrink-0" />
                            <span>{errorMessage}</span>
                          </div>
                        )}

                        <div className="form-field-group">
                          <label className="field-label" htmlFor="name">
                            YOUR NAME:
                          </label>
                          <input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => {
                              setFormData({ ...formData, name: e.target.value });
                              if (status === 'error') setStatus('idle');
                            }}
                            className="field-input"
                            required
                          />
                        </div>

                        <div className="form-field-group">
                          <label className="field-label" htmlFor="email">
                            YOUR EMAIL:
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => {
                              setFormData({ ...formData, email: e.target.value });
                              if (status === 'error') setStatus('idle');
                            }}
                            className="field-input"
                            required
                          />
                        </div>

                        <div className="form-field-group">
                          <label className="field-label" htmlFor="message">
                            MESSAGE:
                          </label>
                          <textarea
                            id="message"
                            rows={4}
                            placeholder="Describe your project, question, or collaboration opportunity..."
                            value={formData.message}
                            onChange={(e) => {
                              setFormData({ ...formData, message: e.target.value });
                              if (status === 'error') setStatus('idle');
                            }}
                            className="field-textarea"
                            required
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={status === 'sending'}
                          className="btn-submit-transmission"
                        >
                          <span>{status === 'sending' ? 'PREPARING EMAIL...' : 'SEND MESSAGE'}</span>
                          <Send size={14} />
                        </button>
                      </form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
