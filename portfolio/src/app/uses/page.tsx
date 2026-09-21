'use client';

import Link from 'next/link';
import {
  Monitor,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Code2,
  Wrench,
  Laptop,
} from 'lucide-react';
import { usesSetup } from '@/data/proof';

export default function UsesPage() {
  return (
    <div className="uses-page-wrapper">
      <div className="subpage-container">
        {/* Header */}
        <div className="subpage-header-block">
          <div className="subpage-eyebrow">
            <span className="w-2 h-2 rounded-full bg-[rgb(var(--accent))]" />
            <span>SETUP &bull; WORKFLOW &bull; TOOLS</span>
          </div>
          <h1 className="subpage-headline">
            The tools I use to build things.
          </h1>
          <p className="subpage-lead-para">
            A living breakdown of my workstation, editor configuration, terminal environment, and daily engineering habits. Focused on speed, legibility, and zero visual friction.
          </p>
        </div>

        {/* Categories Stack */}
        <div className="space-y-16">
          {usesSetup.map((cat, catIdx) => (
            <section key={catIdx} className="border-t border-[rgb(var(--border))] pt-10">
              <div className="flex items-center gap-2 mb-8 text-amber-500 font-mono text-xs uppercase tracking-wider font-bold">
                {catIdx === 0 && <Laptop size={15} />}
                {catIdx === 1 && <Terminal size={15} />}
                {catIdx === 2 && <Wrench size={15} />}
                <span>{cat.category}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cat.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="p-6 rounded-lg bg-[#14151a] border border-[#252730] hover:border-[#353844] transition-all"
                  >
                    <h3 className="text-base font-bold text-white mb-2">{item.name}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Callout */}
        <div className="mt-20 p-8 rounded-lg bg-[#14151a] border border-[#252730] text-center max-w-xl mx-auto">
          <h4 className="text-base font-semibold text-white mb-2">Have a question about my setup?</h4>
          <p className="text-sm text-zinc-400 mb-6">
            Always happy to talk about keyboard switch weights, terminal fonts, or Linux configs.
          </p>
          <Link href="/contact" className="btn-warm-primary inline-flex">
            <span>Get in Touch</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
