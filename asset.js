'use strict'

class Asset {
  constructor(codName, type, quotes, value, category) {
    this.codName = codName
    this.quotes = quotes
    this.type = type
    this.value = value
    this.category = category
  }
}

module.exports = Asset
