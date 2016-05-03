'use strict'

class PortifolioManager {
  checkPortifolioBalance(portifolio) {
    let msg = ''
    if (!portifolio.isBalanced()) {
      portifolio.categories.forEach((item, index) => {
        const percent = (item.value / portifolio.value) * 100
        if (Math.abs(portifolio.alloc[index] - percent) > portifolio.rebalancePercent) {
          msg += `Category ${item.name} is not balanced\n`
        }
      })
    } else {
      msg = 'Portifolio is balanced\n'
    }
    return msg
  }
}

module.exports = PortifolioManager
