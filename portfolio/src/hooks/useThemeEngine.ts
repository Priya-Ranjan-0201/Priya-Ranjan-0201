'use client';

import { useEffect } from 'react';
import { useSettingsStore } from '@/stores/settings-store';
import { themeTokens, accentTokens } from '@/data/settings';

/**
 * Applies theme tokens to the document as CSS custom properties.
 * Runs reactively whenever theme/accent/font/motion/grain/density changes.
 */
export function useThemeEngine() {
  const { theme, accent, font, motion, grain, density, setTheme } = useSettingsStore();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlTheme = params.get('theme');
      if (urlTheme && (urlTheme === 'dark' || urlTheme === 'paper' || urlTheme === 'mono' || urlTheme === 'midnight' || urlTheme === 'light')) {
        setTheme(urlTheme as any);
      }
    }
  }, [setTheme]);

  useEffect(() => {
    const root = document.documentElement;

    // Apply theme tokens
    const tokens = themeTokens[theme as keyof typeof themeTokens] || themeTokens.paper;
    Object.entries(tokens).forEach(([key, value]) => {
      root.style.setProperty(key, value as string);
    });

    // Apply accent tokens
    const accTokens = accentTokens[accent as keyof typeof accentTokens] || accentTokens.ember;
    Object.entries(accTokens).forEach(([key, value]) => {
      root.style.setProperty(key, value as string);
    });

    // Apply data attributes for CSS variant selectors
    root.setAttribute('data-theme', theme);
    root.setAttribute('data-font', font);
    root.setAttribute('data-motion', motion);
    root.setAttribute('data-grain', String(grain));
    root.setAttribute('data-density', density);
  }, [theme, accent, font, motion, grain, density]);
}
