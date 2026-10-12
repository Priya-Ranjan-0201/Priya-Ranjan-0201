const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '../assets');

function toBase64(filename) {
  const file = path.join(assetsDir, filename);
  if (fs.existsSync(file)) {
    return `data:image/jpeg;base64,${fs.readFileSync(file).toString('base64')}`;
  }
  return '';
}

const aboutCoderB64 = toBase64('about_coder.jpg');
const preppilotB64 = toBase64('project_preppilot.jpg');
const truthshieldB64 = toBase64('project_truthshield.jpg');
const vireoniqB64 = toBase64('project_vireoniq.jpg');
const techontourB64 = toBase64('project_techontour.jpg');
const quoteBeaconB64 = toBase64('quote_beacon.jpg');
const journeyWandererB64 = toBase64('journey_wanderer.jpg');
const connectCollabB64 = toBase64('connect_collab.jpg');

const commonDefs = `
  <defs>
    <filter id="cardGlow" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    <filter id="neonTextGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    <linearGradient id="cardBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0c1622" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#060b12" stop-opacity="0.95"/>
    </linearGradient>
    <linearGradient id="pillBg" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#091816" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#050e12" stop-opacity="0.9"/>
    </linearGradient>
    <style>
      .mono-txt { font-family: 'Fira Code', 'Consolas', 'Courier New', monospace; }
      .sans-txt { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', Roboto, sans-serif; }
      .display-txt { font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
    </style>
  </defs>
`;

// ─── 1. ABOUT ME SVG ───
const aboutMeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 320" width="100%" height="auto">
  ${commonDefs}
  <rect x="2" y="2" width="1196" height="316" rx="12" fill="url(#cardBg)" stroke="#1e3a46" stroke-width="1.2"/>

  <!-- Left Content Area -->
  <g transform="translate(36, 36)">
    <!-- Paragraph 1 -->
    <text class="sans-txt" font-size="15" fill="#cbd5e1" x="0" y="20">
      I'm a Computer Science &amp; Engineering student passionate about Artificial Intelligence, Cybersecurity,
    </text>
    <text class="sans-txt" font-size="15" fill="#cbd5e1" x="0" y="44">
      Web Development, and building real-world solutions. I enjoy exploring new technologies, solving
    </text>
    <text class="sans-txt" font-size="15" fill="#cbd5e1" x="0" y="68">
      meaningful problems, and creating impactful projects.
    </text>

    <!-- Paragraph 2 -->
    <text class="sans-txt" font-size="15" fill="#cbd5e1" x="0" y="112">
      I'm always eager to learn, collaborate, and contribute to open-source while improving my skills
    </text>
    <text class="sans-txt" font-size="15" fill="#cbd5e1" x="0" y="136">
      and preparing for real-world opportunities.
    </text>

    <!-- 4 Pills Row -->
    <g transform="translate(0, 180)">
      <!-- Pill 1: AI/ML Exploration -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="180" height="38" rx="7" fill="url(#pillBg)" stroke="#00ff88" stroke-width="1.2" stroke-opacity="0.35"/>
        <text class="sans-txt" font-size="13" font-weight="600" fill="#e2e8f0" x="18" y="24">🧠 AI/ML Exploration</text>
      </g>
      <!-- Pill 2: Cybersecurity Learning -->
      <g transform="translate(192, 0)">
        <rect x="0" y="0" width="205" height="38" rx="7" fill="url(#pillBg)" stroke="#00ff88" stroke-width="1.2" stroke-opacity="0.35"/>
        <text class="sans-txt" font-size="13" font-weight="600" fill="#e2e8f0" x="18" y="24">🛡️ Cybersecurity Learning</text>
      </g>
      <!-- Pill 3: Web Development Projects -->
      <g transform="translate(409, 0)">
        <rect x="0" y="0" width="220" height="38" rx="7" fill="url(#pillBg)" stroke="#00ff88" stroke-width="1.2" stroke-opacity="0.35"/>
        <text class="sans-txt" font-size="13" font-weight="600" fill="#e2e8f0" x="18" y="24">💻 Web Development</text>
      </g>
      <!-- Pill 4: Open Source -->
      <g transform="translate(641, 0)">
        <rect x="0" y="0" width="180" height="38" rx="7" fill="url(#pillBg)" stroke="#00ff88" stroke-width="1.2" stroke-opacity="0.35"/>
        <text class="sans-txt" font-size="13" font-weight="600" fill="#e2e8f0" x="18" y="24">👥 Open Source</text>
      </g>
    </g>
  </g>

  <!-- Right Visual Thumbnail Box -->
  <g transform="translate(860, 24)">
    <rect x="0" y="0" width="310" height="270" rx="10" fill="#05080c" stroke="#00ff88" stroke-width="1.2" stroke-opacity="0.4"/>
    <clipPath id="aboutClip">
      <rect x="2" y="2" width="306" height="206" rx="8"/>
    </clipPath>
    <image href="${aboutCoderB64}" x="2" y="2" width="306" height="206" clip-path="url(#aboutClip)" preserveAspectRatio="xMidYMid slice"/>
    <g transform="translate(16, 230)">
      <text class="mono-txt" font-size="12" font-weight="600" fill="#00ff88" x="0" y="0">&gt; Always curious.</text>
      <text class="mono-txt" font-size="12" font-weight="600" fill="#00ff88" x="0" y="20">&gt; Always building.</text>
    </g>
  </g>
