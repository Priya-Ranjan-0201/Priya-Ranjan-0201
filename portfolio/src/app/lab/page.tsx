'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Play,
  Maximize2,
  RotateCcw,
  ArrowRight,
  Sliders,
  Terminal,
  Cpu,
  Shield,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { experiments } from '@/data/lab';
import { playSound, sound } from '@/lib/sound';

export default function LabPage() {
  const [activeSlug, setActiveSlug] = useState<string>('particle-field');
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Security Matrix Simulation Nodes
  const [securityNodes, setSecurityNodes] = useState([
    { id: 1, name: 'Auth Gateway', status: 'HEALTHY', latency: '4ms' },
    { id: 2, name: 'AST Evaluator', status: 'HEALTHY', latency: '12ms' },
    { id: 3, name: 'Vector Memory', status: 'HEALTHY', latency: '8ms' },
    { id: 4, name: 'Inference Worker', status: 'HEALTHY', latency: '15ms' },
    { id: 5, name: 'ClickHouse Ledger', status: 'HEALTHY', latency: '6ms' },
  ]);

  const triggerThreat = (nodeId: number) => {
    sound.playScan();
    setSecurityNodes((prev) =>
      prev.map((n) => (n.id === nodeId ? { ...n, status: 'THREAT DETECTED' } : n))
    );
    setTimeout(() => {
      sound.playClick(600);
      setSecurityNodes((prev) =>
        prev.map((n) => (n.id === nodeId ? { ...n, status: 'ISOLATED & QUARANTINED' } : n))
      );
    }, 1200);
  };

  const resetSecurity = () => {
    sound.playClick(800);
    setSecurityNodes((prev) =>
      prev.map((n) => ({ ...n, status: 'HEALTHY' }))
    );
  };

  const activeExp = experiments.find((e) => e.slug === activeSlug) || experiments[0];

  const filteredExperiments = selectedFilter === 'ALL'
    ? experiments
    : experiments.filter((e) => {
        if (selectedFilter === 'SHADERS & PHYSICS') return e.category === 'shader' || e.category === '3d';
        if (selectedFilter === 'SECURITY') return e.category === 'security';
        if (selectedFilter === 'TYPOGRAPHY') return e.category === 'ui';
        if (selectedFilter === 'NEURAL AI') return e.category === 'ai';
        return true;
      });

  // Dynamic canvas simulation loop for the active experiment
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = 450);

    const onResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 450;
    };
    window.addEventListener('resize', onResize);

    // Particle Swarm initialization
    const particles = Array.from({ length: 140 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      radius: Math.random() * 2.5 + 1.5,
      color: Math.random() > 0.4 ? '#00f0ff' : '#a855f7',
    }));

    let mouseX = width / 2;
    let mouseY = height / 2;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    canvas.addEventListener('mousemove', onMouseMove);

    let t = 0;

    const render = () => {
      t += 0.02;
      ctx.fillStyle = 'rgba(8, 10, 16, 0.25)';
      ctx.fillRect(0, 0, width, height);

      if (activeSlug === 'particle-field') {
        // Force Field with Mouse Repulsion & Connective Web
        particles.forEach((p) => {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const force = (130 - dist) / 130;
            p.vx -= (dx / dist) * force * 1.2;
            p.vy -= (dy / dist) * force * 1.2;
          }

          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.96;
          p.vy *= 0.96;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 10;
          ctx.shadowColor = p.color;
          ctx.fill();
        });

        // Network Filaments
        ctx.lineWidth = 0.5;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 65) {
              ctx.strokeStyle = `rgba(0, 240, 255, ${(1 - d / 65) * 0.35})`;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      } else if (activeSlug === 'type-distortion') {
        // Typography Kinetic Wave
        ctx.save();
        ctx.font = '800 42px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const text = 'EXPERIMENTAL KINETICS';
        const wave = Math.sin(t * 1.5) * 24;

        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.fillText(text, width / 2 + wave, height / 2);

        ctx.strokeStyle = '#00f0ff';
        ctx.lineWidth = 1.2;
        ctx.strokeText(text, width / 2 - wave, height / 2 + 6);

        ctx.font = '500 13px monospace';
        ctx.fillStyle = '#a855f7';
        ctx.fillText('MOVE MOUSE OVER CANVAS TO DEFLECT WAVE VECTORS', width / 2, height / 2 + 55);
        ctx.restore();
      } else if (activeSlug === 'gravity-field') {
        // Orbital Gravity
        const cx = width / 2;
        const cy = height / 2;

        // Draw central mass
        ctx.beginPath();
        ctx.arc(cx, cy, 18, 0, Math.PI * 2);
        ctx.fillStyle = '#00f0ff';
        ctx.shadowBlur = 25;
        ctx.shadowColor = '#00f0ff';
        ctx.fill();

        // Satellites
        for (let i = 0; i < 8; i++) {
          const orbitR = 70 + i * 22;
          const angle = t * (0.8 / (i + 1)) + i;
          const sx = cx + Math.cos(angle) * orbitR;
          const sy = cy + Math.sin(angle) * (orbitR * 0.65);

          // Orbit trajectory ring
          ctx.beginPath();
          ctx.ellipse(cx, cy, orbitR, orbitR * 0.65, 0, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
          ctx.lineWidth = 1;
          ctx.stroke();

          // Satellite dot
          ctx.beginPath();
          ctx.arc(sx, sy, 4, 0, Math.PI * 2);
          ctx.fillStyle = i % 2 === 0 ? '#38bdf8' : '#e879f9';
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#38bdf8';
          ctx.fill();
        }
      } else if (activeSlug === 'security-grid') {
        // Threat matrix stream
        ctx.font = '13px monospace';
        ctx.fillStyle = 'rgba(0, 240, 255, 0.7)';
        const cols = 28;
        for (let i = 0; i < cols; i++) {
          const char = String.fromCharCode(0x30a0 + Math.floor(Math.sin(i + t) * 45 + 45));
          const y = (t * 60 + i * 35) % height;
          ctx.fillText(char, (i * width) / cols, y);
        }

        // Firewall node pulse
        ctx.strokeStyle = '#22c55e';
        ctx.lineWidth = 2;
        ctx.strokeRect(width / 2 - 120, height / 2 - 40, 240, 80);
        ctx.fillStyle = '#22c55e';
        ctx.font = '700 12px monospace';
        ctx.fillText('STATEFUL PACKET FILTER: ACTIVE', width / 2 - 100, height / 2 + 5);
      } else if (activeSlug === 'shader-room') {
        // Multi-octave wave
        ctx.lineWidth = 1.5;
        for (let layer = 0; layer < 5; layer++) {
          ctx.beginPath();
          ctx.strokeStyle = `hsl(${(layer * 40 + t * 20) % 360}, 85%, 60%)`;
          for (let x = 0; x < width; x += 6) {
            const y = height / 2 +
              Math.sin(x * 0.015 + t + layer) * 40 +
              Math.cos(x * 0.03 - t * 0.8) * 20;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      } else if (activeSlug === 'ai-visualizer') {
        // Neural network forward propagation
        const layers = [3, 5, 5, 2];
        const layerSpacing = width / (layers.length + 1);

        layers.forEach((nodeCount, lIdx) => {
          const lx = (lIdx + 1) * layerSpacing;
          const nodeSpacing = height / (nodeCount + 1);

          for (let n = 0; n < nodeCount; n++) {
            const ny = (n + 1) * nodeSpacing;
            const pulse = Math.sin(t * 2 + lIdx + n) * 0.5 + 0.5;

            // Connect to next layer
            if (lIdx < layers.length - 1) {
              const nextCount = layers[lIdx + 1];
              const nextSpacing = height / (nextCount + 1);
              for (let m = 0; m < nextCount; m++) {
                const mx = (lIdx + 2) * layerSpacing;
                const my = (m + 1) * nextSpacing;
                ctx.beginPath();
                ctx.moveTo(lx, ny);
                ctx.lineTo(mx, my);
                ctx.strokeStyle = `rgba(0, 240, 255, ${0.1 + pulse * 0.25})`;
                ctx.lineWidth = 0.8;
                ctx.stroke();
              }
            }

            // Draw neuron node
            ctx.beginPath();
            ctx.arc(lx, ny, 7, 0, Math.PI * 2);
            ctx.fillStyle = `hsl(${185 + pulse * 60}, 90%, 55%)`;
            ctx.shadowBlur = 12;
            ctx.shadowColor = '#00f0ff';
            ctx.fill();
          }
        });
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', onResize);
      canvas.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [activeSlug]);

  return (
    <div className="lab-root">
      {/* ── 01. LAB HERO ─────────────────── */}
      <section className="lab-hero-section">
        <div className="lab-container">
          <div className="lab-hero-header">
            <div className="lab-eyebrow">
              <Sparkles size={13} className="text-cyan-400 inline mr-1" />
              <span>THE DIGITAL LAB &bull; 06 REAL INTERACTIVE EXPERIMENTS</span>
            </div>

            <h1 className="lab-main-title">
              EXPERIMENTAL SANDBOX<br />
              <span className="text-gradient-cyan">&amp; PROCEDURAL</span> PLAYGROUND.
            </h1>

            <p className="lab-lead-para">
              Real engineering curiosity extends beyond structured production apps.
              This laboratory houses mathematical simulations, physics algorithms, and graphics experiments built to test the limits of the browser runtime.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="lab-filter-bar">
            <div className="filter-tabs-group">
              {['ALL', 'SHADERS & PHYSICS', 'TYPOGRAPHY', 'SECURITY', 'NEURAL AI'].map((filter) => (
                <button
                  key={filter}
                  className={`tab-btn ${selectedFilter === filter ? 'active' : ''}`}
                  onClick={() => {
                    playSound('click');
                    setSelectedFilter(filter);
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="lab-status-badge">
              <span className="status-live-dot" />
              <span>CANVAS 60FPS SIMULATION ACTIVE</span>
            </div>
          </div>

          {/* ── 02. INTERACTIVE EXPERIMENT STAGE ─────────────────── */}
          <div className="interactive-stage-card">
            <div className="stage-header-row">
              <div className="stage-title-info">
                <span className="stage-live-badge">SIMULATING</span>
                <h3 className="stage-current-title">{activeExp.title.toUpperCase()}</h3>
              </div>

              <div className="stage-header-actions">
                <Link
                  href={`/lab/${activeExp.slug}`}
                  className="btn-deep-sandbox"
                  onClick={() => playSound('click')}
                >
                  <span>Open Full Sandbox</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="stage-canvas-wrapper">
              <canvas ref={canvasRef} className="stage-interactive-canvas" />
            </div>

            {/* Interactive Security Matrix Overlay Panel */}
            {activeSlug === 'security-grid' && (
              <div className="p-6 rounded-2xl bg-black/60 border border-white/10 m-4 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="font-mono text-xs text-zinc-300 font-bold">
                    DISTRIBUTED ZERO-TRUST TELEMETRY FABRIC // NODE MONITOR
                  </span>
                  <button
                    onClick={resetSecurity}
                    className="px-3 py-1.5 rounded-lg border border-white/15 text-xs font-mono text-zinc-300 hover:text-white hover:border-cyan-400 transition-colors flex items-center gap-1.5 bg-white/5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Nodes</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {securityNodes.map((node) => {
                    const isHealthy = node.status === 'HEALTHY';
                    const isThreat = node.status === 'THREAT DETECTED';

                    return (
                      <div
                        key={node.id}
                        className={`p-4 rounded-xl border transition-all ${
                          isThreat
                            ? 'border-rose-500 bg-rose-500/20 text-rose-300 animate-pulse'
                            : !isHealthy
                            ? 'border-amber-500 bg-amber-500/10 text-amber-300'
                            : 'border-white/10 bg-white/[0.02]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-xs font-bold text-white">
                            {node.name}
                          </span>
                          <span className="font-mono text-[10px] text-zinc-400">
                            {node.latency}
                          </span>
                        </div>

                        <div className="font-mono text-[11px] font-semibold mb-3">
                          STATUS: {node.status}
                        </div>

                        <button
                          onClick={() => triggerThreat(node.id)}
                          disabled={!isHealthy}
                          className={`w-full py-1.5 rounded-lg font-mono text-xs transition-colors ${
                            isHealthy
                              ? 'bg-white/10 hover:bg-rose-500 hover:text-white text-zinc-200'
                              : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                          }`}
                        >
                          {isHealthy ? 'Simulate Threat Injection' : 'Quarantined'}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Interactive Kinetic Distortion Hover Panel */}
            {activeSlug === 'type-distortion' && (
              <div className="p-8 rounded-2xl bg-black/50 border border-white/10 m-4 flex flex-col items-center justify-center text-center space-y-6 select-none">
                <div
                  className="text-3xl sm:text-5xl font-black font-mono tracking-tighter uppercase text-white hover:tracking-[0.12em] hover:scale-105 hover:skew-x-6 hover:text-cyan-300 transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => sound.playHover(700)}
                >
                  KINETIC DISTORTION
                </div>
                <div
                  className="text-xl sm:text-2xl font-light tracking-wide text-zinc-400 hover:text-white hover:-skew-y-3 transition-all duration-300 cursor-pointer font-serif"
                  onMouseEnter={() => sound.playHover(550)}
                >
                  &ldquo;Software is malleable light.&rdquo;
                </div>
                <p className="font-mono text-xs text-zinc-500 max-w-md">
                  Hover across text to trigger real-time non-linear vertex shear and kerning displacement.
                </p>
              </div>
            )}

            <div className="stage-footer-meta">
              <div className="meta-left">
                <strong className="text-white/80">Concept: </strong>
                <span className="text-white/60">{activeExp.whyExists}</span>
              </div>
              <div className="meta-right">
                <span className="key-learning-badge">
                  <CheckCircle2 size={12} className="inline mr-1 text-cyan-400" />
                  {activeExp.keyLearning}
                </span>
              </div>
            </div>
          </div>

          {/* ── 03. EXPERIMENT CARDS GRID ─────────────────── */}
          <div className="experiments-catalog-grid">
            {filteredExperiments.map((exp, idx) => {
              const isSelected = activeSlug === exp.slug;
              return (
                <article
                  key={exp.slug}
                  className={`exp-catalog-card ${isSelected ? 'is-active-stage' : ''}`}
                >
                  <div className="exp-card-header">
                    <span className="exp-category-pill">{exp.category.toUpperCase()}</span>
                    <span className="exp-status-tag">{exp.status.toUpperCase()}</span>
                  </div>

                  <h3 className="exp-title-text">{exp.title}</h3>
                  <p className="exp-desc-text">{exp.description}</p>

                  <div className="exp-tags-row">
                    {exp.tags.map((t) => (
                      <span key={t} className="exp-tag-pill">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="exp-card-actions">
                    <button
                      className="btn-preview-stage"
                      onClick={() => {
                        playSound('click');
                        setActiveSlug(exp.slug);
                      }}
                    >
                      <Play size={12} className={isSelected ? 'text-cyan-400' : ''} />
                      <span>{isSelected ? 'Simulating' : 'Preview'}</span>
                    </button>

                    <Link
                      href={`/lab/${exp.slug}`}
                      className="btn-open-experiment"
                      onClick={() => playSound('click')}
                    >
                      <span>Full Sandbox</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
