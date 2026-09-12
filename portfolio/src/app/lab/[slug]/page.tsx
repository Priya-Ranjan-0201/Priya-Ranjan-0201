'use client';

import { useState, useRef, useEffect } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Play,
  RotateCcw,
  Code2,
  Terminal,
  CheckCircle2,
  Sliders,
  Copy,
  Check,
} from 'lucide-react';
import { experiments, getExperimentBySlug } from '@/data/lab';
import { playSound } from '@/lib/sound';

export default function LabExperimentSandbox() {
  const params = useParams();
  const slug = params.slug as string;
  const exp = getExperimentBySlug(slug);

  if (!exp) {
    notFound();
  }

  const currentIndex = experiments.findIndex((e) => e.slug === slug);
  const prevExp = experiments[(currentIndex - 1 + experiments.length) % experiments.length];
  const nextExp = experiments[(currentIndex + 1) % experiments.length];

  // Dynamic slider state mapped to controls
  const [controlValues, setControlValues] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    (exp.controls || []).forEach((c) => {
      initial[c.id] = c.defaultVal;
    });
    return initial;
  });

  const [copiedCode, setCopiedCode] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleSliderChange = (id: string, val: number) => {
    setControlValues((prev) => ({ ...prev, [id]: val }));
  };

  const handleReset = () => {
    playSound('click');
    const resetVals: Record<string, number> = {};
    (exp.controls || []).forEach((c) => {
      resetVals[c.id] = c.defaultVal;
    });
    setControlValues(resetVals);
  };

  const handleCopy = () => {
    playSound('click');
    navigator.clipboard.writeText(exp.codeSnippet || '');
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Interactive Live Canvas Loop using current control values
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 900);
    let height = (canvas.height = 500);

    const onResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 500;
    };
    window.addEventListener('resize', onResize);

    const count = controlValues['particleCount'] || controlValues['bodyCount'] || 120;
    const particles = Array.from({ length: Math.floor(count) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      radius: Math.random() * 2.5 + 1.5,
      color: Math.random() > 0.5 ? '#00f0ff' : '#a855f7',
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
      t += (controlValues['speed'] || 0.8) * 0.02;
      ctx.fillStyle = 'rgba(7, 9, 14, 0.28)';
      ctx.fillRect(0, 0, width, height);

      if (slug === 'particle-field') {
        const gravity = controlValues['gravity'] || 0.8;
        const friction = controlValues['friction'] || 0.94;

        particles.forEach((p) => {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const force = ((150 - dist) / 150) * gravity;
            p.vx -= (dx / dist) * force * 1.5;
            p.vy -= (dy / dist) * force * 1.5;
          }

          p.x += p.vx;
          p.y += p.vy;
          p.vx *= friction;
          p.vy *= friction;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.fill();
        });

        // Connections
        ctx.lineWidth = 0.5;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 70) {
              ctx.strokeStyle = `rgba(0, 240, 255, ${(1 - d / 70) * 0.4})`;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      } else if (slug === 'type-distortion') {
        const radius = controlValues['distortionRadius'] || 110;
        const elasticity = controlValues['elasticity'] || 0.12;

        ctx.save();
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const words = ['PRIYA RANJAN', 'SYSTEMS // CORE', 'TYPE DISTORTION'];
        words.forEach((lineText, lineIdx) => {
          const baseY = height / 2 - 60 + lineIdx * 60;
          const fontSize = lineIdx === 0 ? 44 : lineIdx === 1 ? 28 : 20;
          ctx.font = `800 ${fontSize}px monospace`;

          const chars = lineText.split('');
          const totalWidth = chars.length * (fontSize * 0.65);
          const startX = width / 2 - totalWidth / 2;

          chars.forEach((ch, cIdx) => {
            const charX = startX + cIdx * (fontSize * 0.65);
            const charY = baseY;

            const dx = mouseX - charX;
            const dy = mouseY - charY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            let offsetX = 0;
            let offsetY = 0;

            if (dist < radius) {
              const factor = (1 - dist / radius) * (radius * elasticity * 0.8);
              offsetX = -(dx / (dist || 1)) * factor;
              offsetY = -(dy / (dist || 1)) * factor;
            }

            // Subtle chromatic aberration
            if (dist < radius) {
              ctx.fillStyle = 'rgba(244, 63, 94, 0.7)';
              ctx.fillText(ch, charX + offsetX - 3, charY + offsetY);
              ctx.fillStyle = 'rgba(0, 240, 255, 0.7)';
              ctx.fillText(ch, charX + offsetX + 3, charY + offsetY);
            }

            ctx.fillStyle = '#ffffff';
            ctx.fillText(ch, charX + offsetX, charY + offsetY);
          });
        });

        // Interactive cursor proximity ring
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.2)';
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
      } else if (slug === 'security-grid') {
        const strictness = controlValues['firewallStrictness'] || 3;
        const rate = controlValues['packetRate'] || 12;
        const threatRatio = controlValues['threatRatio'] || 0.35;

        // Draw network grid lines
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = 1;
        const gridSize = 40;
        for (let x = 0; x < width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
        for (let y = 0; y < height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }

        // Firewall Barrier in Center
        const fwX = width * 0.5;
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.4)';
        ctx.lineWidth = 2;
        ctx.setLineDash([8, 6]);
        ctx.beginPath();
        ctx.moveTo(fwX, 30);
        ctx.lineTo(fwX, height - 30);
        ctx.stroke();
        ctx.setLineDash([]);

        // Firewall Node Points
        for (let y = 60; y < height - 30; y += 70) {
          ctx.beginPath();
          ctx.arc(fwX, y, 6, 0, Math.PI * 2);
          ctx.fillStyle = '#00f0ff';
          ctx.shadowBlur = 12;
          ctx.shadowColor = '#00f0ff';
          ctx.fill();
        }

        // Stream of traversing packets
        const packetCount = Math.floor(rate * 2);
        for (let i = 0; i < packetCount; i++) {
          const pSeed = (t * 120 + i * 85) % (width + 100) - 50;
          const pY = (Math.sin(i * 13) * 0.5 + 0.5) * (height - 120) + 60;
          const isThreat = (i % 5) / 5 < threatRatio;

          // If threat and crosses firewall, drop it with shockwave
          if (isThreat && pSeed > fwX - 10 && pSeed < fwX + 30) {
            ctx.beginPath();
            ctx.arc(fwX, pY, 14, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(244, 63, 94, 0.8)';
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.fillStyle = '#f43f5e';
            ctx.font = '10px monospace';
            ctx.fillText('BLOCKED', fwX + 15, pY);
            continue;
          }

          ctx.beginPath();
          ctx.arc(pSeed, pY, isThreat ? 4 : 3, 0, Math.PI * 2);
          ctx.fillStyle = isThreat ? '#f43f5e' : '#00f0ff';
          ctx.shadowBlur = 8;
          ctx.shadowColor = isThreat ? '#f43f5e' : '#00f0ff';
          ctx.fill();

          // Packet vector trail
          ctx.strokeStyle = isThreat ? 'rgba(244, 63, 94, 0.3)' : 'rgba(0, 240, 255, 0.3)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(pSeed - 12, pY);
          ctx.lineTo(pSeed, pY);
          ctx.stroke();
        }

        // Mouse inspection probe
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 45, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.5)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.font = '11px monospace';
        ctx.fillStyle = '#10b981';
        ctx.fillText(`PROBE: 0x${Math.floor(t * 1000).toString(16).toUpperCase()}`, mouseX + 12, mouseY - 12);
      } else if (slug === 'gravity-field') {
        const cx = width / 2;
        const cy = height / 2;
        const centralMass = controlValues['centralMass'] || 2000;
        const bodyCount = Math.floor(controlValues['bodyCount'] || 8);

        // Center star
        ctx.beginPath();
        ctx.arc(cx, cy, 22, 0, Math.PI * 2);
        ctx.fillStyle = '#00f0ff';
        ctx.shadowBlur = 30;
        ctx.shadowColor = '#00f0ff';
        ctx.fill();

        for (let i = 0; i < bodyCount; i++) {
          const orbitR = 70 + i * 26;
          const angle = t * (0.8 / (i + 1)) + i;
          const sx = cx + Math.cos(angle) * orbitR;
          const sy = cy + Math.sin(angle) * (orbitR * 0.6);

          ctx.beginPath();
          ctx.ellipse(cx, cy, orbitR, orbitR * 0.6, 0, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(sx, sy, 5, 0, Math.PI * 2);
          ctx.fillStyle = i % 2 === 0 ? '#38bdf8' : '#e879f9';
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#38bdf8';
          ctx.fill();
        }
      } else if (slug === 'shader-room') {
        const freq = controlValues['frequency'] || 0.018;
        const amp = controlValues['amplitude'] || 65;

        for (let layer = 0; layer < 6; layer++) {
          ctx.beginPath();
          ctx.strokeStyle = `hsl(${(layer * 35 + t * 25) % 360}, 85%, 60%)`;
          ctx.lineWidth = 1.8;
          for (let x = 0; x < width; x += 6) {
            const y = height / 2 +
              Math.sin(x * freq + t + layer) * amp +
              Math.cos(x * freq * 1.6 - t * 0.7) * (amp * 0.5);
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      } else {
        // Fallback for AI Visualizer
        ctx.font = '14px monospace';
        ctx.fillStyle = '#00f0ff';
        ctx.fillText(`SIMULATING LIVE NEURAL ACTIVATION: ${slug.toUpperCase()}`, 30, 40);

        const nodes = 8;
        for (let i = 0; i < nodes; i++) {
          const nx = 120 + i * 80;
          const ny = height / 2 + Math.sin(t * 3 + i) * 50;
          ctx.beginPath();
          ctx.arc(nx, ny, 10, 0, Math.PI * 2);
          ctx.fillStyle = i % 2 === 0 ? '#00f0ff' : '#a855f7';
          ctx.shadowBlur = 15;
          ctx.shadowColor = ctx.fillStyle;
          ctx.fill();

          if (i > 0) {
            const prevX = 120 + (i - 1) * 80;
            const prevY = height / 2 + Math.sin(t * 3 + i - 1) * 50;
            ctx.beginPath();
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(nx, ny);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', onResize);
      canvas.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [slug, controlValues]);

  return (
    <div className="lab-sandbox-root">
      <section className="sandbox-section">
        <div className="sandbox-container">
          {/* Breadcrumb Row */}
          <div className="sandbox-breadcrumb-row">
            <Link
              href="/lab"
              className="back-link"
              onClick={() => playSound('click')}
            >
              <ArrowLeft size={14} />
              <span>/ LAB / {exp.slug.toUpperCase()}</span>
            </Link>

            <div className="sandbox-meta-badge">
              <span className="sandbox-status-tag">{exp.status.toUpperCase()}</span>
              <span className="sandbox-index">
                0{currentIndex + 1} / 0{experiments.length}
              </span>
            </div>
          </div>

          {/* Sandbox Hero Header */}
          <div className="sandbox-hero-header">
            <div className="hero-eyebrow">
              <Sparkles size={13} className="text-cyan-400 inline mr-1" />
              <span>EXPERIMENT SPECIFICATION &bull; {exp.category.toUpperCase()}</span>
            </div>

            <h1 className="sandbox-main-title">{exp.title}</h1>
            <p className="sandbox-lead-desc">{exp.description}</p>
          </div>

          {/* ── INTERACTIVE EXPERIMENT STAGE & CONTROLS LAYOUT ── */}
          <div className="sandbox-stage-layout">
            {/* Left: Live Canvas Stage */}
            <div className="sandbox-canvas-panel">
              <div className="canvas-header-bar">
                <div className="canvas-info-left">
                  <span className="canvas-live-indicator" />
                  <span className="canvas-title">REAL-TIME EXECUTION CANVAS</span>
                </div>
                <button onClick={handleReset} className="btn-canvas-reset" title="Reset Sliders">
                  <RotateCcw size={13} />
                  <span>Reset Default</span>
                </button>
              </div>

              <div className="sandbox-canvas-wrap">
                <canvas ref={canvasRef} className="sandbox-canvas" />
              </div>
            </div>

            {/* Right: Parameter Sliders Panel */}
            <div className="sandbox-controls-panel">
              <div className="controls-panel-header">
                <Sliders size={16} className="text-cyan-400" />
                <h3 className="controls-title">RUNTIME PARAMETERS</h3>
              </div>

              <div className="sliders-list">
                {exp.controls?.map((control) => (
                  <div key={control.id} className="slider-item-group">
                    <div className="slider-label-row">
                      <span className="slider-label">{control.label}</span>
                      <span className="slider-current-val">
                        {controlValues[control.id] ?? control.defaultVal}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={control.min}
                      max={control.max}
                      step={control.step}
                      value={controlValues[control.id] ?? control.defaultVal}
                      onChange={(e) =>
                        handleSliderChange(control.id, parseFloat(e.target.value))
                      }
                      className="sandbox-range-input"
                    />
                  </div>
                ))}
              </div>

              <div className="controls-hint-box">
                <p>
                  Parameters immediately reconfigure active vectors without restarting the animation frame loop.
                </p>
              </div>
            </div>
          </div>

          {/* ── TECHNICAL EXPLANATION & ARCHITECTURE GRID ── */}
          <div className="sandbox-narrative-grid">
            {/* Why it Exists */}
            <div className="narrative-card">
              <span className="narrative-eyebrow">RESEARCH MOTIVATION</span>
              <h3 className="narrative-heading">Why This Experiment Exists</h3>
              <p className="narrative-body">{exp.whyExists}</p>
            </div>

            {/* Key Technical Learning */}
            <div className="narrative-card">
              <span className="narrative-eyebrow">EMPIRICAL TAKEAWAY</span>
              <h3 className="narrative-heading">Key Technical Insight</h3>
              <p className="narrative-body">{exp.keyLearning}</p>
            </div>
          </div>

          {/* ── SOURCE CODE VIEWER ── */}
          <div className="sandbox-code-viewer">
            <div className="code-viewer-header">
              <div className="code-header-left">
                <Terminal size={14} className="text-cyan-400" />
                <span className="code-filename">core_simulation_loop.ts</span>
              </div>
              <button onClick={handleCopy} className="btn-copy-code">
                {copiedCode ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copiedCode ? 'Copied to Clipboard' : 'Copy Code'}</span>
              </button>
            </div>

            <pre className="code-viewer-pre">
              <code>{exp.codeSnippet || '// No code snippet provided.'}</code>
            </pre>
          </div>

          {/* ── FOOTER NAVIGATION: PREV / INDEX / NEXT ── */}
          <div className="sandbox-footer-nav">
            <Link
              href={`/lab/${prevExp.slug}`}
              className="sandbox-nav-btn prev"
              onClick={() => playSound('click')}
            >
              <ArrowLeft size={14} />
              <div>
                <span className="nav-sub">PREVIOUS EXPERIMENT</span>
                <span className="nav-title">{prevExp.title}</span>
              </div>
            </Link>

            <Link
              href="/lab"
              className="sandbox-nav-index"
              onClick={() => playSound('click')}
            >
              <span>LABORATORY INDEX</span>
            </Link>

            <Link
              href={`/lab/${nextExp.slug}`}
              className="sandbox-nav-btn next"
              onClick={() => playSound('click')}
            >
              <div>
                <span className="nav-sub">NEXT EXPERIMENT</span>
                <span className="nav-title">{nextExp.title}</span>
              </div>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