</svg>`;

// ─── 2. FEATURED PROJECTS SVG ───
const featuredProjectsSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 560" width="100%" height="auto">
  ${commonDefs}
  
  <!-- Project 1: PrepPilot -->
  <g transform="translate(0, 0)">
    <rect x="2" y="2" width="588" height="264" rx="12" fill="url(#cardBg)" stroke="#1e3a46" stroke-width="1.2"/>
    <g transform="translate(24, 24)">
      <!-- Icon & Title -->
      <rect x="0" y="0" width="34" height="34" rx="7" fill="#a855f7" fill-opacity="0.15" stroke="#a855f7" stroke-width="1.2"/>
      <text class="sans-txt" font-size="16" fill="#c084fc" x="9" y="23">⚡</text>
      <text class="display-txt" font-size="18" font-weight="700" fill="#ffffff" x="46" y="24">PrepPilot</text>
      <rect x="140" y="8" width="52" height="20" rx="10" fill="none" stroke="#475569" stroke-width="1"/>
      <text class="sans-txt" font-size="11" fill="#94a3b8" x="149" y="22">Public</text>

      <text class="sans-txt" font-size="13.5" fill="#cbd5e1" x="0" y="66">
        An AI-powered interview preparation assistant that combines
      </text>
      <text class="sans-txt" font-size="13.5" fill="#cbd5e1" x="0" y="88">
        personalized learning, technical concepts, and interview-based
      </text>
      <text class="sans-txt" font-size="13.5" fill="#cbd5e1" x="0" y="110">
        question generation.
      </text>

      <!-- Tags -->
      <g transform="translate(0, 140)">
        <rect x="0" y="0" width="56" height="24" rx="4" fill="#ffffff" fill-opacity="0.05" stroke="#334155" stroke-width="1"/>
        <text class="mono-txt" font-size="11" fill="#94a3b8" x="8" y="16">Python</text>
        <rect x="64" y="0" width="44" height="24" rx="4" fill="#ffffff" fill-opacity="0.05" stroke="#334155" stroke-width="1"/>
        <text class="mono-txt" font-size="11" fill="#94a3b8" x="73" y="16">NLP</text>
        <rect x="116" y="0" width="34" height="24" rx="4" fill="#ffffff" fill-opacity="0.05" stroke="#334155" stroke-width="1"/>
        <text class="mono-txt" font-size="11" fill="#94a3b8" x="125" y="16">AI</text>
        <rect x="158" y="0" width="42" height="24" rx="4" fill="#ffffff" fill-opacity="0.05" stroke="#334155" stroke-width="1"/>
        <text class="mono-txt" font-size="11" fill="#94a3b8" x="166" y="16">LLM</text>
      </g>

      <!-- Buttons -->
      <g transform="translate(0, 184)">
        <rect x="0" y="0" width="80" height="30" rx="5" fill="#0d1b24" stroke="#00ff88" stroke-width="1.2" stroke-opacity="0.5"/>
        <text class="sans-txt" font-size="12" font-weight="600" fill="#00ff88" x="16" y="20">&lt;/&gt; Code</text>
        <rect x="92" y="0" width="105" height="30" rx="5" fill="#0d1b24" stroke="#00ff88" stroke-width="1.2" stroke-opacity="0.5"/>
        <text class="sans-txt" font-size="12" font-weight="600" fill="#00ff88" x="14" y="20">👁️ Live Demo</text>
      </g>
    </g>
    <clipPath id="p1Clip">
      <rect x="390" y="24" width="176" height="216" rx="8"/>
    </clipPath>
    <image href="${preppilotB64}" x="390" y="24" width="176" height="216" clip-path="url(#p1Clip)" preserveAspectRatio="xMidYMid slice"/>
  </g>

  <!-- Project 2: TruthShield X -->
  <g transform="translate(612, 0)">
    <rect x="2" y="2" width="584" height="264" rx="12" fill="url(#cardBg)" stroke="#1e3a46" stroke-width="1.2"/>
    <g transform="translate(24, 24)">
      <rect x="0" y="0" width="34" height="34" rx="7" fill="#00ff88" fill-opacity="0.15" stroke="#00ff88" stroke-width="1.2"/>
      <text class="sans-txt" font-size="16" fill="#00ff88" x="9" y="23">🛡️</text>
      <text class="display-txt" font-size="18" font-weight="700" fill="#ffffff" x="46" y="24">TruthShield X</text>
      <rect x="180" y="8" width="52" height="20" rx="10" fill="none" stroke="#475569" stroke-width="1"/>
      <text class="sans-txt" font-size="11" fill="#94a3b8" x="189" y="22">Public</text>

      <text class="sans-txt" font-size="13.5" fill="#cbd5e1" x="0" y="66">
        A digital trust and misinformation defense platform focused on
      </text>
      <text class="sans-txt" font-size="13.5" fill="#cbd5e1" x="0" y="88">
        fake news detection, credible analysis, privacy risks, and digital
      </text>
      <text class="sans-txt" font-size="13.5" fill="#cbd5e1" x="0" y="110">
        identity threats.
      </text>

      <g transform="translate(0, 140)">
        <rect x="0" y="0" width="56" height="24" rx="4" fill="#ffffff" fill-opacity="0.05" stroke="#334155" stroke-width="1"/>
        <text class="mono-txt" font-size="11" fill="#94a3b8" x="8" y="16">AI/ML</text>
        <rect x="64" y="0" width="62" height="24" rx="4" fill="#ffffff" fill-opacity="0.05" stroke="#334155" stroke-width="1"/>
        <text class="mono-txt" font-size="11" fill="#94a3b8" x="10" y="16">Security</text>
        <rect x="134" y="0" width="46" height="24" rx="4" fill="#ffffff" fill-opacity="0.05" stroke="#334155" stroke-width="1"/>
        <text class="mono-txt" font-size="11" fill="#94a3b8" x="10" y="16">Web</text>
      </g>

      <g transform="translate(0, 184)">
        <rect x="0" y="0" width="80" height="30" rx="5" fill="#0d1b24" stroke="#00ff88" stroke-width="1.2" stroke-opacity="0.5"/>
        <text class="sans-txt" font-size="12" font-weight="600" fill="#00ff88" x="16" y="20">&lt;/&gt; Code</text>
        <rect x="92" y="0" width="105" height="30" rx="5" fill="#0d1b24" stroke="#00ff88" stroke-width="1.2" stroke-opacity="0.5"/>
        <text class="sans-txt" font-size="12" font-weight="600" fill="#00ff88" x="14" y="20">👁️ Live Demo</text>
      </g>
    </g>
    <clipPath id="p2Clip">
      <rect x="390" y="24" width="176" height="216" rx="8"/>
    </clipPath>
    <image href="${truthshieldB64}" x="390" y="24" width="176" height="216" clip-path="url(#p2Clip)" preserveAspectRatio="xMidYMid slice"/>
  </g>

  <!-- Project 3: VIREONIQ / PLACE30 -->
  <g transform="translate(0, 288)">
    <rect x="2" y="2" width="588" height="264" rx="12" fill="url(#cardBg)" stroke="#1e3a46" stroke-width="1.2"/>
    <g transform="translate(24, 24)">
      <rect x="0" y="0" width="34" height="34" rx="7" fill="#38bdf8" fill-opacity="0.15" stroke="#38bdf8" stroke-width="1.2"/>
      <text class="sans-txt" font-size="16" fill="#38bdf8" x="9" y="23">🧭</text>
      <text class="display-txt" font-size="18" font-weight="700" fill="#ffffff" x="46" y="24">VIREONIQ / PLACE30</text>
      <rect x="245" y="8" width="52" height="20" rx="10" fill="none" stroke="#475569" stroke-width="1"/>
      <text class="sans-txt" font-size="11" fill="#94a3b8" x="254" y="22">Public</text>

      <text class="sans-txt" font-size="13.5" fill="#cbd5e1" x="0" y="66">
        A career intelligence platform for students offering resume
      </text>
      <text class="sans-txt" font-size="13.5" fill="#cbd5e1" x="0" y="88">
        analysis, placement gap insights, interview practice, and
      </text>
      <text class="sans-txt" font-size="13.5" fill="#cbd5e1" x="0" y="110">
        personalized recommendations.
      </text>

      <g transform="translate(0, 140)">
        <rect x="0" y="0" width="54" height="24" rx="4" fill="#ffffff" fill-opacity="0.05" stroke="#334155" stroke-width="1"/>
        <text class="mono-txt" font-size="11" fill="#94a3b8" x="8" y="16">React</text>
        <rect x="62" y="0" width="82" height="24" rx="4" fill="#ffffff" fill-opacity="0.05" stroke="#334155" stroke-width="1"/>
        <text class="mono-txt" font-size="11" fill="#94a3b8" x="8" y="16">TypeScript</text>
        <rect x="152" y="0" width="34" height="24" rx="4" fill="#ffffff" fill-opacity="0.05" stroke="#334155" stroke-width="1"/>
        <text class="mono-txt" font-size="11" fill="#94a3b8" x="12" y="16">AI</text>
        <rect x="194" y="0" width="46" height="24" rx="4" fill="#ffffff" fill-opacity="0.05" stroke="#334155" stroke-width="1"/>
        <text class="mono-txt" font-size="11" fill="#94a3b8" x="10" y="16">Web</text>
      </g>

      <g transform="translate(0, 184)">
        <rect x="0" y="0" width="80" height="30" rx="5" fill="#0d1b24" stroke="#00ff88" stroke-width="1.2" stroke-opacity="0.5"/>
        <text class="sans-txt" font-size="12" font-weight="600" fill="#00ff88" x="16" y="20">&lt;/&gt; Code</text>
        <rect x="92" y="0" width="105" height="30" rx="5" fill="#0d1b24" stroke="#00ff88" stroke-width="1.2" stroke-opacity="0.5"/>
        <text class="sans-txt" font-size="12" font-weight="600" fill="#00ff88" x="14" y="20">👁️ Live Demo</text>
      </g>
    </g>
    <clipPath id="p3Clip">
      <rect x="390" y="24" width="176" height="216" rx="8"/>
    </clipPath>
    <image href="${vireoniqB64}" x="390" y="24" width="176" height="216" clip-path="url(#p3Clip)" preserveAspectRatio="xMidYMid slice"/>
  </g>

  <!-- Project 4: Tech On Tour -->
  <g transform="translate(612, 288)">
    <rect x="2" y="2" width="584" height="264" rx="12" fill="url(#cardBg)" stroke="#1e3a46" stroke-width="1.2"/>
    <g transform="translate(24, 24)">
      <rect x="0" y="0" width="34" height="34" rx="7" fill="#fb923c" fill-opacity="0.15" stroke="#fb923c" stroke-width="1.2"/>
      <text class="sans-txt" font-size="16" fill="#fb923c" x="9" y="23">🌄</text>
      <text class="display-txt" font-size="18" font-weight="700" fill="#ffffff" x="46" y="24">Tech On Tour</text>
      <rect x="180" y="8" width="52" height="20" rx="10" fill="none" stroke="#475569" stroke-width="1"/>
      <text class="sans-txt" font-size="11" fill="#94a3b8" x="189" y="22">Public</text>

      <text class="sans-txt" font-size="13.5" fill="#cbd5e1" x="0" y="66">
        A smart tourism platform for discovering destinations, planning
      </text>
      <text class="sans-txt" font-size="13.5" fill="#cbd5e1" x="0" y="88">
        itineraries, and exploring local experiences with useful travel
      </text>
      <text class="sans-txt" font-size="13.5" fill="#cbd5e1" x="0" y="110">
        tools.
      </text>

      <g transform="translate(0, 140)">
        <rect x="0" y="0" width="46" height="24" rx="4" fill="#ffffff" fill-opacity="0.05" stroke="#334155" stroke-width="1"/>
        <text class="mono-txt" font-size="11" fill="#94a3b8" x="10" y="16">Web</text>
        <rect x="54" y="0" width="56" height="24" rx="4" fill="#ffffff" fill-opacity="0.05" stroke="#334155" stroke-width="1"/>
        <text class="mono-txt" font-size="11" fill="#94a3b8" x="8" y="16">Travel</text>
        <rect x="118" y="0" width="48" height="24" rx="4" fill="#ffffff" fill-opacity="0.05" stroke="#334155" stroke-width="1"/>
        <text class="mono-txt" font-size="11" fill="#94a3b8" x="8" y="16">Maps</text>
        <rect x="174" y="0" width="34" height="24" rx="4" fill="#ffffff" fill-opacity="0.05" stroke="#334155" stroke-width="1"/>
        <text class="mono-txt" font-size="11" fill="#94a3b8" x="12" y="16">AI</text>
      </g>

      <g transform="translate(0, 184)">
        <rect x="0" y="0" width="80" height="30" rx="5" fill="#0d1b24" stroke="#00ff88" stroke-width="1.2" stroke-opacity="0.5"/>
        <text class="sans-txt" font-size="12" font-weight="600" fill="#00ff88" x="16" y="20">&lt;/&gt; Code</text>
        <rect x="92" y="0" width="105" height="30" rx="5" fill="#0d1b24" stroke="#00ff88" stroke-width="1.2" stroke-opacity="0.5"/>
        <text class="sans-txt" font-size="12" font-weight="600" fill="#00ff88" x="14" y="20">👁️ Live Demo</text>
      </g>
    </g>
    <clipPath id="p4Clip">
      <rect x="390" y="24" width="176" height="216" rx="8"/>
    </clipPath>
    <image href="${techontourB64}" x="390" y="24" width="176" height="216" clip-path="url(#p4Clip)" preserveAspectRatio="xMidYMid slice"/>
  </g>
</svg>`;

