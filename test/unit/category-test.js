'use strict'

const Asset = require('../../src/asset.js')
const Category = require('../../src/category.js')


describe('Category', () => {
  describe('#constructor', () => {
    it('should build an object with given parameters', () => {
      const s1 = new Asset('BOVA11', 1, 70, 50.80, 1)
      const s2 = new Asset('SMAL11', 1, 30, 30.80, 1)
      const s3 = new Asset('FMOF11', 2, 40, 10.80, 1)
      const assets = []
      assets.push(s1)
      assets.push(s2)
      assets.push(s3)
      const c1 = new Category('Cat 1', assets)
      expect(c1.name).to.equals('Cat 1')
      expect(c1.value).to.equals(4912)
    })
  })
})
