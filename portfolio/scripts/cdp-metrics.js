const { spawn } = require('child_process');
const http = require('http');
const os = require('os');
const path = require('path');
const fs = require('fs');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const tempProfile = path.join(os.tmpdir(), `edge_cdp_${Date.now()}`);
fs.mkdirSync(tempProfile, { recursive: true });

const port = 9222;
const proc = spawn(edgePath, [
  '--headless=new',
  '--disable-gpu',
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${tempProfile}`,
  '--window-size=375,812',
  'http://localhost:3000'
]);

setTimeout(async () => {
  try {
    const listRes = await fetch(`http://127.0.0.1:${port}/json`);
    const targets = await listRes.json();
    const pageTarget = targets.find(t => t.type === 'page');
    if (!pageTarget) {
      console.log('No page target found');
      proc.kill();
      return;
    }

    const WS = globalThis.WebSocket;
    const ws = new WS(pageTarget.webSocketDebuggerUrl);
    ws.addEventListener('open', () => {
      let id = 1;
      const send = (method, params) => ws.send(JSON.stringify({ id: id++, method, params }));

      send('Runtime.enable');
      setTimeout(() => {
        send('Runtime.evaluate', {
          expression: `(() => {
            return {
              innerWidth: window.innerWidth,
              outerWidth: window.outerWidth,
              bodyScrollW: document.body?.scrollWidth,
              docScrollW: document.documentElement?.scrollWidth,
              allOver: Array.from(document.querySelectorAll('*'))
                .filter(el => el.scrollWidth > window.innerWidth)
                .map(el => ({
                  tag: el.tagName,
                  id: el.id,
                  cls: typeof el.className === 'string' ? el.className.slice(0, 30) : '',
                  scrollW: el.scrollWidth
                })).slice(0, 10)
            };
            
            const over = [];
            document.querySelectorAll('*').forEach(el => {
              if (el.scrollWidth > 375) {
                over.push({ tag: el.tagName, cls: typeof el.className === 'string' ? el.className.slice(0, 40) : '', scrollW: el.scrollWidth, clientW: el.clientWidth });
              }
            });

            return { bodyW, docW, heroW, gridW, copyW, titleW, leadW, actsW, sculptW, navW, navCtrlW, over: over.slice(0, 15) };
          })()`,
          returnByValue: true
        });
      }, 2000);
    });

    ws.addEventListener('message', (event) => {
      const res = JSON.parse(event.data);
      if (res.result && res.result.result && res.result.result.value) {
        console.log('METRICS:', JSON.stringify(res.result.result.value, null, 2));
        ws.close();
        proc.kill();
      }
    });
  } catch (err) {
    console.error('Err:', err.message);
    proc.kill();
  }
}, 3000);
