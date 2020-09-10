const path = require('path')
require('dotenv').config({ path: path.join(__dirname, `../.env.${process.env.NODE_ENV}`)});
const baseUrl = process.env.BASE_URL;

export default class Page {
  open (baseUrl) {
    browser.url(process.env.BASE_URL)
  }
}

