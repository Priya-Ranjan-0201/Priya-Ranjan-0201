import { NowData, MindScanCluster } from '@/types';

export const nowData: NowData = {
  building: [
    'VIREONIQ — Interactive skill-graph traversal & dynamic learning path visualization',
    'TrustShield-X — Automated containerized vulnerability scanner orchestrator',
    'Custom procedural WebGL computational living structures and shaders',
  ],
  learning: [
    'Deep Systems Architecture — Operating system internals, memory models & distributed consensus',
    'Advanced Neural Network Quantization (INT8 / ONNX runtime CPU execution)',
    'Reverse engineering & low-level network protocol analysis with Wireshark/Scapy',
  ],
  exploring: [
    'Graph Neural Networks for semantic dependency mapping in technical curricula',
    'WebAssembly (WASM) for client-side cryptographic hashing & image matrix transforms',
    'Minimalist interactive digital universes that bridge engineering with art',
  ],
  currentQuestion: 'How can computational graph theory transform career navigation from arbitrary keyword screening into predictable, high-agency skill roadmaps?',
  currentExperiment: 'Simulating 1,000 concurrent network packet headers through Web Workers to measure browser DOM rendering latency.',
  updatedAt: 'Updated September 2026',
};

export const mindScanClusters: MindScanCluster[] = [
  {
    id: 'ai-ml',
    name: 'AI & INTELLIGENCE',
    tagline: 'Semantic Graphs & Interpretable Models',
    summary: 'Building machine learning systems where explainability and real-world utility take precedence over black-box complexity.',
    keyConcepts: ['Vector Embeddings', 'Cosine Trajectories', 'Explainable AI (SHAP)', 'Quantized Inference', 'Tree Ensembles'],
    relatedProjects: ['vireoniq', 'priocardix-ai', 'hrcv'],
    philosophy: 'AI is a powerful computational layer, not magic. If an engineer cannot inspect why a model made a prediction, the model is not production-ready.',
  },
  {
    id: 'security',
    name: 'CYBERSECURITY',
    tagline: 'Defensive Architecture & Attack Surface Analysis',
    summary: 'Investigating digital security through rigorous threat modeling, network socket inspection, and automated vulnerability triage.',
    keyConcepts: ['Attack Surface Reconnaissance', 'CVE Intelligence', 'STRIDE Threat Modeling', 'Network Socket Probing', 'Zero-Trust'],
    relatedProjects: ['trustshield-x'],
    philosophy: 'Security is not a plugin added at deployment; it is the mathematical consequence of how state, authorization, and network boundaries are architected.',
  },
  {
    id: 'systems',
    name: 'SYSTEMS & OS',
    tagline: 'Operating System Fundamentals & Storage Optimization',
    summary: 'Understanding the low-level machine: disk seek kinematics, memory scheduling, concurrency primitives, and hardware constraints.',
    keyConcepts: ['Disk Arm Traversal (SCAN/C-LOOK)', 'Process Scheduling', 'Virtual Memory', 'I/O Event Loops', 'Hardware Latency'],
    relatedProjects: ['disk-scheduling-algorithm'],
    philosophy: 'High-level abstractions leak. Engineers who understand how hardware, operating systems, and disk tracks actually function build radically faster software.',
  },
  {
    id: 'web',
    name: 'MODERN WEB',
    tagline: 'Full-Stack Performance & Creative Technology',
    summary: 'Crafting responsive, zero-runtime-waste digital experiences that feel tactile, responsive, and memorable across devices.',
    keyConcepts: ['Next.js App Router', 'Async Microservices', 'Framer Motion Physics', 'Pure CSS Token Systems', 'State Machines'],
    relatedProjects: ['vireoniq', 'tech-on-tour'],
    philosophy: 'The web is an open canvas for human curiosity. Exceptional interfaces respect user attention, load in milliseconds, and reward interaction.',
  },
  {
    id: 'vision',
    name: 'COMPUTER VISION',
    tagline: 'Real-Time Perception & Edge Feature Detection',
    summary: 'Transforming noisy sensor data and camera frames into actionable spatial coordinates through mathematical image filtering and quantized neural networks.',
    keyConcepts: ['CLAHE Contrast Equalization', 'Spatial Keypoint Tracking', 'OpenCV Pipelines', 'Tensor Quantization', 'Bounding Vectors'],
    relatedProjects: ['hrcv'],
    philosophy: 'Real-world visual perception begins with clean signal processing. 80% of computer vision success happens before the tensor hits the model.',
  },
  {
    id: 'product',
    name: 'PRODUCT THINKING',
    tagline: 'Problem Decomposition & Human-Centered Systems',
    summary: 'Designing systems that people actually use. Balancing algorithmic elegance against human cognitive load and friction.',
    keyConcepts: ['Cognitive Load Reduction', 'Workflow Ergonomics', 'Serendipity vs Optimization', 'Empirical Validation', 'Clarity'],
    relatedProjects: ['vireoniq', 'tech-on-tour', 'braincheck'],
    philosophy: 'Brilliant algorithms solving irrelevant problems are useless. Great engineering starts with understanding the emotional and functional reality of human users.',
  },
  {
    id: 'experiments',
    name: 'EXPERIMENTAL LAB',
    tagline: 'Physics Simulations & Visual Shaders',
    summary: 'A playground for curiosity: exploring particle fields, kinetic typography, gravitational mechanics, and procedural shaders without commercial constraints.',
    keyConcepts: ['Particle Force Fields', 'Vector Distortion', 'Orbital Mechanics', 'GLSL Raymarching', 'Web Audio Synthesizers'],
    relatedProjects: ['braincheck'],
    philosophy: 'Play is the purest form of technical research. When you experiment without fear of failure, you uncover techniques that transform your serious projects.',
  },
];
