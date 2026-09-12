'use client';

import { useEffect } from 'react';
import { useSettingsStore } from '@/stores/settings-store';
import { themeTokens, accentTokens } from '@/data/settings';

/**
 * Applies theme tokens to the document as CSS custom properties.
 * Runs reactively whenever theme/accent/font/motion/grain/density changes.
 */
export function useThemeEngine() {
  const { theme, accent, font, motion, grain, density } = useSettingsStore();

  useEffect(() => {
    const root = document.documentElement;

    // Apply theme tokens
    const tokens = themeTokens[theme as keyof typeof themeTokens] || themeTokens.dark;
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
