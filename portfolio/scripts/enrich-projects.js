const fs = require('fs');
const path = require('path');

const projectsPath = path.join(__dirname, '../src/data/projects.ts');
let content = fs.readFileSync(projectsPath, 'utf8');

// Replace old accent colors with #4D7CFF
content = content.replace(/accentColor:\s*'#[^']+'/g, "accentColor: '#4D7CFF'");

// Define enrichment data
const enrichments = {
  vireoniq: {
    domain: "'AI'",
    dna: `{
      nodes: ['PRODUCT', 'AI', 'WEB', 'SYSTEM'],
    }`,
    thinkingMode: `{
      whatIBuilt: 'A full-stack career roadmap and AST static code analyzer backed by FastAPI and Qdrant.',
      problem: 'Keyword search in hiring rewards buzzword stuffing rather than verified architectural understanding.',
      tradeoff: 'Used static AST analysis instead of dynamic code execution—giving up runtime benchmarks to eliminate server sandbox vulnerabilities.',
      decision: 'Chose a dedicated vector database (Qdrant) over relational plugins for fast sub-50ms cosine similarity retrieval.',
      learning: 'Engineers care significantly more about prerequisite dependency trees than an arbitrary match percentage out of 100.',
    }`,
    buildTrace: `[
      { phase: 'IDEA', title: 'Keyword Parsing', detail: 'Explored regex keyword extraction; realized it failed on synonyms and code structure.' },
      { phase: 'PROTOTYPE', title: 'Dense Vectors', detail: 'Tested local sentence-transformers to capture semantic meaning of developer capabilities.' },
      { phase: 'BUILD', title: 'Qdrant & FastAPI', detail: 'Connected vector embeddings to Qdrant vector database and async FastAPI endpoints.' },
      { phase: 'REVISE', title: 'Safe AST Visitor', detail: 'Integrated Python ast.NodeVisitor for runtime-free structural complexity analysis.' },
      { phase: 'CURRENT', title: '153 Test Suite', detail: 'Maintained full-stack release with 153 passing automated test suites and Docker Compose.' },
    ]`,
    relatedItems: `{
      skills: ['Python', 'FastAPI', 'Qdrant', 'React', 'Docker'],
      projects: [{ title: 'Priocardix AI', slug: 'priocardix-ai' }, { title: 'TrustShield X', slug: 'trustshield-x' }],
      experiments: ['ai-visualizer', 'particle-field'],
    }`,
  },
  'trustshield-x': {
    domain: "'CYBERSECURITY'",
    dna: `{
      nodes: ['SECURITY', 'SYSTEMS', 'ASYNC', 'AUDIT'],
    }`,
    thinkingMode: `{
      whatIBuilt: 'Sub-15ms concurrent socket & HTTP security scanner with SHA-256 tamper-evident audit logging.',
      problem: 'Security inspection tools were slow, sequential, and dumped raw unstructured hex outputs.',
      tradeoff: 'Capped connection concurrency with bounded semaphores to protect host OS file descriptors during intense probes.',
      decision: 'Emitted cryptographically signed SHA-256 logs so scan integrity is mathematically verifiable.',
      learning: 'Concurrency without strict timeouts is self-inflicted denial of service. Boundaries are safety.',
    }`,
    buildTrace: `[
      { phase: 'IDEA', title: 'Socket Probing', detail: 'Wrote sequential Python TCP socket probes to test port openness.' },
      { phase: 'PROTOTYPE', title: 'AsyncIO Loop', detail: 'Switched to asynchronous event loop to test hundreds of ports in parallel.' },
      { phase: 'BUILD', title: 'Multi-Vector Core', detail: 'Added HTTP security header validation (CSP, HSTS, X-Frame-Options).' },
      { phase: 'REVISE', title: 'Descriptor Limits', detail: 'Added asyncio.Semaphore(100) after hitting OS file descriptor exhaustion under load.' },
      { phase: 'CURRENT', title: 'Signed Auditing', detail: 'Integrated STIX 2.1 taxonomy and cryptographic SHA-256 audit chaining.' },
    ]`,
    relatedItems: `{
      skills: ['Python 3.13', 'AsyncIO', 'Cryptography', 'STIX 2.1', 'Docker'],
      projects: [{ title: 'VIREONIQ', slug: 'vireoniq' }, { title: 'Brain Check', slug: 'braincheck' }],
      experiments: ['security-grid'],
    }`,
  },
  'tech-on-tour': {
    domain: "'FULL STACK'",
    dna: `{
      nodes: ['WEB', 'GRAPH', 'DATA', 'MAPS'],
    }`,
    thinkingMode: `{
      whatIBuilt: 'Interactive cultural destination explorer with Leaflet tile maps and graph traversal day itineraries.',
      problem: 'Regional travelers struggled to find geographically coherent itineraries connecting heritage spots.',
      tradeoff: 'Prerendered tile coordinates on the client to avoid server GIS database overhead for regional datasets.',
      decision: 'Used cluster markers and graph connectivity algorithms to group nearby monuments logically.',
      learning: 'Spatial visual feedback is vastly more engaging than static tables of GPS coordinates.',
    }`,
    buildTrace: `[
      { phase: 'IDEA', title: 'Data Cleaning', detail: 'Structured regional tourism CSV datasets with verified latitude/longitude.' },
      { phase: 'PROTOTYPE', title: 'Leaflet Integration', detail: 'Rendered vector tile layers with interactive popups.' },
      { phase: 'BUILD', title: 'Graph Traversal', detail: 'Added greedy shortest-path traversal to connect destination points.' },
      { phase: 'REVISE', title: 'Marker Clustering', detail: 'Added clustering to prevent UI lag when rendering hundreds of points.' },
      { phase: 'CURRENT', title: 'Multi-Stop Day Planner', detail: 'Delivered intuitive web itinerary builder with zero external API fees.' },
    ]`,
    relatedItems: `{
      skills: ['JavaScript', 'Leaflet', 'HTML5', 'CSS3', 'Data Structures'],
      projects: [{ title: 'VIREONIQ', slug: 'vireoniq' }, { title: 'Disk Scheduling', slug: 'disk-scheduling' }],
      experiments: ['type-distortion'],
    }`,
  },
  hrcv: {
    domain: "'COMPUTER VISION'",
    dna: `{
      nodes: ['VISION', 'NLP', 'ML', 'SYSTEMS'],
    }`,
    thinkingMode: `{
      whatIBuilt: 'Automated candidate document analysis and visual layout scanner using NLP and computer vision.',
      problem: 'Inconsistent candidate resume layouts break traditional applicant tracking parsers.',
      tradeoff: 'Combined spatial bounding box detection with spaCy NER rather than relying on pure OCR.',
      decision: 'Used Random Forest classifier for role compatibility scoring with transparent feature importances.',
      learning: 'Spatial document geometry carries as much semantic meaning as raw text tokens.',
    }`,
    buildTrace: `[
      { phase: 'IDEA', title: 'Text Extraction', detail: 'Initial regex-based keyword matching on extracted PDF text.' },
      { phase: 'PROTOTYPE', title: 'spaCy NER Model', detail: 'Trained custom named-entity recognition for technical credentials.' },
      { phase: 'BUILD', title: 'Visual Bounding', detail: 'Integrated spatial document layout inspection to distinguish headers from body.' },
      { phase: 'REVISE', title: 'Model Calibration', detail: 'Replaced opaque scoring with multi-factor Random Forest compatibility weights.' },
      { phase: 'CURRENT', title: 'React 19 Dashboard', detail: 'Connected backend pipeline to clean high-contrast React 19 interface.' },
    ]`,
    relatedItems: `{
      skills: ['Python', 'OpenCV', 'spaCy', 'FastAPI', 'React 19'],
      projects: [{ title: 'VIREONIQ', slug: 'vireoniq' }, { title: 'Priocardix AI', slug: 'priocardix-ai' }],
      experiments: ['shader-room', 'ai-visualizer'],
    }`,
  },
  'priocardix-ai': {
    domain: "'AI'",
    dna: `{
      nodes: ['HEALTH', 'AI', 'EXPLAIN', 'UX'],
    }`,
    thinkingMode: `{
      whatIBuilt: 'Interactive cardiovascular risk stratification simulator with TreeSHAP feature attributions and real-time sliders.',
      problem: 'Black-box clinical risk models provide arbitrary risk scores without showing physicians which factor contributed most.',
      tradeoff: 'Executed all state updates client-side in Zustand for instantaneous 60 FPS slider feedback with 100% patient privacy.',
      decision: 'Used game-theoretic TreeSHAP feature attribution to explain risk factors visually rather than opaque probability numbers.',
      learning: 'In high-stakes domains like healthcare, explainability is not an optional luxury—it is the prerequisite for trust.',
    }`,
    buildTrace: `[
      { phase: 'IDEA', title: 'Clinical Formulation', detail: 'Studied standard Framingham and ACC/AHA cardiovascular risk equations.' },
      { phase: 'PROTOTYPE', title: 'Gradient Boosted Tree', detail: 'Trained XGBoost classifier on risk feature sets with cross-validation.' },
      { phase: 'BUILD', title: 'TreeSHAP Integration', detail: 'Generated real-time waterfall plots showing factor contributions.' },
      { phase: 'REVISE', title: 'Client-Side Privacy', detail: 'Ported inference calculation client-side to ensure zero patient data leaves browser.' },
      { phase: 'CURRENT', title: 'Interactive Simulator', detail: 'Shipped reactive scenario exploration tool with Zustand and Tailwind CSS.' },
    ]`,
    relatedItems: `{
      skills: ['Python', 'Scikit-learn', 'XGBoost', 'SHAP', 'React', 'Zustand'],
      projects: [{ title: 'VIREONIQ', slug: 'vireoniq' }, { title: 'HRCV', slug: 'hrcv' }],
      experiments: ['ai-visualizer'],
    }`,
  },
  braincheck: {
    domain: "'FULL STACK'",
    dna: `{
      nodes: ['DEVOPS', 'DOCKER', 'WEB', 'CI/CD'],
    }`,
    thinkingMode: `{
      whatIBuilt: 'Hardened, containerized cognitive evaluation platform built with Flask, PostgreSQL, and multi-stage Docker (<180MB).',
      problem: 'Manual deployment scripts frequently resulted in environment drift and oversized container images (>800MB).',
      tradeoff: 'Stripped build tools from final Docker runtime layer, requiring multi-stage builds but slashing image footprint by 75%.',
      decision: 'Enforced non-root UID 10001 execution and strict healthcheck probes for defense-in-depth container security.',
      learning: 'A great deployment pipeline allows developers to ship code without fear of breaking things at 2 AM.',
    }`,
    buildTrace: `[
      { phase: 'IDEA', title: 'Single Flask Script', detail: 'Built prototype with in-memory assessment questions.' },
      { phase: 'PROTOTYPE', title: 'PostgreSQL & Blueprints', detail: 'Refactored into decoupled Flask application factory with database migrations.' },
      { phase: 'BUILD', title: 'Multi-Stage Docker', detail: 'Authored hardened Dockerfile cutting image size from 820MB down to 174MB.' },
      { phase: 'REVISE', title: 'Non-Root Security', detail: 'Enforced unprivileged user execution to protect host system.' },
      { phase: 'CURRENT', title: 'Automated CI/CD', detail: 'Integrated automated GitHub Actions testing and container linting.' },
    ]`,
    relatedItems: `{
      skills: ['Docker', 'Flask', 'PostgreSQL', 'GitHub Actions', 'Linux'],
      projects: [{ title: 'TrustShield X', slug: 'trustshield-x' }, { title: 'VIREONIQ', slug: 'vireoniq' }],
      experiments: ['security-grid'],
    }`,
  },
  'disk-scheduling': {
    domain: "'SYSTEMS'",
    dna: `{
      nodes: ['SYSTEMS', 'OS', 'CANVAS', 'ALGO'],
    }`,
    thinkingMode: `{
      whatIBuilt: '60 FPS kinematic HTML5 Canvas simulator modeling 11 OS disk scheduling strategies with seek trajectory analytics.',
      problem: 'Students read textbook formulas for disk arm algorithms without developing an intuition for mechanical seek head physics.',
      tradeoff: 'Implemented a custom 2D canvas particle and arm rendering engine instead of heavy 3D frameworks for 60 FPS mobile performance.',
      decision: 'Included SSD flash wear mode alongside HDD mechanical arm traversal to bridge legacy vs modern storage systems.',
      learning: 'High-level abstractions always leak. The closer you understand the physical machine, the better code you write.',
    }`,
    buildTrace: `[
      { phase: 'IDEA', title: 'Displacement Math', detail: 'Calculated mathematical seek distances for FCFS and SSTF in node.js.' },
      { phase: 'PROTOTYPE', title: 'HTML5 Canvas', detail: 'Created basic visual representation of a spinning disk platter and arm.' },
      { phase: 'BUILD', title: '11 Algorithm Engine', detail: 'Implemented SCAN, C-SCAN, LOOK, C-LOOK, and prioritized request queues.' },
      { phase: 'REVISE', title: 'Seek Leaderboard', detail: 'Added real-time comparative leaderboard showing total head displacement.' },
      { phase: 'CURRENT', title: 'SSD Kinematics', detail: 'Added solid-state flash cell wear simulation and educational annotations.' },
    ]`,
    relatedItems: `{
      skills: ['C', 'JavaScript', 'HTML5 Canvas', 'Operating Systems', 'Algorithms'],
      projects: [{ title: 'Tech On Tour', slug: 'tech-on-tour' }, { title: 'TrustShield X', slug: 'trustshield-x' }],
      experiments: ['gravity-field', 'particle-field'],
    }`,
  },
};

// Inject enrichments into content for each project
for (const [slug, data] of Object.entries(enrichments)) {
  const slugRegex = new RegExp(`(slug:\\s*'${slug}',[\\s\\S]*?)(featured:\\s*(?:true|false),)`);
  const match = content.match(slugRegex);
  if (match) {
    const replacement = `${match[1]}${match[2]}
    domain: ${data.domain},
    dna: ${data.dna},
    thinkingMode: ${data.thinkingMode},
    buildTrace: ${data.buildTrace},
    relatedItems: ${data.relatedItems},`;
    content = content.replace(slugRegex, replacement);
    console.log(`Enriched project: ${slug}`);
  } else {
    console.warn(`Could not find project with slug: ${slug}`);
  }
}

fs.writeFileSync(projectsPath, content, 'utf8');
console.log('Successfully enriched projects.ts!');
