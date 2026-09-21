const { spawn } = require('child_process');
const os = require('os');
const path = require('path');
const fs = require('fs');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const artifactsDir = 'C:\\Users\\PRIYE RANJAN\\.gemini\\antigravity-ide\\brain\\1d4c9149-07bf-4a96-a8f5-c73ec39c8fa4';

const testCases = [
  { name: 'mobile_375_dark', url: 'http://localhost:3000/?theme=dark', width: 375, height: 812, mobile: true, port: 9231 },
  { name: 'desktop_1440_dark', url: 'http://localhost:3000/?theme=dark', width: 1440, height: 900, mobile: false, port: 9232 },
];

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function capture(tc) {
  const tempProfile = path.join(os.tmpdir(), `edge_cdp_dark_${tc.name}_${Date.now()}`);
  fs.mkdirSync(tempProfile, { recursive: true });

  const proc = spawn(edgePath, [
    '--headless=new',
    '--disable-gpu',
    `--remote-debugging-port=${tc.port}`,
    `--user-data-dir=${tempProfile}`,
    `--window-size=${tc.width},${tc.height}`,
    tc.url
  ]);

  await sleep(3500);

  try {
    const listRes = await fetch(`http://127.0.0.1:${tc.port}/json`);
    const targets = await listRes.json();
    const pageTarget = targets.find(t => t.type === 'page');
    if (!pageTarget) {
      console.log('No page target for', tc.name);
      proc.kill();
      return;
    }

    const WS = globalThis.WebSocket;
    const ws = new WS(pageTarget.webSocketDebuggerUrl);
    let id = 1;

    await new Promise((resolve) => {
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
            params: { format: 'png', fromSurface: true }
          }));
        }, 2000);
      });

      ws.addEventListener('message', (event) => {
        const res = JSON.parse(event.data);
        if (res.result && res.result.data) {
          const buffer = Buffer.from(res.result.data, 'base64');
          const outPath = path.join(artifactsDir, `${tc.name}.png`);
          fs.writeFileSync(outPath, buffer);
          console.log(`✓ Saved ${tc.name}.png`);
          ws.close();
          proc.kill();
          resolve();
        }
      });

      ws.addEventListener('error', () => {
        proc.kill();
        resolve();
      });
    });
  } catch (e) {
    console.error(`Err ${tc.name}:`, e.message);
    proc.kill();
  } finally {
    try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch (e) {}
  }
}

async function main() {
  for (const tc of testCases) {
    console.log(`Running ${tc.name}...`);
    await capture(tc);
    await sleep(1500);
  }
  console.log('Done capturing dark mode views!');
}

main();
