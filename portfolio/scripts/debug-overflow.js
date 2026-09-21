const http = require('http');

http.get('http://localhost:3000', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('HTML length:', data.length);
    // Let's check if there are viewport meta tags in HTML
    const hasViewport = data.includes('viewport');
    console.log('Has viewport meta tag:', hasViewport);
    const viewportMatch = data.match(/<meta[^>]*viewport[^>]*>/i);
    console.log('Viewport tag:', viewportMatch ? viewportMatch[0] : 'NONE');
  });
});
