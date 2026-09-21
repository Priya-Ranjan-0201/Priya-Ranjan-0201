const { execFileSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const tempProfile = path.join(os.tmpdir(), `edge_overflow_check_${Date.now()}`);
if (!fs.existsSync(tempProfile)) {
  fs.mkdirSync(tempProfile, { recursive: true });
}

// We will run Edge with remote debugging and find overflowing elements
const script = `
const elements = Array.from(document.querySelectorAll('*'));
const overflowing = [];
elements.forEach(el => {
  const rect = el.getBoundingClientRect();
  if (rect.right > 375 || rect.width > 375) {
    overflowing.push({
      tag: el.tagName,
      className: el.className,
      id: el.id,
      rectWidth: rect.width,
      rectRight: rect.right
    });
  }
});
console.log(JSON.stringify(overflowing.slice(0, 15), null, 2));
`;

// Let's create a test html page that iframes http://localhost:3000 or inspects directly
const testHtml = path.join(tempProfile, 'inspect.html');
fs.writeFileSync(testHtml, `
<!DOCTYPE html>
<html>
<body>
<iframe id="f" src="http://localhost:3000" style="width:375px; height:812px; border:none;"></iframe>
<script>
window.onload = () => {
  setTimeout(() => {
    try {
      const doc = document.getElementById('f').contentDocument;
      const elements = Array.from(doc.querySelectorAll('*'));
      const overflowing = [];
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.right > 376 || rect.width > 376) {
          overflowing.push({
            tag: el.tagName,
            className: typeof el.className === 'string' ? el.className : '',
            rectWidth: Math.round(rect.width),
            rectRight: Math.round(rect.right)
          });
        }
      });
      console.log('OVERFLOW_RESULT:' + JSON.stringify(overflowing.filter(x => x.rectRight > 380).slice(0, 10)));
    } catch(e) {
      console.log('ERR:' + e.message);
    }
  }, 3000);
};
</script>
</body>
</html>
`);

try {
  const out = execFileSync(edgePath, [
    '--headless=new',
    '--disable-gpu',
    `--user-data-dir=${tempProfile}`,
    '--window-size=375,812',
    '--virtual-time-budget=5000',
    '--enable-logging=stderr',
    testHtml
  ], { timeout: 20000, encoding: 'utf8' });
  console.log('Output:', out);
} catch (e) {
  console.log('Caught stdout/stderr:', e.stdout || '', e.stderr || '');
} finally {
  try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch(e){}
}
