async function check() {
  const res = await fetch('http://localhost:3000/about');
  const html = await res.text();
  console.log('Has pt-36 in html:', html.includes('pt-36'));
  const sectionIdx = html.indexOf('<section');
  console.log('Section tag in html:', html.substring(sectionIdx, sectionIdx + 120));
  
  // Also fetch globals.css or the linked CSS files
  const cssMatches = html.match(/href=\"(\/_next\/static\/css\/[^\"]+)\"/g) || [];
  console.log('CSS links:', cssMatches);
  for (const m of cssMatches) {
    const href = m.match(/href=\"([^\"]+)\"/)[1];
    const cssRes = await fetch('http://localhost:3000' + href);
    const cssText = await cssRes.text();
    console.log(href, 'length:', cssText.length, 'has pt-36:', cssText.includes('pt-36'));
  }
}
check();
