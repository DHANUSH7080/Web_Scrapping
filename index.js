const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeW3Schools() {
  try {
    // Fetch the HTML content of the W3Schools homepage
    const response = await axios.get('https://www.netflix.com/in/');
    const html = response.data;

    // Load the HTML content into Cheerio for parsing
    const $ = cheerio.load(html);

    // Extract the text from the heading element
    const headingText = $('h1').text();

    // Display the extracted text
    console.log('Heading:', headingText);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Invoke the scraping function
scrapeW3Schools();

