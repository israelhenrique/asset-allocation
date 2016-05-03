'use strict'

class Portifolio {
  constructor(categories, alloc, rebalancePercent) {
    this.categories = categories
    this.value = 0
    this.alloc = alloc
    this.rebalancePercent = rebalancePercent

    categories.forEach((item) => {
      this.value = this.value + item.value
    })
  }
  isBalanced() {
    let msg = 'balanced'
    let percent = 0
    this.categories.forEach((item, index) => {
      percent = (item.value / this.value) * 100
      if (Math.abs(this.alloc[index] - percent) > this.rebalancePercent) {
        msg = 'desbalanced'
      }
    })
    return msg
  }
}

module.exports = Portifolio
