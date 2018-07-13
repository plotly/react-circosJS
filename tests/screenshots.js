var finalhandler = require('finalhandler')
const puppeteer = require('puppeteer')
var http = require('http')
var serveStatic = require('serve-static')
const path = require('path');

var serve = serveStatic(path.resolve(__dirname), { index: ['index.html'] })

var server = http.createServer(function onRequest(req, res) {
  serve(req, res, finalhandler(req, res))
})

server.listen(3000)

const takeScreenshots = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:3000')
  await new Promise(resolve => setTimeout(resolve, 2000))
  const testCases = await page.$$('.testCase')
  const titles = await page.evaluate(() =>
    [...document.querySelectorAll('.testCase')].map(element =>
      element.getAttribute('title')
    )
  )
  await Promise.all(
    testCases.map((testCase, index) =>
      testCase.screenshot({ path: path.resolve(__dirname, `screenshots/${titles[index]}.png`) })
    )
  )
  await browser.close()
}

takeScreenshots()
  .then(() => {
    process.exit(0)
  })
  .catch(error => {
    console.log(error)
    process.exit(1)
  })
