const puppeteer = require('puppeteer');
const fs = require('fs');

async function scrape() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Set User Agent to bypass simple bot checks
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
  
  console.log('Navigating to https://marketinvestopedia.com/ ...');
  await page.goto('https://marketinvestopedia.com/', { waitUntil: 'networkidle2', timeout: 60000 });
  
  // Scroll to bottom to trigger lazy loading
  await page.evaluate(async () => {
    await new Promise((resolve, reject) => {
      let totalHeight = 0;
      let distance = 100;
      let timer = setInterval(() => {
        let scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if(totalHeight >= scrollHeight - window.innerHeight){
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });

  // Extract content
  const data = await page.evaluate(() => {
    const sections = [];
    document.querySelectorAll('.elementor-section').forEach((el, index) => {
      const text = el.innerText.replace(/\s+/g, ' ').trim();
      const images = [];
      el.querySelectorAll('img').forEach(img => {
        const src = img.getAttribute('src') || img.getAttribute('data-src') || img.getAttribute('data-lazy-src');
        if (src && !src.startsWith('data:')) {
          images.push(src);
        }
      });
      if (text.length > 30 || images.length > 0) {
        sections.push({
          id: `section_${index}`,
          text: text,
          images: images
        });
      }
    });

    return {
      title: document.title,
      sections: sections
    };
  });

  fs.writeFileSync('scraped_data.json', JSON.stringify(data, null, 2));
  console.log('Scraping finished. Data saved to scraped_data.json');
  
  await browser.close();
}

scrape().catch(console.error);
