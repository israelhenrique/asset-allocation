#!/usr/bin/env node

'use strict';

var url = 'http://finance.yahoo.com/d/quotes.csv?s=BOVA11.SA&f=sl1'

var request = require('request');
request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})