// ─── 3. TECH STACK SVG ───
const techStackSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 230" width="100%" height="auto">
  ${commonDefs}
  
  <!-- Column 1: Programming Languages -->
  <g transform="translate(0, 0)">
    <rect x="2" y="2" width="224" height="226" rx="10" fill="url(#cardBg)" stroke="#1e3a46" stroke-width="1.2"/>
    <text class="sans-txt" font-size="12" font-weight="700" fill="#94a3b8" x="18" y="32">PROGRAMMING LANGUAGES</text>
    <line x1="18" y1="44" x2="208" y2="44" stroke="#1e3a46" stroke-width="1"/>
    <g transform="translate(18, 62)">
      <rect x="0" y="0" width="85" height="30" rx="5" fill="#09141c" stroke="#25434d" stroke-width="1"/>
      <circle cx="12" cy="15" r="3.5" fill="#00ff88"/>
      <text class="sans-txt" font-size="12" fill="#e2e8f0" x="24" y="19">Python</text>

      <rect x="94" y="0" width="80" height="30" rx="5" fill="#09141c" stroke="#25434d" stroke-width="1"/>
      <circle cx="106" cy="15" r="3.5" fill="#00ff88"/>
      <text class="sans-txt" font-size="12" fill="#e2e8f0" x="118" y="19">Java</text>

      <rect x="0" y="40" width="85" height="30" rx="5" fill="#09141c" stroke="#25434d" stroke-width="1"/>
      <circle cx="12" cy="55" r="3.5" fill="#00ff88"/>
      <text class="sans-txt" font-size="12" fill="#e2e8f0" x="24" y="59">C / C++</text>

      <rect x="94" y="40" width="94" height="30" rx="5" fill="#09141c" stroke="#25434d" stroke-width="1"/>
      <circle cx="106" cy="55" r="3.5" fill="#00ff88"/>
      <text class="sans-txt" font-size="12" fill="#e2e8f0" x="118" y="59">JavaScript</text>
    </g>
  </g>

  <!-- Column 2: Frontend Development -->
  <g transform="translate(244, 0)">
    <rect x="2" y="2" width="224" height="226" rx="10" fill="url(#cardBg)" stroke="#1e3a46" stroke-width="1.2"/>
    <text class="sans-txt" font-size="12" font-weight="700" fill="#94a3b8" x="18" y="32">FRONTEND DEVELOPMENT</text>
    <line x1="18" y1="44" x2="208" y2="44" stroke="#1e3a46" stroke-width="1"/>
    <g transform="translate(18, 62)">
      <rect x="0" y="0" width="80" height="30" rx="5" fill="#09141c" stroke="#25434d" stroke-width="1"/>
      <circle cx="12" cy="15" r="3.5" fill="#00ff88"/>
      <text class="sans-txt" font-size="12" fill="#e2e8f0" x="24" y="19">React</text>

      <rect x="88" y="0" width="96" height="30" rx="5" fill="#09141c" stroke="#25434d" stroke-width="1"/>
      <circle cx="100" cy="15" r="3.5" fill="#00ff88"/>
      <text class="sans-txt" font-size="12" fill="#e2e8f0" x="112" y="19">TypeScript</text>

      <rect x="0" y="40" width="75" height="30" rx="5" fill="#09141c" stroke="#25434d" stroke-width="1"/>
      <circle cx="12" cy="55" r="3.5" fill="#00ff88"/>
      <text class="sans-txt" font-size="12" fill="#e2e8f0" x="24" y="59">HTML</text>

      <rect x="84" y="40" width="70" height="30" rx="5" fill="#09141c" stroke="#25434d" stroke-width="1"/>
      <circle cx="96" cy="55" r="3.5" fill="#00ff88"/>
      <text class="sans-txt" font-size="12" fill="#e2e8f0" x="108" y="59">CSS</text>

      <rect x="0" y="80" width="85" height="30" rx="5" fill="#09141c" stroke="#25434d" stroke-width="1"/>
      <circle cx="12" cy="95" r="3.5" fill="#00ff88"/>
      <text class="sans-txt" font-size="12" fill="#e2e8f0" x="24" y="99">Tailwind</text>
    </g>
  </g>

  <!-- Column 3: Backend & Databases -->
  <g transform="translate(488, 0)">
    <rect x="2" y="2" width="224" height="226" rx="10" fill="url(#cardBg)" stroke="#1e3a46" stroke-width="1.2"/>
    <text class="sans-txt" font-size="12" font-weight="700" fill="#94a3b8" x="18" y="32">BACKEND &amp; DATABASES</text>
    <line x1="18" y1="44" x2="208" y2="44" stroke="#1e3a46" stroke-width="1"/>
    <g transform="translate(18, 62)">
      <rect x="0" y="0" width="85" height="30" rx="5" fill="#09141c" stroke="#25434d" stroke-width="1"/>
      <circle cx="12" cy="15" r="3.5" fill="#00ff88"/>
      <text class="sans-txt" font-size="12" fill="#e2e8f0" x="24" y="19">Node.js</text>

      <rect x="94" y="0" width="85" height="30" rx="5" fill="#09141c" stroke="#25434d" stroke-width="1"/>
      <circle cx="106" cy="15" r="3.5" fill="#00ff88"/>
      <text class="sans-txt" font-size="12" fill="#e2e8f0" x="118" y="19">FastAPI</text>

      <rect x="0" y="40" width="90" height="30" rx="5" fill="#09141c" stroke="#25434d" stroke-width="1"/>
      <circle cx="12" cy="55" r="3.5" fill="#00ff88"/>
      <text class="sans-txt" font-size="12" fill="#e2e8f0" x="24" y="59">MongoDB</text>

      <rect x="98" y="40" width="80" height="30" rx="5" fill="#09141c" stroke="#25434d" stroke-width="1"/>
      <circle cx="110" cy="55" r="3.5" fill="#00ff88"/>
      <text class="sans-txt" font-size="12" fill="#e2e8f0" x="122" y="59">MySQL</text>
    </g>
  </g>

  <!-- Column 4: AI / ML -->
  <g transform="translate(732, 0)">
    <rect x="2" y="2" width="224" height="226" rx="10" fill="url(#cardBg)" stroke="#1e3a46" stroke-width="1.2"/>
    <text class="sans-txt" font-size="12" font-weight="700" fill="#94a3b8" x="18" y="32">AI / ML</text>
    <line x1="18" y1="44" x2="208" y2="44" stroke="#1e3a46" stroke-width="1"/>
    <g transform="translate(18, 62)">
      <rect x="0" y="0" width="75" height="30" rx="5" fill="#09141c" stroke="#25434d" stroke-width="1"/>
      <circle cx="12" cy="15" r="3.5" fill="#00ff88"/>
      <text class="sans-txt" font-size="12" fill="#e2e8f0" x="24" y="19">LLMs</text>

      <rect x="84" y="0" width="75" height="30" rx="5" fill="#09141c" stroke="#25434d" stroke-width="1"/>
      <circle cx="96" cy="15" r="3.5" fill="#00ff88"/>
      <text class="sans-txt" font-size="12" fill="#e2e8f0" x="108" y="19">RAG</text>

      <rect x="0" y="40" width="75" height="30" rx="5" fill="#09141c" stroke="#25434d" stroke-width="1"/>
      <circle cx="12" cy="55" r="3.5" fill="#00ff88"/>
      <text class="sans-txt" font-size="12" fill="#e2e8f0" x="24" y="59">NLP</text>

      <rect x="84" y="40" width="90" height="30" rx="5" fill="#09141c" stroke="#25434d" stroke-width="1"/>
      <circle cx="96" cy="55" r="3.5" fill="#00ff88"/>
      <text class="sans-txt" font-size="12" fill="#e2e8f0" x="108" y="59">PyTorch</text>
    </g>
  </g>

  <!-- Column 5: Tools & Others -->
  <g transform="translate(976, 0)">
    <rect x="2" y="2" width="222" height="226" rx="10" fill="url(#cardBg)" stroke="#1e3a46" stroke-width="1.2"/>
    <text class="sans-txt" font-size="12" font-weight="700" fill="#94a3b8" x="18" y="32">TOOLS &amp; OTHERS</text>
    <line x1="18" y1="44" x2="204" y2="44" stroke="#1e3a46" stroke-width="1"/>
    <g transform="translate(18, 62)">
      <rect x="0" y="0" width="70" height="30" rx="5" fill="#09141c" stroke="#25434d" stroke-width="1"/>
      <circle cx="12" cy="15" r="3.5" fill="#00ff88"/>
      <text class="sans-txt" font-size="12" fill="#e2e8f0" x="24" y="19">Git</text>

      <rect x="78" y="0" width="85" height="30" rx="5" fill="#09141c" stroke="#25434d" stroke-width="1"/>
      <circle cx="90" cy="15" r="3.5" fill="#00ff88"/>
      <text class="sans-txt" font-size="12" fill="#e2e8f0" x="102" y="19">Docker</text>

      <rect x="0" y="40" width="95" height="30" rx="5" fill="#09141c" stroke="#25434d" stroke-width="1"/>
      <circle cx="12" cy="55" r="3.5" fill="#00ff88"/>
      <text class="sans-txt" font-size="12" fill="#e2e8f0" x="24" y="59">VS Code</text>
    </g>
  </g>
