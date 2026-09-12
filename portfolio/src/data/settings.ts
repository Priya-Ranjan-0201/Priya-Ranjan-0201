import { SiteSettings } from '@/types';

export const defaultSettings: SiteSettings = {
  theme: 'dark',
  accent: 'ember',
  font: 'modern-sans',
  motion: 'balanced',
  threeD: 'full',
  grain: true,
  cursor: 'magnetic',
  density: 'standard',
  sound: false,
};

export const themeTokens = {
  dark: {
    '--bg-primary': '8, 8, 12',
    '--bg-secondary': '14, 14, 20',
    '--bg-tertiary': '22, 22, 30',
    '--fg-primary': '245, 243, 240',
    '--fg-secondary': '180, 178, 175',
    '--fg-muted': '110, 108, 105',
    '--border': '40, 38, 35',
    '--border-subtle': '28, 26, 24',
  },
  light: {
    '--bg-primary': '250, 248, 245',
    '--bg-secondary': '242, 240, 237',
    '--bg-tertiary': '235, 233, 230',
    '--fg-primary': '15, 15, 18',
    '--fg-secondary': '60, 58, 55',
    '--fg-muted': '130, 128, 125',
    '--border': '215, 213, 210',
    '--border-subtle': '228, 226, 223',
  },
  mono: {
    '--bg-primary': '12, 12, 12',
    '--bg-secondary': '18, 18, 18',
    '--bg-tertiary': '24, 24, 24',
    '--fg-primary': '230, 230, 230',
    '--fg-secondary': '160, 160, 160',
    '--fg-muted': '100, 100, 100',
    '--border': '38, 38, 38',
    '--border-subtle': '28, 28, 28',
  },
  midnight: {
    '--bg-primary': '6, 8, 18',
    '--bg-secondary': '10, 14, 28',
    '--bg-tertiary': '16, 20, 38',
    '--fg-primary': '220, 225, 240',
    '--fg-secondary': '160, 168, 190',
    '--fg-muted': '90, 98, 120',
    '--border': '30, 36, 55',
    '--border-subtle': '20, 26, 42',
  },
  obsidian: {
    '--bg-primary': '5, 5, 7',
    '--bg-secondary': '10, 10, 14',
    '--bg-tertiary': '16, 16, 22',
    '--fg-primary': '255, 245, 230',
    '--fg-secondary': '200, 190, 175',
    '--fg-muted': '120, 110, 100',
    '--border': '45, 38, 30',
    '--border-subtle': '30, 25, 20',
  },
  paper: {
    '--bg-primary': '248, 246, 240',
    '--bg-secondary': '240, 237, 230',
    '--bg-tertiary': '232, 228, 220',
    '--fg-primary': '20, 20, 22',
    '--fg-secondary': '70, 68, 65',
    '--fg-muted': '140, 135, 130',
    '--border': '210, 205, 195',
    '--border-subtle': '225, 220, 210',
  },
} as const;

export const accentTokens = {
  ember: {
    '--accent': '235, 87, 47',
    '--accent-hover': '245, 107, 67',
    '--accent-muted': '235, 87, 47',
  },
  arctic: {
    '--accent': '56, 182, 225',
    '--accent-hover': '76, 202, 245',
    '--accent-muted': '56, 182, 225',
  },
  sage: {
    '--accent': '120, 190, 130',
    '--accent-hover': '140, 210, 150',
    '--accent-muted': '120, 190, 130',
  },
  violet: {
    '--accent': '160, 100, 230',
    '--accent-hover': '180, 120, 250',
    '--accent-muted': '160, 100, 230',
  },
  copper: {
    '--accent': '205, 150, 90',
    '--accent-hover': '225, 170, 110',
    '--accent-muted': '205, 150, 90',
  },
  ocean: {
    '--accent': '50, 130, 180',
    '--accent-hover': '70, 150, 200',
    '--accent-muted': '50, 130, 180',
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
