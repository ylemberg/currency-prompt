const expect = require('chai').expect

require('../server/server-config')
const currencyCtrl = require('../server/utils/currency')

describe('Currency helpers', () => {
  it('should get all the currencies', () => {
    const currencyKeys = ['walmart', 'stateGrid', 'chinaNationalPetrolium', 'sinopecGroup', 'royalDutchShell', 'exxonMobil', 'volkswagen', 'toyota', 'genosEast']
    return currencyCtrl.getCurrenciesFromAPI()
      .then(currencies => {
        expect(currencies).to.be.an('object')
        expect(currencies).to.have.all.keys(currencyKeys)
        expect(currencies.walmart).to.equal('482130.006')
        expect(currencies.genosEast).to.equal('-5827364.434332')
      })
  })
})
