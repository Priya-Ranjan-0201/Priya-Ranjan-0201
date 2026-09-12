import { LabExperiment } from '@/types';

export const experiments: LabExperiment[] = [
  {
    id: 'particle-field',
    slug: 'particle-field',
    title: 'Cosmic Particle Field',
    description: 'An interactive 2D canvas force-field where 300 autonomous particles simulate gravitational attraction, velocity damping, and kinetic mouse repulsion.',
    whyExists: 'Investigating how high-density particle swarm systems can run smoothly at 60 FPS in standard browser canvas without allocating per-frame objects.',
    category: 'shader',
    tags: ['Canvas 2D', 'Particle Physics', 'Vectors', 'Interactive'],
    status: 'live',
    interactive: true,
    keyLearning: 'Using typed Float32Arrays for position and velocity vectors prevents garbage collection pauses during continuous physics loops.',
    controls: [
      { id: 'particleCount', label: 'Particle Count', min: 100, max: 600, defaultVal: 320, step: 20 },
      { id: 'gravity', label: 'Attraction Gravity', min: 0.1, max: 2.5, defaultVal: 0.8, step: 0.1 },
      { id: 'friction', label: 'Velocity Friction', min: 0.85, max: 0.99, defaultVal: 0.94, step: 0.01 },
    ],
    codeSnippet: `// Vector update loop avoiding garbage collection allocations
for (let i = 0; i < count; i++) {
  const dx = mouseX - x[i];
  const dy = mouseY - y[i];
  const dist = Math.sqrt(dx * dx + dy * dy) + 1.0;
  const force = (gravity * 100) / (dist * dist);
  vx[i] = (vx[i] + (dx / dist) * force) * friction;
  vy[i] = (vy[i] + (dy / dist) * force) * friction;
  x[i] += vx[i];
  y[i] += vy[i];
}`,
  },
  {
    id: 'type-distortion',
    slug: 'type-distortion',
    title: 'Kinetic Type Distortion',
    description: 'Interactive typography that warps, stretches, and reconstitutes in response to cursor proximity, demonstrating physics-driven letter deformation.',
    whyExists: 'Exploring typography as an elastic physical medium rather than static rigid glyphs, without degrading text readability.',
    category: 'ui',
    tags: ['Typography', 'Canvas', 'Kinetic Motion', 'Interactive'],
    status: 'live',
    interactive: true,
    keyLearning: 'Decomposing vector glyph outlines into spring-damped control points produces tactile, organic deformation.',
    controls: [
      { id: 'distortionRadius', label: 'Displacement Radius', min: 40, max: 200, defaultVal: 110, step: 10 },
      { id: 'elasticity', label: 'Spring Elasticity', min: 0.02, max: 0.3, defaultVal: 0.12, step: 0.01 },
      { id: 'damping', label: 'Spring Damping', min: 0.7, max: 0.95, defaultVal: 0.86, step: 0.01 },
    ],
    codeSnippet: `// Spring-mass restitution on individual glyph vertices
const delta = targetPos - currentPos;
acceleration = delta * springConstant;
velocity = (velocity + acceleration) * damping;
currentPos += velocity;`,
  },
  {
    id: 'gravity-field',
    slug: 'gravity-field',
    title: 'Orbital Gravity Sandbox',
    description: 'A 2D celestial orbital mechanics simulator where users place celestial masses and observe n-body gravitational trajectory paths in real-time.',
    whyExists: 'Examining n-body orbital trajectory calculation in JavaScript and testing symplectic Euler integration for energy conservation.',
    category: '3d',
    tags: ['N-Body Physics', 'Orbit Mechanics', 'Simulation', 'Canvas'],
    status: 'live',
    interactive: true,
    keyLearning: 'Symplectic Euler integration conserves orbital energy far better than standard explicit Euler approximation, preventing artificial orbital decay.',
    controls: [
      { id: 'centralMass', label: 'Central Attractor Mass', min: 500, max: 5000, defaultVal: 2000, step: 100 },
      { id: 'bodyCount', label: 'Active Satellites', min: 3, max: 20, defaultVal: 8, step: 1 },
      { id: 'timeStep', label: 'Simulation Step dt', min: 0.1, max: 1.0, defaultVal: 0.4, step: 0.05 },
    ],
    codeSnippet: `// Symplectic Euler step conserving mechanical orbital energy
for (const b of bodies) {
  const fx = G * (center.x - b.x) * center.mass / (dist * dist * dist);
  const fy = G * (center.y - b.y) * center.mass / (dist * dist * dist);
  b.vx += fx * dt;
  b.vy += fy * dt;
  b.x += b.vx * dt;
  b.y += b.vy * dt;
}`,
  },
  {
    id: 'security-grid',
    slug: 'security-grid',
    title: 'Threat Matrix & Packet Router',
    description: 'An interactive network firewall and threat mitigation simulator where data packets navigate dynamic firewall nodes and intrusion detection rules.',
    whyExists: 'Visualizing packet filtering, stateful inspection, and DDOS mitigation strategies in an intuitive interactive topology.',
    category: 'security',
    tags: ['Network Topology', 'Cybersecurity', 'Packet Routing', 'Interactive'],
    status: 'live',
    interactive: true,
    keyLearning: 'Stateful firewall tables reduce inspection overhead from O(rules * packets) to O(1) hash table lookups for established connections.',
    controls: [
      { id: 'packetRate', label: 'Traffic Ingestion Rate', min: 2, max: 30, defaultVal: 12, step: 2 },
      { id: 'firewallStrictness', label: 'Firewall Sensitivity', min: 1, max: 5, defaultVal: 3, step: 1 },
      { id: 'threatRatio', label: 'Malicious Packet Ratio', min: 0.1, max: 0.8, defaultVal: 0.35, step: 0.05 },
    ],
    codeSnippet: `// Stateful connection tracking hash evaluation
function evaluatePacket(packet: Packet): 'PASS' | 'DROP' | 'INSPECT' {
  if (connectionTable.has(packet.sessionKey)) {
    return 'PASS';
  }
  if (inspectHeuristics(packet) > sensitivityThreshold) {
    return 'DROP';
  }
  connectionTable.set(packet.sessionKey, Date.now());
  return 'PASS';
}`,
  },
  {
    id: 'shader-room',
    slug: 'shader-room',
    title: 'Procedural Mathematical Canvas',
    description: 'Mathematical visual landscapes generated via algorithmic trigonometry, distance functions, and generative Perlin-style noise.',
    whyExists: 'Investigating how complex organic visual complexity can emerge from compact deterministic trigonometric equations.',
    category: 'shader',
    tags: ['Generative Math', 'Trigonometry', 'Procedural Art', 'Canvas'],
    status: 'live',
    interactive: true,
    keyLearning: 'Layering harmonic sine waves with irrational frequency multipliers creates pseudo-random fluid dynamics without expensive noise textures.',
    controls: [
      { id: 'frequency', label: 'Wave Frequency', min: 0.005, max: 0.05, defaultVal: 0.018, step: 0.001 },
      { id: 'amplitude', label: 'Wave Amplitude', min: 20, max: 120, defaultVal: 65, step: 5 },
      { id: 'speed', label: 'Time Flow Speed', min: 0.2, max: 2.0, defaultVal: 0.8, step: 0.1 },
    ],
    codeSnippet: `// Multi-octave wave superposition
const wave = Math.sin(x * freq + t) * Math.cos(y * freq * 1.618 - t) 
           + Math.sin((x + y) * freq * 0.5 + t * 1.5) * 0.5;
const color = \`hsl(\${(wave * 60 + 190) % 360}, 90%, 55%)\`;`,
  },
  {
    id: 'ai-visualizer',
    slug: 'ai-visualizer',
    title: 'Neural Node Latent Space',
    description: 'An interactive neural network activation visualizer that demonstrates forward propagation, weight activations, and decision boundary separation.',
    whyExists: 'Demystifying neural network mechanics by letting users directly manipulate input values and observe layer activations propagate visually.',
    category: 'ai',
    tags: ['Neural Networks', 'Forward Prop', 'AI Architecture', 'Interactive'],
    status: 'live',
    interactive: true,
    keyLearning: 'Non-linear activation functions (ReLU / GELU) are visually evident as geometric folds in the decision boundary space.',
    controls: [
      { id: 'inputX', label: 'Feature Input A', min: -2.0, max: 2.0, defaultVal: 0.5, step: 0.1 },
      { id: 'inputY', label: 'Feature Input B', min: -2.0, max: 2.0, defaultVal: -0.8, step: 0.1 },
      { id: 'threshold', label: 'Activation Threshold', min: 0.1, max: 0.9, defaultVal: 0.5, step: 0.05 },
    ],
    codeSnippet: `// Layer forward pass with ReLU non-linearity
function forwardPass(inputs: number[], weights: number[][], biases: number[]): number[] {
  return weights.map((neuronWeights, idx) => {
    const sum = neuronWeights.reduce((acc, w, i) => acc + w * inputs[i], 0) + biases[idx];
    return Math.max(0, sum); // ReLU activation
  });
}`,
  },
];

export const getExperimentBySlug = (slug: string): LabExperiment | undefined => {
  return experiments.find(e => e.slug === slug);
};
