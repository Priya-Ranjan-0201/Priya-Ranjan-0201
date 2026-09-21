const { spawn } = require('child_process');
const os = require('os');
const path = require('path');
const fs = require('fs');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const artifactsDir = 'C:\\Users\\PRIYE RANJAN\\.gemini\\antigravity-ide\\brain\\1d4c9149-07bf-4a96-a8f5-c73ec39c8fa4';

const testCases = [
  { name: 'mobile_375_paper', url: 'http://localhost:3000/?theme=paper', width: 375, height: 812, mobile: true },
  { name: 'mobile_375_dark', url: 'http://localhost:3000/?theme=dark', width: 375, height: 812, mobile: true },
  { name: 'tablet_768_dark', url: 'http://localhost:3000/?theme=dark', width: 768, height: 1024, mobile: true },
  { name: 'desktop_1440_dark', url: 'http://localhost:3000/?theme=dark', width: 1440, height: 900, mobile: false },
  { name: 'desktop_1440_work_dark', url: 'http://localhost:3000/work?theme=dark', width: 1440, height: 900, mobile: false },
];

async function captureOne(tc) {
  const tempProfile = path.join(os.tmpdir(), `edge_cdp_cap_${tc.name}_${Date.now()}`);
  fs.mkdirSync(tempProfile, { recursive: true });

  const port = 9225;
  const proc = spawn(edgePath, [
    '--headless=new',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${tempProfile}`,
    `--window-size=${tc.width},${tc.height}`,
    tc.url
  ]);

  return new Promise((resolve) => {
    setTimeout(async () => {
      try {
        const listRes = await fetch(`http://127.0.0.1:${port}/json`);
        const targets = await listRes.json();
        const pageTarget = targets.find(t => t.type === 'page');
        if (!pageTarget) {
          proc.kill();
          resolve();
          return;
        }

        const WS = globalThis.WebSocket;
        const ws = new WS(pageTarget.webSocketDebuggerUrl);
        let id = 1;

        ws.addEventListener('open', () => {
          ws.send(JSON.stringify({
            id: id++,
            method: 'Emulation.setDeviceMetricsOverride',
            params: {
              width: tc.width,
              height: tc.height,
              deviceScaleFactor: 2,
              mobile: tc.mobile
            }
          }));

          setTimeout(() => {
            ws.send(JSON.stringify({
              id: id++,
              method: 'Page.captureScreenshot',
              params: {
                format: 'png',
                fromSurface: true
              }
            }));
          }, 2500);
        });

        ws.addEventListener('message', (event) => {
          const res = JSON.parse(event.data);
          if (res.result && res.result.data) {
            const buffer = Buffer.from(res.result.data, 'base64');
            const outPath = path.join(artifactsDir, `${tc.name}.png`);
            fs.writeFileSync(outPath, buffer);
            console.log(`✓ Successfully captured ${tc.name}.png (${tc.width}x${tc.height})`);
            ws.close();
            proc.kill();
            try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch (e) {}
            resolve();
          }
        });

        ws.addEventListener('error', () => {
          proc.kill();
          resolve();
        });
      } catch (err) {
        console.error(`Error on ${tc.name}:`, err.message);
        proc.kill();
        resolve();
      }
    }, 2000);
  });
}

async function runAll() {
  for (const tc of testCases) {
    console.log(`Starting capture for ${tc.name}...`);
    await captureOne(tc);
  }
  console.log('All CDP captures completed!');
}

runAll();
