const { execFileSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const artifactsDir = 'C:\\Users\\PRIYE RANJAN\\.gemini\\antigravity-ide\\brain\\1d4c9149-07bf-4a96-a8f5-c73ec39c8fa4';

const testCases = [
  { name: 'mobile_home_paper', url: 'http://localhost:3000/?theme=paper', width: 375, height: 812 },
  { name: 'mobile_home_dark', url: 'http://localhost:3000/?theme=dark', width: 375, height: 812 },
  { name: 'tablet_home_dark', url: 'http://localhost:3000/?theme=dark', width: 768, height: 1024 },
  { name: 'desktop_home_dark', url: 'http://localhost:3000/?theme=dark', width: 1440, height: 900 },
  { name: 'desktop_work_dark', url: 'http://localhost:3000/work?theme=dark', width: 1440, height: 900 },
];

for (const tc of testCases) {
  const tempProfile = path.join(os.tmpdir(), `edge_audit_${tc.name}_${Date.now()}`);
  if (!fs.existsSync(tempProfile)) {
    fs.mkdirSync(tempProfile, { recursive: true });
  }

  const outputPath = path.join(artifactsDir, `${tc.name}.png`);
  console.log(`Capturing ${tc.name} (${tc.width}x${tc.height})...`);
  try {
    execFileSync(edgePath, [
      '--headless=new',
      '--disable-gpu',
      `--user-data-dir=${tempProfile}`,
      `--window-size=${tc.width},${tc.height}`,
      '--virtual-time-budget=3500',
      '--run-all-compositor-stages-before-draw',
      `--screenshot=${outputPath}`,
      tc.url
    ], { timeout: 35000 });
    console.log(`✓ Saved ${tc.name}.png`);
  } catch (err) {
    console.error(`Error capturing ${tc.name}:`, err.message);
  } finally {
    try {
      fs.rmSync(tempProfile, { recursive: true, force: true });
    } catch (e) {}
  }
}
console.log('All responsive audits captured.');
