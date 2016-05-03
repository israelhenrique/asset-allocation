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
      const portifolio = new Portifolio(categoryList, [40, 20, 20], 5)
      expect(portifolio.alloc[0]).to.equals(40)
      expect(portifolio.alloc[1]).to.equals(20)
      expect(portifolio.alloc[2]).to.equals(20)
      expect(portifolio.rebalancePercent).to.equals(5)
      expect(portifolio.value).to.equals(17201.84)
    })
  })
  describe('#isBalanced', () => {
    it('return true if the portifolio is balanced', () => {
      const arrayAcoes = []
      const arrayFII = []
      const arrayRenda = []
      const c1 = new Category('Acoes', arrayAcoes)
      const c2 = new Category('FII', arrayFII)
      const c3 = new Category('RendaFixa', arrayRenda)
      c1.value = 45
      c2.value = 20
      c3.value = 35
      const categoryList = [c1, c2, c3]
      const portifolio = new Portifolio(categoryList, [45, 20, 35], 5)
      expect(portifolio.isBalanced()).to.equals(true)
      portifolio.alloc = [35, 20, 45]
      expect(portifolio.isBalanced()).to.equals(false)
    })
    it('return false if the portifolio is not balanced', () => {
      const arrayAcoes = []
      const arrayFII = []
      const arrayRenda = []
      const c1 = new Category('Acoes', arrayAcoes)
      const c2 = new Category('FII', arrayFII)
      const c3 = new Category('RendaFixa', arrayRenda)
      c1.value = 51
      c2.value = 20
      c3.value = 29
      const categoryList = [c1, c2, c3]
      const portifolio = new Portifolio(categoryList, [45, 20, 35], 5)
      expect(portifolio.isBalanced()).to.equals(false)
    })
  })
})
