'use client';

import React from 'react';

interface ProjectVisualProps {
  slug: string;
  title: string;
}

export default function ProjectVisual({ slug, title }: ProjectVisualProps) {
  switch (slug) {
    case 'vireoniq':
      return (
        <div className="w-full h-full min-h-[220px] rounded-xl bg-[#0D0F12] border border-[#22262C] p-4 flex flex-col justify-between font-mono text-xs select-none shadow-inner">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#1E2228]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
              <span className="text-[rgb(var(--fg-muted))] text-[11px] ml-2 font-mono">vireoniq / ast_engine.py</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-semibold">
              153/153 TESTS PASSING
            </span>
          </div>

          {/* Code Snippet */}
          <div className="space-y-1.5 py-3 text-[11px] leading-relaxed text-[rgb(var(--fg-muted))] overflow-x-auto min-w-0">
            <div className="whitespace-pre">
              <span className="text-purple-400">import</span> <span className="text-[rgb(var(--fg-primary))]">ast, qdrant_client</span>
            </div>
            <div className="whitespace-pre">
              <span className="text-blue-400">def</span> <span className="text-yellow-300">analyze_syntax_tree</span>(
              <span className="text-orange-300">source: str</span>) &rarr; <span className="text-emerald-300">ASTReport</span>:
            </div>
            <div className="pl-4 whitespace-pre">
              <span className="text-[rgb(var(--fg-muted))]"># Evaluates code complexity with zero runtime risk</span>
            </div>
            <div className="pl-4 whitespace-pre">
              <span className="text-[rgb(var(--fg-primary))]">tree</span> = <span className="text-blue-400">ast.parse</span>(source)
            </div>
            <div className="pl-4 whitespace-pre">
              <span className="text-[rgb(var(--fg-primary))]">visitor</span> = <span className="text-emerald-300">ComplexityVisitor</span>()
            </div>
            <div className="pl-4 whitespace-pre">
              <span className="text-[rgb(var(--fg-primary))]">visitor.visit</span>(tree)
            </div>
            <div className="pl-4 whitespace-pre">
              <span className="text-purple-400">return</span> qdrant.<span className="text-blue-400">match_roadmap</span>(visitor.vector)
            </div>
          </div>

          {/* Bottom Telemetry */}
          <div className="pt-2 border-t border-[#1E2228] flex items-center justify-between text-[10px] text-[#6E7480]">
            <span>AST Complexity: <strong className="text-emerald-400">O(n)</strong></span>
            <span>Safety: <strong className="text-emerald-400">100% Static</strong></span>
            <span>Vector Match: <strong className="text-[rgb(var(--fg-primary))]">42ms</strong></span>
          </div>
        </div>
      );

    case 'trustshield-x':
      return (
        <div className="w-full h-full min-h-[220px] rounded-xl bg-[#0D0F12] border border-[#22262C] p-4 flex flex-col justify-between font-mono text-xs select-none shadow-inner">
          <div className="flex items-center justify-between pb-3 border-b border-[#1E2228]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
              <span className="text-[rgb(var(--fg-muted))] text-[11px] ml-2">trustshield / port_audit.sh</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[10px] font-semibold">
              SCAN AUDIT ACTIVE
            </span>
          </div>

          <div className="space-y-2 py-3 text-[11px]">
            <div className="flex items-center justify-between bg-[#13161B] p-2 rounded border border-[#1E2228]">
              <span className="text-emerald-400 font-bold">PORT 443 [HTTPS]</span>
              <span className="text-[rgb(var(--fg-muted))]">SSL TLS 1.3 / HSTS ENFORCED</span>
              <span className="text-emerald-400">PASSED &check;</span>
            </div>
            <div className="flex items-center justify-between bg-[#13161B] p-2 rounded border border-[#1E2228]">
              <span className="text-blue-400 font-bold">PORT 80 [HTTP]</span>
              <span className="text-[rgb(var(--fg-muted))]">AUTO-REDIRECT 301</span>
              <span className="text-emerald-400">HARDENED &check;</span>
            </div>
            <div className="flex items-center justify-between bg-[#13161B] p-2 rounded border border-[#1E2228]">
              <span className="text-amber-400 font-bold">PORT 22 [SSH]</span>
              <span className="text-[rgb(var(--fg-muted))]">ED25519 KEY / ROOT DISABLED</span>
              <span className="text-emerald-400">SECURE &check;</span>
            </div>
          </div>

          <div className="pt-2 border-t border-[#1E2228] flex items-center justify-between text-[10px] text-[#6E7480]">
            <span>Security Index: <strong className="text-emerald-400">A+ (98/100)</strong></span>
            <span>Concurrent Sockets: <strong className="text-[rgb(var(--fg-primary))]">AsyncIO (100)</strong></span>
          </div>
        </div>
      );

    case 'tech-on-tour':
      return (
        <div className="w-full h-full min-h-[220px] rounded-xl bg-[#0D0F12] border border-[#22262C] p-4 flex flex-col justify-between font-mono text-xs select-none shadow-inner">
          <div className="flex items-center justify-between pb-3 border-b border-[#1E2228]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
              <span className="text-[rgb(var(--fg-muted))] text-[11px] ml-2">tourism_graph / route_matrix.json</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-semibold">
              OPTIMAL ITINERARY
            </span>
          </div>

          {/* Node Graph Representation */}
          <div className="py-4 flex items-center justify-around">
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-[#181C22] border-2 border-emerald-500 flex items-center justify-center text-emerald-400 font-bold mx-auto mb-1">
                A
              </div>
              <span className="text-[10px] text-[rgb(var(--fg-muted))]">Transit Hub</span>
            </div>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-emerald-600 via-emerald-400 to-teal-500 relative mx-2">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[9px] text-[#A0A6B1] bg-[#0D0F12] px-1">
                45 min (24 km)
              </span>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-[#181C22] border-2 border-emerald-400 flex items-center justify-center text-emerald-400 font-bold mx-auto mb-1">
                B
              </div>
              <span className="text-[10px] text-[rgb(var(--fg-muted))]">Heritage Fort</span>
            </div>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-emerald-400 to-purple-400 relative mx-2">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[9px] text-[#A0A6B1] bg-[#0D0F12] px-1">
                20 min (8 km)
              </span>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-[#181C22] border-2 border-purple-400 flex items-center justify-center text-purple-400 font-bold mx-auto mb-1">
                C
              </div>
              <span className="text-[10px] text-[rgb(var(--fg-muted))]">Artisan Craft</span>
            </div>
          </div>

          <div className="pt-2 border-t border-[#1E2228] flex flex-wrap items-center justify-between gap-2 text-[10px] text-[#A0A6B1]">
            <span>Graph: <strong className="text-[rgb(var(--fg-primary))] font-bold">14 Nodes</strong></span>
            <span>Latency: <strong className="text-emerald-400 font-bold">18ms</strong></span>
            <span>GIS: <strong className="text-emerald-400 font-bold">GeoJSON</strong></span>
          </div>
        </div>
      );

    case 'priocardix-ai':
      return (
        <div className="w-full h-full min-h-[220px] rounded-xl bg-[#0D0F12] border border-[#22262C] p-4 flex flex-col justify-between font-mono text-xs select-none shadow-inner">
          <div className="flex items-center justify-between pb-3 border-b border-[#1E2228]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
              <span className="text-[rgb(var(--fg-muted))] text-[11px] ml-2">cardix / ecg_lead_ii.py</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-semibold">
              ROC-AUC 98.4%
            </span>
          </div>

          {/* Real ECG Waveform SVG */}
          <div className="py-2">
            <svg viewBox="0 0 360 70" className="w-full h-16 stroke-emerald-400" fill="none">
              <path
                d="M 0,35 L 50,35 L 60,35 L 70,30 L 75,45 L 85,5 L 95,65 L 105,35 L 115,35 L 130,22 L 145,35 L 200,35 L 210,35 L 220,30 L 225,45 L 235,5 L 245,65 L 255,35 L 265,35 L 280,22 L 295,35 L 360,35"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="pt-2 border-t border-[#1E2228] flex items-center justify-between text-[10px] text-[#6E7480]">
            <span>Heart Rate: <strong className="text-emerald-400">72 BPM (Sinus Rhythm)</strong></span>
            <span>SHAP Explainability: <strong className="text-[rgb(var(--fg-primary))]">Lead II QRS</strong></span>
            <span>Inference: <strong className="text-emerald-400">14ms</strong></span>
          </div>
        </div>
      );

    case 'hrcv':
      return (
        <div className="w-full h-full min-h-[220px] rounded-xl bg-[#0D0F12] border border-[#22262C] p-4 flex flex-col justify-between font-mono text-xs select-none shadow-inner">
          <div className="flex items-center justify-between pb-3 border-b border-[#1E2228]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
              <span className="text-[rgb(var(--fg-muted))] text-[11px] ml-2">vision / pose_tracker.cpp</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 text-[10px] font-semibold">
              60 FPS REALTIME
            </span>
          </div>

          {/* Landmark Skeleton Wireframe */}
          <div className="py-2 flex items-center justify-center">
            <svg viewBox="0 0 200 80" className="h-16 stroke-emerald-500" fill="none">
              <circle cx="100" cy="15" r="8" strokeWidth="1.5" className="fill-[#181C22]" />
              <line x1="100" y1="23" x2="100" y2="50" strokeWidth="1.5" />
              <line x1="75" y1="35" x2="125" y2="35" strokeWidth="1.5" />
              <line x1="75" y1="35" x2="60" y2="60" strokeWidth="1.5" />
              <line x1="125" y1="35" x2="140" y2="60" strokeWidth="1.5" />
              <circle cx="60" cy="60" r="3" className="fill-emerald-400 stroke-none" />
              <circle cx="140" cy="60" r="3" className="fill-emerald-400 stroke-none" />
              <circle cx="100" cy="50" r="3" className="fill-emerald-400 stroke-none" />
            </svg>
          </div>

          <div className="pt-2 border-t border-[#1E2228] flex items-center justify-between text-[10px] text-[#6E7480]">
            <span>Keypoints: <strong className="text-[rgb(var(--fg-primary))]">33 Landmarks</strong></span>
            <span>Confidence: <strong className="text-emerald-400">96.8%</strong></span>
            <span>Latency: <strong className="text-purple-400">11ms / Frame</strong></span>
          </div>
        </div>
      );

    case 'braincheck':
      return (
        <div className="w-full h-full min-h-[220px] rounded-xl bg-[#0D0F12] border border-[#22262C] p-4 flex flex-col justify-between font-mono text-xs select-none shadow-inner">
          <div className="flex items-center justify-between pb-3 border-b border-[#1E2228]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
              <span className="text-[rgb(var(--fg-muted))] text-[11px] ml-2">diagnostics / reaction_curve.py</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-semibold">
              COGNITIVE LATENCY
            </span>
          </div>

          <div className="py-2 space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[rgb(var(--fg-muted))]">Visual Stimulus Test</span>
              <span className="text-[rgb(var(--fg-primary))] font-bold">218 ms</span>
            </div>
            <div className="w-full bg-[#181C22] h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-400 h-full w-[82%]" />
            </div>
            <div className="flex items-center justify-between text-[11px] pt-1">
              <span className="text-[rgb(var(--fg-muted))]">Stroop Interference</span>
              <span className="text-[rgb(var(--fg-primary))] font-bold">312 ms</span>
            </div>
            <div className="w-full bg-[#181C22] h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-500/80 h-full w-[65%]" />
            </div>
          </div>

          <div className="pt-2 border-t border-[#1E2228] flex items-center justify-between text-[10px] text-[#6E7480]">
            <span>Mean Latency: <strong className="text-emerald-400">240ms</strong></span>
            <span>Accuracy: <strong className="text-[rgb(var(--fg-primary))]">99.4%</strong></span>
            <span>Status: <strong className="text-emerald-400">High Attention</strong></span>
          </div>
        </div>
      );

    case 'disk-scheduling':
      return (
        <div className="w-full h-full min-h-[220px] rounded-xl bg-[#0D0F12] border border-[#22262C] p-4 flex flex-col justify-between font-mono text-xs select-none shadow-inner">
          <div className="flex items-center justify-between pb-3 border-b border-[#1E2228]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
              <span className="text-[rgb(var(--fg-muted))] text-[11px] ml-2">kernel / disk_seek_sim.c</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-semibold">
              SEEK LATENCY -67%
            </span>
          </div>

          <div className="py-2 space-y-2 text-[11px]">
            <div className="flex items-center justify-between">
              <span className="text-[rgb(var(--fg-muted))]">FCFS (First-Come)</span>
              <span className="text-red-400 font-mono">640 Tracks</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[rgb(var(--fg-muted))]">SSTF (Shortest Seek)</span>
              <span className="text-amber-400 font-mono">236 Tracks</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[rgb(var(--fg-muted))]">C-LOOK (Optimal)</span>
              <span className="text-emerald-400 font-bold font-mono">208 Tracks (&minus;67.5%)</span>
            </div>
          </div>

          <div className="pt-2 border-t border-[#1E2228] flex items-center justify-between text-[10px] text-[#6E7480]">
            <span>Mechanical Arm: <strong className="text-emerald-400">Optimized</strong></span>
            <span>Cylinders: <strong className="text-[rgb(var(--fg-primary))]">0 &rarr; 199</strong></span>
            <span>Queue: <strong className="text-emerald-400">11 Algorithms</strong></span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full min-h-[220px] rounded-xl bg-[#0D0F12] border border-[#22262C] p-4 flex flex-col justify-between font-mono text-xs select-none shadow-inner">
          <div className="flex items-center justify-between pb-3 border-b border-[#1E2228]">
            <span className="text-[rgb(var(--fg-muted))]">{title}</span>
            <span className="text-emerald-400">VERIFIED</span>
          </div>
          <div className="py-6 text-center text-[rgb(var(--fg-muted))]">Engineering Architecture Verified</div>
          <div className="pt-2 border-t border-[#1E2228] text-[#6E7480] text-[10px]">Priya Ranjan Systems</div>
        </div>
      );
  }
}
