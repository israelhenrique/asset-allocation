'use strict'

const Asset = require('../../src/asset.js')

describe('Asset', () => {
  describe('#constructor', () => {
    it('should build an object with given parameters', () => {
      const s1 = new Asset('BOVA11', 1, 70, 50.80, 1)
      expect(s1.codName).to.equals('BOVA11')
      expect(s1.type).to.equals(1)
      expect(s1.quotes).to.equals(70)
      expect(s1.value).to.equals(50.80)
      expect(s1.category).to.equals(1)
    })
  })
})
