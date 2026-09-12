'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Cpu, Server, Database, ArrowRight, ShieldCheck, Layers } from 'lucide-react';
import { useSettingsStore } from '@/stores/settings-store';
import { projects } from '@/data/projects';

export default function ArchitectureModal() {
  const { architectureModalSlug, setArchitectureModalSlug } = useSettingsStore();

  const project = projects.find((p) => p.slug === architectureModalSlug);

  if (!project) return null;

  return (
    <AnimatePresence>
      {architectureModalSlug && (
        <div className="arch-modal-overlay" role="dialog" aria-modal="true">
          <motion.div
            className="arch-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setArchitectureModalSlug(null)}
          />

          <motion.div
            className="arch-modal-dialog"
            initial={{ opacity: 0, scale: 0.95, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 25 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className="arch-modal-header">
              <div className="arch-header-left">
                <span className="arch-badge">SYSTEM ARCHITECTURE EXPLORER</span>
                <h2 className="arch-title">{project.title} &mdash; Core Topology</h2>
              </div>
              <button
                onClick={() => setArchitectureModalSlug(null)}
                className="arch-close-btn"
                aria-label="Close architecture modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Architecture Summary */}
            <div className="arch-summary-card">
              <p className="arch-summary-text">
                {project.systemModeData?.architectureSummary || project.longDescription}
              </p>
            </div>

            {/* Interactive Node Flow Grid */}
            <div className="arch-node-flow-container">
              <span className="flow-label">COMPONENT TOPOLOGY &amp; DATA FLOW:</span>
              <div className="arch-flow-nodes-list">
                {project.architecture?.map((node, i) => (
                  <div key={node.id} className="arch-node-box">
                    <div className="arch-node-head">
                      <div className="arch-node-icon">
                        {node.type === 'client' && <Cpu size={16} />}
                        {node.type === 'api' && <Server size={16} />}
                        {node.type === 'service' && <Layers size={16} />}
                        {node.type === 'database' && <Database size={16} />}
                      </div>
                      <div>
                        <h3 className="arch-node-name">{node.label}</h3>
                        <span className="arch-node-type">{node.type.toUpperCase()}</span>
                      </div>
                    </div>
                    <p className="arch-node-desc">{node.description}</p>
                    {node.protocol && (
                      <div className="arch-protocol-pill">
                        <span>PROTOCOL: {node.protocol}</span>
                      </div>
                    )}
                    {i < (project.architecture?.length || 0) - 1 && (
                      <div className="arch-flow-arrow">
                        <ArrowRight size={14} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Stack Details Table */}
            {project.systemModeData?.stackDetails && (
              <div className="arch-stack-section">
                <h3 className="arch-sub-title">Technical Justification Matrix</h3>
                <div className="arch-stack-table">
                  {project.systemModeData.stackDetails.map((item) => (
                    <div key={item.layer} className="arch-stack-row">
                      <span className="arch-layer-cell">{item.layer}</span>
                      <span className="arch-tech-cell">{item.tech}</span>
                      <span className="arch-rationale-cell">{item.rationale}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Security Tradeoffs */}
            {project.systemModeData?.securityTradeoffs && (
              <div className="arch-security-banner">
                <ShieldCheck size={18} className="arch-security-icon" />
                <div>
                  <h4 className="arch-security-title">Security &amp; Resilience Policy</h4>
                  <p className="arch-security-desc">{project.systemModeData.securityTradeoffs}</p>
                </div>
              </div>
            )}

            {/* Code Snippet if present */}
            {project.systemModeData?.codeSnippet && (
              <div className="arch-code-section">
                <div className="code-header-bar">
                  <span>CORE LOGIC EXECUTION SAMPLE</span>
                </div>
                <pre className="arch-code-block">
                  <code>{project.systemModeData.codeSnippet}</code>
                </pre>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
