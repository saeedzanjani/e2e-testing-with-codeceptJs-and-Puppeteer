exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://bluescapeqainterview.wordpress.com',
      show: true,
      windowSize: '1200x900',
      restart: false,
      waitForNavigation: [ "domcontentloaded", "networkidle0" ],
      waitForAction: 500
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'e2etest'
}