const expect = require('chai').expect
const currencyCtrl = require('../server/utils/currency')

describe('Currency helpers', () => {
  it('should get all the currencies', () => {
    return currencyCtrl.getCurrenciesFromAPI()
      .then(currencies => {
        expect(currencies).to.be.a('float32array')
      })
  })
})
