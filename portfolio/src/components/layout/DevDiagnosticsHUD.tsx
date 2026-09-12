'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, Activity, Cpu, Monitor, Zap } from 'lucide-react';
import { useSettingsStore } from '@/stores/settings-store';
import { useDeviceCapability } from '@/hooks';

export default function DevDiagnosticsHUD() {
  const { devModeActive, setDevModeActive, theme, font, motion: motionLevel, threeD, coreState } = useSettingsStore();
  const device = useDeviceCapability();

  const [fps, setFps] = useState(60);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const [domNodes, setDomNodes] = useState(0);

  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());

  // Real-time FPS & DOM counter
  useEffect(() => {
    if (!devModeActive) return;

    let animId: number;
    const measure = () => {
      frameCount.current++;
      const now = performance.now();
      const delta = now - lastTime.current;

      if (delta >= 1000) {
        setFps(Math.round((frameCount.current * 1000) / delta));
        frameCount.current = 0;
        lastTime.current = now;
        if (typeof document !== 'undefined') {
          setDomNodes(document.getElementsByTagName('*').length);
        }
      }
      animId = requestAnimationFrame(measure);
    };

    animId = requestAnimationFrame(measure);

    const updateDim = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };
    updateDim();
    window.addEventListener('resize', updateDim);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', updateDim);
    };
  }, [devModeActive]);

  if (!devModeActive) return null;

  return (
    <div className="dev-hud-floating-container" role="region" aria-label="Developer Diagnostics">
      <motion.div
        className="dev-hud-panel"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
      >
        <div className="hud-header-bar">
          <div className="hud-title-group">
            <Terminal size={14} className="hud-accent-icon" />
            <span className="hud-title-text">SYSTEM_DIAGNOSTICS // V2.0</span>
          </div>
          <button
            onClick={() => setDevModeActive(false)}
            className="hud-close-btn"
            aria-label="Close HUD"
          >
            <X size={13} />
          </button>
        </div>

        <div className="hud-grid-metrics">
          {/* FPS Metric */}
          <div className="hud-stat-cell">
            <span className="hud-label">FRAME RATE</span>
            <div className="hud-metric-row">
              <span className={`hud-val ${fps >= 55 ? 'good' : 'warning'}`}>{fps}</span>
              <span className="hud-unit">FPS</span>
            </div>
          </div>

          {/* WebGL Tier */}
          <div className="hud-stat-cell">
            <span className="hud-label">GRAPHICS HARDWARE</span>
            <span className="hud-val-text">{device.webgl ? (device.webgl2 ? 'WebGL 2.0 (Active)' : 'WebGL 1.0') : 'Fallback (2D)'}</span>
          </div>

          {/* Viewport */}
          <div className="hud-stat-cell">
            <span className="hud-label">VIEWPORT RESOLUTION</span>
            <span className="hud-val-mono">{viewport.width} &times; {viewport.height} px ({device.pixelRatio}x DPR)</span>
          </div>

          {/* DOM Count */}
          <div className="hud-stat-cell">
            <span className="hud-label">ACTIVE DOM NODES</span>
            <span className="hud-val-mono">{domNodes} elements</span>
          </div>

          {/* Active Tokens */}
          <div className="hud-stat-cell full-width">
            <span className="hud-label">RUNTIME STATE TOKENS</span>
            <div className="hud-tokens-wrap">
              <span className="hud-token">THEME: {theme.toUpperCase()}</span>
              <span className="hud-token">FONT: {font.toUpperCase()}</span>
              <span className="hud-token">CORE: {coreState.toUpperCase()}</span>
              <span className="hud-token">MOTION: {motionLevel.toUpperCase()}</span>
              <span className="hud-token">3D_MODE: {threeD.toUpperCase()}</span>
            </div>
          </div>
        </div>

        <div className="hud-footer-note">
          <Activity size={11} className="hud-pulse-dot" />
          <span>Real-time browser hardware telemetry stream</span>
        </div>
      </motion.div>
    </div>
  );
}
