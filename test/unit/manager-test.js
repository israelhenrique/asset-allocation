'use strict'

const PortifolioManager = require('../../src/portifoliomanager.js')
const Category = require('../../src/category.js')
const Portifolio = require('../../src/portifolio.js')


describe('PortifolioManager', () => {
  describe('#checkPortifolioBalance', () => {
    it('check a balanced portifolio', () => {
      const arrayAcoes = []
      const c1 = new Category('Acoes', arrayAcoes)
      c1.value = 45
      const categoryList = [c1]
      const portifolio = new Portifolio(categoryList, [100], 5)
      const portifoliomanager = new PortifolioManager()
      const msg = 'Portifolio is balanced\n'
      expect(portifoliomanager.checkPortifolioBalance(portifolio)).to.equals(msg)
    })
    it('check a desbalanced portifolio', () => {
      const arrayAcoes = []
      const c1 = new Category('Acoes', arrayAcoes)
      c1.value = 45
      const categoryList = [c1]
      const portifolio = new Portifolio(categoryList, [50], 5)
      const portifoliomanager = new PortifolioManager()
      const msg = 'Category Acoes is not balanced\n'
      expect(portifoliomanager.checkPortifolioBalance(portifolio)).to.equals(msg)
    })
  })
  describe('#fixPortifolioBalance', () => {
    it('check a desbalanced portifolio', () => {
      const arrayAcoes = []
      const c1 = new Category('Acoes', arrayAcoes)
      c1.value = 40
      const categoryList = [c1]
      const portifolio = new Portifolio(categoryList, [50], 5)
      portifolio.value = 100
      const portifoliomanager = new PortifolioManager()
      const msg = 'Category Acoes needs 10 to be balanced\n'
      expect(portifoliomanager.fixPortifolioBalance(portifolio)).to.equals(msg)
    })
  })
})
