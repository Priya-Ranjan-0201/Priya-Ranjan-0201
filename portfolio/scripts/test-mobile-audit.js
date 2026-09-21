const { execFileSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const tempProfile = path.join(os.tmpdir(), 'edge_mobile_audit_' + Date.now());
if (!fs.existsSync(tempProfile)) {
  fs.mkdirSync(tempProfile, { recursive: true });
}

const artifactsDir = 'C:\\Users\\PRIYE RANJAN\\.gemini\\antigravity-ide\\brain\\1d4c9149-07bf-4a96-a8f5-c73ec39c8fa4';

const testCases = [
  { name: 'audit_work_mobile', url: 'http://localhost:3000/work' },
  { name: 'audit_lab_mobile', url: 'http://localhost:3000/lab' },
  { name: 'audit_contact_mobile', url: 'http://localhost:3000/contact' },
];

for (const tc of testCases) {
  const outputPath = path.join(artifactsDir, `${tc.name}.png`);
  console.log(`Capturing mobile ${tc.name}...`);
  try {
    execFileSync(edgePath, [
      '--headless=new',
      '--disable-gpu',
      `--user-data-dir=${tempProfile}`,
      '--window-size=390,844',
      '--virtual-time-budget=2500',
      '--run-all-compositor-stages-before-draw',
      `--screenshot=${outputPath}`,
      tc.url
    ], { timeout: 30000 });
    console.log(`✓ Saved ${tc.name}.png`);
  } catch (err) {
    console.error(`Error on ${tc.name}:`, err.message);
  }
}

try {
  fs.rmSync(tempProfile, { recursive: true, force: true });
} catch (e) {}