</svg>`;

// ─── 4. GITHUB ANALYTICS SVG ───
const analyticsSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 520" width="100%" height="auto">
  ${commonDefs}
  
  <!-- Top Row (3 Cards) -->
  <!-- Card 1: GitHub Stats -->
  <g transform="translate(0, 0)">
    <rect x="2" y="2" width="386" height="236" rx="12" fill="url(#cardBg)" stroke="#1e3a46" stroke-width="1.2"/>
    <g transform="translate(24, 24)">
      <text class="sans-txt" font-size="14" font-weight="700" fill="#ffffff" x="0" y="0">📁 GitHub Stats</text>
      <text class="mono-txt" font-size="13" fill="#cbd5e1" x="0" y="26">Priya-Ranjan-0201</text>
      <line x1="0" y1="38" x2="338" y2="38" stroke="#1e3a46" stroke-width="1"/>

      <g transform="translate(0, 60)">
        <text class="sans-txt" font-size="13" fill="#94a3b8" x="0" y="0">Total Commits</text>
        <text class="mono-txt" font-size="13" font-weight="700" fill="#00ff88" x="338" y="0" text-anchor="end">478</text>

        <text class="sans-txt" font-size="13" fill="#94a3b8" x="0" y="26">Total Repositories</text>
        <text class="mono-txt" font-size="13" font-weight="700" fill="#00ff88" x="338" y="26" text-anchor="end">18</text>

        <text class="sans-txt" font-size="13" fill="#94a3b8" x="0" y="52">Pull Requests</text>
        <text class="mono-txt" font-size="13" font-weight="700" fill="#00ff88" x="338" y="52" text-anchor="end">14</text>

        <text class="sans-txt" font-size="13" fill="#94a3b8" x="0" y="78">Issues Opened</text>
        <text class="mono-txt" font-size="13" font-weight="700" fill="#00ff88" x="338" y="78" text-anchor="end">8</text>

        <text class="sans-txt" font-size="13" fill="#94a3b8" x="0" y="104">Contributions</text>
        <text class="mono-txt" font-size="13" font-weight="700" fill="#00ff88" x="338" y="104" text-anchor="end">120</text>
      </g>
    </g>
  </g>

  <!-- Card 2: Top Languages -->
  <g transform="translate(406, 0)">
    <rect x="2" y="2" width="388" height="236" rx="12" fill="url(#cardBg)" stroke="#1e3a46" stroke-width="1.2"/>
    <g transform="translate(24, 24)">
      <text class="sans-txt" font-size="14" font-weight="700" fill="#ffffff" x="0" y="0">🌐 Top Languages</text>

      <g transform="translate(20, 30)">
        <!-- Donut Chart -->
        <g transform="translate(50, 70)">
          <!-- Python 42% -->
          <circle cx="0" cy="0" r="50" fill="none" stroke="#00ff88" stroke-width="16" stroke-dasharray="132 182" stroke-dashoffset="0" transform="rotate(-90)"/>
          <!-- JS 28% -->
          <circle cx="0" cy="0" r="50" fill="none" stroke="#f59e0b" stroke-width="16" stroke-dasharray="88 226" stroke-dashoffset="-132" transform="rotate(-90)"/>
          <!-- TS 18% -->
          <circle cx="0" cy="0" r="50" fill="none" stroke="#38bdf8" stroke-width="16" stroke-dasharray="56 258" stroke-dashoffset="-220" transform="rotate(-90)"/>
          <!-- HTML/CSS 8% -->
          <circle cx="0" cy="0" r="50" fill="none" stroke="#f43f5e" stroke-width="16" stroke-dasharray="25 289" stroke-dashoffset="-276" transform="rotate(-90)"/>
          <!-- Others 4% -->
          <circle cx="0" cy="0" r="50" fill="none" stroke="#a855f7" stroke-width="16" stroke-dasharray="13 301" stroke-dashoffset="-301" transform="rotate(-90)"/>
        </g>

        <!-- Legend -->
        <g transform="translate(150, 20)">
          <rect x="0" y="0" width="12" height="12" rx="2" fill="#00ff88"/>
          <text class="sans-txt" font-size="13" fill="#cbd5e1" x="20" y="11">Python 42%</text>

          <rect x="0" y="25" width="12" height="12" rx="2" fill="#f59e0b"/>
          <text class="sans-txt" font-size="13" fill="#cbd5e1" x="20" y="36">JavaScript 28%</text>

          <rect x="0" y="50" width="12" height="12" rx="2" fill="#38bdf8"/>
          <text class="sans-txt" font-size="13" fill="#cbd5e1" x="20" y="61">TypeScript 18%</text>

          <rect x="0" y="75" width="12" height="12" rx="2" fill="#f43f5e"/>
          <text class="sans-txt" font-size="13" fill="#cbd5e1" x="20" y="86">HTML/CSS 8%</text>

          <rect x="0" y="100" width="12" height="12" rx="2" fill="#a855f7"/>
          <text class="sans-txt" font-size="13" fill="#cbd5e1" x="20" y="111">Others 4%</text>
        </g>
      </g>
    </g>
  </g>

  <!-- Card 3: GitHub Streak -->
  <g transform="translate(814, 0)">
    <rect x="2" y="2" width="384" height="236" rx="12" fill="url(#cardBg)" stroke="#1e3a46" stroke-width="1.2"/>
    <g transform="translate(24, 24)">
      <text class="sans-txt" font-size="14" font-weight="700" fill="#ffffff" x="0" y="0">🔥 Github Streak</text>

      <g transform="translate(168, 90)">
        <circle cx="0" cy="0" r="44" fill="#051410" stroke="#00ff88" stroke-width="2.5" filter="url(#cardGlow)"/>
        <text font-size="34" x="-17" y="12">🔥</text>
      </g>
      <text class="mono-txt" font-size="14" font-weight="600" fill="#00ff88" x="192" y="180" text-anchor="middle">
        Keep the streak alive!
      </text>
    </g>
  </g>

  <!-- Bottom Row: Contribution Graph + Quote -->
  <!-- Contribution Graph Box -->
  <g transform="translate(0, 256)">
    <rect x="2" y="2" width="794" height="260" rx="12" fill="url(#cardBg)" stroke="#1e3a46" stroke-width="1.2"/>
    <g transform="translate(24, 24)">
      <text class="sans-txt" font-size="14" font-weight="700" fill="#ffffff" x="0" y="0">🟩 Contribution Graph</text>

      <!-- Months labels -->
      <g transform="translate(32, 28)" class="mono-txt" font-size="11" fill="#64748b">
        <text x="0" y="0">Jan</text><text x="60" y="0">Feb</text><text x="120" y="0">Mar</text>
        <text x="180" y="0">Apr</text><text x="240" y="0">May</text><text x="300" y="0">Jun</text>
        <text x="360" y="0">Jul</text><text x="420" y="0">Aug</text><text x="480" y="0">Sep</text>
        <text x="540" y="0">Oct</text><text x="600" y="0">Nov</text><text x="660" y="0">Dec</text>
      </g>

      <!-- Heatmap rows -->
      <g transform="translate(0, 42)">
        <text class="mono-txt" font-size="10" fill="#64748b" x="0" y="22">Mon</text>
        <text class="mono-txt" font-size="10" fill="#64748b" x="0" y="52">Wed</text>
        <text class="mono-txt" font-size="10" fill="#64748b" x="0" y="82">Fri</text>

        <!-- Generate matrix squares -->
        <g transform="translate(32, 10)">
          ${(() => {
            let cells = '';
            const colors = ['#0e1d24', '#004d26', '#008a46', '#00c865', '#00ff88'];
            for (let c = 0; c < 50; c++) {
              for (let r = 0; r < 7; r++) {
                const x = c * 14;
                const y = r * 14;
                const seed = (c * 7 + r * 13) % 17;
                let col = colors[0];
                if (c > 35) {
                  col = colors[seed % 5];
                } else if (seed % 3 === 0) {
                  col = colors[1 + (seed % 3)];
                }
                cells += `<rect x="${x}" y="${y}" width="10" height="10" rx="2" fill="${col}" />`;
              }
            }
            return cells;
          })()}
        </g>
      </g>

      <!-- Footer note -->
      <g transform="translate(0, 195)">
        <text class="sans-txt" font-size="11.5" fill="#64748b" x="0" y="0">* This is a live graph from my GitHub profile.</text>
        <g transform="translate(580, -10)">
          <text class="sans-txt" font-size="11" fill="#64748b" x="0" y="10">Less</text>
          <rect x="32" y="0" width="10" height="10" rx="2" fill="#0e1d24"/>
          <rect x="46" y="0" width="10" height="10" rx="2" fill="#004d26"/>
          <rect x="60" y="0" width="10" height="10" rx="2" fill="#008a46"/>
          <rect x="74" y="0" width="10" height="10" rx="2" fill="#00c865"/>
          <rect x="88" y="0" width="10" height="10" rx="2" fill="#00ff88"/>
          <text class="sans-txt" font-size="11" fill="#64748b" x="106" y="10">More</text>
        </g>
      </g>
    </g>
  </g>

  <!-- Quote Card with Beacon Image -->
  <g transform="translate(814, 256)">
    <rect x="2" y="2" width="384" height="260" rx="12" fill="#05080c" stroke="#00ff88" stroke-width="1.2" stroke-opacity="0.4"/>
    <clipPath id="quoteClip">
      <rect x="3" y="3" width="382" height="258" rx="11"/>
    </clipPath>
    <image href="${quoteBeaconB64}" x="3" y="3" width="382" height="258" clip-path="url(#quoteClip)" preserveAspectRatio="xMidYMid slice" opacity="0.8"/>
    <rect x="3" y="3" width="382" height="258" fill="#05080c" fill-opacity="0.55" clip-path="url(#quoteClip)"/>
    <text class="mono-txt" font-size="18" font-weight="700" fill="#00ff88" x="194" y="115" text-anchor="middle" filter="url(#neonTextGlow)">
      " Small
    </text>
    <text class="mono-txt" font-size="18" font-weight="700" fill="#00ff88" x="194" y="145" text-anchor="middle" filter="url(#neonTextGlow)">
      consistent
    </text>
    <text class="mono-txt" font-size="18" font-weight="700" fill="#00ff88" x="194" y="175" text-anchor="middle" filter="url(#neonTextGlow)">
      steps
    </text>
    <text class="mono-txt" font-size="18" font-weight="700" fill="#00ff88" x="194" y="205" text-anchor="middle" filter="url(#neonTextGlow)">
      big results. "
    </text>
  </g>
</svg>`;

