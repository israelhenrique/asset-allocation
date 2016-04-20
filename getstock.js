#!/usr/bin/env node

'use strict'

const url = 'http://finance.yahoo.com/d/quotes.csv?s=BOVA11.SA&f=sl1'

const request = require('request')
request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})

console.log('teste')
