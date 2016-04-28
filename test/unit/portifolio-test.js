'use strict'

const Asset = require('../../src/asset.js')
const Category = require('../../src/category.js')
const Portifolio = require('../../src/portifolio.js')


describe('Portifolio', () => {
  describe('#constructor', () => {
    it('should build an object with given parameters', () => {
      const s1 = new Asset('BOVA11', 1, 80, 52.87, 1)
      const s2 = new Asset('SMAL11', 1, 67, 47.29, 1)
      const s3 = new Asset('FMOF11', 2, 3, 108.00, 1)
      const s4 = new Asset('EURO11', 2, 7, 165.00, 1)
      const s5 = new Asset('SAAG11', 2, 6, 94.18, 1)
      const s6 = new Asset('XTED11', 2, 9, 37.75, 1)
      const s7 = new Asset('BCFF11B', 2, 5, 64.81, 1)
      const s8 = new Asset('FAED11B', 2, 4, 157.00, 1)
      const s9 = new Asset('HTMX11B', 2, 2, 87.86, 1)
      const s10 = new Asset('RendaFixa', 3, 1, 6292.21, 1)
      const arrayAcoes = []
      const arrayFII = []
      const arrayRenda = []
      arrayAcoes.push(s1)
      arrayAcoes.push(s2)
      arrayFII.push(s3)
      arrayFII.push(s4)
      arrayFII.push(s5)
      arrayFII.push(s6)
      arrayFII.push(s7)
      arrayFII.push(s8)
      arrayFII.push(s9)
      arrayRenda.push(s10)
      const c1 = new Category('Acoes', arrayAcoes)
      const c2 = new Category('FII', arrayFII)
      const c3 = new Category('RendaFixa', arrayRenda)
      const categoryList = [c1, c2, c3]
      const portifolio = new Portifolio(categoryList, 0)
      expect(portifolio.value).to.equals(17201.84)
    })
  })
})
