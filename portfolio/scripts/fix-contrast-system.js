const fs = require('fs');
const path = require('path');

// 1. Fix src/app/layout-components.css
const layoutCssPath = path.join(process.cwd(), 'src/app/layout-components.css');
let layoutCss = fs.readFileSync(layoutCssPath, 'utf8');

// Fix .lets-talk-btn
layoutCss = layoutCss.replace(
  /\.lets-talk-btn\s*\{[^}]*\}/s,
  `.lets-talk-btn {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 1rem;
  border-radius: 4px;
  background: rgb(var(--accent));
  border: 1px solid rgb(var(--accent));
  color: #ffffff !important;
  font-family: var(--font-mono), monospace;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-decoration: none;
  transition: all 0.2s ease;
}`
);

// Fix .nav-icon-btn and .nav-menu-btn
layoutCss = layoutCss.replace(
  /\.nav-icon-btn\s*\{[^}]*\}/s,
  `.nav-icon-btn {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(var(--bg-secondary));
  border: 1px solid rgb(var(--border));
  border-radius: 4px;
  color: rgb(var(--fg-secondary));
  cursor: pointer;
  transition: all 0.2s ease;
}`
);

layoutCss = layoutCss.replace(
  /\.nav-icon-btn:hover\s*\{[^}]*\}/s,
  `.nav-icon-btn:hover {
  color: #ffffff;
  border-color: rgb(var(--accent));
  background: rgb(var(--accent));
}`
);

layoutCss = layoutCss.replace(
  /\.nav-menu-btn\s*\{[^}]*\}/s,
  `.nav-menu-btn {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(var(--bg-secondary));
  border: 1px solid rgb(var(--border));
  border-radius: 4px;
  cursor: pointer;
  padding: 0;
  transition: all 0.2s ease;
}`
);

fs.writeFileSync(layoutCssPath, layoutCss, 'utf8');
console.log('✓ Updated layout-components.css');

// 2. Fix src/app/home.css
const homeCssPath = path.join(process.cwd(), 'src/app/home.css');
let homeCss = fs.readFileSync(homeCssPath, 'utf8');

// Fix .explore-mind-toggle
homeCss = homeCss.replace(
  /\.explore-mind-toggle\s*\{[^}]*\}/s,
  `.explore-mind-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.65rem 1.25rem;
  border-radius: 4px;
  background: rgba(var(--accent), 0.08);
  border: 1px solid rgba(var(--accent), 0.25);
  font-family: var(--font-mono), monospace;
  font-size: 0.78125rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: rgb(var(--accent));
  cursor: pointer;
  transition: all 0.2s ease;
}`
);

homeCss = homeCss.replace(
  /\.explore-mind-toggle:hover,\s*\.explore-mind-toggle\.active\s*\{[^}]*\}/s,
  `.explore-mind-toggle:hover,
.explore-mind-toggle.active {
  background: rgb(var(--accent));
  border-color: rgb(var(--accent));
  color: #ffffff !important;
}`
);

fs.writeFileSync(homeCssPath, homeCss, 'utf8');
console.log('✓ Updated home.css');

// 3. Fix src/app/subpages.css
const subpagesCssPath = path.join(process.cwd(), 'src/app/subpages.css');
let subCss = fs.readFileSync(subpagesCssPath, 'utf8');

// Primary action buttons: text must be #ffffff
const solidButtons = [
  'submit-send-btn',
  'download-btn',
  'return-home-btn',
  'btn-arch-trigger',
];

solidButtons.forEach(btn => {
  const reg = new RegExp(`\\.${btn}\\s*\\{[^}]*\\}`, 's');
  subCss = subCss.replace(reg, (match) => {
    return match.replace(/color:\s*rgb\(var\(--accent\)\);?/, 'color: #ffffff !important;');
  });
});

// Badges, chips, tabs: background should be subtle rgba(var(--accent), 0.08), border rgba(var(--accent), 0.22), text rgb(var(--accent))
const subtleBadges = [
  'tech-tag-badge',
  'entry-badge',
  'lab-tagline-badge',
  'tech-badge-cyan',
  'sandbox-status-tag',
  'tp-period-badge',
  'skill-level-badge.advanced',
  'cat-chip-btn',
  'cat-tab-btn'
];

subCss = subCss.replace(/\.tech-tag-badge\s*\{[^}]*\}/s, `.tech-tag-badge {
  font-family: var(--font-mono), monospace;
  font-size: 0.75rem;
  padding: 0.4rem 0.85rem;
  border-radius: 9999px;
  background: rgba(var(--accent), 0.08);
  border: 1px solid rgba(var(--accent), 0.22);
  color: rgb(var(--accent));
}`);

subCss = subCss.replace(/\.entry-badge\s*\{[^}]*\}/s, `.entry-badge {
  font-family: var(--font-mono), monospace;
  font-size: 0.75rem;
  color: rgb(var(--accent));
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  background: rgba(var(--accent), 0.08);
  border: 1px solid rgba(var(--accent), 0.22);
}`);

