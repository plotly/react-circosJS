const finalhandler = require('finalhandler');
const puppeteer = require('puppeteer');
const http = require('http');
const serveStatic = require('serve-static');
const path = require('path');

const serve = serveStatic(path.resolve(__dirname), { index: ['index.html'] });

const server = http.createServer((req, res) => {
  serve(req, res, finalhandler(req, res));
});

const port = 3000;
server.listen(port);

const takeScreenshots = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`http://localhost:${port}`);
  await new Promise(resolve => setTimeout(resolve, 1000));
  const testCases = await page.$$('.testCase');
  const titles = await page.evaluate(() => [
    ...document.querySelectorAll('.testCase'),
  ].map(element => element.getAttribute('title')));
  await Promise.all(
    testCases.map((testCase, index) => testCase.screenshot({
      path: path.resolve(__dirname, `screenshots/${titles[index]}.png`),
    })),
  );
  await browser.close();
};

takeScreenshots()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error); // eslint-disable-line no-console
    process.exit(1);
  });
