'use client';

import { useEffect, useState } from 'react';
import {
  GitCommit,
  GitBranch,
  ExternalLink,
  RefreshCw,
  Terminal,
  ShieldCheck,
  Check,
  Copy,
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { playSound } from '@/lib/sound';

interface ActivityItem {
  id: string;
  type: string;
  repoName: string;
  repoUrl: string;
  commitUrl?: string;
  shortSha?: string;
  branch?: string;
  message: string;
  date: string;
}

export default function GitHubFeed() {
  const [events, setEvents] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [copiedSha, setCopiedSha] = useState<string | null>(null);

  async function loadActivity() {
    try {
      setRefreshing(true);
      const res = await fetch('/api/github');
      const data = await res.json();
      if (data.events) {
        setEvents(data.events.slice(0, 5));
        setIsLive(data.source === 'live');
      }
    } catch (e) {
      console.error('Failed to load GitHub activity', e);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    loadActivity();
  }, []);

  const handleCopySha = (e: React.MouseEvent, sha: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(sha);
    setCopiedSha(sha);
    playSound('click');
    setTimeout(() => setCopiedSha(null), 1800);
  };

  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      const now = new Date();
      const diffHours = Math.floor((now.getTime() - d.getTime()) / (1000 * 60 * 60));
      if (diffHours < 1 && diffHours >= 0) return 'Just now';
      if (diffHours < 24 && diffHours >= 0) return `${diffHours}h ago`;
      const diffDays = Math.floor(diffHours / 24);
      if (diffDays === 1) return 'Yesterday';
      if (diffDays < 7) return `${diffDays}d ago`;
      return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    } catch {
      return dateStr;
    }
  };

  const parseCommit = (message: string) => {
    const match = message.match(/^(feat|fix|refactor|perf|chore|test|docs|style)(\([a-z0-9_-]+\))?:\s*(.+)$/i);
    if (match) {
      return {
        hasPrefix: true,
        type: match[1].toLowerCase(),
        scope: match[2] ? match[2].slice(1, -1) : null,
        desc: match[3],
      };
    }
    return { hasPrefix: false, type: 'commit', scope: null, desc: message };
  };

  const badgeStyles: Record<string, string> = {
    feat: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    fix: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
    refactor: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
    perf: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
    chore: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    test: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    docs: 'bg-stone-500/15 text-stone-300 border-stone-500/30',
  };

  return (
    <div className="github-feed-box rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-secondary))] overflow-hidden shadow-sm">
      {/* Terminal Title Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:px-6 bg-[rgb(var(--bg-tertiary))]/60 border-b border-[rgb(var(--border))]">
        <div className="flex items-center gap-3">
          {/* Terminal Window Micro Dots */}
          <div className="flex items-center gap-1.5 mr-1 hidden sm:flex">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          </div>

          <div className="w-8 h-8 rounded-lg bg-[rgb(var(--accent))]/12 border border-[rgb(var(--accent))]/30 flex items-center justify-center text-[rgb(var(--accent))] shadow-xs">
            <Terminal size={15} />
          </div>

          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[rgb(var(--fg-primary))]">
                Live GitHub Pipeline
              </h3>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[rgb(var(--accent))]/12 text-[rgb(var(--accent))] border border-[rgb(var(--accent))]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[rgb(var(--accent))] animate-pulse" />
                {isLive ? 'LIVE REPO STREAM' : 'VERIFIED PIPELINE'}
              </span>
            </div>
            <p className="text-[11px] text-[rgb(var(--fg-muted))] font-mono mt-0.5">
              <a
                href="https://github.com/Priya-Ranjan-0201"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[rgb(var(--accent))] transition-colors"
              >
                github.com/Priya-Ranjan-0201
              </a>{' '}
              &bull; 8 Public Repositories
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => {
              playSound('click');
              loadActivity();
            }}
            disabled={refreshing}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--bg-secondary))] hover:border-[rgb(var(--accent))]/50 hover:bg-[rgb(var(--bg-tertiary))] text-[rgb(var(--fg-secondary))] hover:text-[rgb(var(--fg-primary))] text-xs font-mono font-medium transition-all cursor-pointer"
            title="Refresh commit stream"
          >
            <RefreshCw size={12} className={refreshing ? 'animate-spin text-[rgb(var(--accent))]' : ''} />
            <span>Sync</span>
          </button>

          <a
            href="https://github.com/Priya-Ranjan-0201?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[rgb(var(--accent))] text-white hover:opacity-95 text-xs font-mono font-semibold tracking-wide transition-all shadow-xs"
            onClick={() => playSound('click')}
          >
            <span>View All Repos</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* Commit Stream with Continuous Vertical Timeline */}
      <div className="p-5 sm:p-6">
        {loading ? (
          <div className="py-12 flex flex-col items-center justify-center gap-3 text-xs font-mono text-[rgb(var(--fg-muted))]">
            <RefreshCw size={18} className="animate-spin text-[rgb(var(--accent))]" />
            <span>Connecting to GitHub API pipeline...</span>
          </div>
        ) : events.length === 0 ? (
          <p className="text-xs font-mono text-[rgb(var(--fg-muted))] py-6 text-center">
            No public events found at this time.
          </p>
        ) : (
          <div className="relative pl-6 sm:pl-7">
            {/* Continuous Vertical Timeline Rail */}
            <div className="absolute left-[11px] sm:left-[13px] top-3 bottom-5 w-[2px] bg-gradient-to-b from-[rgb(var(--accent))]/40 via-[rgb(var(--border))] to-transparent" />

            <div className="space-y-4">
              {events.map((evt) => {
                const parsed = parseCommit(evt.message);
                const commitLink = evt.commitUrl || `${evt.repoUrl}/commits/${evt.branch || 'main'}`;

                return (
                  <div
                    key={evt.id}
                    className="relative group flex items-start gap-4 p-3 sm:p-3.5 rounded-xl border border-transparent hover:border-[rgb(var(--border))] hover:bg-[rgb(var(--bg-primary))] transition-all duration-200"
                  >
                    {/* Commit Node on Timeline */}
                    <div className="absolute -left-[23px] sm:-left-[25px] top-4 flex items-center justify-center">
                      <span className="w-3 h-3 rounded-full bg-[rgb(var(--accent))] ring-4 ring-[rgb(var(--accent))]/15 group-hover:scale-110 transition-transform duration-200" />
                    </div>

                    {/* Commit Row Content */}
                    <div className="min-w-0 flex-1 space-y-1.5">
                      {/* Meta Header Strip */}
                      <div className="flex items-center gap-2 flex-wrap text-xs font-mono">
                        {/* Repository Link */}
                        <a
                          href={evt.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="font-bold text-[rgb(var(--fg-primary))] hover:text-[rgb(var(--accent))] transition-colors"
                        >
                          {evt.repoName}
                        </a>

                        {/* Branch Badge */}
                        <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-md bg-[rgb(var(--bg-tertiary))] border border-[rgb(var(--border))] text-[rgb(var(--fg-muted))]">
                          <GitBranch size={10} className="text-[rgb(var(--accent))]" />
                          <span>{evt.branch || 'main'}</span>
                        </span>

                        {/* Short SHA Chip with Copy Interaction */}
                        {evt.shortSha && (
                          <div className="inline-flex items-center gap-1">
                            <a
                              href={commitLink}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[10px] px-1.5 py-0.5 rounded-md bg-[rgb(var(--accent))]/10 border border-[rgb(var(--accent))]/25 text-[rgb(var(--accent))] font-semibold hover:bg-[rgb(var(--accent))]/20 transition-colors"
                              title="View commit diff on GitHub"
                            >
                              {evt.shortSha}
                            </a>
                            <button
                              onClick={(e) => handleCopySha(e, evt.shortSha!)}
                              className="p-1 rounded hover:bg-[rgb(var(--bg-tertiary))] text-[rgb(var(--fg-muted))] hover:text-[rgb(var(--fg-primary))] transition-colors"
                              title="Copy SHA"
                            >
                              {copiedSha === evt.shortSha ? (
                                <Check size={10} className="text-emerald-400" />
                              ) : (
                                <Copy size={10} />
                              )}
                            </button>
                          </div>
                        )}

                        {/* Relative Timestamp */}
                        <span className="text-[10px] text-[rgb(var(--fg-muted))] ml-auto sm:ml-0 font-medium">
                          &bull; {formatDate(evt.date)}
                        </span>
                      </div>

                      {/* Commit Message with Conventional Syntax Highlighting */}
                      <div className="flex items-baseline gap-2 flex-wrap">
                        {parsed.hasPrefix && (
                          <span
                            className={`inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border ${
                              badgeStyles[parsed.type] || 'bg-stone-500/15 text-stone-300 border-stone-500/30'
                            }`}
                          >
                            {parsed.type}
                            {parsed.scope ? `(${parsed.scope})` : ''}
                          </span>
                        )}
                        <p className="text-xs sm:text-sm text-[rgb(var(--fg-primary))] font-normal leading-relaxed break-words">
                          {parsed.desc}
                        </p>
                      </div>
                    </div>

                    {/* Quick Link to Commit */}
                    <a
                      href={commitLink}
                      target="_blank"
                      rel="noreferrer"
                      className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-[rgb(var(--fg-muted))] group-hover:text-[rgb(var(--accent))] opacity-0 group-hover:opacity-100 transition-all shrink-0 self-center"
                    >
                      <span>Diff</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Pipeline Footer Strip */}
        <div className="mt-5 pt-4 border-t border-[rgb(var(--border))] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] font-mono text-[rgb(var(--fg-muted))]">
          <div className="flex items-center gap-2">
            <ShieldCheck size={13} className="text-[rgb(var(--accent))]" />
            <span>Verified commits synced via GitHub REST v3 API</span>
          </div>

          <a
            href="https://github.com/Priya-Ranjan-0201"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[rgb(var(--accent))] transition-colors flex items-center gap-1.5"
          >
            <GithubIcon size={12} />
            <span>Follow @Priya-Ranjan-0201 on GitHub &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}

