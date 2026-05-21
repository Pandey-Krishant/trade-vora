const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function scrapeSite() {
  try {
    console.log('Fetching https://marketinvestopedia.com/ ...');
    const { data } = await axios.get('https://marketinvestopedia.com/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    
    const $ = cheerio.load(data);
    const sections = [];
    
    // Extract textual content from Elementor sections/widgets
    $('section, .elementor-section').each((i, el) => {
      const text = $(el).text().replace(/\s+/g, ' ').trim();
      const images = [];
      $(el).find('img').each((j, img) => {
        images.push($(img).attr('src'));
      });
      
      if (text.length > 50 || images.length > 0) {
        sections.push({
          id: `section_${i}`,
          text: text.substring(0, 500) + (text.length > 500 ? '...' : ''), // keep it brief for summary
          images: images
        });
      }
    });

    // Also get all image src tags
    const allImages = [];
    $('img').each((i, img) => {
      let src = $(img).attr('src') || $(img).attr('data-src');
      if (src && !allImages.includes(src)) {
        allImages.push(src);
      }
    });

    const result = {
      title: $('title').text(),
      sections,
      allImages
    };

    fs.writeFileSync('scraped_data.json', JSON.stringify(result, null, 2));
    console.log('Successfully scraped data and saved to scraped_data.json');
  } catch (error) {
    console.error('Error scraping:', error.message);
  }
}

scrapeSite();
