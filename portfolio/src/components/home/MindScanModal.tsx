'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cpu, Shield, Sparkles, Terminal, Layers, ArrowRight, Eye, RefreshCw, Zap } from 'lucide-react';
import Link from 'next/link';
import { mindScanClusters } from '@/data/now';
import { useSettingsStore } from '@/stores/settings-store';
import { sound } from '@/lib/sound';

interface MindScanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MindScanModal({ isOpen, onClose }: MindScanModalProps) {
  const [activeClusterId, setActiveClusterId] = useState<string>('ai-ml');
  const [scanProgress, setScanProgress] = useState(0);
  const [scanningLineY, setScanningLineY] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { sound: soundEnabled, setCoreState } = useSettingsStore();

  const selectedCluster = mindScanClusters.find((c) => c.id === activeClusterId) || mindScanClusters[0];

  // Trigger scan sequence on open
  useEffect(() => {
    if (!isOpen) {
      setScanProgress(0);
      return;
    }

    if (soundEnabled) sound.playScanChime();
    setCoreState('network');

    let current = 0;
    const interval = setInterval(() => {
      current += 2;
      if (current >= 100) {
        setScanProgress(100);
        clearInterval(interval);
      } else {
        setScanProgress(current);
      }
    }, 20);

    return () => {
      clearInterval(interval);
      setCoreState('neural');
    };
  }, [isOpen, soundEnabled, setCoreState]);

  // Scanning laser line animation
  useEffect(() => {
    if (!isOpen) return;
    let animId: number;
    let pos = 0;
    let direction = 1;

    const sweep = () => {
      pos += direction * 2.5;
      if (pos > 100) direction = -1;
      if (pos < 0) direction = 1;
      setScanningLineY(pos);
      animId = requestAnimationFrame(sweep);
    };

    animId = requestAnimationFrame(sweep);
    return () => cancelAnimationFrame(animId);
  }, [isOpen]);

  // Canvas 3D Neural Sphere animation with cluster emphasis
  useEffect(() => {
    if (!isOpen || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let rotationX = 0;
    let rotationY = 0;

    const pointCount = 150;
    const radius = 115;
    const points: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < pointCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / pointCount);
      const theta = Math.sqrt(pointCount * Math.PI) * phi;
      points.push({
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      rotationY += 0.01;
      rotationX += 0.005;

      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);
      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);

      const projected = points.map((p) => {
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        const scale = 320 / (320 + z2);
        return {
          x: cx + x1 * scale,
          y: cy + y2 * scale,
          z: z2,
          scale,
        };
      });

      // Draw connective neural filaments
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projected.length; i += 2) {
        for (let j = i + 1; j < Math.min(i + 8, projected.length); j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 42) {
            const alpha = (1 - dist / 42) * 0.25;
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      projected.forEach((p, idx) => {
        const size = (idx % 5 === 0 ? 3.0 : 1.6) * p.scale;
        const alpha = Math.max(0.15, Math.min(1, (p.z + radius) / (2 * radius)));

        ctx.fillStyle = idx % 3 === 0 ? `rgba(0, 240, 255, ${alpha})` : `rgba(255, 255, 255, ${alpha * 0.8})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [isOpen, activeClusterId]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="mind-scan-overlay" role="dialog" aria-modal="true" aria-label="Mind Scan Diagnostics">
          <motion.div
            className="mind-scan-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="mind-scan-dialog"
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 30 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* HUD Scanning Line */}
            <div
              className="scan-laser-line"
              style={{ top: `${scanningLineY}%` }}
              aria-hidden="true"
            />

            {/* Header */}
            <div className="mind-scan-header">
              <div className="scan-header-left">
                <span className="scan-pill-badge">NEURAL ARCHITECTURE SCAN // V2.0</span>
                <h2 className="scan-dialog-title">Cognitive Knowledge Graph</h2>
              </div>
              <div className="scan-header-right">
                <div className="telemetry-chip">
                  <Zap size={13} className="telemetry-icon" />
                  <span>SYNAPSE_COHERENCE: {scanProgress}%</span>
                </div>
                <button onClick={onClose} className="scan-close-btn" aria-label="Close Mind Scan">
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="mind-scan-grid">
              {/* Left Column: 3D Neural Sphere Canvas */}
              <div className="scan-visual-col">
                <div className="scan-canvas-wrapper">
                  <canvas ref={canvasRef} width={340} height={340} className="neural-canvas" />
                  <div className="scan-canvas-label">
                    <span>ACTIVE_CLUSTER: {selectedCluster.name}</span>
                  </div>
                </div>

                {/* Cluster Selectors */}
                <div className="clusters-selector-pills">
                  {mindScanClusters.map((cluster) => {
                    const isActive = cluster.id === activeClusterId;
                    return (
                      <button
                        key={cluster.id}
                        className={`cluster-pill-btn ${isActive ? 'active' : ''}`}
                        onClick={() => {
                          if (soundEnabled) sound.playClick();
                          setActiveClusterId(cluster.id);
                        }}
                      >
                        <span>{cluster.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Cluster Insights & Linked Projects */}
              <div className="scan-info-col">
                <div className="cluster-header-box">
                  <span className="cluster-tagline">{selectedCluster.tagline}</span>
                  <h3 className="cluster-main-title">{selectedCluster.name}</h3>
                  <p className="cluster-summary-text">{selectedCluster.summary}</p>
                </div>

                {/* Core Philosophy Quote */}
                <div className="cluster-philosophy-quote">
                  <span className="quote-mark">&ldquo;</span>
                  <p>{selectedCluster.philosophy}</p>
                </div>

                {/* Key Architectural Concepts */}
                <div className="cluster-concepts-section">
                  <span className="concepts-header-label">KEY TECHNICAL CONCEPTS:</span>
                  <div className="concept-tags-wrap">
                    {selectedCluster.keyConcepts.map((concept) => (
                      <span key={concept} className="concept-chip">
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Related Real Projects */}
                <div className="cluster-projects-section">
                  <span className="concepts-header-label">PROJECT PROOFS:</span>
                  <div className="cluster-projects-list">
                    {selectedCluster.relatedProjects.map((slug) => (
                      <Link
                        key={slug}
                        href={`/work/${slug}`}
                        onClick={onClose}
                        className="cluster-project-card"
                      >
                        <div>
                          <span className="proj-card-title">{slug.toUpperCase()}</span>
                          <span className="proj-card-sub">Explore System Case Study</span>
                        </div>
                        <ArrowRight size={14} className="proj-card-arrow" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mind-scan-footer">
              <span className="scan-status-text">
                &bull; Click any domain cluster above to inspect architecture and project implementations
              </span>
              <button onClick={onClose} className="scan-exit-btn">
                <span>Resume Journey</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
