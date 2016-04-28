'use strict'

const Asset = require('../../src/asset.js')
const Category = require('../../src/category.js')


describe('Category', () => {
  describe('#constructor', () => {
    it('should build an object with given parameters', () => {
      const s1 = new Asset('BOVA11', 1, 70, 50.80, 1)
      const s2 = new Asset('SMAL11', 1, 30, 30.80, 1)
      const s3 = new Asset('FMOF11', 2, 40, 10.80, 1)
      const array = []
      array.push(s1)
      array.push(s2)
      array.push(s3)
      const c1 = new Category('Cat 1', array)
      expect(c1.name).to.equals('Cat 1')
      expect(c1.value).to.equals(4912)
    })
  })
})
