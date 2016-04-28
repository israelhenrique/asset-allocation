'use strict'

class Portifolio {
  constructor(categoryList, alloc) {
    this.categoryList = categoryList
    this.value = 0
    this.alloc = alloc

    categoryList.forEach((item) => {
      this.value = this.value + item.value
    })
  }
}

module.exports = Portifolio
