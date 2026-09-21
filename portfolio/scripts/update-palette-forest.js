const fs = require('fs');
const path = require('path');

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.next') walk(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const files = walk('src');

const replacements = [
  // Terracotta & Orange to Deep Forest Pine
  { search: /#C84B19/gi, replace: '#1B4332' },
  { search: /#B23E10/gi, replace: '#123023' },
  { search: /#E06C3C/gi, replace: '#2D6A4F' },
  
  // RGB values in CSS
  { search: /200,\s*75,\s*25/g, replace: '27, 67, 50' },
  { search: /178,\s*62,\s*16/g, replace: '18, 48, 35' },
  { search: /224,\s*108,\s*60/g, replace: '45, 106, 79' },
  
  // Clean paper base RGBs
  { search: /251,\s*249,\s*245/g, replace: '250, 248, 245' },
  { search: /245,\s*242,\s*235/g, replace: '244, 240, 232' },
  { search: /227,\s*222,\s*212/g, replace: '228, 223, 213' },
  { search: /238,\s*234,\s*226/g, replace: '238, 235, 227' },
  { search: /28,\s*25,\s*23/g, replace: '24, 24, 27' },
];

let changedCount = 0;
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;

  replacements.forEach(({ search, replace }) => {
    content = content.replace(search, replace);
  });

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
    changedCount++;
    console.log('Updated:', f);
  }
});

console.log('Successfully updated palette in', changedCount, 'files.');