// ─── 5. MY JOURNEY SVG ───
const myJourneySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 320" width="100%" height="auto">
  ${commonDefs}
  <rect x="2" y="2" width="1196" height="316" rx="12" fill="url(#cardBg)" stroke="#1e3a46" stroke-width="1.2"/>

  <!-- Timeline on Left -->
  <g transform="translate(48, 40)">
    <!-- Vertical Line -->
    <line x1="8" y1="12" x2="8" y2="216" stroke="#00ff88" stroke-width="2" stroke-opacity="0.6"/>

    <!-- 2024 (Oct) -->
    <g transform="translate(0, 0)">
      <circle cx="8" cy="12" r="8" fill="#05080c" stroke="#00ff88" stroke-width="2"/>
      <circle cx="8" cy="12" r="3.5" fill="#00ff88"/>
      <text class="mono-txt" font-size="15" font-weight="700" fill="#00ff88" x="32" y="16">2024</text>
      <text class="sans-txt" font-size="14" font-weight="600" fill="#ffffff" x="84" y="16">Established GitHub &amp; CS Core</text>
      <text class="sans-txt" font-size="13" fill="#94a3b8" x="84" y="36">Joined Oct 23, 2024. C/Python algorithms &amp; systems</text>
    </g>

    <!-- 2025 -->
    <g transform="translate(0, 68)">
      <circle cx="8" cy="12" r="8" fill="#05080c" stroke="#00ff88" stroke-width="2"/>
      <circle cx="8" cy="12" r="3.5" fill="#00ff88"/>
      <text class="mono-txt" font-size="15" font-weight="700" fill="#00ff88" x="32" y="16">2025</text>
      <text class="sans-txt" font-size="14" font-weight="600" fill="#ffffff" x="84" y="16">OS Storage Kinematics Simulator</text>
      <text class="sans-txt" font-size="13" fill="#94a3b8" x="84" y="36">Released 60 FPS Canvas Disk Scheduling Simulator</text>
    </g>

    <!-- 2026 -->
    <g transform="translate(0, 136)">
      <circle cx="8" cy="12" r="8" fill="#05080c" stroke="#00ff88" stroke-width="2"/>
      <circle cx="8" cy="12" r="3.5" fill="#00ff88"/>
      <text class="mono-txt" font-size="15" font-weight="700" fill="#00ff88" x="32" y="16">2026</text>
      <text class="sans-txt" font-size="14" font-weight="600" fill="#ffffff" x="84" y="16">Production AI &amp; Cyber Defense</text>
      <text class="sans-txt" font-size="13" fill="#94a3b8" x="84" y="36">Priocardix-AI, VIREONIQ, BrainCheck &amp; TrustShield-X</text>
    </g>

    <!-- 2026 SIH -->
    <g transform="translate(0, 204)">
      <circle cx="8" cy="12" r="8" fill="#05080c" stroke="#00ff88" stroke-width="2"/>
      <circle cx="8" cy="12" r="3.5" fill="#00ff88"/>
      <text class="mono-txt" font-size="15" font-weight="700" fill="#00ff88" x="32" y="16">SIH</text>
      <text class="sans-txt" font-size="14" font-weight="600" fill="#ffffff" x="84" y="16">Smart India Hackathon Finale</text>
      <text class="sans-txt" font-size="13" fill="#94a3b8" x="84" y="36">TECH-ON-TOUR: Smart Tourism Digital Public Infrastructure</text>
    </g>
  </g>

  <!-- Right Visual Wanderer Card -->
  <g transform="translate(740, 24)">
    <rect x="0" y="0" width="432" height="270" rx="10" fill="#05080c" stroke="#00ff88" stroke-width="1.2" stroke-opacity="0.4"/>
    <clipPath id="wanderClip">
      <rect x="2" y="2" width="428" height="266" rx="9"/>
    </clipPath>
    <image href="${journeyWandererB64}" x="2" y="2" width="428" height="266" clip-path="url(#wanderClip)" preserveAspectRatio="xMidYMid slice" opacity="0.9"/>
    <rect x="260" y="180" width="160" height="74" rx="6" fill="#05080c" fill-opacity="0.85" stroke="#00ff88" stroke-width="1" stroke-opacity="0.4"/>
    <text class="mono-txt" font-size="13" font-weight="700" fill="#00ff88" x="274" y="206">A Bigger</text>
    <text class="mono-txt" font-size="13" font-weight="700" fill="#00ff88" x="274" y="226">Better Version</text>
    <text class="mono-txt" font-size="13" font-weight="700" fill="#00ff88" x="274" y="246">Ahead...</text>
  </g>
