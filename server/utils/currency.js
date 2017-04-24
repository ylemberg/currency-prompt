const rp = require('request-promise')

const COMPANY_API = `http://hey-guy.softledger.com?key=${process.env.COMPANY_API_KEY}`
const CURRENCY_API = `http://api.fixer.io/latest?base=${process.env.CURRENCY_BASE}`

module.exports = {
  getCompaniesFromAPI: () => rp.get(COMPANY_API).then(companies => JSON.parse(companies)),
  getCurrenciesFromAPI: () => rp.get(CURRENCY_API).then(currencies => JSON.parse(currencies).rates)
}
