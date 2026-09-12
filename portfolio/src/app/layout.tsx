import type { Metadata } from 'next';
import './globals.css';
import './layout-components.css';
import './home.css';
import './subpages.css';
import { fontVariables } from '@/lib/fonts';
import ClientLayout from '@/components/layout/ClientLayout';

export const metadata: Metadata = {
  title: {
    default: 'Priya Ranjan — Developer & Builder',
    template: '%s — Priya Ranjan',
  },
  description: 'Developer, builder, and problem solver. Building systems that combine engineering, AI, and security to solve real problems.',
  keywords: ['developer', 'portfolio', 'engineer', 'AI', 'cybersecurity', 'web development', 'Priya Ranjan'],
  authors: [{ name: 'Priya Ranjan' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Priya Ranjan — Developer & Builder',
    description: 'Enter the mind. A digital universe showcasing engineering, AI, and creative technology.',
    siteName: 'Priya Ranjan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Priya Ranjan — Developer & Builder',
    description: 'Enter the mind. A digital universe showcasing engineering, AI, and creative technology.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fontVariables}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
