const { execFileSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const tempProfile = path.join(os.tmpdir(), 'edge_work_profile_' + Date.now());
if (!fs.existsSync(tempProfile)) {
  fs.mkdirSync(tempProfile, { recursive: true });
}

const artifactsDir = 'C:\\Users\\PRIYE RANJAN\\.gemini\\antigravity-ide\\brain\\1d4c9149-07bf-4a96-a8f5-c73ec39c8fa4';
const outputPath = path.join(artifactsDir, 'work_page_inspect.png');

console.log('Capturing work page at 1440x900...');
execFileSync(edgePath, [
  '--headless=new',
  '--disable-gpu',
  `--user-data-dir=${tempProfile}`,
  '--window-size=1440,900',
  '--virtual-time-budget=3000',
  '--run-all-compositor-stages-before-draw',
  `--screenshot=${outputPath}`,
  'http://localhost:3000/work'
], { timeout: 30000 });

console.log('Screenshot saved to', outputPath);

try {
  fs.rmSync(tempProfile, { recursive: true, force: true });
} catch (e) {}
