'use strict'

class Category {
  constructor(name, assets) {
    this.name = name
    this.assets = assets
    this.value = 0

    assets.forEach((item) => {
      this.value = this.value + item.value * item.quotes
    })
  }
}

module.exports = Category
