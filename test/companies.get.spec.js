const expect = require('chai').expect

require('../server/server-config')
const currencyCtrl = require('../server/utils/currency')

describe('Currency helpers', () => {
  it('should get all the companies', () => {
    const companyKeys = ['walmart', 'stateGrid', 'chinaNationalPetrolium', 'sinopecGroup', 'royalDutchShell', 'exxonMobil', 'volkswagen', 'toyota', 'genosEast']
    return currencyCtrl.getCompaniesFromAPI()
      .then(companies => {
        expect(companies).to.be.an('object')
        expect(companies).to.have.all.keys(companyKeys)
        expect(companies.walmart).to.equal('482130.006')
        expect(companies.genosEast).to.equal('-5827364.434332')
      })
  })
})
