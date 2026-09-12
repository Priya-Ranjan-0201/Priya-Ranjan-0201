'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import Navigation from '@/components/layout/Navigation';
import CustomCursor from '@/components/layout/CustomCursor';
import ScrollProgress from '@/components/layout/ScrollProgress';
import CommandPalette from '@/components/layout/CommandPalette';
import SettingsPanel from '@/components/layout/SettingsPanel';
import ArchitectureModal from '@/components/layout/ArchitectureModal';
import Footer from '@/components/layout/Footer';
import { useThemeEngine } from '@/hooks/useThemeEngine';
import { useSettingsStore } from '@/stores/settings-store';
import type { CoreState } from '@/types';

// Dynamically import 3D scene to avoid SSR issues
const Scene = dynamic(() => import('@/components/three/Scene'), {
  ssr: false,
  loading: () => <div className="three-canvas-wrapper" />,
});

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  // Apply theme engine
  useThemeEngine();

  const pathname = usePathname();
  const { grain, setCoreState } = useSettingsStore();

  // Synchronize 3D CoreState smoothly on route change
  useEffect(() => {
    let nextState: CoreState = 'neural';
    if (pathname === '/') {
      nextState = 'neural';
    } else if (pathname.startsWith('/about')) {
      nextState = 'orbit';
    } else if (pathname.startsWith('/work')) {
      nextState = 'nodes';
    } else if (pathname.startsWith('/skills')) {
      nextState = 'network';
    } else if (pathname.startsWith('/experience')) {
      nextState = 'journey';
    } else if (pathname.startsWith('/lab')) {
      nextState = 'chaos';
    } else if (pathname.startsWith('/journal')) {
      nextState = 'network';
    } else if (pathname.startsWith('/contact')) {
      nextState = 'convergence';
    } else if (pathname.startsWith('/resume')) {
      nextState = 'resume';
    } else {
      nextState = 'void';
    }
    setCoreState(nextState);
  }, [pathname, setCoreState]);

  // Developer mode easter egg: typing "system" or "developer"
  useEffect(() => {
    let buffer = '';
    const handler = (e: KeyboardEvent) => {
      // Don't capture when typing in form inputs
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      buffer += e.key.toLowerCase();
      if (buffer.length > 9) buffer = buffer.slice(-9);

      if (buffer.endsWith('system') || buffer.endsWith('developer')) {
        useSettingsStore.getState().setDevModeActive(
          !useSettingsStore.getState().devModeActive
        );
        buffer = '';
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      {/* Persistent Subtle 3D Ambient Core */}
      <Scene />

      {/* Optional Subtle Grain */}
      {grain && <div className="grain-overlay" aria-hidden="true" />}

      {/* Global Navigation */}
      <Navigation />

      {/* Clean Scroll Progress Bar */}
      <ScrollProgress />

      {/* Custom Precision Cursor */}
      <CustomCursor />

      {/* Main Page Route Content */}
      <main className="page-above-canvas" id="main-content">
        {children}
      </main>

      {/* Universal Footer */}
      <Footer />

      {/* Global Modals (Command Palette, Settings, Architecture) */}
      <CommandPalette />
      <SettingsPanel />
      <ArchitectureModal />
    </>
  );
}
