const puppeteer = require('puppeteer');
const fs = require('fs');

async function extractLinks() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
  
  console.log('Fetching marketinvestopedia.com to get links...');
  await page.goto('https://marketinvestopedia.com/', { waitUntil: 'networkidle2', timeout: 60000 });
  
  const data = await page.evaluate(() => {
    const links = new Set();
    document.querySelectorAll('a').forEach(a => {
      if (a.href && a.href.startsWith('https://marketinvestopedia.com/') && !a.href.includes('#')) {
        links.add(a.href);
      }
    });

    const images = new Set();
    document.querySelectorAll('img').forEach(img => {
      const src = img.getAttribute('src') || img.getAttribute('data-src');
      if (src && !src.startsWith('data:')) {
        images.add(src);
      }
    });

    return {
      links: Array.from(links),
      images: Array.from(images)
    };
  });

  fs.writeFileSync('site_data.json', JSON.stringify(data, null, 2));
  console.log('Data saved to site_data.json');
  await browser.close();
}

extractLinks().catch(console.error);
