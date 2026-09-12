const http = require('http');

const routes = [
  '/',
  '/about',
  '/work',
  '/work/vireoniq',
  '/work/trustshield-x',
  '/work/priocardix-ai',
  '/skills',
  '/experience',
  '/lab',
  '/lab/particle-field',
  '/lab/gravity-field',
  '/journal',
  '/resume',
  '/contact',
  '/404',
];

const PORT = process.env.PORT || 3000;

async function checkRoute(r) {
  return new Promise((resolve) => {
    http.get(`http://localhost:${PORT}` + r, (res) => {
      console.log(`[STATUS ${res.statusCode}] ${r}`);
      res.resume();
      resolve(res.statusCode);
    }).on('error', (err) => {
      console.error(`[ERROR] ${r}: ${err.message}`);
      resolve(500);
    });
  });
}

async function run() {
  console.log(`Testing all routes on http://localhost:${PORT}...`);
  for (const r of routes) {
    await checkRoute(r);
  }
}

run();
