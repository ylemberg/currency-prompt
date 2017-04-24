const currencyUtil = require('../utils/currency')

module.exports = {
  getCompanies: (req, res) => {
    currencyUtil.getCompaniesFromAPI()
      .then(companies => {
        res.send(companies)
      }).catch(err => {
        res.status(500).send(err)
      })
  },
  getCurrencies: (req, res) => {
    currencyUtil.getCurrenciesFromAPI()
      .then(currencies => {
        res.send(currencies)
      }).catch(err => {
        res.status(500).send(err)
      })
  }
}