</svg>`;

// ─── 6. CURRENTLY EXPLORING SVG ───
const currentlyExploringSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 160" width="100%" height="auto">
  ${commonDefs}
  
  <!-- 4 Cards -->
  <!-- Card 1 -->
  <g transform="translate(0, 0)">
    <rect x="2" y="2" width="288" height="156" rx="10" fill="url(#cardBg)" stroke="#1e3a46" stroke-width="1.2"/>
    <g transform="translate(20, 20)">
      <rect x="0" y="0" width="34" height="34" rx="7" fill="#00ff88" fill-opacity="0.12" stroke="#00ff88" stroke-width="1"/>
      <text font-size="16" x="8" y="24">🧠</text>
      <text class="sans-txt" font-size="14" font-weight="700" fill="#ffffff" x="44" y="22">Artificial Intelligence</text>
      <text class="sans-txt" font-size="13" fill="#cbd5e1" x="0" y="60">Exploring LLMs, RAG, and</text>
      <text class="sans-txt" font-size="13" fill="#cbd5e1" x="0" y="82">real-world AI applications.</text>
    </g>
  </g>

  <!-- Card 2 -->
  <g transform="translate(304, 0)">
    <rect x="2" y="2" width="288" height="156" rx="10" fill="url(#cardBg)" stroke="#1e3a46" stroke-width="1.2"/>
    <g transform="translate(20, 20)">
      <rect x="0" y="0" width="34" height="34" rx="7" fill="#00ff88" fill-opacity="0.12" stroke="#00ff88" stroke-width="1"/>
      <text font-size="16" x="8" y="24">🛡️</text>
      <text class="sans-txt" font-size="14" font-weight="700" fill="#ffffff" x="44" y="22">Cybersecurity</text>
      <text class="sans-txt" font-size="13" fill="#cbd5e1" x="0" y="60">Learning security practices,</text>
      <text class="sans-txt" font-size="13" fill="#cbd5e1" x="0" y="82">threat analysis, &amp; digital trust.</text>
    </g>
  </g>

  <!-- Card 3 -->
  <g transform="translate(608, 0)">
    <rect x="2" y="2" width="288" height="156" rx="10" fill="url(#cardBg)" stroke="#1e3a46" stroke-width="1.2"/>
    <g transform="translate(20, 20)">
      <rect x="0" y="0" width="34" height="34" rx="7" fill="#00ff88" fill-opacity="0.12" stroke="#00ff88" stroke-width="1"/>
      <text class="sans-txt" font-size="14" font-weight="700" fill="#00ff88" x="8" y="23">&lt;/&gt;</text>
      <text class="sans-txt" font-size="14" font-weight="700" fill="#ffffff" x="44" y="22">Full-Stack Development</text>
      <text class="sans-txt" font-size="13" fill="#cbd5e1" x="0" y="60">Building scalable web applications</text>
      <text class="sans-txt" font-size="13" fill="#cbd5e1" x="0" y="82">and system design skills.</text>
    </g>
  </g>

  <!-- Card 4 -->
  <g transform="translate(912, 0)">
    <rect x="2" y="2" width="286" height="156" rx="10" fill="url(#cardBg)" stroke="#1e3a46" stroke-width="1.2"/>
    <g transform="translate(20, 20)">
      <rect x="0" y="0" width="34" height="34" rx="7" fill="#00ff88" fill-opacity="0.12" stroke="#00ff88" stroke-width="1"/>
      <text font-size="16" x="8" y="24">👥</text>
      <text class="sans-txt" font-size="14" font-weight="700" fill="#ffffff" x="44" y="22">Open Source</text>
      <text class="sans-txt" font-size="13" fill="#cbd5e1" x="0" y="60">Contributing to open-source and</text>
      <text class="sans-txt" font-size="13" fill="#cbd5e1" x="0" y="82">collaborating with community.</text>
    </g>
  </g>
</svg>`;

