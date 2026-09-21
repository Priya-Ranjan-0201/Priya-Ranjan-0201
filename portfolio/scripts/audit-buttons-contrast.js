const fs = require('fs');
const path = require('path');

const cssDir = path.join(process.cwd(), 'src/app');
const files = fs.readdirSync(cssDir).filter(f => f.endsWith('.css'));

files.forEach(file => {
  const filePath = path.join(cssDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  const rules = content.split('}');
  rules.forEach(rule => {
    const hasAccentBg = /background(-color)?:\s*rgb\(var\(--accent\)\)/.test(rule);
    const hasAccentColor = /color:\s*rgb\(var\(--accent\)\)/.test(rule);
    if (hasAccentBg && hasAccentColor) {
      console.log(`[RULE WITH SAME BG & COLOR] in ${file}:\n${rule.trim()}\n---`);
    }
  });
});
