'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { SiteSettings, CoreState, ThemeMode, AccentPalette, FontSystem, MotionLevel, ThreeDQuality, CursorMode, InterfaceDensity } from '@/types';
import { defaultSettings } from '@/data/settings';

interface SettingsState extends SiteSettings {
  // 3D Core state
  coreState: CoreState;
  setCoreState: (state: CoreState) => void;

  // UI state
  commandPaletteOpen: boolean;
  setCommandPaletteOpen: (open: boolean) => void;
  settingsPanelOpen: boolean;
  setSettingsPanelOpen: (open: boolean) => void;
  devModeActive: boolean;
  setDevModeActive: (active: boolean) => void;
  recruiterMode: boolean;
  setRecruiterMode: (active: boolean) => void;
  architectureModalSlug: string | null;
  setArchitectureModalSlug: (slug: string | null) => void;
  openArchitectureModal: (slug: string) => void;
  closeArchitectureModal: () => void;
  mindScanActive: boolean;
  setMindScanActive: (active: boolean) => void;
  preloaderDone: boolean;
  setPreloaderDone: (done: boolean) => void;
  isNavigating: boolean;
  setIsNavigating: (nav: boolean) => void;

  // Settings setters
  setTheme: (theme: ThemeMode) => void;
  setAccent: (accent: AccentPalette) => void;
  setFont: (font: FontSystem) => void;
  setMotion: (motion: MotionLevel) => void;
  setThreeD: (quality: ThreeDQuality) => void;
  setGrain: (grain: boolean) => void;
  setCursor: (cursor: CursorMode) => void;
  setDensity: (density: InterfaceDensity) => void;
  setSound: (sound: boolean) => void;
  resetSettings: () => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      // Defaults
      ...defaultSettings,

      // Core state
      coreState: 'neural' as CoreState,
      setCoreState: (coreState) => set({ coreState }),

      // UI state (non-persisted via partialize)
      commandPaletteOpen: false,
      setCommandPaletteOpen: (commandPaletteOpen) => set({ commandPaletteOpen }),
      settingsPanelOpen: false,
      setSettingsPanelOpen: (settingsPanelOpen) => set({ settingsPanelOpen }),
      devModeActive: false,
      setDevModeActive: (devModeActive) => set({ devModeActive }),
      recruiterMode: false,
      setRecruiterMode: (recruiterMode) => set({ recruiterMode }),
      architectureModalSlug: null,
      setArchitectureModalSlug: (architectureModalSlug) => set({ architectureModalSlug }),
      openArchitectureModal: (slug) => set({ architectureModalSlug: slug }),
      closeArchitectureModal: () => set({ architectureModalSlug: null }),
      mindScanActive: false,
      setMindScanActive: (mindScanActive) => set({ mindScanActive }),
      preloaderDone: false,
      setPreloaderDone: (preloaderDone) => set({ preloaderDone }),
      isNavigating: false,
      setIsNavigating: (isNavigating) => set({ isNavigating }),

      // Settings setters
      setTheme: (theme) => set({ theme }),
      setAccent: (accent) => set({ accent }),
      setFont: (font) => set({ font }),
      setMotion: (motion) => set({ motion }),
      setThreeD: (threeD) => set({ threeD }),
      setGrain: (grain) => set({ grain }),
      setCursor: (cursor) => set({ cursor }),
      setDensity: (density) => set({ density }),
      setSound: (sound) => set({ sound }),
      resetSettings: () => set({ ...defaultSettings }),
    }),
    {
      name: 'priya-portfolio-settings',
      partialize: (state) => ({
        theme: state.theme,
        accent: state.accent,
        font: state.font,
        motion: state.motion,
        threeD: state.threeD,
        grain: state.grain,
        cursor: state.cursor,
        density: state.density,
        sound: state.sound,
      }),
    }
  )
);
