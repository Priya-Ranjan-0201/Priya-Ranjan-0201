const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/resume', { waitUntil: 'networkidle0' });

  const info = await page.evaluate(() => {
    const letsTalk = document.querySelector('.lets-talk-btn');
    const printBtn = document.querySelector('button[class*="bg-[rgb(var(--accent))"]');
    
    return {
      letsTalk: letsTalk ? {
        text: letsTalk.innerText,
        color: window.getComputedStyle(letsTalk).color,
        backgroundColor: window.getComputedStyle(letsTalk).backgroundColor,
        className: letsTalk.className,
      } : null,
      printBtn: printBtn ? {
        text: printBtn.innerText,
        color: window.getComputedStyle(printBtn).color,
        backgroundColor: window.getComputedStyle(printBtn).backgroundColor,
        className: printBtn.className,
      } : null,
    };
  });

  console.log('COMPUTED STYLES:', JSON.stringify(info, null, 2));
  await browser.close();
})();
