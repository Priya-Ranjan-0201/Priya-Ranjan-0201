const { execFileSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
if (!fs.existsSync(edgePath)) {
  console.error('Edge binary not found at:', edgePath);
  process.exit(1);
}

const tempProfile = path.join(os.tmpdir(), 'edge_qa_profile_' + Date.now());
if (!fs.existsSync(tempProfile)) {
  fs.mkdirSync(tempProfile, { recursive: true });
}

const artifactsDir = 'C:\\Users\\PRIYE RANJAN\\.gemini\\antigravity-ide\\brain\\1d4c9149-07bf-4a96-a8f5-c73ec39c8fa4';

const testCases = [
  { name: 'about_hero_1920_v2', url: 'http://localhost:3000/about', width: 1920, height: 1080 },
  { name: 'about_hero_1440_v2', url: 'http://localhost:3000/about', width: 1440, height: 900 },
  { name: 'about_hero_mobile_v2', url: 'http://localhost:3000/about', width: 390, height: 844 },
];

for (const tc of testCases) {
  const outputPath = path.join(artifactsDir, `${tc.name}.png`);
  console.log(`Taking screenshot for ${tc.name} (${tc.width}x${tc.height})...`);
  try {
    execFileSync(edgePath, [
      '--headless=new',
      '--disable-gpu',
      `--user-data-dir=${tempProfile}`,
      `--window-size=${tc.width},${tc.height}`,
      '--virtual-time-budget=3000',
      '--run-all-compositor-stages-before-draw',
      `--screenshot=${outputPath}`,
      tc.url
    ], { timeout: 30000 });
    
    if (fs.existsSync(outputPath)) {
      const stats = fs.statSync(outputPath);
      console.log(`✓ Saved ${outputPath} (${(stats.size / 1024).toFixed(1)} KB)`);
    } else {
      console.log(`✗ Screenshot file not created: ${outputPath}`);
    }
  } catch (err) {
    console.error(`Error capturing ${tc.name}:`, err.message);
  }
}

// Cleanup temp profile
try {
  fs.rmSync(tempProfile, { recursive: true, force: true });
} catch (e) {}
console.log('All QA screenshots complete.');
