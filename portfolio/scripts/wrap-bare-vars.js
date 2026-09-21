const fs = require('fs');

const files = [
  'src/app/home.css',
  'src/app/layout-components.css',
  'src/app/subpages.css'
];

const varNames = [
  'bg-primary', 'bg-secondary', 'bg-tertiary',
  'fg-primary', 'fg-secondary', 'fg-muted',
  'border', 'border-subtle',
  'accent', 'accent-hover', 'accent-secondary'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  varNames.forEach(v => {
    // Match var(--name) that is NOT preceded by rgb( or rgba(
    // We can use a regex: (?<!rgba?\(\s*)var\(--name\)
    const regex = new RegExp(`(?<!rgba?\\(\\s*)var\\(--${v}\\)`, 'g');
    content = content.replace(regex, `rgb(var(--${v}))`);
  });

  // Specifically fix navbar background with opacity
  content = content.replace(
    /(\.nav-(?:bar|initial|scrolled)[^{]*\{[^}]*background:\s*)rgb\(var\(--bg-primary\)\)/g,
    '$1rgba(var(--bg-primary), 0.94)'
  );

  fs.writeFileSync(file, content, 'utf8');
  console.log('Processed', file);
});
