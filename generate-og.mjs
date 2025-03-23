import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
  headless: true,
  defaultViewport: {
    width: 1200,
    height: 630
  }
});

const pagesToCapture = [
  { url: 'http://localhost:5173/', name: 'home' },
  { url: 'http://localhost:5173/projects/mmp1-dj', name: 'mmp1-dj' },
  { url: 'http://localhost:5173/projects/mmp2-sphere', name: 'mmp2-sphere' },
  { url: 'http://localhost:5173/projects/memory-game', name: 'memory-game' },
];

for (let pageData of pagesToCapture) {
  const page = await browser.newPage();
  await page.goto(pageData.url, { waitUntil: 'networkidle0' });
  await page.screenshot({
    path: `./public/images/${pageData.name}-og.jpg`,
    type: 'jpeg',
    quality: 90
  });
  console.log(`✅ OG Image created: ${pageData.name}-og.jpg`);
  await page.close();
}

await browser.close();
console.log('🎉 All OG Images generated!');
