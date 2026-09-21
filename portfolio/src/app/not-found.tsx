'use client';

import Link from 'next/link';
import { ArrowLeft, Home, Terminal } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[rgb(var(--bg-primary))] text-[rgb(var(--fg-primary))] flex items-center justify-center px-6 py-24">
      <div className="max-w-xl w-full text-center">
        {/* Monospace Code Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] text-xs font-mono text-[rgb(var(--accent))] font-bold mb-8">
          <Terminal size={13} />
          <span>HTTP 404: ROUTE_NOT_FOUND</span>
        </div>

        {/* Candid Title */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[rgb(var(--fg-primary))] mb-6">
          Nothing here but silence.
        </h1>

        {/* Dry, personal explanation */}
        <p className="text-base sm:text-lg text-[rgb(var(--fg-muted))] leading-relaxed mb-8 max-w-md mx-auto font-normal">
          You reached a route that doesn&apos;t exist. Maybe I refactored an endpoint, maybe there&apos;s a typo in the URL bar, or an unmapped state.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[rgb(var(--accent))] hover:opacity-90 text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-sm"
          >
            <Home size={14} />
            <span>Return to Home</span>
          </Link>

          <a
            href="https://github.com/Priya-Ranjan-0201"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] hover:border-[rgb(var(--accent))] text-[rgb(var(--fg-muted))] hover:text-[rgb(var(--fg-primary))] text-xs font-mono uppercase tracking-wider transition-all"
          >
            <GithubIcon size={14} />
            <span>Inspect Repositories</span>
          </a>
        </div>

        {/* Small terminal Easter egg */}
        <div className="mt-16 p-4 rounded-xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] text-left font-mono text-xs text-[rgb(var(--fg-muted))] max-w-sm mx-auto">
          <p className="text-[rgb(var(--fg-primary))]">$ curl -I https://priyaranjan.dev/unmapped-path</p>
          <p className="text-red-400 mt-1">HTTP/2 404 Not Found</p>
          <p className="text-[rgb(var(--fg-muted))]/60">x-server-action: redirect-to-home</p>
        </div>
      </div>
    </div>
  );
}
