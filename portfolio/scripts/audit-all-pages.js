const { execFileSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const tempProfile = path.join(os.tmpdir(), 'edge_audit_profile_' + Date.now());
if (!fs.existsSync(tempProfile)) {
  fs.mkdirSync(tempProfile, { recursive: true });
}

const artifactsDir = 'C:\\Users\\PRIYE RANJAN\\.gemini\\antigravity-ide\\brain\\1d4c9149-07bf-4a96-a8f5-c73ec39c8fa4';

const routes = [
  { name: 'audit_home', url: 'http://localhost:3000/' },
  { name: 'audit_work', url: 'http://localhost:3000/work' },
  { name: 'audit_about', url: 'http://localhost:3000/about' },
  { name: 'audit_lab', url: 'http://localhost:3000/lab' },
  { name: 'audit_skills', url: 'http://localhost:3000/skills' },
  { name: 'audit_experience', url: 'http://localhost:3000/experience' },
  { name: 'audit_resume', url: 'http://localhost:3000/resume' },
  { name: 'audit_contact', url: 'http://localhost:3000/contact' },
  { name: 'audit_now', url: 'http://localhost:3000/now' },
];

for (const r of routes) {
  const outputPath = path.join(artifactsDir, `${r.name}.png`);
  console.log(`Capturing ${r.name}...`);
  try {
    execFileSync(edgePath, [
      '--headless=new',
      '--disable-gpu',
      `--user-data-dir=${tempProfile}`,
      '--window-size=1440,1200',
      '--virtual-time-budget=2500',
      '--run-all-compositor-stages-before-draw',
      `--screenshot=${outputPath}`,
      r.url
    ], { timeout: 30000 });
    console.log(`✓ Saved ${r.name}.png`);
  } catch (err) {
    console.error(`Error on ${r.name}:`, err.message);
  }
}

try {
  fs.rmSync(tempProfile, { recursive: true, force: true });
} catch (e) {}
console.log('All audit captures complete.');
