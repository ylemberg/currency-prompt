const currencyUtil = require('../utils/currency')

module.exports = {
  get: (req, res) => {
    currencyUtil.getCurrenciesFromAPI()
      .then(currencies => {
        res.send('hai get')
      }).catch(err => {
        res.status(500).send(err)
      })
  }
}
