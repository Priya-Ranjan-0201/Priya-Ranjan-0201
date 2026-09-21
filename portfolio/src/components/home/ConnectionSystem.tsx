'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Network, ArrowRight, Sparkles } from 'lucide-react';
import { projects } from '@/data/projects';
import { playSound } from '@/lib/sound';

interface DomainNode {
  id: string;
  name: string;
  category: 'AI' | 'CYBERSECURITY' | 'FULL STACK' | 'COMPUTER VISION' | 'SYSTEMS';
  tagline: string;
}

const domains: DomainNode[] = [
  { id: 'ai', name: 'AI / Machine Learning', category: 'AI', tagline: 'AST parsing & vector distance search' },
  { id: 'sec', name: 'Cybersecurity', category: 'CYBERSECURITY', tagline: 'Socket probes & cryptographic logs' },
  { id: 'stack', name: 'Full-Stack Architecture', category: 'FULL STACK', tagline: 'FastAPI & React typed pipelines' },
  { id: 'cv', name: 'Computer Vision', category: 'COMPUTER VISION', tagline: 'Document geometry & visual perception' },
  { id: 'sys', name: 'Systems & OS', category: 'SYSTEMS', tagline: 'Kinematics & low-level hardware seek' },
];

export default function ConnectionSystem() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="connection-system-root">
      <div className="connection-header-row">
        <div>
          <div className="connection-eyebrow">
            <Network size={13} className="text-[#1B4332]" />
            <span>CREATIVE SIGNATURE · THE CONNECTION SYSTEM</span>
          </div>
          <h3 className="connection-title">Intelligently Connected Systems</h3>
          <p className="connection-desc">
            Hover any engineering discipline below to see how foundational concepts cross-pollinate through actual shipped projects.
          </p>
        </div>
        <div className="connection-indicator">
          <span className="indicator-dot" />
          <span>{activeCategory ? `FILTERING: ${activeCategory}` : 'HOVER ANY DOMAIN TO TRACE'}</span>
        </div>
      </div>

      {/* Domain Triggers Row */}
      <div className="connection-nodes-strip">
        {domains.map((dom) => {
          const isCurrent = activeCategory === dom.category;
          return (
            <button
              key={dom.id}
              className={`connection-node-chip ${isCurrent ? 'active' : ''}`}
              onMouseEnter={() => {
                playSound('toggle');
                setActiveCategory(dom.category);
              }}
              onMouseLeave={() => setActiveCategory(null)}
              onClick={() => {
                playSound('click');
                setActiveCategory(activeCategory === dom.category ? null : dom.category);
              }}
            >
              <span className="node-signal-dot" />
              <span className="node-chip-name">{dom.name}</span>
            </button>
          );
        })}
      </div>

      {/* Connected Projects Matrix */}
      <div className="connection-projects-grid">
        {projects.map((proj) => {
          const isHighlighted = !activeCategory || proj.domain === activeCategory || proj.category.toUpperCase().includes(activeCategory);
          const isDimmed = activeCategory && !isHighlighted;

          return (
            <motion.div
              key={proj.id}
              animate={{
                opacity: isDimmed ? 0.35 : 1,
                scale: isHighlighted && activeCategory ? 1.02 : 1,
              }}
              transition={{ duration: 0.2 }}
              className={`connected-project-box ${isHighlighted && activeCategory ? 'highlighted' : ''}`}
            >
              <div className="conn-box-top">
                <span className="conn-proj-number">{proj.number}</span>
                <span className="conn-proj-domain">{proj.domain || proj.category}</span>
              </div>
              <h4 className="conn-proj-title">{proj.title}</h4>
              <p className="conn-proj-sub">{proj.subtitle}</p>

              {/* DNA Chain */}
              {proj.dna && (
                <div className="conn-dna-chain">
                  {proj.dna.nodes.map((n, i) => (
                    <span key={i} className="dna-chain-node">
                      {n}
                      {i < proj.dna!.nodes.length - 1 && <span className="dna-connector">──</span>}
                    </span>
                  ))}
                </div>
              )}

              <Link
                href={`/work/${proj.slug}`}
                className="conn-view-link"
                onClick={() => playSound('click')}
              >
                <span>View Case Study</span>
                <ArrowRight size={12} />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
