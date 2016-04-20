'use strict'

const Asset = require('../../asset.js')

describe('Asset', () => {
  describe('#constructor', () => {
    it('should build an object with given parameters', () => {
      const s1 = new Asset('BOVA11', 1, 70, 50.80, 1)
      expect(s1.codName).to.equals('BOVA11')
    })
  })
})
