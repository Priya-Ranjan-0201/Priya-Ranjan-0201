const fs = require('fs');
const path = require('path');

const imgPath = path.join(__dirname, '../assets/hero_bg.jpg');
const imgBase64 = fs.readFileSync(imgPath).toString('base64');
const dataUri = `data:image/jpeg;base64,${imgBase64}`;

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 440" width="100%" height="auto">
  <defs>
    <!-- Dark gradient overlay for text readability -->
    <linearGradient id="overlayGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#05080c" stop-opacity="0.97"/>
      <stop offset="45%" stop-color="#05080c" stop-opacity="0.88"/>
      <stop offset="70%" stop-color="#05080c" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#05080c" stop-opacity="0.2"/>
    </linearGradient>

    <!-- Neon Green Glow Filter -->
    <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <!-- Border Glow Filter -->
    <filter id="borderGlow" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <style>
      .mono-txt { font-family: 'Fira Code', 'Consolas', 'Courier New', monospace; }
      .sans-txt { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', Roboto, sans-serif; }
      .display-txt { font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
      
      @keyframes pulseGlow {
        0%, 100% { opacity: 0.8; }
        50% { opacity: 1; }
      }
      .glow-pulse {
        animation: pulseGlow 3s ease-in-out infinite;
      }
    </style>
  </defs>

  <!-- Outer Rounded Border -->
  <rect x="2" y="2" width="1196" height="436" rx="14" fill="#05080c" stroke="#00ff88" stroke-width="1.5" stroke-opacity="0.4" filter="url(#borderGlow)"/>

  <!-- Background Image Clipped -->
  <clipPath id="heroClip">
    <rect x="3" y="3" width="1194" height="434" rx="13" />
  </clipPath>

  <g clip-path="url(#heroClip)">
    <!-- Base background image -->
    <image href="${dataUri}" x="150" y="0" width="1050" height="440" preserveAspectRatio="xMidYMid slice" opacity="0.85"/>

    <!-- Left to Right Darkening Gradient Overlay -->
    <rect x="0" y="0" width="1200" height="440" fill="url(#overlayGrad)"/>

    <!-- Top & Bottom subtle vignettes -->
    <rect x="0" y="0" width="1200" height="40" fill="linear-gradient(180deg, rgba(5,8,12,0.6) 0%, transparent 100%)"/>
    <rect x="0" y="400" width="1200" height="40" fill="linear-gradient(0deg, rgba(5,8,12,0.6) 0%, transparent 100%)"/>

    <!-- Corner Decorative Cyber Brackets -->
    <path d="M 20 40 L 20 20 L 40 20" stroke="#00ff88" stroke-width="2" fill="none" opacity="0.8"/>
    <path d="M 1180 40 L 1180 20 L 1160 20" stroke="#00ff88" stroke-width="2" fill="none" opacity="0.8"/>
    <path d="M 20 400 L 20 420 L 40 420" stroke="#00ff88" stroke-width="2" fill="none" opacity="0.8"/>
    <path d="M 1180 400 L 1180 420 L 1160 420" stroke="#00ff88" stroke-width="2" fill="none" opacity="0.8"/>

    <!-- CONTENT ON THE LEFT -->
    <!-- Prompt -->
    <text x="60" y="72" class="mono-txt" font-size="17" font-weight="600" fill="#00ff88" letter-spacing="1">&gt; Hello, World!</text>

    <!-- Main Title -->
    <text x="60" y="130" class="display-txt" font-size="48" font-weight="800" fill="#ffffff" letter-spacing="-1">
      I'm Priya <tspan fill="#00ff88" filter="url(#neonGlow)">Ranjan</tspan>
    </text>

    <!-- Subtitle -->
    <text x="60" y="174" class="sans-txt" font-size="20" font-weight="500" fill="#cbd5e1" letter-spacing="-0.3">
      Computer Science &amp; Engineering Student
    </text>

    <!-- BADGES ROW -->
    <!-- Badge 1: AI/ML -->
    <g transform="translate(60, 202)">
      <rect x="0" y="0" width="105" height="34" rx="6" fill="#081816" stroke="#00ff88" stroke-width="1.2" stroke-opacity="0.45"/>
      <path d="M 18 10 L 12 18 L 19 18 L 17 25 L 24 16 L 18 16 Z" fill="#00ff88"/>
      <text x="32" y="22" class="sans-txt" font-size="13" font-weight="600" fill="#e2e8f0">AI/ML</text>
    </g>

    <!-- Badge 2: Cybersecurity -->
    <g transform="translate(177, 202)">
      <rect x="0" y="0" width="145" height="34" rx="6" fill="#081816" stroke="#00ff88" stroke-width="1.2" stroke-opacity="0.45"/>
      <path d="M 16 11 L 22 9 L 28 11 L 28 18 C 28 22 22 25 22 25 C 22 25 16 22 16 18 Z" fill="none" stroke="#00ff88" stroke-width="1.6"/>
      <text x="36" y="22" class="sans-txt" font-size="13" font-weight="600" fill="#e2e8f0">Cybersecurity</text>
    </g>

    <!-- Badge 3: Web Development -->
    <g transform="translate(334, 202)">
      <rect x="0" y="0" width="170" height="34" rx="6" fill="#081816" stroke="#00ff88" stroke-width="1.2" stroke-opacity="0.45"/>
      <circle cx="21" cy="17" r="7" fill="none" stroke="#00ff88" stroke-width="1.5"/>
      <line x1="14" y1="17" x2="28" y2="17" stroke="#00ff88" stroke-width="1.2"/>
      <path d="M 21 10 C 23.5 12.5 24 15 24 17 C 24 19 23.5 21.5 21 24 C 18.5 21.5 18 19 18 17 C 18 15 18.5 12.5 21 10 Z" fill="none" stroke="#00ff88" stroke-width="1.2"/>
      <text x="36" y="22" class="sans-txt" font-size="13" font-weight="600" fill="#e2e8f0">Web Development</text>
    </g>

    <!-- Badge 4: Problem Solving -->
    <g transform="translate(516, 202)">
      <rect x="0" y="0" width="160" height="34" rx="6" fill="#081816" stroke="#00ff88" stroke-width="1.2" stroke-opacity="0.45"/>
      <circle cx="21" cy="17" r="6" fill="none" stroke="#00ff88" stroke-width="1.5"/>
      <line x1="21" y1="13" x2="21" y2="17" stroke="#00ff88" stroke-width="1.5"/>
      <circle cx="21" cy="20" r="0.8" fill="#00ff88"/>
      <text x="36" y="22" class="sans-txt" font-size="13" font-weight="600" fill="#e2e8f0">Problem Solving</text>
    </g>

    <!-- Quote / Code comment -->
    <text x="60" y="278" class="mono-txt" font-size="14.5" fill="#94a3b8">
      <tspan fill="#00ff88" font-weight="600">//</tspan> Turning ideas into impactful solutions
    </text>
    <text x="60" y="302" class="mono-txt" font-size="14.5" fill="#94a3b8">
      through code, creativity, and continuous learning. "
    </text>

    <!-- ACTION BUTTONS ROW (VISUAL MOCKUP MATCHING SCREENSHOT) -->
    <!-- Button 1: View My Projects -> -->
    <g transform="translate(60, 342)">
      <rect x="0" y="0" width="175" height="42" rx="7" fill="#00ff88" filter="url(#neonGlow)"/>
      <text x="18" y="26" class="sans-txt" font-size="13.5" font-weight="700" fill="#04120c">View My Projects &rarr;</text>
    </g>

    <!-- Button 2: Github -->
    <g transform="translate(247, 342)">
      <rect x="0" y="0" width="105" height="42" rx="7" fill="#0d1b24" stroke="#25434d" stroke-width="1.2"/>
      <path d="M 20 21 C 20 16.5 23.5 13 28 13 C 32.5 13 36 16.5 36 21 C 36 24.5 33.5 27.5 30 28.5 C 29.5 28.5 29.5 28.2 29.5 28 L 29.5 26.5 C 26 27.2 25.5 25 25.5 25 C 25 24 24.2 23.8 24.2 23.8 C 23.2 23 24.2 23 24.2 23 C 25.2 23.1 25.8 24.1 25.8 24.1 C 26.8 25.8 28.4 25.3 29 25 C 29.1 24.2 29.4 23.7 29.8 23.4 C 27 23.1 24 22 24 17.2 C 24 15.8 24.5 14.7 25.3 13.8 C 25.2 13.5 24.7 12.2 25.4 10.5 C 25.4 10.5 26.5 10.2 29 11.8 C 30 11.5 31.1 11.4 32.1 11.4 C 33.1 11.4 34.2 11.5 35.2 11.8 C 37.7 10.2 38.8 10.5 38.8 10.5 C 39.5 12.2 39 13.5 38.9 13.8 C 39.7 14.7 40.2 15.8 40.2 17.2 C 40.2 22 37.2 23.1 34.4 23.4 C 34.9 23.8 35.3 24.6 35.3 25.8 L 35.3 28 C 35.3 28.2 35.3 28.5 34.8 28.5 C 31.3 27.5 28.8 24.5 28.8 21" fill="#cbd5e1" transform="scale(0.85) translate(4, 2)"/>
      <text x="46" y="26" class="sans-txt" font-size="13" font-weight="600" fill="#e2e8f0">Github</text>
    </g>

    <!-- Button 3: LinkedIn -->
    <g transform="translate(364, 342)">
      <rect x="0" y="0" width="112" height="42" rx="7" fill="#0d1b24" stroke="#25434d" stroke-width="1.2"/>
      <rect x="18" y="14" width="14" height="14" rx="2" fill="#0077b5"/>
      <text x="22" y="25" class="sans-txt" font-size="11" font-weight="800" fill="#ffffff">in</text>
      <text x="40" y="26" class="sans-txt" font-size="13" font-weight="600" fill="#e2e8f0">LinkedIn</text>
    </g>

    <!-- Button 4: Email Me -->
    <g transform="translate(488, 342)">
      <rect x="0" y="0" width="115" height="42" rx="7" fill="#0d1b24" stroke="#25434d" stroke-width="1.2"/>
      <rect x="18" y="15" width="16" height="12" rx="2" fill="none" stroke="#00ff88" stroke-width="1.3"/>
      <path d="M 18 16 L 26 22 L 34 16" fill="none" stroke="#00ff88" stroke-width="1.3"/>
      <text x="42" y="26" class="sans-txt" font-size="13" font-weight="600" fill="#e2e8f0">Email Me</text>
    </g>

    <!-- Button 5: Resume -->
    <g transform="translate(615, 342)">
      <rect x="0" y="0" width="105" height="42" rx="7" fill="#0d1b24" stroke="#25434d" stroke-width="1.2"/>
      <rect x="18" y="14" width="13" height="15" rx="1.5" fill="none" stroke="#00e5ff" stroke-width="1.3"/>
      <line x1="21" y1="18" x2="28" y2="18" stroke="#00e5ff" stroke-width="1.2"/>
      <line x1="21" y1="21" x2="28" y2="21" stroke="#00e5ff" stroke-width="1.2"/>
      <line x1="21" y1="24" x2="26" y2="24" stroke="#00e5ff" stroke-width="1.2"/>
      <text x="39" y="26" class="sans-txt" font-size="13" font-weight="600" fill="#e2e8f0">Resume</text>
    </g>
  </g>
</svg>`;

const outputPath = path.join(__dirname, '../assets/hero-header.svg');
fs.writeFileSync(outputPath, svgContent);
console.log('Successfully generated assets/hero-header.svg!');
