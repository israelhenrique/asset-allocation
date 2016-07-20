'use strict'

const GetStock = require('../../src/getstock.js')

let value = ''

describe('GetStock', () => {
  describe('#getPrice', () => {
    it('should return the price of a given stock', () => {
      const getstock = new GetStock()
      const stock = 'BOVA11.SA' // O correto é EURO11.SA
      const price = '174.00'
      getstock.getPrice(stock, (info) => {
        value = info
        expect(value).to.equals(price)
      })
    })
  })
})