subCss = subCss.replace(/\.lab-tagline-badge\s*\{[^}]*\}/s, `.lab-tagline-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 1rem;
  border-radius: 9999px;
  background: rgba(var(--accent), 0.08);
  border: 1px solid rgba(var(--accent), 0.22);
  color: rgb(var(--accent));
  font-family: var(--font-mono), monospace;
  font-size: 0.6875rem;
  letter-spacing: 0.12em;
  font-weight: 600;
}`);

subCss = subCss.replace(/\.tech-badge-cyan\s*\{[^}]*\}/s, `.tech-badge-cyan {
  font-family: var(--font-mono), monospace;
  font-size: 0.6875rem;
  padding: 0.3rem 0.7rem;
  border-radius: 9999px;
  background: rgba(var(--accent), 0.08);
  border: 1px solid rgba(var(--accent), 0.22);
  color: rgb(var(--accent));
}`);

subCss = subCss.replace(/\.sandbox-status-tag\s*\{[^}]*\}/s, `.sandbox-status-tag {
  color: rgb(var(--accent));
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  background: rgba(var(--accent), 0.08);
  border: 1px solid rgba(var(--accent), 0.22);
}`);

subCss = subCss.replace(/\.tp-period-badge\s*\{[^}]*\}/s, `.tp-period-badge {
  font-family: var(--font-mono), monospace;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: rgb(var(--accent));
  background: rgba(var(--accent), 0.08);
  border: 1px solid rgba(var(--accent), 0.22);
  padding: 0.25rem 0.65rem;
  border-radius: 6px;
}`);

subCss = subCss.replace(/\.btn-open-experiment\s*\{[^}]*\}/s, `.btn-open-experiment {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 1.1rem;
  border-radius: 9999px;
  background: rgba(var(--accent), 0.08);
  border: 1px solid rgba(var(--accent), 0.22);
  color: rgb(var(--accent));
  font-size: 0.75rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s;
}`);

subCss = subCss.replace(/\.btn-copy-email\s*\{[^}]*\}/s, `.btn-copy-email {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.4rem;
  border-radius: 9999px;
  background: rgba(var(--accent), 0.08);
  border: 1px solid rgba(var(--accent), 0.22);
  color: rgb(var(--accent));
  font-family: var(--font-mono), monospace;
  font-size: 0.8125rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
}`);

// Fix input focus: NEVER background: accent! Focus should be background: #FFFFFF and border-color: accent
subCss = subCss.replace(
  /\.form-input-field:focus,\s*\.form-textarea-field:focus\s*\{[^}]*\}/s,
  `.form-input-field:focus,
.form-textarea-field:focus {
  border-color: rgb(var(--accent));
  background: rgb(var(--bg-tertiary));
  color: rgb(var(--fg-primary));
  box-shadow: 0 0 0 2px rgba(var(--accent), 0.15);
}`
);

subCss = subCss.replace(
  /\.field-input:focus,\s*\.field-textarea:focus\s*\{[^}]*\}/s,
  `.field-input:focus,
.field-textarea:focus {
  border-color: rgb(var(--accent));
  background: rgb(var(--bg-tertiary));
  color: rgb(var(--fg-primary));
  box-shadow: 0 0 0 2px rgba(var(--accent), 0.15);
}`
);

// Fix .cat-chip-btn:hover and .cat-tab-btn.active
subCss = subCss.replace(
  /\.cat-chip-btn:hover,\s*\.cat-chip-btn\.active\s*\{[^}]*\}/s,
  `.cat-chip-btn:hover,
.cat-chip-btn.active {
  background: rgb(var(--accent));
  border-color: rgb(var(--accent));
  color: #ffffff !important;
}`
);

subCss = subCss.replace(
  /\.cat-tab-btn\.active\s*\{[^}]*\}/s,
  `.cat-tab-btn.active {
  background: rgb(var(--accent));
  border-color: rgb(var(--accent));
  color: #ffffff !important;
}`
);

subCss = subCss.replace(
  /\.binder-tab-pill:hover,\s*\.binder-tab-pill\.active\s*\{[^}]*\}/s,
  `.binder-tab-pill:hover,
.binder-tab-pill.active {
  border-color: rgb(var(--accent));
  color: #ffffff !important;
  background: rgb(var(--accent));
}`
);

subCss = subCss.replace(
  /\.social-pill-btn:hover\s*\{[^}]*\}/s,
  `.social-pill-btn:hover {
  color: #ffffff !important;
  border-color: rgb(var(--accent));
  background: rgb(var(--accent));
  transform: translateY(-2px);
}`
);

fs.writeFileSync(subpagesCssPath, subCss, 'utf8');
console.log('✓ Updated subpages.css');
