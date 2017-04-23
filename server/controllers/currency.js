const currencyUtil = require('../utils/currency')

module.exports = {
  get: (req, res) => {
    currencyUtil.getCurrenciesFromAPI()
      .then(currencies => {
        res.send(currencies)
      }).catch(err => {
        res.status(500).send(err)
      })
  }
}
