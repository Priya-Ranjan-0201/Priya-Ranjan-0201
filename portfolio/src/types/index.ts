// ═══════════════════════════════════════════════════════════════
// ENTER THE MIND — Type Definitions
// ═══════════════════════════════════════════════════════════════

// ── Theme & Settings ──────────────────────────────────────────

export type ThemeMode = 'dark' | 'light' | 'mono' | 'midnight' | 'obsidian' | 'paper';

export type AccentPalette = 'ember' | 'arctic' | 'sage' | 'violet' | 'copper' | 'ocean';

export type FontSystem = 'modern-sans' | 'editorial-serif' | 'technical-mono' | 'neo-grotesk' | 'elegant-serif';

export type MotionLevel = 'calm' | 'balanced' | 'cinematic';

export type ThreeDQuality = 'full' | 'reduced' | 'minimal';

export type CursorMode = 'classic' | 'magnetic' | 'precision';

export type InterfaceDensity = 'minimal' | 'standard' | 'dense';

export interface SiteSettings {
  theme: ThemeMode;
  accent: AccentPalette;
  font: FontSystem;
  motion: MotionLevel;
  threeD: ThreeDQuality;
  grain: boolean;
  cursor: CursorMode;
  density: InterfaceDensity;
  sound: boolean;
}

// ── Navigation ────────────────────────────────────────────────

export interface NavRoute {
  path: string;
  label: string;
  concept: string;
  description: string;
  coreState: CoreState;
}

// ── Profile ───────────────────────────────────────────────────

export interface Profile {
  firstName: string;
  lastName: string;
  title: string;
  roles: string[];
  statement: string;
  bio: string[];
  email: string;
  location: string;
  avatar?: string;
  resume?: string;
  socialLinks: SocialLink[];
  identityNodes: IdentityNode[];
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  icon: string;
}

export interface IdentityNode {
  id: string;
  label: string;
  subtitle?: string;
  description: string;
  color?: string;
  iconName?: string;
  technologies?: string[];
  focusAreas?: string[];
}

export interface ThinkingStep {
  step: string;
  title: string;
  tagline?: string;
  desc: string;
  invariant?: string;
  telemetry?: string;
  color?: string;
}

// ── Projects ──────────────────────────────────────────────────

export interface ProjectChallengeObject {
  title: string;
  obstacle: string;
  resolution: string;
}
export type ProjectChallenge = ProjectChallengeObject | string;

export interface ProjectIteration {
  version?: string;
  date?: string;
  description?: string;
  phase?: string;
  title?: string;
  desc?: string;
}

export interface ProjectLearnings {
  technical: string;
  systems?: string;
  mistake: string;
  nextStep?: string;
  product?: string;
  design?: string;
  nextImprovement?: string;
}

export interface ProjectSystemMode {
  architectureSummary?: string;
  dataFlow: string;
  tradeoffs?: string;
  securityOrPerf?: string;
  stackDetails?: { layer: string; tech: string; rationale: string }[];
  securityTradeoffs?: string;
  codeSnippet?: string;
}

export interface ProjectProductMode {
  userAudience?: string;
  measurableOutcome?: string;
  keyFlows?: string[];
  userWorkflow?: string;
  targetAudience?: string;
  keyDifferentiator?: string;
  visualHighlights?: string[];
}

export interface ProjectMetric {
  label: string;
  value: string;
  detail?: string;
}

export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  problem: string;
  insight?: string;
  solution: string;
  impact: string;
  tags: string[];
  technologies: string[];
  category: string;
  year: string;
  status: 'completed' | 'in-progress' | 'concept' | 'ACTIVE' | 'ITERATING' | 'PROTOTYPE' | 'COMPLETED' | 'ARCHIVED';
  projectState?: 'ACTIVE' | 'ITERATING' | 'PROTOTYPE' | 'COMPLETED' | 'ARCHIVED';
  featured: boolean;
  links: ProjectLink[];
  architecture?: ArchitectureNode[];
  features: string[];
  challenges: ProjectChallenge[];
  lessons: string[];
  iterations?: ProjectIteration[];
  future?: string;
  learnings?: ProjectLearnings;
  learned?: ProjectLearnings;
  metrics?: ProjectMetric[];
  outcomes?: string[];
  accentColor?: string;
  systemMode?: ProjectSystemMode;
  systemModeData?: ProjectSystemMode;
  productMode?: ProjectProductMode;
  productModeData?: ProjectProductMode;
  heroImage?: string;
  images: string[];
  coreVisual: CoreState;
}

