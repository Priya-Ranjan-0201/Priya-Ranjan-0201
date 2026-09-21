import { Inter, Newsreader, JetBrains_Mono } from 'next/font/google';

// ── Typography System: Editorial Serif Headlines + Precision Body Sans ──

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-display',
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

// Combined font class variables for RootLayout
export const fontVariables = [
  inter.variable,
  newsreader.variable,
  jetbrainsMono.variable,
].join(' ');
