const { spawn } = require('child_process');
const os = require('os');
const path = require('path');
const fs = require('fs');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const artifactsDir = 'C:\\Users\\PRIYE RANJAN\\.gemini\\antigravity-ide\\brain\\1d4c9149-07bf-4a96-a8f5-c73ec39c8fa4';

const testCases = [
  { name: 'menu_desktop_dark', url: 'http://localhost:3000/?theme=dark', width: 1440, height: 900, mobile: false },
  { name: 'menu_desktop_paper', url: 'http://localhost:3000/?theme=paper', width: 1440, height: 900, mobile: false },
  { name: 'menu_mobile_dark', url: 'http://localhost:3000/?theme=dark', width: 375, height: 812, mobile: true },
];

async function captureOne(tc, port) {
  const tempProfile = path.join(os.tmpdir(), `edge_menu_${tc.name}_${Date.now()}`);
  fs.mkdirSync(tempProfile, { recursive: true });

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

          // Wait for Next.js hydration to complete
          setTimeout(() => {
            ws.send(JSON.stringify({
              id: id++,
              method: 'Runtime.evaluate',
              params: {
                expression: `
                  (function() {
                    const btn = document.querySelector('.nav-menu-btn');
                    if (btn) {
                      btn.click();
                      return 'CLICKED, isOpen now';
                    }
                    return 'NO_BTN_FOUND';
                  })()
                `,
                returnByValue: true
              }
            }));

            // Wait for Framer Motion animation to complete
            setTimeout(() => {
              ws.send(JSON.stringify({
                id: id++,
                method: 'Runtime.evaluate',
                params: {
                  expression: `
                    (function() {
                      const overlay = document.querySelector('.nav-overlay');
                      return overlay ? 'OVERLAY_FOUND' : 'NO_OVERLAY';
                    })()
                  `,
                  returnByValue: true
                }
              }));

              setTimeout(() => {
                ws.send(JSON.stringify({
                  id: id++,
                  method: 'Page.captureScreenshot',
                  params: { format: 'png' }
                }));
              }, 500);
            }, 800);
          }, 3500);
        });

        ws.addEventListener('message', (event) => {
          const data = JSON.parse(event.data);
          if (data.result && data.result.result && data.result.result.value) {
            console.log(`[${tc.name}] eval:`, data.result.result.value);
          }
          if (data.result && data.result.data) {
            const buf = Buffer.from(data.result.data, 'base64');
            const outPath = path.join(artifactsDir, `${tc.name}.png`);
            fs.writeFileSync(outPath, buf);
            console.log(`Saved screenshot: ${tc.name}.png`);
            ws.close();
            proc.kill();
            try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch (e) {}
            resolve();
          }
        });
      } catch (err) {
        console.error(`Error on ${tc.name}:`, err.message);
        proc.kill();
        resolve();
      }
    }, 1500);
  });
}

async function run() {
  let port = 9340;
  for (const tc of testCases) {
    console.log(`Running capture for ${tc.name}...`);
    await captureOne(tc, port++);
    await new Promise(r => setTimeout(r, 1500));
  }
  console.log('All menu captures done!');
}

run();