export interface ProjectLink {
  label: string;
  url: string;
  type: 'github' | 'live' | 'demo' | 'docs' | 'other';
}

export interface ArchitectureNode {
  id: string;
  label: string;
  description: string;
  type: 'client' | 'server' | 'database' | 'api' | 'service' | 'external';
  connections: string[];
  protocol?: string;
  latency?: string;
}

// ── Skills ────────────────────────────────────────────────────

export interface SkillCategory {
  id: string;
  label: string;
  description: string;
  icon: string;
  skills: Skill[];
  color: string;
}

export interface Skill {
  name: string;
  level: 'exploring' | 'familiar' | 'proficient' | 'advanced' | 'expert';
  tags?: string[];
  relatedProjects?: string[];
}

// ── Experience ────────────────────────────────────────────────

export interface ExperienceEntry {
  id: string;
  year: string;
  endYear?: string;
  title: string;
  organization: string;
  type: 'work' | 'education' | 'milestone' | 'project' | 'certification';
  description: string;
  highlights: string[];
  technologies?: string[];
  label: string; // e.g., "BEGIN", "BUILD", "EXPLORE"
}

// ── Lab Experiments ───────────────────────────────────────────

export interface LabControl {
  id: string;
  label: string;
  min: number;
  max: number;
  defaultVal: number;
  step: number;
}

export interface LabExperiment {
  id: string;
  slug: string;
  title: string;
  description: string;
  whyExists: string;
  category: 'shader' | 'ai' | 'ui' | 'security' | '3d' | 'code';
  tags: string[];
  status: 'live' | 'prototype' | 'concept';
  interactive: boolean;
  keyLearning: string;
  controls?: LabControl[];
  codeSnippet?: string;
}

// ── Now Telemetry ─────────────────────────────────────────────

export interface NowData {
  building: string[];
  learning: string[];
  exploring: string[];
  currentQuestion: string;
  currentExperiment: string;
  updatedAt: string;
}

// ── Mind Scan Clusters ────────────────────────────────────────

export interface MindScanCluster {
  id: string;
  name: string;
  tagline: string;
  summary: string;
  keyConcepts: string[];
  relatedProjects: string[];
  philosophy: string;
}

// ── Journal ───────────────────────────────────────────────────

export interface JournalEntry {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  readTime: string;
  category: 'BUILD' | 'LEARN' | 'SECURITY' | 'AI' | 'WEB' | 'EXPERIMENTS';
  excerpt: string;
  content: string[];
  tags: string[];
  relatedProject?: string;
}

// ── Contact Form ──────────────────────────────────────────────

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  projectType?: string;
  timeline?: string;
}

// ── 3D Core States ────────────────────────────────────────────

export type CoreState = 
  | 'neural'       // HOME - floating neural structure
  | 'orbit'        // ABOUT - calm geometric structure
  | 'nodes'        // WORK - fragmented project nodes
  | 'network'      // SKILLS - connected technical network
  | 'chaos'        // LAB - unstable experimental geometry
  | 'journey'      // EXPERIENCE - journey path
  | 'convergence'  // CONTACT - converging to single point
  | 'void'         // 404 - dark empty space
  | 'resume';      // RESUME - structured grid

// ── Device Capability ─────────────────────────────────────────

export type DeviceTier = 'high' | 'medium' | 'low' | 'minimal';

export interface DeviceCapability {
  tier: DeviceTier;
  gpu: string;
  webgl: boolean;
  webgl2: boolean;
  maxTextureSize: number;
  mobile: boolean;
  touchDevice: boolean;
  pixelRatio: number;
}

// ── Command Palette ───────────────────────────────────────────

export interface CommandItem {
  id: string;
  label: string;
  description?: string;
  category: 'navigation' | 'settings' | 'action' | 'external';
  shortcut?: string;
  action: () => void;
  icon?: string;
}

// ── Motion Config ─────────────────────────────────────────────

export interface MotionConfig {
  duration: {
    fast: number;
    normal: number;
    slow: number;
    cinematic: number;
  };
  ease: {
    smooth: string;
    bounce: string;
    sharp: string;
  };
  stagger: number;
  parallaxIntensity: number;
}
