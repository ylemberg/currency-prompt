const rp = require('request-promise')

const CURRENCY_API = `http://hey-guy.softledger.com?key=${process.env.CURRENCY_API_KEY}`

module.exports = {
  getCurrenciesFromAPI: () => {
    return rp.get()
  }
}
