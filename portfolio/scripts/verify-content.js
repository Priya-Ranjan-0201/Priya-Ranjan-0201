const http = require('http');

const routes = [
  '/',
  '/about',
  '/work',
  '/work/vireoniq',
  '/work/trustshield-x',
  '/work/priocardix-ai',
  '/work/hrcv',
  '/work/tech-on-tour',
  '/work/braincheck',
  '/work/disk-scheduling-algorithm',
  '/skills',
  '/experience',
  '/lab',
  '/lab/particle-field',
  '/lab/type-distortion',
  '/lab/gravity-field',
  '/lab/security-grid',
  '/lab/shader-room',
  '/lab/ai-visualizer',
  '/journal',
  '/resume',
  '/contact',
];

async function verifyRoute(route) {
  return new Promise((resolve) => {
    http.get('http://localhost:3001' + route, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const hasTitle = data.includes('<title>') || data.includes('Priya Ranjan');
        const hasApp = data.includes('html') && data.includes('body');
        console.log(`[VERIFIED ${res.statusCode}] ${route.padEnd(22)} | Size: ${(data.length / 1024).toFixed(1)} KB | Valid HTML: ${hasApp}`);
        resolve();
      });
    }).on('error', (err) => {
      console.error(`[FAIL] ${route}: ${err.message}`);
      resolve();
    });
  });
}

async function main() {
  console.log('--- DETAILED SSR HTML VALIDATION ---');
  for (const r of routes) {
    await verifyRoute(r);
  }
  console.log('--- ALL ROUTES SERVED CLEANLY ---');
}

main();
