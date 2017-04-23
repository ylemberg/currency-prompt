const rp = require('request-promise')
require('dotenv').config()

const CURRENCY_API = `http://hey-guy.softledger.com?key=${process.env.CURRENCY_API_KEY}`

module.exports = {
  getCurrenciesFromAPI: () => rp.get(CURRENCY_API).then(currencies => JSON.parse(currencies))
}
