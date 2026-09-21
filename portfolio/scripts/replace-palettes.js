const fs = require('fs');
const path = require('path');

const files = [
  path.join(__dirname, '../src/app/layout-components.css'),
  path.join(__dirname, '../src/app/subpages.css'),
  path.join(__dirname, '../src/app/globals.css'),
];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace cyan colors with terracotta/warm ink
  content = content.replace(/#00f0ff/gi, '#e05d38');
  content = content.replace(/rgba\(0,\s*240,\s*255,/gi, 'rgba(224, 93, 56,');
  content = content.replace(/rgba\(6,\s*182,\s*212,/gi, 'rgba(224, 93, 56,');
  content = content.replace(/rgba\(56,\s*189,\s*248,/gi, 'rgba(234, 110, 73,');
  content = content.replace(/box-shadow:\s*0\s*0\s*\d+px\s*#e05d38/gi, 'box-shadow: none');
  content = content.replace(/box-shadow:\s*0\s*0\s*\d+px\s*rgba\(224,\s*93,\s*56,\s*[\d.]+\)/gi, 'box-shadow: none');
  content = content.replace(/text-shadow:\s*0\s*0\s*\d+px\s*#e05d38/gi, 'text-shadow: none');

  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated palette in ${path.basename(file)}`);
}
