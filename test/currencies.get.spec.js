const expect = require('chai').expect

require('../server/server-config')
const currencyCtrl = require('../server/utils/currency')

describe('Currency helpers', () => {
  it('should get all the currencies', () => {
    const currenciesKeys = ['AUD', 'BGN', 'BRL', 'CAD', 'CHF', 'CNY', 'CZK', 'DKK', 'GBP', 'HKD', 'HRK', 'HUF', 'IDR', 'ILS', 'INR', 'JPY', 'KRW', 'MXN', 'MYR', 'NOK', 'NZD', 'PHP', 'PLN', 'RON', 'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'ZAR', 'EUR']
    return currencyCtrl.getCurrenciesFromAPI()
      .then(currencies => {
        expect(currencies).to.be.an('object')
        expect(currencies).to.have.all.keys(currenciesKeys)
        expect(currencies.AUD).to.be.a('number')
        expect(currencies.EUR).to.be.a('number')
      })
  })
})