// ─── 7. ACHIEVEMENTS & HIGHLIGHTS SVG ───
const achievementsSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 130" width="100%" height="auto">
  ${commonDefs}
  
  <!-- 6 Counter Cards -->
  <!-- 1 -->
  <g transform="translate(0, 0)">
    <rect x="2" y="2" width="190" height="126" rx="10" fill="url(#cardBg)" stroke="#00ff88" stroke-width="1.2" stroke-opacity="0.4"/>
    <text font-size="20" x="97" y="38" text-anchor="middle">⚡</text>
    <text class="display-txt" font-size="24" font-weight="800" fill="#ffffff" x="97" y="74" text-anchor="middle">500+</text>
    <text class="sans-txt" font-size="12" font-weight="600" fill="#94a3b8" x="97" y="100" text-anchor="middle">Total Commits</text>
  </g>

  <!-- 2 -->
  <g transform="translate(202, 0)">
    <rect x="2" y="2" width="190" height="126" rx="10" fill="url(#cardBg)" stroke="#00ff88" stroke-width="1.2" stroke-opacity="0.4"/>
    <text font-size="20" x="97" y="38" text-anchor="middle">📁</text>
    <text class="display-txt" font-size="24" font-weight="800" fill="#ffffff" x="97" y="74" text-anchor="middle">30+</text>
    <text class="sans-txt" font-size="12" font-weight="600" fill="#94a3b8" x="97" y="100" text-anchor="middle">Repositories</text>
  </g>

  <!-- 3 -->
  <g transform="translate(404, 0)">
    <rect x="2" y="2" width="190" height="126" rx="10" fill="url(#cardBg)" stroke="#00ff88" stroke-width="1.2" stroke-opacity="0.4"/>
    <text font-size="20" x="97" y="38" text-anchor="middle">👥</text>
    <text class="display-txt" font-size="24" font-weight="800" fill="#ffffff" x="97" y="74" text-anchor="middle">100+</text>
    <text class="sans-txt" font-size="12" font-weight="600" fill="#94a3b8" x="97" y="100" text-anchor="middle">Contributions</text>
  </g>

  <!-- 4 -->
  <g transform="translate(606, 0)">
    <rect x="2" y="2" width="190" height="126" rx="10" fill="url(#cardBg)" stroke="#00ff88" stroke-width="1.2" stroke-opacity="0.4"/>
    <text font-size="20" x="97" y="38" text-anchor="middle">⭐</text>
    <text class="display-txt" font-size="24" font-weight="800" fill="#ffffff" x="97" y="74" text-anchor="middle">4+</text>
    <text class="sans-txt" font-size="12" font-weight="600" fill="#94a3b8" x="97" y="100" text-anchor="middle">Major Projects</text>
  </g>

  <!-- 5 -->
  <g transform="translate(808, 0)">
    <rect x="2" y="2" width="190" height="126" rx="10" fill="url(#cardBg)" stroke="#00ff88" stroke-width="1.2" stroke-opacity="0.4"/>
    <text font-size="20" x="97" y="38" text-anchor="middle">🌐</text>
    <text class="display-txt" font-size="18" font-weight="800" fill="#ffffff" x="97" y="72" text-anchor="middle">Open Source</text>
    <text class="sans-txt" font-size="12" font-weight="600" fill="#94a3b8" x="97" y="100" text-anchor="middle">Contributor</text>
  </g>

  <!-- 6 -->
  <g transform="translate(1010, 0)">
    <rect x="2" y="2" width="188" height="126" rx="10" fill="url(#cardBg)" stroke="#00ff88" stroke-width="1.2" stroke-opacity="0.4"/>
    <text font-size="20" x="95" y="38" text-anchor="middle">🚀</text>
    <text class="display-txt" font-size="18" font-weight="800" fill="#ffffff" x="95" y="72" text-anchor="middle">Continuous</text>
    <text class="sans-txt" font-size="12" font-weight="600" fill="#94a3b8" x="95" y="100" text-anchor="middle">Learner</text>
  </g>
