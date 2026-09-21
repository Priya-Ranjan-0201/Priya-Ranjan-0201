const fs = require('fs');

const files = [
  'src/app/home.css',
  'src/app/layout-components.css',
  'src/app/subpages.css'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // Fix any rgba(var(...), ) missing alpha
  content = content.replace(/rgba\((var\(--[a-zA-Z0-9_-]+\)),\s*\)/g, '$1');
  
  // Specific navbar background fixes
  content = content.replace(/background:\s*rgba\(var\(--bg-primary\),\s*\);/g, 'background: rgba(var(--bg-primary), 0.94);');
  
  fs.writeFileSync(file, content, 'utf8');
  console.log('Fixed rgba in', file);
});
