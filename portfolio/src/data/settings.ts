import { SiteSettings } from '@/types';

export const defaultSettings: SiteSettings = {
  theme: 'paper',
  accent: 'ember',
  font: 'editorial-serif',
  motion: 'balanced',
  threeD: 'full',
  grain: false,
  cursor: 'magnetic',
  density: 'standard',
  sound: false,
};

export const themeTokens = {
  paper: {
    '--bg-primary': '250, 248, 245',
    '--bg-secondary': '244, 240, 232',
    '--bg-tertiary': '255, 255, 255',
    '--fg-primary': '24, 24, 27',
    '--fg-secondary': '68, 64, 60',
    '--fg-muted': '120, 113, 108',
    '--border': '228, 223, 213',
    '--border-subtle': '238, 235, 227',
  },
  light: {
    '--bg-primary': '250, 248, 245',
    '--bg-secondary': '244, 240, 232',
    '--bg-tertiary': '255, 255, 255',
    '--fg-primary': '24, 24, 27',
    '--fg-secondary': '68, 64, 60',
    '--fg-muted': '120, 113, 108',
    '--border': '228, 223, 213',
    '--border-subtle': '238, 235, 227',
  },
  dark: {
    '--bg-primary': '19, 18, 17',
    '--bg-secondary': '26, 25, 23',
    '--bg-tertiary': '35, 33, 30',
    '--fg-primary': '237, 232, 226',
    '--fg-secondary': '179, 172, 162',
    '--fg-muted': '125, 119, 110',
    '--border': '46, 43, 39',
    '--border-subtle': '36, 33, 30',
  },
  mono: {
    '--bg-primary': '18, 18, 18',
    '--bg-secondary': '26, 26, 26',
    '--bg-tertiary': '34, 34, 34',
    '--fg-primary': '240, 240, 240',
    '--fg-secondary': '170, 170, 170',
    '--fg-muted': '115, 115, 115',
    '--border': '48, 48, 48',
    '--border-subtle': '36, 36, 36',
  },
  midnight: {
    '--bg-primary': '20, 22, 26',
    '--bg-secondary': '28, 30, 36',
    '--bg-tertiary': '36, 38, 46',
    '--fg-primary': '235, 238, 245',
    '--fg-secondary': '175, 180, 195',
    '--fg-muted': '115, 120, 135',
    '--border': '46, 50, 60',
    '--border-subtle': '34, 38, 46',
  },
  obsidian: {
    '--bg-primary': '16, 15, 14',
    '--bg-secondary': '24, 22, 21',
    '--bg-tertiary': '32, 30, 28',
    '--fg-primary': '250, 245, 240',
    '--fg-secondary': '205, 195, 185',
    '--fg-muted': '135, 125, 115',
    '--border': '50, 45, 40',
    '--border-subtle': '35, 30, 26',
  },
} as const;

export const accentTokens = {
  ember: {
    // Forest Pine (Primary)
    '--accent': '27, 67, 50',
    '--accent-hover': '18, 48, 35',
    '--accent-muted': '27, 67, 50',
  },
  sage: {
    // Olive Sage
    '--accent': '75, 95, 60',
    '--accent-hover': '60, 78, 48',
    '--accent-muted': '75, 95, 60',
  },
  copper: {
    // Terracotta Earthenware
    '--accent': '184, 75, 41',
    '--accent-hover': '155, 60, 30',
    '--accent-muted': '184, 75, 41',
  },
  ocean: {
    // Deep Navy Ink
    '--accent': '30, 58, 95',
    '--accent-hover': '20, 42, 72',
    '--accent-muted': '30, 58, 95',
  },
  arctic: {
    // Mineral Slate
    '--accent': '60, 75, 90',
    '--accent-hover': '45, 58, 70',
    '--accent-muted': '60, 75, 90',
  },
  violet: {
    // Burgundy Wine
    '--accent': '108, 42, 65',
    '--accent-hover': '88, 32, 52',
    '--accent-muted': '108, 42, 65',
  },
} as const;

export const fontSystems = {
  'modern-sans': {
    label: 'Modern Sans',
    display: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  'editorial-serif': {
    label: 'Editorial Serif',
    display: "'Playfair Display', serif",
    body: "'Source Serif 4', serif",
    mono: "'JetBrains Mono', monospace",
  },
  'technical-mono': {
    label: 'Technical Mono',
    display: "'Space Mono', monospace",
    body: "'Space Mono', monospace",
    mono: "'Space Mono', monospace",
  },
  'neo-grotesk': {
    label: 'Neo Grotesk',
    display: "'Space Grotesk', sans-serif",
    body: "'Space Grotesk', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  'elegant-serif': {
    label: 'Elegant Serif',
    display: "'Cormorant Garamond', serif",
    body: "'EB Garamond', serif",
    mono: "'JetBrains Mono', monospace",
  },
} as const;

export const motionPresets = {
  calm: {
    duration: { fast: 0.2, normal: 0.4, slow: 0.8, cinematic: 1.2 },
    ease: { smooth: 'power2.out', bounce: 'power2.out', sharp: 'power2.inOut' },
    stagger: 0.08,
    parallaxIntensity: 0.3,
  },
  balanced: {
    duration: { fast: 0.15, normal: 0.35, slow: 0.6, cinematic: 0.9 },
    ease: { smooth: 'power3.out', bounce: 'back.out(1.2)', sharp: 'power3.inOut' },
    stagger: 0.05,
    parallaxIntensity: 0.6,
  },
  cinematic: {
    duration: { fast: 0.1, normal: 0.3, slow: 0.5, cinematic: 0.8 },
    ease: { smooth: 'expo.out', bounce: 'back.out(1.7)', sharp: 'expo.inOut' },
    stagger: 0.03,
    parallaxIntensity: 1.0,
  },
} as const;
