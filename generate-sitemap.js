// generate-sitemap.js
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://npo-konstruktor.ru/';
const date = new Date().toISOString().split('T')[0]; // формат: 2025-04-18

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
  <url>
    <loc>${BASE_URL}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

fs.writeFileSync(
  path.resolve(__dirname, 'public/sitemap.xml'),
  sitemap,
  'utf8'
);

console.log('✅ sitemap.xml сгенерирован:', date);