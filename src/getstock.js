#!/usr/bin/env node

'use strict'

const qAttrib = 'LastTradePriceOnly'
const stockName = 'BOVA11.SA'
const env = 'store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
const query = `select ${qAttrib} from yahoo.finance.quotes where symbol in ( "${stockName}" )`
const url = `https://query.yahooapis.com/v1/public/yql?q=${query}&format=json&env=${env}&callback=`
const request = require('request')

console.log(url)

request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const json = JSON.parse(body)
    console.log(json.query.results.LastTradePriceOnly)
  }
})
