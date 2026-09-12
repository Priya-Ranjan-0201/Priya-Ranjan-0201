import {
  Inter,
  Playfair_Display,
  Source_Serif_4,
  Space_Mono,
  Space_Grotesk,
  JetBrains_Mono,
  Cormorant_Garamond,
  EB_Garamond,
} from 'next/font/google';

// ── Font Instances ────────────────────────────────────────────

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-serif',
});

export const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-space-mono',
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
});

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-cormorant',
});

export const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-eb-garamond',
});

// ── All font variables combined ───────────────────────────────

export const fontVariables = [
  inter.variable,
  playfairDisplay.variable,
  sourceSerif4.variable,
  spaceMono.variable,
  spaceGrotesk.variable,
  jetbrainsMono.variable,
  cormorantGaramond.variable,
  ebGaramond.variable,
].join(' ');
