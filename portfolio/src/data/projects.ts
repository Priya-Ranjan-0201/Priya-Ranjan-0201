import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'vireoniq',
    slug: 'vireoniq',
    number: '01',
    title: 'VIREONIQ',
    subtitle: 'Autonomous AI Career & Workforce Intelligence OS',
    description: 'An intelligent career platform featuring a Career Digital Twin engine, 9-Dimensional Readiness Index, and AST-driven static code analysis.',
    longDescription: 'VIREONIQ fundamentally reimagines career development by treating careers as dynamic directed graphs rather than static linear ladders. By modeling candidate skill matrices against evolving market requirements using Qdrant vector embeddings, it parses submitted code logic via Python Abstract Syntax Trees (AST) and produces deterministic learning roadmaps.',
    problem: 'Traditional recruitment and placement platforms rely on superficial keyword string matching. They reward keyword-stuffed resumes, fail to evaluate deep systems and algorithmic understanding, and leave students with generic advice rather than actionable technical trajectories.',
    insight: 'Skills exist in a semantic dependency hierarchy. A developer who understands memory models, asynchronous event loops, and relational schemas is mathematically closer to systems engineering than a candidate with a checklist of buzzwords. Code evaluation must inspect syntax trees (AST) without arbitrary execution risks.',
    solution: 'Engineered a decoupled FastAPI and React 18 architecture incorporating Qdrant vector similarity search, Celery asynchronous workers, and an AST static analysis pipeline. The platform computes dynamic skill gap vectors across 9 readiness dimensions and maps prerequisite learning roadmaps.',
    impact: 'Architected and validated an asynchronous full-stack platform with 153/153 passing test suites across unit, AST parsing, and vector similarity integration tests.',
    tags: ['AI/ML', 'FastAPI', 'React 18', 'Qdrant', 'PyTorch', 'AST'],
    technologies: ['Python', 'FastAPI', 'React 18', 'PyTorch', 'Qdrant Vector DB', 'PostgreSQL', 'Redis', 'Celery', 'Docker Compose'],
    category: 'Intelligence Platform',
    year: '2024',
    status: 'completed',
    projectState: 'ACTIVE',
    featured: true,
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/Priya-Ranjan-0201/VIREONIQ', type: 'github' },
    ],
    architecture: [
      { id: 'client', label: 'React 18 Frontend', description: 'Career Digital Twin HUD, radar visualizations & graph dependency explorer', type: 'client', connections: ['api'], protocol: 'HTTPS / WSS' },
      { id: 'api', label: 'FastAPI Gateway', description: 'Asynchronous API gateway managing JWT auth, rate-limiting, and task dispatch', type: 'api', connections: ['ast', 'qdrant', 'db', 'cache'], protocol: 'REST / Async' },
      { id: 'ast', label: 'AST Static Analyzer', description: 'Python syntax tree parser extracting code complexity without arbitrary execution', type: 'service', connections: ['api'], protocol: 'Internal IPC' },
      { id: 'qdrant', label: 'Qdrant Vector DB', description: 'High-dimensional semantic vector search for candidate-market trajectory mapping', type: 'database', connections: ['api'], protocol: 'gRPC' },
      { id: 'cache', label: 'Redis & Celery', description: 'Asynchronous task queues and in-memory session caching layer', type: 'service', connections: ['api'], protocol: 'TCP' },
      { id: 'db', label: 'PostgreSQL Relational DB', description: 'Structured relational schemas for skill taxonomies and audit logs', type: 'database', connections: [], protocol: 'SQL Pool' },
    ],
    features: [
      'Career Digital Twin Engine mapping candidate capabilities across 9 core dimensions',
      'Qdrant Vector Similarity search calculating semantic candidate-to-market distance',
      'Abstract Syntax Tree (AST) static code analyzer evaluating submission structure',
      'Directed Acyclic Graph (DAG) prerequisite roadmap generator for skill acquisition',
      'Asynchronous Celery job queue for background embedding updates and telemetry parsing',
    ],
    challenges: [
      'Ensuring safe parsing of untrusted student code submissions by leveraging AST parsing without code execution',
      'Optimizing vector similarity query latencies across high-dimensional embedding spaces in Qdrant',
      'Balancing the 9 distinct dimensions of the Career Readiness Index into an interpretable visual breakdown',
    ],
    lessons: [
      'Static AST analysis is far safer and more scalable for initial code evaluation than containerized execution sandboxes',
      'Vector databases like Qdrant provide high-performance cosine similarity when payloads are properly indexed and filtered',
      'Transparent prerequisite graphs build user confidence far more effectively than single opaque scores',
    ],
    iterations: [
      { phase: 'Phase 01', title: 'Keyword Parsing Prototype', desc: 'Initial experiment using bag-of-words and regex parsing. Discovered high false-positive rate on generic resumes.' },
      { phase: 'Phase 02', title: 'Vector Space Modeling', desc: 'Introduced dense vector embeddings with Qdrant for semantic distance calculations between candidates and job requirements.' },
      { phase: 'Phase 03', title: 'AST Analysis & 9D Index', desc: 'Added Python AST code analysis and synthesized the 9-Dimensional Career Readiness Index with 153/153 passing test cases.' },
    ],
    future: 'Expanding the AST static analyzer to support multi-language parsing for C++ and TypeScript submissions.',
    learned: {
      technical: 'AST node visitors allow computing cyclomatic complexity and recognizing idiomatic patterns without executing untrusted code.',
      product: 'Students value clear prerequisite dependencies far more than single numerical match scores.',
      design: 'Radar charts require normalized scalar boundaries to prevent high-dimensional distortion during visual inspection.',
      mistake: 'Initially attempted to compute vector similarities inside the relational database before adopting dedicated vector search in Qdrant.',
      nextImprovement: 'Adding automated unit test generation for candidate code submissions based on parsed function signatures.',
    },
    metrics: [
      { label: 'Automated Test Suite', value: '153 / 153 Passing', detail: 'Comprehensive test suite across unit, AST, and vector similarity modules' },
      { label: 'Evaluation Dimensions', value: '9-Dimensional', detail: 'Holistic assessment spanning code quality, architecture, systems, and algorithms' },
      { label: 'Code Inspection', value: 'AST Static Parsing', detail: 'Direct syntax tree analysis without vulnerable runtime code execution' },
    ],
    outcomes: [
      'Architected decoupled FastAPI and React 18 platform orchestrated with Docker Compose.',
      'Implemented Qdrant vector similarity retrieval for candidate career trajectory mapping.',
      'Validated full system reliability with 153 passing automated test suites.',
    ],
    accentColor: '#06b6d4',
    systemModeData: {
      architectureSummary: 'Decoupled multi-tier architecture with React 18 fronting an asynchronous FastAPI gateway, orchestrated with Docker Compose and backed by Qdrant and PostgreSQL.',
      dataFlow: 'Client sends skill profile or code snippet -> Gateway authenticates and checks Redis cache -> AST module evaluates syntax tree -> Qdrant computes vector embeddings -> Trajectory assembled and returned.',
      stackDetails: [
        { layer: 'Presentation', tech: 'React 18, Vite, Framer Motion', rationale: 'Instant client-side rendering with reactive graph visualizers and zero sensory lag.' },
        { layer: 'API Services', tech: 'FastAPI (Python 3.11), Pydantic v2', rationale: 'Native async performance with seamless interoperability with Python scientific and ML libraries.' },
        { layer: 'Vector Retrieval', tech: 'Qdrant Vector Database', rationale: 'Dedicated vector search engine with payload filtering and HNSW indexing.' },
        { layer: 'Storage & Cache', tech: 'PostgreSQL 16, Redis 7, Celery', rationale: 'ACID relational data storage paired with in-memory caching and async worker queues.' },
      ],
      securityTradeoffs: 'Stateless JWT authentication; untrusted code analyzed strictly via AST node visitor parsing without dynamic eval() or container execution.',
      codeSnippet: `import ast

def analyze_submission_ast(source_code: str) -> dict:
    """Parses code AST to evaluate structure without executing arbitrary instructions."""
    tree = ast.parse(source_code)
    analyzer = ComplexityVisitor()
    analyzer.visit(tree)
    return {
        "num_functions": analyzer.function_count,
        "cyclomatic_complexity": analyzer.complexity_score,
        "uses_recursion": analyzer.has_recursion,
    }`,
    },
    productModeData: {
      userWorkflow: '1. Input technical stack and engineering background -> 2. Inspect 9D Career Readiness radar -> 3. Review AST code diagnostics -> 4. Follow step-by-step prerequisite roadmap.',
      targetAudience: 'Computer Science students and early-career software engineers seeking structured, evidence-based career preparation.',
      keyDifferentiator: 'Replaces black-box match percentages with inspectable dependency roadmaps and real static code diagnostics.',
      visualHighlights: [
        '9-Dimensional Career Readiness radar chart with interactive dimension breakdowns',
        'Visual skill gap differential cards with highlighted prerequisite chains',
        'Minimalist dark-mode typography with zero sensory clutter',
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
    subtitle: 'Next-Gen Autonomous Cyber Defense & Threat Intelligence OS',
    description: 'A defensive cybersecurity engine enforcing 7 formal security invariants, featuring a sub-12ms multi-vector threat scanner and STIX 2.1 threat fabric ingestion.',
    longDescription: 'TrustShield X is an autonomous threat intelligence operating system engineered around formal defensive guarantees. It deploys parallel asynchronous scanners to inspect web URLs, QR/UPI payment payloads, and SMS phishing vectors in sub-12ms while mapping incidents against STIX 2.1 threat taxonomies.',
    problem: 'Modern digital users and cloud applications face fragmented attack surfaces spanning web vulnerabilities, malicious QR/UPI payment fraud, and social engineering SMS phish. Traditional security tools are siloed, slow, and lack cryptographically verifiable audit trails.',
    insight: 'Defensive security must be rooted in immutable mathematical invariants. Rather than treating security as an afterthought patch, every pipeline must guarantee input sanitation, zero plain secrets, signed logs, and deterministic verification from first principles.',
    solution: 'Engineered a high-throughput Python 3.13 and FastAPI platform enforcing 7 Core Security Invariants. Features an asynchronous parallel scanner inspecting URLs, QR/UPI codes, and SMS payloads concurrently within 12ms, backed by STIX 2.1 standardized threat classification.',
    impact: 'Built and validated a hardened threat defense pipeline with cryptographically signed SHA-256 audit logs and sub-12ms parallel multi-vector scanning.',
    tags: ['Cybersecurity', 'Python 3.13', 'FastAPI', 'STIX 2.1', 'Cryptographic Audit', 'AsyncIO'],
    technologies: ['Python 3.13', 'FastAPI', 'AsyncIO', 'STIX 2.1', 'PyCryptodome', 'PostgreSQL', 'Docker'],
    category: 'Cyber Defense',
    year: '2024',
    status: 'completed',
    projectState: 'ACTIVE',
    featured: true,
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
      '7 Formal Security Invariants guaranteeing zero unvalidated data across all endpoints',
      'Parallel Multi-Vector Scanner inspecting Web, QR-UPI, and SMS payloads concurrently in sub-12ms',
      'STIX 2.1 Threat Fabric mapping incidents against standardized cyber threat taxonomies',
      'Cryptographically signed audit log generator with SHA-256 tamper verification',
      'Modular rule engine supporting rapid addition of emerging threat signatures',
    ],
    challenges: [
      'Achieving sub-12ms parallel scanning across three distinct threat vectors without socket blocking',
      'Mathematically enforcing all 7 security invariants across every API handler and middleware',
      'Normalizing unstructured SMS and QR data into standardized STIX 2.1 JSON schemas',
    ],
    lessons: [
      'Asynchronous I/O with Python 3.13 asyncio tasks provides massive concurrency benefits for network scanning',
      'Formal security invariants eliminate entire classes of bugs before code reaches staging environments',
      'Tamper-evident audit logs are crucial for verifying that security systems themselves have not been compromised',
    ],
    iterations: [
      { phase: 'Phase 01', title: 'CLI Vector Scanner', desc: 'Basic sequential socket and payload checker. Proved threat detection logic but had unacceptable 100ms+ latency.' },
      { phase: 'Phase 02', title: 'Async Multi-Vector Core', desc: 'Rewrote engine using Python 3.13 asyncio tasks, achieving sub-12ms parallel scanning across all three vectors.' },
      { phase: 'Phase 03', title: '7 Invariants & STIX 2.1', desc: 'Formalized 7 security invariants and integrated STIX 2.1 threat intelligence fabric with signed cryptographic audit logs.' },
    ],
    future: 'Implementing automated heuristic sandboxing for emerging zero-day SMS phishing patterns.',
    learned: {
      technical: 'AsyncIO gather with strict per-task timeouts prevents slow external DNS lookups from degrading total scan SLA.',
      product: 'Security operators need concise threat severity scores and immediate mitigation steps rather than raw hex dumps.',
      design: 'High-contrast status indicators (emerald for verified invariants, rose for active threats) speed up visual triage.',
      mistake: 'Initially used synchronous socket calls that blocked the event loop under burst network traffic.',
      nextImprovement: 'Adding WebAssembly compilation for client-side offline QR-UPI verification.',
    },
    metrics: [
      { label: 'Parallel Scan Latency', value: 'sub-12ms', detail: 'Asynchronous concurrent inspection across URL, QR/UPI, and SMS vectors' },
      { label: 'Defensive Guarantees', value: '7 Invariants', detail: 'Mathematically enforced rules covering sanitation, signed logs, and auth' },
      { label: 'Threat Standard', value: 'STIX 2.1', detail: 'Structured Cyber Threat Intelligence format for standardized taxonomy' },
    ],
    outcomes: [
      'Architected high-speed asynchronous multi-vector scanning engine with sub-12ms latency.',
      'Integrated STIX 2.1 threat intelligence fabric for structured vulnerability classification.',
      'Enforced 7 formal security invariants and tamper-evident cryptographic audit logs.',
    ],
    accentColor: '#f43f5e',
    systemModeData: {
      architectureSummary: 'High-throughput asynchronous cybersecurity framework orchestrating parallel threat probes, STIX 2.1 threat fabric ingestion, and cryptographic logging.',
      dataFlow: 'Payload ingested -> Invariants verified by middleware -> Async tasks dispatched to URL, QR, and SMS engines -> STIX taxonomy mapped -> Signed audit record written -> Result returned.',
      stackDetails: [
        { layer: 'Security Interface', tech: 'React, Tailwind CSS, Lucide Icons', rationale: 'High-density terminal HUD with real-time progress indicators and telemetry charts.' },
        { layer: 'Core Engine', tech: 'Python 3.13, FastAPI, AsyncIO', rationale: 'Fast asynchronous concurrency with low memory footprint and strict typing.' },
        { layer: 'Threat Fabric', tech: 'STIX 2.1 Cyber Threat Intelligence', rationale: 'International open standard enabling interoperability with global security feeds.' },
        { layer: 'Cryptography & DB', tech: 'PyCryptodome, PostgreSQL 16', rationale: 'SHA-256 signed audit hashes and ACID relational persistence.' },
      ],
      securityTradeoffs: '7 formal invariants enforced by middleware; zero plain secrets stored; all audit logs cryptographically hashed.',
      codeSnippet: `async def scan_payload_multi_vector(payload: IngressPayload) -> ScanResult:
    """Dispatches concurrent inspection tasks across Web, QR/UPI, and SMS vectors."""
    url_task = asyncio.create_task(inspect_url_vector(payload.url))
    qr_task = asyncio.create_task(inspect_qr_upi_vector(payload.qr_data))
    sms_task = asyncio.create_task(inspect_sms_vector(payload.sms_body))
    
    results = await asyncio.gather(url_task, qr_task, sms_task)
    threat_tier = aggregate_stix_threats(results)
    sign_audit_log(payload.id, threat_tier)
    return format_threat_response(threat_tier, results)`,
    },
    productModeData: {
      userWorkflow: '1. Submit domain URL, QR code image, or SMS text payload -> 2. View sub-12ms parallel scan execution -> 3. Inspect STIX 2.1 threat classification -> 4. Review cryptographic audit certificate.',
      targetAudience: 'Engineers, organizations, and security practitioners requiring rapid multi-vector threat verification.',
      keyDifferentiator: 'Combines sub-12ms parallel multi-vector scanning with mathematical security guarantees and cryptographic auditability.',
      visualHighlights: [
        'Live threat matrix with pulsing status indicators and STIX severity badges',
        'Interactive multi-vector inspection graph with packet traversal paths',
        'Cryptographically signed audit receipt with SHA-256 verification string',
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
    accentColor: '#0ea5e9',
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
    accentColor: '#10b981',
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
    subtitle: 'Enterprise Preventive Cardiology & Risk Assessment Platform',
    description: 'A clinical telemetry and preventive cardiology platform featuring the PulseIQ Guardian Engine, Zustand centralized state, and deterministic cardiovascular risk scoring.',
    longDescription: 'Priocardix AI focuses on early cardiovascular risk detection through transparent biometric indicators. Powered by the PulseIQ Guardian Engine and a unified Zustand reactive state store (`healthStore.js`), it computes deterministic multi-factor risk stratifications from patient vitals.',
    problem: 'Cardiovascular health issues often develop silently without early warning indicators, while complex clinical prediction tools remain opaque to both patients and healthcare providers.',
    insight: 'Preventive healthcare software requires absolute state reliability and deterministic scoring. A centralized reactive store ensures patient telemetry streams remain synchronized across real-time threshold monitors and risk simulation controls.',
    solution: 'Architected an intuitive clinical platform using React, Vite, and Zustand. The PulseIQ Guardian Engine evaluates multi-parametric biometric factors (blood pressure, resting heart rate, lipid levels, BMI) and delivers explainable risk stratification with interactive simulation sliders.',
    impact: 'Built a responsive clinical telemetry interface with reactive Zustand state orchestration and deterministic multi-factor cardiovascular risk evaluation.',
    tags: ['Healthcare AI', 'Zustand', 'React', 'PulseIQ Engine', 'FastAPI', 'Telemetry'],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Zustand (healthStore.js)', 'Python / FastAPI', 'Chart.js'],
    category: 'Healthcare AI',
    year: '2024',
    status: 'completed',
    projectState: 'ACTIVE',
    featured: true,
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/Priya-Ranjan-0201/Priocardix-AI', type: 'github' },
    ],
    architecture: [
      { id: 'ui', label: 'Clinician Telemetry HUD', description: 'Real-time vital indicators, trend visualizers, and what-if simulation sliders', type: 'client', connections: ['store'], protocol: 'DOM Event' },
      { id: 'store', label: 'Zustand Global Brain', description: 'Centralized healthStore.js state store synchronizing all telemetry streams', type: 'client', connections: ['engine'], protocol: 'React State' },
      { id: 'engine', label: 'PulseIQ Guardian Engine', description: 'Deterministic multi-factor cardiovascular risk evaluation core', type: 'service', connections: ['store'], protocol: 'Internal' },
      { id: 'api', label: 'Analytical API Gateway', description: 'FastAPI microservice for historical telemetry aggregation and patient profiles', type: 'api', connections: ['store'], protocol: 'REST' },
    ],
    features: [
      'PulseIQ Guardian Engine calculating deterministic cardiovascular risk tiers',
      'Zustand healthStore.js orchestrating reactive patient telemetry streams',
      'Multi-parametric biometric assessment (Blood Pressure, Heart Rate, Cholesterol, BMI)',
      'Interactive "What-If" simulation sliders allowing dynamic risk factor recalculation',
      'Abnormal variance alert triggers when vitals cross clinical safety thresholds',
    ],
    challenges: [
      'Managing synchronized reactive state across multiple interactive telemetry graphs without re-render lag',
      'Designing deterministic risk calculation models that adhere strictly to published clinical guidelines',
      'Ensuring the interface clearly distinguishes algorithmic risk calculations from diagnostic medical advice',
    ],
    lessons: [
      'Zustand provides exceptional developer ergonomics and eliminates context re-rendering bottlenecks in telemetry dashboards',
      'Deterministic, auditable clinical calculations build user trust far better than opaque black-box machine learning scores',
      'Dynamic what-if sliders empower users to understand the tangible health impacts of lifestyle modifications',
    ],
    iterations: [
      { phase: 'Phase 01', title: 'Heuristic Risk Calculator', desc: 'Initial prototype evaluating basic blood pressure and BMI thresholds. Proved formula feasibility.' },
      { phase: 'Phase 02', title: 'PulseIQ Guardian Engine', desc: 'Expanded into multi-parametric evaluation covering lipid profiles, activity metrics, and resting heart rates.' },
      { phase: 'Phase 03', title: 'Zustand healthStore & Simulator', desc: 'Integrated centralized Zustand reactive store and dynamic scenario simulation sliders for real-time risk adjustments.' },
    ],
    future: 'Exploring integration with wearable Bluetooth LE pulse oximeters and heart rate monitors for continuous telemetry.',
    learned: {
      technical: 'Decoupling state management into a dedicated Zustand store prevents unnecessary re-renders of heavy chart components.',
      product: 'Patients respond positively to visual color-coded risk ranges that show how modest lifestyle improvements alter risk tiers.',
      design: 'High-contrast typography with clear normal clinical range markers prevents misinterpretation of vitals.',
      mistake: 'Initially kept telemetry state in local component state, leading to prop-drilling synchronization bugs.',
      nextImprovement: 'Adding local indexed storage for offline vital history tracking.',
    },
    metrics: [
      { label: 'Diagnostic Engine', value: 'PulseIQ Guardian', detail: 'Deterministic multi-parametric cardiovascular risk stratification' },
      { label: 'State Architecture', value: 'Zustand Store', detail: 'Centralized healthStore.js managing reactive patient telemetry stream' },
      { label: 'Biometric Scope', value: 'Multi-Parametric', detail: 'Evaluation across blood pressure, heart rate, lipid profile, and BMI' },
    ],
    outcomes: [
      'Engineered PulseIQ Guardian deterministic cardiovascular risk scoring algorithms.',
      'Designed reactive healthStore.js state machine orchestrating live telemetry data.',
      'Built interactive biometric scenario simulation sliders for predictive what-if analysis.',
    ],
    accentColor: '#ef4444',
    systemModeData: {
      architectureSummary: 'Reactive clinical web application coupling a centralized Zustand state machine with the PulseIQ Guardian risk calculation engine.',
      dataFlow: 'Biometric vitals entered -> Zustand healthStore validates boundaries -> PulseIQ Guardian calculates risk index -> Reactive charts and simulation gauges update synchronously.',
      stackDetails: [
        { layer: 'Frontend HUD', tech: 'React, Vite, Tailwind CSS', rationale: 'Fast component rendering with modern utility styling.' },
        { layer: 'State Store', tech: 'Zustand (healthStore.js)', rationale: 'Lightweight, hook-based state management without provider wrapping boilerplate.' },
        { layer: 'Analytical Core', tech: 'PulseIQ Guardian Algorithms', rationale: 'Deterministic evaluation based on validated clinical cardiology risk factors.' },
        { layer: 'Data Visualization', tech: 'Chart.js / Canvas', rationale: 'Smooth animated vital trend lines and risk distribution gauges.' },
      ],
      securityTradeoffs: '100% ephemeral client-side session processing; zero unencrypted patient health identifiers sent across networks.',
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
    accentColor: '#8b5cf6',
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
    accentColor: '#f59e0b',
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
