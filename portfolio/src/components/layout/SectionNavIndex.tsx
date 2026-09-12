'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { sound } from '@/lib/sound';
import { useSettingsStore } from '@/stores/settings-store';

interface Section {
  id: string;
  number: string;
  name: string;
  badge: string;
}

const SECTIONS: Section[] = [
  { id: 'hero', number: '01', name: 'ENTRY // HERO', badge: 'IDENTITY' },
  { id: 'how-i-think', number: '02', name: 'HOW I THINK', badge: 'METHODOLOGY' },
  { id: 'selected-work', number: '03', name: 'SELECTED WORK', badge: 'ARCHIVE' },
  { id: 'now', number: '04', name: 'CURRENT FOCUS', badge: 'NOW STATUS' },
  { id: 'lab-teaser', number: '05', name: 'THE LAB', badge: 'EXPERIMENTS' },
  { id: 'github-telemetry', number: '06', name: 'OPEN SOURCE', badge: 'REPOSITORIES' },
  { id: 'convergence', number: '07', name: 'CONVERGENCE', badge: 'CONTACT' },
];

export default function SectionNavIndex() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const soundEnabled = useSettingsStore((s) => s.sound);
  const architectureModalSlug = useSettingsStore((s) => s.architectureModalSlug);
  const commandPaletteOpen = useSettingsStore((s) => s.commandPaletteOpen);
  const settingsPanelOpen = useSettingsStore((s) => s.settingsPanelOpen);
  const mindScanActive = useSettingsStore((s) => s.mindScanActive);

  const isModalActive = Boolean(
    architectureModalSlug || commandPaletteOpen || settingsPanelOpen || mindScanActive
  );

  // Only show on home page when no modals are active
  const isHome = pathname === '/';

  useEffect(() => {
    if (!isHome || isModalActive) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = SECTIONS[i];
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome, isModalActive]);

  if (!isHome || isModalActive) return null;

  const scrollTo = (id: string) => {
    if (soundEnabled) sound.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-label="Section Navigation Index"
      className="fixed left-3 xl:left-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center select-none pointer-events-auto"
    >
      <div className="flex flex-col items-center gap-2.5 py-4 px-2 rounded-full bg-[#06080f]/90 border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
        {/* Top telemetry icon */}
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00f0ff] mb-1" />

        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <div
              key={sec.id}
              className="relative group flex items-center justify-center"
              onMouseEnter={() => {
                setHoveredSection(sec.id);
                if (soundEnabled) sound.playHover(650);
              }}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <button
                onClick={() => scrollTo(sec.id)}
                aria-label={`Scroll to section ${sec.name}`}
                className="relative z-10 flex items-center justify-center p-1 cursor-pointer transition-all duration-300"
              >
                {isActive ? (
                  <span className="w-2 h-5 rounded-full bg-cyan-400 shadow-[0_0_12px_#00f0ff] block transition-all" />
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-white/25 group-hover:bg-cyan-400/90 group-hover:scale-125 block transition-all" />
                )}
              </button>

              {/* Tooltip on Hover */}
              {hoveredSection === sec.id && (
                <div className="absolute left-full ml-3 px-3 py-1.5 rounded-xl bg-[#080b14]/95 border border-cyan-400/40 shadow-[0_10px_30px_rgba(0,0,0,0.85)] text-xs font-mono whitespace-nowrap z-50 pointer-events-none animate-in fade-in slide-in-from-left-2 duration-150 backdrop-blur-xl">
                  <div className="text-[9px] text-cyan-400 font-bold tracking-widest uppercase mb-0.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{sec.number} // {sec.badge}</span>
                  </div>
                  <div className="text-zinc-100 text-[11px] font-semibold">{sec.name}</div>
                </div>
              )}
            </div>
          );
        })}

        {/* Bottom micro indicator */}
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 mt-1" />
      </div>
    </aside>
  );
}