</svg>`;

// ─── 8. LET'S CONNECT SVG ───
const letsConnectSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 240" width="100%" height="auto">
  ${commonDefs}
  <rect x="2" y="2" width="1196" height="236" rx="12" fill="url(#cardBg)" stroke="#1e3a46" stroke-width="1.2"/>

  <!-- Left Side -->
  <g transform="translate(36, 28)">
    <text class="sans-txt" font-size="14.5" fill="#cbd5e1" x="0" y="0">
      I'm always open to discussing new ideas, projects, or opportunities.
    </text>

    <!-- 4 Connect Pills in 2x2 grid -->
    <g transform="translate(0, 24)">
      <!-- Pill 1: Github -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="310" height="54" rx="8" fill="#09151e" stroke="#25434d" stroke-width="1.2"/>
        <rect x="14" y="12" width="30" height="30" rx="6" fill="#00ff88" fill-opacity="0.15" stroke="#00ff88" stroke-width="1"/>
        <text font-size="16" x="21" y="33">🐙</text>
        <text class="sans-txt" font-size="11" font-weight="600" fill="#94a3b8" x="54" y="24">GITHUB</text>
        <text class="sans-txt" font-size="13" font-weight="700" fill="#ffffff" x="54" y="42">Priya-Ranjan-0201</text>
      </g>

      <!-- Pill 2: LinkedIn -->
      <g transform="translate(324, 0)">
        <rect x="0" y="0" width="310" height="54" rx="8" fill="#09151e" stroke="#25434d" stroke-width="1.2"/>
        <rect x="14" y="12" width="30" height="30" rx="6" fill="#0077b5" fill-opacity="0.2" stroke="#0077b5" stroke-width="1"/>
        <text font-size="14" font-weight="800" fill="#0077b5" x="22" y="32">in</text>
        <text class="sans-txt" font-size="11" font-weight="600" fill="#94a3b8" x="54" y="24">LINKEDIN</text>
        <text class="sans-txt" font-size="13" font-weight="700" fill="#ffffff" x="54" y="42">Connect with me</text>
      </g>

      <!-- Pill 3: Email -->
      <g transform="translate(0, 66)">
        <rect x="0" y="0" width="310" height="54" rx="8" fill="#09151e" stroke="#25434d" stroke-width="1.2"/>
        <rect x="14" y="12" width="30" height="30" rx="6" fill="#00ff88" fill-opacity="0.15" stroke="#00ff88" stroke-width="1"/>
        <text font-size="16" x="21" y="33">✉️</text>
        <text class="sans-txt" font-size="11" font-weight="600" fill="#94a3b8" x="54" y="24">EMAIL</text>
        <text class="sans-txt" font-size="13" font-weight="700" fill="#ffffff" x="54" y="42">priyaranjan01@gmail.com</text>
      </g>

      <!-- Pill 4: Resume -->
      <g transform="translate(324, 66)">
        <rect x="0" y="0" width="310" height="54" rx="8" fill="#09151e" stroke="#25434d" stroke-width="1.2"/>
        <rect x="14" y="12" width="30" height="30" rx="6" fill="#00e5ff" fill-opacity="0.15" stroke="#00e5ff" stroke-width="1"/>
        <text font-size="16" x="21" y="33">📄</text>
        <text class="sans-txt" font-size="11" font-weight="600" fill="#94a3b8" x="54" y="24">RESUME</text>
        <text class="sans-txt" font-size="13" font-weight="700" fill="#ffffff" x="54" y="42">View my resume</text>
      </g>
    </g>
  </g>

  <!-- Right Visual Card -->
  <g transform="translate(730, 24)">
    <rect x="0" y="0" width="438" height="188" rx="10" fill="#05080c" stroke="#00ff88" stroke-width="1.2" stroke-opacity="0.4"/>
    <clipPath id="collabClip">
      <rect x="2" y="2" width="434" height="184" rx="9"/>
    </clipPath>
    <image href="${connectCollabB64}" x="2" y="2" width="434" height="184" clip-path="url(#collabClip)" preserveAspectRatio="xMidYMid slice" opacity="0.85"/>
    <rect x="2" y="2" width="434" height="184" fill="linear-gradient(180deg, transparent 0%, rgba(5,8,12,0.92) 100%)" clip-path="url(#collabClip)"/>
    <g transform="translate(20, 140)">
      <text class="display-txt" font-size="15" font-weight="700" fill="#ffffff" x="0" y="0">Open to Internships &amp; Collaborations</text>
      <text class="sans-txt" font-size="13" font-weight="600" fill="#00ff88" x="0" y="22">Let's build something amazing together! &rarr;</text>
    </g>
  </g>
</svg>`;

const filesToWrite = [
  ['about-me.svg', aboutMeSvg],
  ['featured-projects.svg', featuredProjectsSvg],
  ['tech-stack.svg', techStackSvg],
  ['analytics-dashboard.svg', analyticsSvg],
  ['my-journey.svg', myJourneySvg],
  ['currently-exploring.svg', currentlyExploringSvg],
  ['achievements-highlights.svg', achievementsSvg],
  ['lets-connect.svg', letsConnectSvg]
];

for (const [name, content] of filesToWrite) {
  fs.writeFileSync(path.join(assetsDir, name), content);
  console.log(`Generated assets/${name}`);
}
console.log('All profile SVG assets created successfully!');
