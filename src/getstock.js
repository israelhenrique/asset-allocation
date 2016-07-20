'use strict'

const request = require('request')

class GetStock {
  getPrice(stockCode, callback) {
    const qAttrib = 'LastTradePriceOnly'
    const env = 'store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
    const query = `select ${qAttrib} from yahoo.finance.quotes where symbol in ( "${stockCode}" )`
    const link = `https://query.yahooapis.com/v1/public/yql?q=${query}&format=json&env=${env}&callback=`
    const options = { url: link, json: true }

    request(options, (error, response, json) => {
      if (!error && response.statusCode === 200) {
        callback(json.query.results.quote.LastTradePriceOnly)
      }
    })
  }
}

module.exports = GetStock
