const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const appDir = path.join(__dirname, '../src/app');
const tsxFiles = walk(appDir);

for (const file of tsxFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  content = content.replace(/text-cyan-400/g, 'text-[#e05d38]');
  content = content.replace(/text-cyan-300/g, 'text-[#ea6e49]');
  content = content.replace(/text-cyan-500/g, 'text-[#e05d38]');
  content = content.replace(/bg-cyan-500\/10/g, 'bg-[#e05d38]/10');
  content = content.replace(/bg-cyan-500\/20/g, 'bg-[#e05d38]/15');
  content = content.replace(/bg-cyan-500/g, 'bg-[#e05d38]');
  content = content.replace(/border-cyan-500\/25/g, 'border-[#e05d38]/25');
  content = content.replace(/border-cyan-500\/30/g, 'border-[#e05d38]/30');
  content = content.replace(/border-cyan-500/g, 'border-[#e05d38]');
  content = content.replace(/text-gradient-cyan/g, 'text-[#e05d38]');
  content = content.replace(/shadow-cyan-500\/20/g, 'shadow-sm');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Cleaned cyan in ${path.relative(appDir, file)}`);
  }
}
