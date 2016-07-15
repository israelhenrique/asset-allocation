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
    console.log(body) // Se fizer body.query da ruim
  }
})
const json = {"query":{"count":1,"created":"2016-07-14T21:04:35Z","lang":"en-US","results":{"quote":{"LastTradePriceOnly":"53.61"}}}};
console.log(json.query)
