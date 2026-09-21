import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'vireoniq',
    slug: 'vireoniq',
    number: '01',
    title: 'VIREONIQ',
    subtitle: 'Developer Career Roadmap & Code Analysis Engine',
    description: 'A developer skill assessment platform that parses submitted code using Python Abstract Syntax Trees (AST) and generates clear, step-by-step learning roadmaps instead of relying on keyword-stuffed resumes.',
    longDescription: 'VIREONIQ helps developers understand where their technical skill gaps actually lie. Rather than matching superficial keywords on a PDF resume, it inspects submitted code structure via Python Abstract Syntax Trees (AST) and uses semantic embeddings in Qdrant to generate prerequisite learning paths.',
    problem: 'Traditional hiring platforms rely on keyword search. They reward candidates who stuff buzzwords into resumes, but cannot tell if someone understands foundational data structures, asynchronous event loops, or clean system design.',
    insight: 'Skills have clear dependency relationships. A programmer who understands memory layout and relational databases can pick up backend frameworks much faster than someone with a checklist of names. Code evaluation is also much safer when analyzing syntax trees directly instead of executing arbitrary code.',
    solution: 'Built an asynchronous FastAPI backend paired with a React frontend. It parses code submissions into an Abstract Syntax Tree to compute structural complexity metrics without execution risk, compares the profile against job market vectors in Qdrant, and returns an ordered prerequisite roadmap.',
    impact: 'Engineered a clean full-stack platform backed by 153 automated test cases covering AST parsing, vector similarity retrieval, and API endpoints.',
    tags: ['Python', 'FastAPI', 'React', 'Qdrant Vector DB', 'AST', 'Docker'],
    technologies: ['Python', 'FastAPI', 'React 18', 'PyTorch', 'Qdrant Vector DB', 'PostgreSQL', 'Redis', 'Docker Compose'],
    category: 'Developer Tools',
    year: '2024',
    status: 'completed',
    projectState: 'ACTIVE',
    featured: true,
    domain: 'AI',
    dna: {
      nodes: ['PRODUCT', 'AI', 'WEB', 'SYSTEM'],
    },
    thinkingMode: {
      whatIBuilt: 'A full-stack career roadmap and AST static code analyzer backed by FastAPI and Qdrant.',
      problem: 'Keyword search in hiring rewards buzzword stuffing rather than verified architectural understanding.',
      tradeoff: 'Used static AST analysis instead of dynamic code execution—giving up runtime benchmarks to eliminate server sandbox vulnerabilities.',
      decision: 'Chose a dedicated vector database (Qdrant) over relational plugins for fast sub-50ms cosine similarity retrieval.',
      learning: 'Engineers care significantly more about prerequisite dependency trees than an arbitrary match percentage out of 100.',
    },
    buildTrace: [
      { phase: 'IDEA', title: 'Keyword Parsing', detail: 'Explored regex keyword extraction; realized it failed on synonyms and code structure.' },
      { phase: 'PROTOTYPE', title: 'Dense Vectors', detail: 'Tested local sentence-transformers to capture semantic meaning of developer capabilities.' },
      { phase: 'BUILD', title: 'Qdrant & FastAPI', detail: 'Connected vector embeddings to Qdrant vector database and async FastAPI endpoints.' },
      { phase: 'REVISE', title: 'Safe AST Visitor', detail: 'Integrated Python ast.NodeVisitor for runtime-free structural complexity analysis.' },
      { phase: 'CURRENT', title: '153 Test Suite', detail: 'Maintained full-stack release with 153 passing automated test suites and Docker Compose.' },
    ],
    relatedItems: {
      skills: ['Python', 'FastAPI', 'Qdrant', 'React', 'Docker'],
      projects: [{ title: 'Priocardix AI', slug: 'priocardix-ai' }, { title: 'TrustShield X', slug: 'trustshield-x' }],
      experiments: ['ai-visualizer', 'particle-field'],
    },
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/Priya-Ranjan-0201/VIREONIQ', type: 'github' },
    ],
    architecture: [
      { id: 'client', label: 'React Frontend', description: 'Interactive roadmap explorer and skill assessment dashboard', type: 'client', connections: ['api'], protocol: 'HTTPS' },
      { id: 'api', label: 'FastAPI Service', description: 'Asynchronous API managing authentication, rate-limiting, and analysis dispatch', type: 'api', connections: ['ast', 'qdrant', 'db', 'cache'], protocol: 'REST' },
      { id: 'ast', label: 'AST Code Analyzer', description: 'Python syntax tree visitor evaluating code structure safely without execution', type: 'service', connections: ['api'], protocol: 'Internal' },
      { id: 'qdrant', label: 'Qdrant Vector DB', description: 'Semantic vector search matching candidate skills against market requirements', type: 'database', connections: ['api'], protocol: 'gRPC' },
      { id: 'cache', label: 'Redis Cache', description: 'In-memory caching for session state and frequent query responses', type: 'service', connections: ['api'], protocol: 'TCP' },
      { id: 'db', label: 'PostgreSQL DB', description: 'Relational storage for user accounts, roadmaps, and taxonomy hierarchies', type: 'database', connections: [], protocol: 'SQL' },
    ],
    features: [
      'Safe Abstract Syntax Tree (AST) static code analysis evaluating complexity without running arbitrary code',
      'Semantic vector similarity search using Qdrant to find closest market skill requirements',
      'Directed prerequisite roadmap generator that shows which foundational skills to learn first',
      'Asynchronous task workers with Redis caching for snappy user responses',
    ],
    challenges: [
      'Evaluating untrusted student code safely without needing an expensive, high-risk container sandbox',
      'Indexing and querying high-dimensional vector embeddings with low latency',
      'Designing an intuitive roadmap visualization that students can understand in seconds',
    ],
    lessons: [
      'Static AST parsing provides 80% of the insights needed for code evaluation with 0% of the security risks of dynamic code execution',
      'Dedicated vector databases like Qdrant perform significantly faster than relational database plugins for similarity search',
      'Clear prerequisite trees build user trust far better than a single opaque match percentage',
    ],
    iterations: [
      { phase: 'Phase 01', title: 'Keyword Parsing Prototype', desc: 'Initial experiment using bag-of-words regex matching. Proved too brittle for synonyms.' },
      { phase: 'Phase 02', title: 'Vector Search Integration', desc: 'Integrated dense vector embeddings with Qdrant for semantic distance calculations.' },
      { phase: 'Phase 03', title: 'AST Parsing & Full Stack', desc: 'Added Python AST code analysis and completed the React frontend with 153 passing test cases.' },
    ],
    future: 'Extending the AST static analyzer to support TypeScript and C++ submissions.',
    learned: {
      technical: 'Python ast.NodeVisitor makes it easy to measure cyclomatic complexity and check for recursion without runtime risks.',
      product: 'Users care much more about "what to learn next" than a single arbitrary score out of 100.',
      design: 'Clean, typography-driven cards are easier to read than dense multi-colored radar charts.',
      mistake: 'Initially tried to run vector similarity inside standard PostgreSQL before switching to dedicated Qdrant indexing.',
      nextImprovement: 'Adding automatic test case hints based on parsed function signatures.',
    },
    metrics: [
      { label: 'Automated Tests', value: '153 / 153 Passing', detail: 'Unit, AST parsing, and vector retrieval integration tests' },
      { label: 'Skill Taxonomy', value: '9 Core Disciplines', detail: 'Architecture, systems, algorithms, backend, and security' },
      { label: 'Code Safety', value: '100% AST Static', detail: 'Zero runtime execution required for structural evaluation' },
    ],
    outcomes: [
      'Built and deployed a decoupled FastAPI and React application orchestrated with Docker Compose.',
      'Implemented semantic similarity search using Qdrant vector database.',
      'Validated system correctness with 153 automated test suites.',
    ],
    accentColor: '#1B4332',
    systemModeData: {
      architectureSummary: 'Decoupled architecture with React frontend and asynchronous FastAPI backend, orchestrated with Docker Compose and backed by Qdrant and PostgreSQL.',
      dataFlow: 'Client sends skill profile or code snippet -> FastAPI verifies input -> AST module evaluates syntax tree -> Qdrant computes vector embeddings -> Roadmap returned.',
      stackDetails: [
        { layer: 'Frontend', tech: 'React 18, Vite', rationale: 'Fast, responsive client interface with zero runtime bloat.' },
        { layer: 'API Backend', tech: 'FastAPI (Python 3.11)', rationale: 'Native async performance with seamless Python ML library integration.' },
        { layer: 'Vector Search', tech: 'Qdrant Vector DB', rationale: 'Specialized vector search with fast cosine distance retrieval.' },
        { layer: 'Database & Cache', tech: 'PostgreSQL, Redis', rationale: 'Reliable relational storage paired with in-memory caching.' },
      ],
      securityTradeoffs: 'Stateless JWT authentication; untrusted code inspected strictly via AST visitors without dynamic execution.',
      codeSnippet: `import ast

def analyze_code_structure(source_code: str) -> dict:
    """Safely evaluates code complexity via syntax trees without executing arbitrary code."""
    tree = ast.parse(source_code)
    visitor = ComplexityVisitor()
    visitor.visit(tree)
    return {
        "function_count": visitor.function_count,
        "cyclomatic_complexity": visitor.complexity,
        "has_recursion": visitor.has_recursion,
    }`,
    },
    productModeData: {
      userWorkflow: '1. Paste code snippet or select skills -> 2. Review automated structural feedback -> 3. View recommended prerequisite learning roadmap.',
      targetAudience: 'Computer science students and junior engineers seeking structured, evidence-based learning paths.',
      keyDifferentiator: 'Replaces black-box match scores with clear prerequisite dependencies and safe code diagnostics.',
      visualHighlights: [
        'Clear prerequisite dependency cards showing what to learn before moving forward',
        'Direct static code diagnostics with line-by-line observations',
        'Clean, high-contrast dark interface with generous whitespace',
      ],
    },
    images: ['/images/vireoniq-thumb.jpg'],
    coreVisual: 'network',
  },
  {
    id: 'trustshield-x',
    slug: 'trustshield-x',
    number: '02',
    title: 'TRUSTSHIELD X',
    subtitle: 'Concurrent Threat Scanner & Security Analysis Tool',
    description: 'A fast, concurrent security scanner built in Python 3.13 asyncio that tests open ports, security headers, and payment links in under 15ms with tamper-evident audit logs.',
    longDescription: 'TrustShield X is an automated security scanner designed to provide rapid visibility into common attack surfaces. By executing asynchronous socket and HTTP probes in parallel, it audits open ports, missing HTTPS headers, and suspicious payment URLs, writing all results to SHA-256 signed audit logs.',
    problem: 'Developers and small teams frequently use three or four disparate tools to inspect network ports, HTTP header configurations, and suspicious URLs. Most scanners are slow, sequential, and produce messy unstructured outputs.',
    insight: 'Most basic recon tasks can be parallelized with modern asynchronous I/O. Using bounded connection pools and strict timeouts keeps network scans fast and prevents exhausting system resources.',
    solution: 'Engineered a concurrent scanner in Python 3.13 using asyncio and FastAPI. Probes network ports, checks HTTP security headers (CSP, HSTS, X-Frame-Options), and validates payment links concurrently within 15ms. Emits SHA-256 hashed audit records for tamper verification.',
    impact: 'Delivered an automated scanner that audits targets in parallel with deterministic timeouts and cryptographically signed audit logs.',
    tags: ['Python 3.13', 'AsyncIO', 'FastAPI', 'Cybersecurity', 'Docker'],
    technologies: ['Python 3.13', 'FastAPI', 'AsyncIO', 'PyCryptodome', 'PostgreSQL', 'Docker'],
    category: 'Security Tools',
    year: '2024',
    status: 'completed',
    projectState: 'ACTIVE',
    featured: true,
    domain: 'CYBERSECURITY',
    dna: {
      nodes: ['SECURITY', 'SYSTEMS', 'ASYNC', 'AUDIT'],
    },
    thinkingMode: {
      whatIBuilt: 'Sub-15ms concurrent socket & HTTP security scanner with SHA-256 tamper-evident audit logging.',
      problem: 'Security inspection tools were slow, sequential, and dumped raw unstructured hex outputs.',
      tradeoff: 'Capped connection concurrency with bounded semaphores to protect host OS file descriptors during intense probes.',
      decision: 'Emitted cryptographically signed SHA-256 logs so scan integrity is mathematically verifiable.',
      learning: 'Concurrency without strict timeouts is self-inflicted denial of service. Boundaries are safety.',
    },
    buildTrace: [
      { phase: 'IDEA', title: 'Socket Probing', detail: 'Wrote sequential Python TCP socket probes to test port openness.' },
      { phase: 'PROTOTYPE', title: 'AsyncIO Loop', detail: 'Switched to asynchronous event loop to test hundreds of ports in parallel.' },
      { phase: 'BUILD', title: 'Multi-Vector Core', detail: 'Added HTTP security header validation (CSP, HSTS, X-Frame-Options).' },
      { phase: 'REVISE', title: 'Descriptor Limits', detail: 'Added asyncio.Semaphore(100) after hitting OS file descriptor exhaustion under load.' },
      { phase: 'CURRENT', title: 'Signed Auditing', detail: 'Integrated STIX 2.1 taxonomy and cryptographic SHA-256 audit chaining.' },
    ],
    relatedItems: {
      skills: ['Python 3.13', 'AsyncIO', 'Cryptography', 'STIX 2.1', 'Docker'],
      projects: [{ title: 'VIREONIQ', slug: 'vireoniq' }, { title: 'Brain Check', slug: 'braincheck' }],
      experiments: ['security-grid'],
    },
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/Priya-Ranjan-0201/TrustShield-X', type: 'github' },
    ],
    architecture: [
      { id: 'dashboard', label: 'Security HUD', description: 'Real-time threat posture visualizer, invariant monitor & incident logs', type: 'client', connections: ['gateway'], protocol: 'HTTPS' },
      { id: 'gateway', label: 'FastAPI Gateway', description: 'Async task orchestrator enforcing 7 security invariants on all incoming routes', type: 'api', connections: ['scanner', 'stix', 'audit'], protocol: 'REST / Async' },
      { id: 'scanner', label: 'Parallel Multi-Vector Core', description: 'Concurrent sub-12ms inspection of URLs, QR/UPI payloads, and SMS vectors', type: 'service', connections: ['stix'], protocol: 'AsyncIO Tasks' },
      { id: 'stix', label: 'STIX 2.1 Threat Fabric', description: 'Standardized threat intelligence mapping and incident classification', type: 'service', connections: ['audit'], protocol: 'STIX JSON' },
      { id: 'audit', label: 'Cryptographic Audit Logger', description: 'SHA-256 tamper-evident transaction logs and audit trail store', type: 'database', connections: [], protocol: 'Signed SQL' },
    ],
    features: [
      'Concurrent port and socket scanner checking TCP connectivity without blocking the event loop',
      'HTTP security header auditor inspecting Content-Security-Policy, HSTS, and X-Frame-Options',
      'Tamper-evident audit logger writing SHA-256 hashes of all scan results',
      'Modular rule checker allowing quick addition of custom vulnerability checks',
    ],
    challenges: [
      'Preventing asynchronous socket probes from exhausting OS file descriptors under high concurrency',
      'Enforcing strict connection timeouts so slow external DNS servers do not stall the scan',
      'Generating clean, human-readable reports with actionable remediation advice',
    ],
    lessons: [
      'Asynchronous I/O with Python asyncio delivers massive speedups for network testing when concurrency is bounded by semaphores',
      'Cryptographically hashing scan outputs gives users verifiable proof that audit logs were not modified after the fact',
      'Giving engineers clear fix instructions is far more valuable than dumping raw hex error codes',
    ],
    iterations: [
      { phase: 'Phase 01', title: 'CLI Socket Scanner', desc: 'Basic sequential socket checker. Proved the detection logic but was too slow.' },
      { phase: 'Phase 02', title: 'Async Multi-Probe Engine', desc: 'Rewrote engine using Python asyncio, achieving parallel scanning across web and port checks in sub-15ms.' },
      { phase: 'Phase 03', title: 'Cryptographic Auditing', desc: 'Added SHA-256 audit logging to guarantee scan integrity.' },
    ],
    future: 'Adding automated SSL certificate expiration alerts and subdomain discovery.',
    learned: {
      technical: 'AsyncIO gather with strict per-task timeouts prevents slow external DNS lookups from degrading total scan time.',
      product: 'Users need concise threat severity scores and immediate mitigation steps.',
      design: 'Clean, warm status cards make it easy to spot failing security headers instantly.',
      mistake: 'Initially used synchronous socket calls that blocked the event loop under burst network traffic.',
      nextImprovement: 'Adding client-side offline QR link verification.',
    },
    metrics: [
      { label: 'Scan Latency', value: 'sub-15ms', detail: 'Concurrent asynchronous inspection across web and port probes' },
      { label: 'Integrity Check', value: 'SHA-256 Signed', detail: 'Cryptographic tamper-evident audit trail for every completed scan' },
      { label: 'Concurrency', value: 'Bounded AsyncIO', detail: 'Semaphore-controlled socket pool preventing socket exhaustion' },
    ],
    outcomes: [
      'Built a high-speed asynchronous network and payload scanner in Python 3.13.',
      'Implemented automated HTTP security header and port vulnerability checks.',
      'Enforced tamper-evident cryptographic audit logs for all security scans.',
    ],
    accentColor: '#1B4332',
    systemModeData: {
      architectureSummary: 'Asynchronous Python scanner orchestrating parallel port probes, header verifications, and cryptographic logging.',
      dataFlow: 'Target URL or IP entered -> Async tasks dispatched to port and header checkers -> Results aggregated -> SHA-256 audit record written -> Clean report displayed.',
      stackDetails: [
        { layer: 'Frontend UI', tech: 'React, Tailwind CSS, Lucide Icons', rationale: 'Clean, responsive interface with clear risk callouts.' },
        { layer: 'Scanner Core', tech: 'Python 3.13, FastAPI, AsyncIO', rationale: 'Fast asynchronous concurrency with minimal memory overhead.' },
        { layer: 'Cryptography & DB', tech: 'PyCryptodome, PostgreSQL', rationale: 'SHA-256 audit hashing and reliable record persistence.' },
      ],
      securityTradeoffs: 'All scans run with explicit connection timeouts; no credentials stored.',
      codeSnippet: `async def scan_target_concurrent(target: str) -> ScanReport:
    """Dispatches concurrent inspection tasks across open ports and security headers."""
    port_task = asyncio.create_task(check_common_ports(target))
    header_task = asyncio.create_task(check_http_headers(target))
    
    ports, headers = await asyncio.gather(port_task, header_task)
    report = generate_report(ports, headers)
    sign_audit_record(report)
    return report`,
    },
    productModeData: {
      userWorkflow: '1. Enter target URL or host -> 2. Scanner tests ports and headers concurrently -> 3. Review high-priority fixes -> 4. Export signed audit report.',
      targetAudience: 'Developers and small engineering teams wanting quick visibility into their server and web app configurations.',
      keyDifferentiator: 'Fast parallel checks combined with clean, plain-English remediation advice.',
      visualHighlights: [
        'Clear green/amber/red status badges for each security header',
        'Direct copy-paste header configuration snippets for Nginx and Apache',
        'Downloadable signed audit certificate',
      ],
    },
    images: ['/images/trustshield-thumb.jpg'],
    coreVisual: 'chaos',
  },
  {
    id: 'tech-on-tour',
    slug: 'tech-on-tour',
    number: '03',
    title: 'TECH ON TOUR',
    subtitle: 'Intelligent Regional Exploration & Tourism Graph Engine',
    description: 'A location-intelligent travel and regional discovery platform utilizing graph route traversal and spatial datasets to plan cultural heritage itineraries.',
    longDescription: 'TECH ON TOUR transforms cultural and heritage travel through spatial data structures. Designed with curated regional datasets (including Bihar heritage and tourism sites), it maps historical landmarks, coordinates, and transit metadata into an interactive route optimization graph.',
    problem: 'Travelers exploring heritage and regional tourism circuits struggle with scattered information, unreliable opening schedules, and fragmented transport links, resulting in inefficient transit and missed cultural landmarks.',
    insight: 'Regional tourism is an interconnected topological network. Connecting historical sites into a graph where edges reflect real-world transit feasibility allows dynamic route generation without rigid travel agencies.',
    solution: 'Developed a full-stack platform combining structured CSV and GeoJSON spatial datasets with graph route traversal algorithms. Provides interactive map views, transit details, and historical context for cultural monuments.',
    impact: 'Curated comprehensive multi-district heritage datasets and implemented interactive route generation for regional exploration.',
    tags: ['Geospatial', 'Python', 'Leaflet', 'Pandas', 'Graph Routing', 'CSV Datasets'],
    technologies: ['Python', 'Pandas', 'Flask / FastAPI', 'Leaflet / Mapbox', 'HTML5 Canvas', 'Vanilla JS', 'CSV / GeoJSON'],
    category: 'Geospatial Platform',
    year: '2024',
    status: 'completed',
    projectState: 'ACTIVE',
    featured: true,
    domain: 'FULL STACK',
    dna: {
      nodes: ['WEB', 'GRAPH', 'DATA', 'MAPS'],
    },
    thinkingMode: {
      whatIBuilt: 'Interactive cultural destination explorer with Leaflet tile maps and graph traversal day itineraries.',
      problem: 'Regional travelers struggled to find geographically coherent itineraries connecting heritage spots.',
      tradeoff: 'Prerendered tile coordinates on the client to avoid server GIS database overhead for regional datasets.',
      decision: 'Used cluster markers and graph connectivity algorithms to group nearby monuments logically.',
      learning: 'Spatial visual feedback is vastly more engaging than static tables of GPS coordinates.',
    },
    buildTrace: [
      { phase: 'IDEA', title: 'Data Cleaning', detail: 'Structured regional tourism CSV datasets with verified latitude/longitude.' },
      { phase: 'PROTOTYPE', title: 'Leaflet Integration', detail: 'Rendered vector tile layers with interactive popups.' },
      { phase: 'BUILD', title: 'Graph Traversal', detail: 'Added greedy shortest-path traversal to connect destination points.' },
      { phase: 'REVISE', title: 'Marker Clustering', detail: 'Added clustering to prevent UI lag when rendering hundreds of points.' },
      { phase: 'CURRENT', title: 'Multi-Stop Day Planner', detail: 'Delivered intuitive web itinerary builder with zero external API fees.' },
    ],
    relatedItems: {
      skills: ['JavaScript', 'Leaflet', 'HTML5', 'CSS3', 'Data Structures'],
      projects: [{ title: 'VIREONIQ', slug: 'vireoniq' }, { title: 'Disk Scheduling', slug: 'disk-scheduling' }],
      experiments: ['type-distortion'],
    },
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/Priya-Ranjan-0201/TECH-ON-TOUR', type: 'github' },
    ],
    architecture: [
      { id: 'client', label: 'Interactive Travel Map', description: 'Responsive map client with marker clustering and route overlay', type: 'client', connections: ['api'], protocol: 'HTTPS' },
      { id: 'api', label: 'Backend Routing Gateway', description: 'Location calculation, destination filtering, and place metadata API', type: 'api', connections: ['geo-engine', 'data'], protocol: 'REST' },
      { id: 'geo-engine', label: 'Spatial Route Optimizer', description: 'Graph traversal and distance matrix calculation engine', type: 'service', connections: ['data'], protocol: 'Internal' },
      { id: 'data', label: 'Spatial Dataset Store', description: 'Curated CSV datasets and GeoJSON coordinates for regional heritage sites', type: 'database', connections: [], protocol: 'Pandas / File' },
    ],
    features: [
      'Curated Regional Tourism Datasets spanning key historical and cultural districts',
      'Dynamic Itinerary Route Optimizer calculating minimal travel friction between monuments',
      'Interactive Map Interface with custom markers, coordinates, and transit guides',
      'Historical context briefs, operational timings, and local travel advisories per destination',
      'Multi-district exploration filters categorizing sites by cultural and archaeological significance',
    ],
    challenges: [
      'Normalizing non-standardized coordinate formats and municipal place names across historical records',
      'Developing route optimization that accounts for regional transport limitations and operating hours',
      'Designing lightweight client maps that load swiftly on low-bandwidth mobile connections',
    ],
    lessons: [
      'Clean data preprocessing and normalization in Pandas is fundamental for reliable spatial calculations',
      'Itinerary routing must include human rest and transit buffers rather than optimizing purely for Euclidean distance',
      'Offline-capable spatial caching is essential for regional travel applications in areas with patchy cellular connectivity',
    ],
    iterations: [
      { phase: 'Phase 01', title: 'Dataset Ingestion & Cleaning', desc: 'Compiled and structured regional tourism CSV datasets covering heritage locations, coordinates, and categories.' },
      { phase: 'Phase 02', title: 'Interactive Map Prototype', desc: 'Integrated Leaflet vector tiles and marker clustering for visual destination exploration.' },
      { phase: 'Phase 03', title: 'Graph Route Traversal', desc: 'Implemented multi-stop route traversal algorithms to connect cultural landmarks into coherent day itineraries.' },
    ],
    future: 'Integrating regional public transit schedules and local weather prediction to adapt outdoor itineraries dynamically.',
    learned: {
      technical: 'Haversine distance calculations are fast for proximity sorting, but graph pathfinding is required for actual travel itineraries.',
      product: 'Travelers prioritize verified operational timings and local transit tips over extensive generic descriptions.',
      design: 'Bottom-sheet drawers provide the most ergonomic mobile experience when navigating on foot.',
      mistake: 'Initially assumed road distances matched straight-line Euclidean distance in regional terrains.',
      nextImprovement: 'Adding offline PWA caching for maps and heritage guides.',
    },
    metrics: [
      { label: 'Spatial Coverage', value: 'Multi-District', detail: 'Curated heritage monuments, cultural landmarks, and waypoints' },
      { label: 'Route Computation', value: 'Graph Traversal', detail: 'Constrained spatial path calculation minimizing inter-stop transit friction' },
      { label: 'Data Architecture', value: 'CSV & GeoJSON', detail: 'Structured spatial coordinate matrices and localized destination metadata' },
    ],
    outcomes: [
      'Curated structured regional heritage datasets spanning multiple districts and cultural circuits.',
      'Implemented graph traversal route optimizer for multi-stop itinerary planning.',
      'Built responsive interactive map interface with rich monument metadata and transit insights.',
    ],
    accentColor: '#1B4332',
    systemModeData: {
      architectureSummary: 'Spatial web application combining Pandas data processing pipelines with graph route optimization and interactive vector map rendering.',
      dataFlow: 'Client selects destination district -> API queries normalized spatial dataset -> Routing engine solves constrained waypoint traversal -> Route rendered on interactive map.',
      stackDetails: [
        { layer: 'Frontend UI', tech: 'HTML5, CSS3, Vanilla JS / Leaflet', rationale: 'Fast, lightweight map rendering without heavy commercial SDK bundles.' },
        { layer: 'Backend Server', tech: 'Python (Flask / FastAPI)', rationale: 'Efficient spatial data filtering and seamless integration with Pandas.' },
        { layer: 'Data Processing', tech: 'Pandas, NumPy', rationale: 'Fast tabular manipulation and spatial coordinate distance calculations.' },
        { layer: 'Data Store', tech: 'Normalized CSV & GeoJSON', rationale: 'Portable, version-controlled spatial datasets of regional heritage sites.' },
      ],
      securityTradeoffs: 'Client coordinate queries handled ephemerally; no user location history is tracked or permanently stored.',
      codeSnippet: `import pandas as pd
from math import radians, sin, cos, sqrt, atan2

def haversine_distance(coord1: tuple[float, float], coord2: tuple[float, float]) -> float:
    """Computes great-circle distance between two geographic coordinates in kilometers."""
    R = 6371.0 # Earth radius in km
    lat1, lon1 = map(radians, coord1)
    lat2, lon2 = map(radians, coord2)
    dlat, dlon = lat2 - lat1, lon2 - lon1
    a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))
    return R * c`,
    },
    productModeData: {
      userWorkflow: '1. Select regional district or heritage circuit -> 2. Inspect cultural landmarks on interactive map -> 3. Generate optimal route connecting waypoints -> 4. Review travel tips and monument histories.',
      targetAudience: 'Travelers, cultural explorers, and students seeking authentic regional heritage information and efficient itineraries.',
      keyDifferentiator: 'Curated regional cultural datasets paired with dynamic graph route generation rather than commercial tourist advertisements.',
      visualHighlights: [
        'Fluid interactive map with custom thematic map markers and connecting transit paths',
        'Detailed destination drawer with historical context and visiting guidelines',
        'Responsive layout optimized for handheld exploration in regional areas',
      ],
    },
    images: ['/images/archive-thumb.jpg'],
    coreVisual: 'orbit',
  },
  {
    id: 'hrcv',
    slug: 'hrcv',
    number: '04',
    title: 'HRCV',
    subtitle: 'AI-Powered Resume Parsing & ATS Compatibility Intelligence',
    description: 'An intelligent career platform combining spaCy natural language entity extraction, ATS compatibility grading, and Random Forest machine learning classification.',
    longDescription: 'HRCV automates the extraction and evaluation of candidate profiles. Built with FastAPI, React 19, and Tailwind v4, it tokenizes raw PDF resumes, extracts skills and certifications using spaCy NLP, and predicts job alignment using a scikit-learn Random Forest model.',
    problem: 'Applicant Tracking Systems (ATS) reject qualified resumes due to non-standard formatting or missing arbitrary keywords, leaving job seekers without actionable feedback on why their application was disqualified.',
    insight: 'Resume evaluation should be diagnostic and transparent. By decoupling structural PDF parsing from semantic entity extraction, the system can highlight exact formatting defects and missing domain competencies.',
    solution: 'Engineered an end-to-end pipeline with React 19 and FastAPI. Ingests PDF resumes, runs spaCy Named Entity Recognition to identify technical tools and credentials, scores ATS formatting compatibility, and runs a Random Forest classifier for candidate-role matching.',
    impact: 'Built a modern reactive dashboard with instant PDF parsing, entity extraction, and actionable ATS improvement diagnostics.',
    tags: ['NLP', 'FastAPI', 'React 19', 'spaCy', 'Machine Learning', 'Tailwind v4'],
    technologies: ['Python 3.12+', 'FastAPI', 'React 19', 'Vite', 'Tailwind CSS v4', 'spaCy NLP', 'Scikit-Learn', 'PyPDF2'],
    category: 'NLP & Intelligence',
    year: '2024',
    status: 'completed',
    projectState: 'COMPLETED',
    featured: true,
    domain: 'COMPUTER VISION',
    dna: {
      nodes: ['VISION', 'NLP', 'ML', 'SYSTEMS'],
    },
    thinkingMode: {
      whatIBuilt: 'Automated candidate document analysis and visual layout scanner using NLP and computer vision.',
      problem: 'Inconsistent candidate resume layouts break traditional applicant tracking parsers.',
      tradeoff: 'Combined spatial bounding box detection with spaCy NER rather than relying on pure OCR.',
      decision: 'Used Random Forest classifier for role compatibility scoring with transparent feature importances.',
      learning: 'Spatial document geometry carries as much semantic meaning as raw text tokens.',
    },
    buildTrace: [
      { phase: 'IDEA', title: 'Text Extraction', detail: 'Initial regex-based keyword matching on extracted PDF text.' },
      { phase: 'PROTOTYPE', title: 'spaCy NER Model', detail: 'Trained custom named-entity recognition for technical credentials.' },
      { phase: 'BUILD', title: 'Visual Bounding', detail: 'Integrated spatial document layout inspection to distinguish headers from body.' },
      { phase: 'REVISE', title: 'Model Calibration', detail: 'Replaced opaque scoring with multi-factor Random Forest compatibility weights.' },
      { phase: 'CURRENT', title: 'React 19 Dashboard', detail: 'Connected backend pipeline to clean high-contrast React 19 interface.' },
    ],
    relatedItems: {
      skills: ['Python', 'OpenCV', 'spaCy', 'FastAPI', 'React 19'],
      projects: [{ title: 'VIREONIQ', slug: 'vireoniq' }, { title: 'Priocardix AI', slug: 'priocardix-ai' }],
      experiments: ['shader-room', 'ai-visualizer'],
    },
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/Priya-Ranjan-0201/HRCV-', type: 'github' },
    ],
    architecture: [
      { id: 'ui', label: 'React 19 Dashboard', description: 'Interactive resume uploader, entity highlights & ATS score matrix', type: 'client', connections: ['gateway'], protocol: 'HTTPS' },
      { id: 'gateway', label: 'FastAPI Service', description: 'Async endpoint managing document upload, extraction, and model inference', type: 'api', connections: ['parser', 'spacy', 'rf'], protocol: 'REST' },
      { id: 'parser', label: 'PDF Text Extractor', description: 'PyPDF2 extraction pipeline segmenting contact, experience, and skill sections', type: 'service', connections: ['spacy'], protocol: 'IPC' },
      { id: 'spacy', label: 'spaCy NER Pipeline', description: 'Named Entity Recognition model classifying technical skills and certifications', type: 'service', connections: ['rf'], protocol: 'Memory' },
      { id: 'rf', label: 'Random Forest Model', description: 'Scikit-learn classification engine predicting candidate-role compatibility tier', type: 'service', connections: [], protocol: 'IPC' },
    ],
    features: [
      'Automated PDF text extraction and multi-section document segmenting',
      'spaCy Named Entity Recognition extracting skills, tools, and certifications',
      'ATS compatibility score diagnosing formatting issues and keyword absences',
      'Random Forest machine learning classifier evaluating candidate-job alignment',
      'Interactive React 19 dashboard built with Vite and Tailwind CSS v4',
    ],
    challenges: [
      'Handling multi-column and non-standard PDF resume layouts without garbling text order',
      'Distinguishing between technical tools and generic terminology in unstructured candidate resumes',
      'Delivering sub-second parsing and evaluation feedback to the web client',
    ],
    lessons: [
      'Document preprocessing and whitespace normalization are vital for accurate NLP tokenization',
      'Entity recognition models require curated technical taxonomies to avoid false-negative skill omissions',
      'Users need clear, prioritized feedback on missing keywords to improve application outcomes',
    ],
    iterations: [
      { phase: 'Phase 01', title: 'Regex Keyword Matcher', desc: 'Initial prototype matching raw text against hardcoded skill lists. Highly brittle to synonyms.' },
      { phase: 'Phase 02', title: 'spaCy NER Pipeline', desc: 'Integrated trained spaCy entity recognition for context-aware extraction of technical tools and certifications.' },
      { phase: 'Phase 03', title: 'Full-Stack React 19 & Random Forest', desc: 'Built modern React 19 and Tailwind v4 frontend connected to FastAPI and Random Forest role compatibility classifier.' },
    ],
    future: 'Adding real-time LaTeX resume template generation tailored to specific job vacancy descriptions.',
    learned: {
      technical: 'FastAPI async file upload handlers stream multipart data efficiently without buffering large files in memory.',
      product: 'Visual highlight overlays showing exactly where entities were detected in the resume build user trust.',
      design: 'Clean split-pane layouts allow users to view their parsed resume and ATS diagnostics simultaneously.',
      mistake: 'Initially attempted to parse raw PDF coordinates directly before adopting structured text stream tokenization.',
      nextImprovement: 'Adding semantic embedding comparisons using sentence-transformers to capture skill synonyms.',
    },
    metrics: [
      { label: 'NLP Pipeline', value: 'spaCy NER', detail: 'Custom named entity recognition extracting skills and credentials' },
      { label: 'Role Classifier', value: 'Random Forest', detail: 'Scikit-learn multi-feature classification for candidate-role alignment' },
      { label: 'Frontend Stack', value: 'React 19 + Vite', detail: 'Modern reactive dashboard with instant PDF ingestion feedback' },
    ],
    outcomes: [
      'Built end-to-end PDF resume ingestion and tokenization pipeline with PyPDF2 and spaCy.',
      'Developed ATS compatibility grader providing keyword absence diagnostics and formatting checks.',
      'Integrated Random Forest machine learning classifier for candidate-role alignment predictions.',
    ],
    accentColor: '#1B4332',
    systemModeData: {
      architectureSummary: 'Machine learning document processing architecture coupling React 19 with FastAPI, spaCy entity extraction, and Random Forest classification.',
      dataFlow: 'Resume PDF uploaded -> PyPDF2 extracts text stream -> spaCy extracts entity tokens -> Random Forest evaluates capability vector -> ATS score and suggestions rendered.',
      stackDetails: [
        { layer: 'Frontend Dashboard', tech: 'React 19, Vite, Tailwind CSS v4', rationale: 'Modern component architecture with instant reactive state updates.' },
        { layer: 'Backend Gateway', tech: 'FastAPI (Python 3.12+)', rationale: 'High-speed asynchronous Python server for ML and NLP pipelines.' },
        { layer: 'NLP Processing', tech: 'spaCy (en_core_web_sm), PyPDF2', rationale: 'Fast, industrial-strength tokenization and named entity recognition.' },
        { layer: 'Classification Engine', tech: 'Scikit-Learn (Random Forest)', rationale: 'Robust tabular ensemble classification with feature importance insights.' },
      ],
      securityTradeoffs: 'Uploaded resume files processed in memory and purged immediately post-analysis; no personal identification persisted.',
      codeSnippet: `import spacy
from pypdf import PdfReader

nlp = spacy.load("en_core_web_sm")

def parse_resume_entities(pdf_stream) -> dict:
    """Extracts raw text and identifies key technical skill entities."""
    reader = PdfReader(pdf_stream)
    full_text = " ".join([page.extract_text() or "" for page in reader.pages])
    doc = nlp(full_text)
    
    entities = {"skills": [], "organizations": []}
    for ent in doc.ents:
        if ent.label_ in ["ORG", "PRODUCT"]:
            entities["skills"].append(ent.text.strip())
    return {"text_length": len(full_text), "extracted_entities": list(set(entities["skills"]))}`,
    },
    productModeData: {
      userWorkflow: '1. Drag and drop resume PDF into dashboard -> 2. Inspect extracted skills and entity tags -> 3. Review ATS compatibility score and missing keyword warnings -> 4. Export diagnostic report.',
      targetAudience: 'Job candidates and students seeking to audit their resumes against modern ATS standards before applying.',
      keyDifferentiator: 'Combines spaCy natural language entity extraction with machine learning classification for clear, actionable feedback.',
      visualHighlights: [
        'Interactive skill entity pills categorized by technical domain',
        'ATS compatibility score ring with prioritized remediation advice',
        'Split-screen view showing raw parsed text alongside structured insights',
      ],
    },
    images: ['/images/hrcv-thumb.jpg'],
    coreVisual: 'nodes',
  },
  {
    id: 'priocardix-ai',
    slug: 'priocardix-ai',
    number: '05',
    title: 'PRIOCARDIX AI',
    subtitle: 'Cardiovascular Risk Calculator & Scenario Simulator',
    description: 'A responsive healthcare web app built with React and Zustand that calculates cardiovascular risk tiers and lets users simulate how lifestyle improvements lower their risk in real time.',
    longDescription: 'Priocardix AI is an interactive preventive health calculator designed to demystify cardiovascular risk factors. Built using React and a unified Zustand store, it provides real-time "what-if" simulation sliders so patients and students can see exactly how changes in blood pressure, cholesterol, and exercise impact their health profile.',
    problem: 'Traditional online health risk calculators are opaque and discouraging. They output an arbitrary percentage score without explaining which biomarkers contributed most or how specific lifestyle adjustments would change the outcome.',
    insight: 'Healthcare tools are more effective when they are educational rather than punitive. Giving users immediate interactive feedback with simulation sliders helps them understand the relationship between daily habits and long-term health.',
    solution: 'Engineered a clean React and Zustand application that calculates clinical risk tiers from blood pressure, resting heart rate, lipid levels, and BMI. Included interactive scenario sliders that recompute risk in real time without lag.',
    impact: 'Built a responsive health tool that enables real-time scenario simulation and transparent biomarker tracking.',
    tags: ['React', 'Zustand', 'JavaScript', 'Healthcare', 'Chart.js', 'Tailwind CSS'],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Zustand', 'Chart.js'],
    category: 'Health Tech',
    year: '2024',
    status: 'completed',
    projectState: 'ACTIVE',
    featured: true,
    domain: 'AI',
    dna: {
      nodes: ['HEALTH', 'AI', 'EXPLAIN', 'UX'],
    },
    thinkingMode: {
      whatIBuilt: 'Interactive cardiovascular risk stratification simulator with TreeSHAP feature attributions and real-time sliders.',
      problem: 'Black-box clinical risk models provide arbitrary risk scores without showing physicians which factor contributed most.',
      tradeoff: 'Executed all state updates client-side in Zustand for instantaneous 60 FPS slider feedback with 100% patient privacy.',
      decision: 'Used game-theoretic TreeSHAP feature attribution to explain risk factors visually rather than opaque probability numbers.',
      learning: 'In high-stakes domains like healthcare, explainability is not an optional luxury—it is the prerequisite for trust.',
    },
    buildTrace: [
      { phase: 'IDEA', title: 'Clinical Formulation', detail: 'Studied standard Framingham and ACC/AHA cardiovascular risk equations.' },
      { phase: 'PROTOTYPE', title: 'Gradient Boosted Tree', detail: 'Trained XGBoost classifier on risk feature sets with cross-validation.' },
      { phase: 'BUILD', title: 'TreeSHAP Integration', detail: 'Generated real-time waterfall plots showing factor contributions.' },
      { phase: 'REVISE', title: 'Client-Side Privacy', detail: 'Ported inference calculation client-side to ensure zero patient data leaves browser.' },
      { phase: 'CURRENT', title: 'Interactive Simulator', detail: 'Shipped reactive scenario exploration tool with Zustand and Tailwind CSS.' },
    ],
    relatedItems: {
      skills: ['Python', 'Scikit-learn', 'XGBoost', 'SHAP', 'React', 'Zustand'],
      projects: [{ title: 'VIREONIQ', slug: 'vireoniq' }, { title: 'HRCV', slug: 'hrcv' }],
      experiments: ['ai-visualizer'],
    },
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/Priya-Ranjan-0201/Priocardix-AI', type: 'github' },
    ],
    architecture: [
      { id: 'ui', label: 'Interactive Dashboard', description: 'Real-time vitals inputs, risk dials, and scenario simulation sliders', type: 'client', connections: ['store'], protocol: 'React' },
      { id: 'store', label: 'Zustand Health Store', description: 'Centralized state store managing reactive vitals and risk calculations', type: 'client', connections: ['engine'], protocol: 'State' },
      { id: 'engine', label: 'Risk Calculation Engine', description: 'Multi-factor cardiovascular risk evaluation module', type: 'service', connections: ['store'], protocol: 'Internal' },
    ],
    features: [
      'Multi-factor risk evaluation based on blood pressure, heart rate, cholesterol, and BMI',
      'Interactive "what-if" scenario sliders showing immediate recalculated outcomes',
      'Visual breakdown explaining how each individual biomarker influences overall risk',
      'Client-side state management with Zustand for zero-latency slider interactions',
    ],
    challenges: [
      'Synchronizing slider state across multiple animated gauges without frame drops',
      'Clearly communicating that the tool provides educational risk modeling rather than formal medical diagnosis',
      'Designing clean, readable health charts that work well on mobile screens',
    ],
    lessons: [
      'Zustand eliminates complex context-provider trees and makes slider-heavy reactive state effortless',
      'Users find interactive "what-if" experiments far more helpful than static questionnaire summaries',
      'High-contrast normal range markers prevent accidental misinterpretation of vital stats',
    ],
    iterations: [
      { phase: 'Phase 01', title: 'Basic Formula Prototype', desc: 'Calculated simple BMI and systolic blood pressure risk thresholds.' },
      { phase: 'Phase 02', title: 'Multi-Factor Engine', desc: 'Expanded calculation to incorporate cholesterol ratios and physical activity.' },
      { phase: 'Phase 03', title: 'Zustand Store & Sliders', desc: 'Rebuilt state management with Zustand to allow instantaneous slider updates.' },
    ],
    future: 'Adding exportable PDF health summary sheets for doctor appointments.',
    learned: {
      technical: 'Zustand selector subscriptions prevent unnecessary chart re-renders when only one vital changes.',
      product: 'People respond much better to positive target ranges than intimidating red alert warnings.',
      design: 'Clean typographic tables are easier to parse for medical numbers than complex 3D charts.',
      mistake: 'Initially kept vitals in nested component state, causing out-of-sync chart displays.',
      nextImprovement: 'Adding local browser storage so users can track changes over time.',
    },
    metrics: [
      { label: 'State Latency', value: 'Zero Lag', detail: 'Instantaneous UI recalculation driven by Zustand store' },
      { label: 'Biometrics Tracked', value: '5 Key Factors', detail: 'Blood pressure, resting heart rate, cholesterol, BMI, activity' },
      { label: 'Privacy', value: '100% Local', detail: 'All health inputs processed entirely in the user browser' },
    ],
    outcomes: [
      'Built and open-sourced an interactive cardiovascular risk calculator in React.',
      'Implemented real-time scenario simulation sliders with Zustand.',
      'Designed a clear, educational interface for understanding health indicators.',
    ],
    accentColor: '#1B4332',
    systemModeData: {
      architectureSummary: 'Client-side web app pairing a centralized Zustand store with a multi-factor cardiovascular risk engine.',
      dataFlow: 'User adjusts vital sliders -> Zustand store updates state -> Risk engine recomputes risk tiers -> Gauges and charts update in real time.',
      stackDetails: [
        { layer: 'Frontend UI', tech: 'React, Vite, Tailwind CSS', rationale: 'Fast component rendering and modern responsive layout.' },
        { layer: 'State Store', tech: 'Zustand', rationale: 'Lightweight reactive state management without boilerplate.' },
        { layer: 'Visualizations', tech: 'Chart.js', rationale: 'Smooth, readable 2D vital trend lines.' },
      ],
      securityTradeoffs: '100% client-side execution; zero health data sent over the network.',
      codeSnippet: `// Zustand healthStore.js - Centralized reactive telemetry brain
import { create } from 'zustand';

export const useHealthStore = create((set, get) => ({
  vitals: { systolicBP: 120, diastolicBP: 80, heartRate: 72, cholesterol: 190, bmi: 23.5 },
  riskScore: 0.12,
  riskTier: 'OPTIMAL',
  updateVital: (key, value) => {
    set((state) => {
      const updatedVitals = { ...state.vitals, [key]: value };
      const { score, tier } = calculatePulseIQRisk(updatedVitals);
      return { vitals: updatedVitals, riskScore: score, riskTier: tier };
    });
  },
}));`,
    },
    productModeData: {
      userWorkflow: '1. Enter current cardiovascular indicators (BP, Heart Rate, Lipid Panel, BMI) -> 2. Inspect PulseIQ Guardian risk tier -> 3. Drag "What-If" sliders to model lifestyle adjustments -> 4. Review vital trend charts.',
      targetAudience: 'Health-conscious individuals and medical students studying clinical risk stratification models.',
      keyDifferentiator: 'Transparent, deterministic scoring paired with interactive scenario simulation sliders rather than opaque probabilities.',
      visualHighlights: [
        'Interactive PulseIQ risk gauge displaying real-time risk classification',
        'What-if biometric sliders allowing instant recalculation of potential health gains',
        'Clean clinical dark-mode aesthetic with explicit medical reference ranges',
      ],
    },
    images: ['/images/laptop-mockup.jpg'],
    coreVisual: 'journey',
  },
  {
    id: 'braincheck',
    slug: 'braincheck',
    number: '06',
    title: 'BRAIN CHECK',
    subtitle: 'Containerized Cognitive Assessment & Quiz Architecture Platform',
    description: 'A modular Flask-based assessment platform packaged in a hardened multi-stage Docker container (<180MB) running with non-root security privileges.',
    longDescription: 'BrainCheck is a containerized quiz and cognitive evaluation platform engineered for security, speed, and reliability. Built with Python 3.13 and Flask Blueprints, it features an anti-cheat randomized question engine and an automated GitHub Actions CI/CD test pipeline.',
    problem: 'Web assessment systems are frequently vulnerable to cheating via predictable question order and suffer from bloated deployment footprints that complicate self-hosting and continuous integration.',
    insight: 'Production web applications should be lightweight, isolated, and security-hardened. Multi-stage Docker builds ensure zero development bloat in production, while running as an unprivileged non-root user prevents container escape vectors.',
    solution: 'Engineered a modular web platform using Flask Blueprints (auth, quiz, admin, telemetry). Packaged into a hardened multi-stage Docker image under 180MB running under a non-root UID (10001) with automated testing on push.',
    impact: 'Achieved a minimal <180MB production image footprint, modular Blueprint architecture, and automated CI/CD pipeline.',
    tags: ['Python 3.13', 'Flask Blueprints', 'Docker', 'CI/CD', 'Security Hardened', 'Web App'],
    technologies: ['Python 3.13', 'Flask 3.x Blueprints', 'Jinja2', 'SQLite / PostgreSQL', 'Docker', 'GitHub Actions', 'Pytest'],
    category: 'Web & Infrastructure',
    year: '2024',
    status: 'completed',
    projectState: 'COMPLETED',
    featured: false,
    domain: 'FULL STACK',
    dna: {
      nodes: ['DEVOPS', 'DOCKER', 'WEB', 'CI/CD'],
    },
    thinkingMode: {
      whatIBuilt: 'Hardened, containerized cognitive evaluation platform built with Flask, PostgreSQL, and multi-stage Docker (<180MB).',
      problem: 'Manual deployment scripts frequently resulted in environment drift and oversized container images (>800MB).',
      tradeoff: 'Stripped build tools from final Docker runtime layer, requiring multi-stage builds but slashing image footprint by 75%.',
      decision: 'Enforced non-root UID 10001 execution and strict healthcheck probes for defense-in-depth container security.',
      learning: 'A great deployment pipeline allows developers to ship code without fear of breaking things at 2 AM.',
    },
    buildTrace: [
      { phase: 'IDEA', title: 'Single Flask Script', detail: 'Built prototype with in-memory assessment questions.' },
      { phase: 'PROTOTYPE', title: 'PostgreSQL & Blueprints', detail: 'Refactored into decoupled Flask application factory with database migrations.' },
      { phase: 'BUILD', title: 'Multi-Stage Docker', detail: 'Authored hardened Dockerfile cutting image size from 820MB down to 174MB.' },
      { phase: 'REVISE', title: 'Non-Root Security', detail: 'Enforced unprivileged user execution to protect host system.' },
      { phase: 'CURRENT', title: 'Automated CI/CD', detail: 'Integrated automated GitHub Actions testing and container linting.' },
    ],
    relatedItems: {
      skills: ['Docker', 'Flask', 'PostgreSQL', 'GitHub Actions', 'Linux'],
      projects: [{ title: 'TrustShield X', slug: 'trustshield-x' }, { title: 'VIREONIQ', slug: 'vireoniq' }],
      experiments: ['security-grid'],
    },
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/Priya-Ranjan-0201/BrainCheck', type: 'github' },
    ],
    architecture: [
      { id: 'ui', label: 'Assessment Web Interface', description: 'Responsive Jinja2 / CSS interface with timed question delivery', type: 'client', connections: ['app'], protocol: 'HTTP' },
      { id: 'app', label: 'Flask Modular App', description: 'Flask 3.x core with decoupled Blueprints for auth, quiz, and admin', type: 'api', connections: ['engine', 'db'], protocol: 'WSGI' },
      { id: 'engine', label: 'Anti-Cheat Randomizer', description: 'Cryptographically seeded permutation engine for question and option shuffling', type: 'service', connections: ['db'], protocol: 'Internal' },
      { id: 'db', label: 'Quiz Data Store', description: 'Relational database storing question banks, score telemetry, and user sessions', type: 'database', connections: [], protocol: 'SQL' },
      { id: 'docker', label: 'Docker Container Runtime', description: 'Hardened non-root container (<180MB) orchestrating execution', type: 'service', connections: ['app'], protocol: 'OCI' },
    ],
    features: [
      'Modular Flask 3.x Blueprints architecture separating auth, quiz, and telemetry modules',
      'Multi-stage Docker build producing a minimal production container footprint (<180MB)',
      'Security-hardened container execution under unprivileged non-root UID 10001',
      'Anti-cheat randomized question and option sequencing with server-side timer validation',
      'Automated GitHub Actions CI/CD pipeline running Pytest suites and security linters',
    ],
    challenges: [
      'Minimizing Docker image footprint by removing build compilers and pip caches in final stage',
      'Preventing question sequencing leakage while ensuring deterministic scoring on submission',
      'Structuring Flask Blueprints to completely avoid circular import dependencies',
    ],
    lessons: [
      'Multi-stage Dockerfiles dramatically reduce security attack surfaces by discarding build dependencies',
      'Running containers as non-root users is an essential defense-in-depth practice for production web applications',
      'Server-side validation of submission timestamps is mandatory for reliable timed assessments',
    ],
    iterations: [
      { phase: 'Phase 01', title: 'Monolithic Flask Prototype', desc: 'Single-file Flask app with static question list. Functional but hard to scale and maintain.' },
      { phase: 'Phase 02', title: 'Modular Blueprints Refactor', desc: 'Refactored codebase into decoupled Blueprints (auth, quiz, admin) with database migrations.' },
      { phase: 'Phase 03', title: 'Docker Hardening & CI/CD', desc: 'Authored multi-stage Dockerfile achieving <180MB size with non-root UID 10001 and automated GitHub Actions.' },
    ],
    future: 'Implementing WebSocket support for real-time competitive group quiz showdowns.',
    learned: {
      technical: 'Using Alpine Linux as a base image combined with --no-cache-dir reduces Python container size by over 60%.',
      product: 'Immediate answer explanations after assessment completion reinforce learning retention.',
      design: 'Distraction-free assessment UI with clear progress bars helps users maintain focus.',
      mistake: 'Initially copied entire virtualenv into container instead of using clean multi-stage wheels.',
      nextImprovement: 'Adding Redis session caching for concurrent classroom assessment spikes.',
    },
    metrics: [
      { label: 'Container Size', value: '< 180 MB', detail: 'Multi-stage production Docker image built on minimal Alpine base' },
      { label: 'Security Posture', value: 'Non-Root UID', detail: 'Hardened container execution with unprivileged UID 10001 user' },
      { label: 'Architecture', value: 'Flask Blueprints', detail: 'Decoupled modular architecture separating auth, quiz, and telemetry' },
    ],
    outcomes: [
      'Built containerized quiz platform with zero-configuration Docker deployment.',
      'Implemented non-root security hardening and multi-stage build optimization (<180MB).',
      'Automated testing and linting via GitHub Actions CI/CD pipeline.',
    ],
    accentColor: '#1B4332',
    systemModeData: {
      architectureSummary: 'Containerized modular Flask web platform with multi-stage Alpine Docker packaging and automated GitHub Actions verification.',
      dataFlow: 'Client connects -> Non-root container routes to Flask Blueprint -> Anti-cheat engine serves shuffled questions -> User submits -> Server verifies timer and calculates grade.',
      stackDetails: [
        { layer: 'Web Application', tech: 'Python 3.13, Flask 3.x Blueprints', rationale: 'Lightweight, modular Python framework with zero monolithic bloat.' },
        { layer: 'Containerization', tech: 'Docker (Multi-stage build)', rationale: 'Minimal attack surface and fast deployment with under 180MB image size.' },
        { layer: 'Security Profile', tech: 'Non-root UID 10001, Alpine Linux', rationale: 'Enforces principle of least privilege inside the container runtime.' },
        { layer: 'CI/CD Pipeline', tech: 'GitHub Actions, Pytest', rationale: 'Automated test verification and container build validation on every push.' },
      ],
      securityTradeoffs: 'Container root filesystem is read-only; processes execute under unprivileged UID 10001.',
      codeSnippet: `# Multi-stage Dockerfile excerpt ensuring unprivileged container execution
FROM python:3.13-alpine AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --user --no-cache-dir -r requirements.txt

FROM python:3.13-alpine AS runner
RUN adduser -u 10001 -D appuser
USER appuser
WORKDIR /app
COPY --from=builder /root/.local /home/appuser/.local
COPY . .
ENV PATH=/home/appuser/.local/bin:$PATH
EXPOSE 5000
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app:create_app()"]`,
    },
    productModeData: {
      userWorkflow: '1. Select assessment topic -> 2. Complete timed questions with randomized option ordering -> 3. Review instant score and detailed question rationales -> 4. Track historical performance.',
      targetAudience: 'Students, educators, and developers practicing technical and cognitive quizzes.',
      keyDifferentiator: 'Lightweight, self-hostable containerized platform with anti-cheat randomization and fast zero-dependency deployment.',
      visualHighlights: [
        'Clean distraction-free assessment layout with real-time timer countdown',
        'Post-quiz diagnostic breakdown with question-by-question rationales',
        'Dark-mode technical aesthetic built with minimal CSS dependencies',
      ],
    },
    images: ['/images/about-silhouette.jpg'],
    coreVisual: 'network',
  },
  {
    id: 'disk-scheduling',
    slug: 'disk-scheduling',
    number: '07',
    title: 'DISK SCHEDULING ALGORITHM',
    subtitle: 'Operating System Storage & Disk Kinematics Simulator',
    description: 'An interactive systems software laboratory modeling 11 disk scheduling algorithms and comparing magnetic HDD platter seek kinematics with SSD NAND remapping.',
    longDescription: 'Disk Scheduling Algorithm is an interactive educational operating systems lab. Implementing 11 scheduling algorithms from scratch (including FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK, Linux Deadline, CFQ, and NOOP), it visualizes magnetic disk arm seek kinematics at 60 FPS in HTML5 Canvas.',
    problem: 'Computer science students often struggle to grasp the physical performance tradeoffs between seek-time minimization (SSTF) and starvation prevention (SCAN / C-LOOK) through static textbook equations.',
    insight: 'Operating system storage algorithms are best understood mechanically. Visualizing the read/write head sweep across cylindrical tracks and contrasting mechanical arm seeks against SSD block address remapping makes algorithmic tradeoffs immediately intuitive.',
    solution: 'Engineered a pure client-side simulation engine in Vanilla JavaScript and HTML5 Canvas. Models 11 OS scheduling algorithms, calculates total head movements and average seek displacements, and provides interactive track queue editing.',
    impact: 'Implemented 11 operating system disk schedulers from scratch with a 60 FPS kinematic canvas simulation and real-time seek comparison table.',
    tags: ['Operating Systems', 'Algorithms', 'HTML5 Canvas', 'Systems Software', 'JavaScript'],
    technologies: ['JavaScript (ES6+)', 'HTML5 Canvas', 'CSS3 Grid', 'Operating Systems', 'Algorithms'],
    category: 'Systems Software',
    year: '2023',
    status: 'completed',
    projectState: 'COMPLETED',
    featured: false,
    domain: 'SYSTEMS',
    dna: {
      nodes: ['SYSTEMS', 'OS', 'CANVAS', 'ALGO'],
    },
    thinkingMode: {
      whatIBuilt: '60 FPS kinematic HTML5 Canvas simulator modeling 11 OS disk scheduling strategies with seek trajectory analytics.',
      problem: 'Students read textbook formulas for disk arm algorithms without developing an intuition for mechanical seek head physics.',
      tradeoff: 'Implemented a custom 2D canvas particle and arm rendering engine instead of heavy 3D frameworks for 60 FPS mobile performance.',
      decision: 'Included SSD flash wear mode alongside HDD mechanical arm traversal to bridge legacy vs modern storage systems.',
      learning: 'High-level abstractions always leak. The closer you understand the physical machine, the better code you write.',
    },
    buildTrace: [
      { phase: 'IDEA', title: 'Displacement Math', detail: 'Calculated mathematical seek distances for FCFS and SSTF in node.js.' },
      { phase: 'PROTOTYPE', title: 'HTML5 Canvas', detail: 'Created basic visual representation of a spinning disk platter and arm.' },
      { phase: 'BUILD', title: '11 Algorithm Engine', detail: 'Implemented SCAN, C-SCAN, LOOK, C-LOOK, and prioritized request queues.' },
      { phase: 'REVISE', title: 'Seek Leaderboard', detail: 'Added real-time comparative leaderboard showing total head displacement.' },
      { phase: 'CURRENT', title: 'SSD Kinematics', detail: 'Added solid-state flash cell wear simulation and educational annotations.' },
    ],
    relatedItems: {
      skills: ['C', 'JavaScript', 'HTML5 Canvas', 'Operating Systems', 'Algorithms'],
      projects: [{ title: 'Tech On Tour', slug: 'tech-on-tour' }, { title: 'TrustShield X', slug: 'trustshield-x' }],
      experiments: ['gravity-field', 'particle-field'],
    },
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/Priya-Ranjan-0201/Disk_Scheduling_Algorithm', type: 'github' },
    ],
    architecture: [
      { id: 'ui', label: 'Interactive Canvas HUD', description: 'HTML5 Canvas rendering disk tracks, moving read/write head, and comparative metrics', type: 'client', connections: ['engine'], protocol: 'DOM Event' },
      { id: 'engine', label: '11 Algorithm Suite Core', description: 'Pure functional implementations of FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK, etc.', type: 'service', connections: ['kinematics'], protocol: 'JS Call' },
      { id: 'kinematics', label: 'Seek Kinematics Engine', description: 'Computes arm trajectory, rotational latency, and total cylinder displacement', type: 'service', connections: [], protocol: 'Internal' },
    ],
    features: [
      '11 Operating System Disk Scheduling Algorithms implemented from first principles',
      '60 FPS HTML5 Canvas physical simulation of magnetic disk platter and arm sweeps',
      'Comparative storage kinematics contrasting mechanical HDD seeks with SSD NAND remapping',
      'Real-time seek distance and average seek time comparison leaderboard',
      'Custom request sequence input with preset benchmark operating system patterns',
    ],
    challenges: [
      'Accurately calculating boundary turnaround conditions for SCAN and C-SCAN at track edges (0 and max_track)',
      'Maintaining a smooth 60 FPS interpolated arm trajectory across arbitrary track queues without frame drops',
      'Designing an intuitive visual comparison view that clearly illustrates starvation tradeoffs in SSTF',
    ],
    lessons: [
      'Mechanical seek time and rotational latency dominate magnetic disk I/O; directional sweep algorithms prevent arm thrashing',
      'SSTF achieves minimal local seek distance but can cause permanent starvation of requests at outer cylinders',
      'Direct Canvas 2D rendering handles high-frequency physics loops with zero DOM reflow overhead',
    ],
    iterations: [
      { phase: 'Phase 01', title: 'CLI Metric Calculator', desc: 'Initial JavaScript script calculating total seek displacement for basic FCFS and SSTF algorithms.' },
      { phase: 'Phase 02', title: 'Canvas Kinematic Visualizer', desc: 'Built the HTML5 Canvas visualizer showing the read head physically moving along track cylinders.' },
      { phase: 'Phase 03', title: '11 Algorithm Suite & SSD Mode', desc: 'Expanded to 11 scheduling algorithms with comparative seek leaderboard and HDD vs SSD kinematics.' },
    ],
    future: 'Extending simulator to solid-state drive (SSD) wear leveling and block garbage collection algorithms.',
    learned: {
      technical: 'Normalizing cylinder coordinates to unit space [0, 1] enables resolution-independent canvas rendering on high-DPI displays.',
      product: 'Showing all algorithms side-by-side on the identical request sequence teaches the core CS lesson immediately.',
      design: 'Color-coding visited tracks versus queued tracks provides immediate visual comprehension during animation playback.',
      mistake: 'Initially confused physical cylinder bounds (0 and max) in SCAN with logical request bounds in LOOK.',
      nextImprovement: 'Adding step-by-step playback controls (play, pause, step forward, step backward).',
    },
    metrics: [
      { label: 'Algorithms Implemented', value: '11 Schedulers', detail: 'FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK, Deadline, CFQ, NOOP, RSS, LIFO' },
      { label: 'Kinematic Engine', value: '60 FPS Canvas', detail: 'Real-time interpolated disk arm trajectory across cylinder tracks' },
      { label: 'Storage Physics', value: 'HDD vs SSD', detail: 'Comparative simulation of mechanical platter seeks versus NAND block mapping' },
    ],
    outcomes: [
      'Implemented 11 operating system disk scheduling algorithms from scratch.',
      'Built 60 FPS HTML5 Canvas kinematic visualization of magnetic disk arm sweeps.',
      'Engineered mathematical seek time calculation and comparative performance leaderboard.',
    ],
    accentColor: '#1B4332',
    systemModeData: {
      architectureSummary: 'Pure client-side algorithmic simulation engine rendering physical disk track sweeps via HTML5 Canvas with zero runtime dependencies.',
      dataFlow: 'User enters track request queue -> Selected algorithm orders requests -> Kinematic engine interpolates read head trajectory -> Canvas renders arm movement -> Seek metrics table populated.',
      stackDetails: [
        { layer: 'Canvas Renderer', tech: 'HTML5 Canvas API, Vanilla JS', rationale: 'Direct pixel manipulation ensures instant loading and zero build-step overhead.' },
        { layer: 'Algorithm Suite', tech: 'Pure Functional JavaScript', rationale: 'Deterministic, side-effect-free implementations of classical CS algorithms.' },
        { layer: 'UI Layout', tech: 'CSS Grid, Flexbox', rationale: 'Clean technical aesthetic with dark mode telemetry panels.' },
      ],
      securityTradeoffs: '100% static client execution; zero server surface or external network communications.',
      codeSnippet: `function calculateSCAN(requests: number[], head: number, maxTrack: number, direction: 'UP' | 'DOWN'): number[] {
    const left = requests.filter(r => r < head).sort((a, b) => b - a);
    const right = requests.filter(r => r >= head).sort((a, b) => a - b);
    
    if (direction === 'UP') {
        return [head, ...right, maxTrack, ...left];
    } else {
        return [head, ...left, 0, ...right];
    }
}`,
    },
    productModeData: {
      userWorkflow: '1. Input track request sequence (e.g. 98, 183, 37, 122, 14, 124, 65, 67) -> 2. Select initial head position -> 3. Choose algorithm or run All Comparatively -> 4. Watch visual seek sweep and inspect total head movement.',
      targetAudience: 'Computer Science students, systems engineering candidates, and software engineers reviewing OS fundamentals.',
      keyDifferentiator: 'Instant comparative visual benchmark: see all 11 algorithms executed side-by-side with total seek times rendered simultaneously.',
      visualHighlights: [
        'Dynamic canvas track traversal graph with glowing read/write head pointer',
        'Real-time seek calculation counter tracking total cylinder movements',
        'Interactive algorithm comparison leaderboard ranking efficiency',
      ],
    },
    images: ['/images/archive-thumb.jpg'],
    coreVisual: 'journey',
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(
    (p) =>
      p.slug === slug ||
      (p.slug === 'disk-scheduling' && slug === 'disk-scheduling-algorithm') ||
      (p.slug === 'disk-scheduling-algorithm' && slug === 'disk-scheduling')
  );
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((p) => p.featured);
};
