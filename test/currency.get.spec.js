const expect = require('chai').expect
const currencyCtrl = require('../server/utils/currency')
require('dotenv').config()

describe('Currency helpers', () => {
  it('should get all the currencies', () => {
    return currencyCtrl.getCurrenciesFromAPI()
      .then(currencies => {
        expect(currencies).to.be.an('object')
      })
  })
})
