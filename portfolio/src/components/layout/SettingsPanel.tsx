'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Sliders } from 'lucide-react';
import { useSettingsStore } from '@/stores/settings-store';
import type { ThemeMode, AccentPalette, FontSystem, MotionLevel, ThreeDQuality } from '@/types';

export default function SettingsPanel() {
  const {
    settingsPanelOpen, setSettingsPanelOpen,
    theme, setTheme,
    accent, setAccent,
    font, setFont,
    motion: motionLevel, setMotion,
    threeD, setThreeD,
    grain, setGrain,
    cursor, setCursor,
    sound, setSound,
    resetSettings,
  } = useSettingsStore();

  const themes: { value: ThemeMode; label: string }[] = [
    { value: 'dark', label: 'Dark' },
    { value: 'light', label: 'Light' },
    { value: 'mono', label: 'Mono' },
    { value: 'midnight', label: 'Midnight' },
  ];

  // 8 accent color swatches matching Panel 03
  const accentSwatches = [
    { value: 'arctic' as AccentPalette, color: '#00f0ff', label: 'Cyan' },
    { value: 'ember' as AccentPalette, color: '#ff4d4d', label: 'Coral' },
    { value: 'copper' as AccentPalette, color: '#ffffff', label: 'White' },
    { value: 'ocean' as AccentPalette, color: '#38b6e1', label: 'Sky' },
    { value: 'violet' as AccentPalette, color: '#a855f7', label: 'Purple' },
    { value: 'sage' as AccentPalette, color: '#ec4899', label: 'Magenta' },
    { value: 'violet' as AccentPalette, color: '#8b5cf6', label: 'Violet' },
    { value: 'sage' as AccentPalette, color: '#22c55e', label: 'Green' },
  ];

  const fonts: { value: FontSystem; label: string }[] = [
    { value: 'modern-sans', label: 'Inter' },
    { value: 'neo-grotesk', label: 'Neue' },
    { value: 'editorial-serif', label: 'Playfair' },
    { value: 'elegant-serif', label: 'Space Grotesk' },
    { value: 'technical-mono', label: 'JetBrains' },
  ];

  const motions: { value: MotionLevel; label: string }[] = [
    { value: 'calm', label: 'Cyber' },
    { value: 'balanced', label: 'Balanced' },
    { value: 'cinematic', label: 'Cinematic' },
  ];

  const qualities: { value: ThreeDQuality; label: string }[] = [
    { value: 'minimal', label: 'Minimal' },
    { value: 'reduced', label: 'Reduced' },
    { value: 'full', label: 'Full' },
  ];

  return (
    <AnimatePresence>
      {settingsPanelOpen && (
        <div className="settings-wrapper">
          <motion.div
            className="settings-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSettingsPanelOpen(false)}
          />

          <motion.div
            className="settings-card"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-label="Experience Settings"
          >
            {/* Header */}
            <div className="settings-header">
              <div className="settings-title-group">
                <div className="title-row">
                  <Sliders size={16} className="title-icon" />
                  <h2 className="title-text">Experience Settings</h2>
                </div>
                <p className="subtitle-text">Make this experience yours.</p>
              </div>
              <button
                onClick={() => setSettingsPanelOpen(false)}
                className="close-btn"
                aria-label="Close settings"
              >
                <X size={16} />
              </button>
            </div>

            <div className="settings-body">
              {/* Theme */}
              <div className="setting-section">
                <span className="section-label">Theme</span>
                <div className="button-group-4">
                  {themes.map((t) => (
                    <button
                      key={t.value}
                      className={`pill-btn ${theme === t.value ? 'active' : ''}`}
                      onClick={() => setTheme(t.value)}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Accent Color */}
              <div className="setting-section">
                <span className="section-label">Accent Color</span>
                <div className="swatches-row">
                  {accentSwatches.map((s, idx) => (
                    <button
                      key={idx}
                      className={`swatch-btn ${accent === s.value && idx === 0 ? 'active' : ''}`}
                      style={{ backgroundColor: s.color }}
                      onClick={() => setAccent(s.value)}
                      title={s.label}
                      aria-label={s.label}
                    />
                  ))}
                </div>
              </div>

              {/* Typography */}
              <div className="setting-section">
                <span className="section-label">Typography</span>
                <div className="button-group-5">
                  {fonts.map((f) => (
                    <button
                      key={f.value}
                      className={`pill-btn ${font === f.value ? 'active' : ''}`}
                      onClick={() => setFont(f.value)}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Motion */}
              <div className="setting-section">
                <span className="section-label">Motion</span>
                <div className="button-group-3">
                  {motions.map((m) => (
                    <button
                      key={m.value}
                      className={`pill-btn ${motionLevel === m.value ? 'active' : ''}`}
                      onClick={() => setMotion(m.value)}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3D Quality */}
              <div className="setting-section">
                <span className="section-label">3D Quality</span>
                <div className="button-group-3">
                  {qualities.map((q) => (
                    <button
                      key={q.value}
                      className={`pill-btn ${threeD === q.value ? 'active' : ''}`}
                      onClick={() => setThreeD(q.value)}
                    >
                      {q.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Toggles */}
              <div className="toggles-section">
                {/* Grain Effect */}
                <div className="toggle-row">
                  <span className="toggle-label">Grain Effect</span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={grain}
                    className={`switch-track ${grain ? 'on' : ''}`}
                    onClick={() => setGrain(!grain)}
                  >
                    <span className="switch-thumb" />
                  </button>
                </div>

                {/* Custom Cursor */}
                <div className="toggle-row">
                  <span className="toggle-label">Custom Cursor</span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={cursor !== 'classic'}
                    className={`switch-track ${cursor !== 'classic' ? 'on' : ''}`}
                    onClick={() => setCursor(cursor === 'classic' ? 'magnetic' : 'classic')}
                  >
                    <span className="switch-thumb" />
                  </button>
                </div>

                {/* Ambient Sound */}
                <div className="toggle-row">
                  <span className="toggle-label">Ambient Sound</span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={sound}
                    className={`switch-track ${sound ? 'on' : ''}`}
                    onClick={() => setSound(!sound)}
                  >
                    <span className="switch-thumb" />
                  </button>
                </div>
              </div>
            </div>

            {/* Footer actions */}
            <div className="settings-footer">
              <button
                type="button"
                onClick={resetSettings}
                className="reset-btn"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => setSettingsPanelOpen(false)}
                className="save-btn"
              >
                Save Preferences
              </button>
            </div>
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
