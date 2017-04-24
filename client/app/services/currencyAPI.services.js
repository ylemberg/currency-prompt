angular.module('currency-prompt')
.service('currencyAPI', ['$http', function ($http) {
  const usdBase = []
  const currenciesToDisplay = []
  let countryCurrencies = []

  this.requestCompanies = () => {
    $http.get('/companies')
      .then(resp => {
        this.formatCompanies(resp.data)
      }, err => {
        console.error(`err after $http.get = ${err}`)
      })
  }

  this.requestCurrencies = () => {
    $http.get('/currencies')
      .then(resp => {
        this.formatCurrencies(resp.data)
      })
  }

  this.getCurrencyValues = () => currenciesToDisplay
  this.formatCompanies = companiesObj => {
    for (company in companiesObj) {
      usdBase.push({
        name: company,
        value: companiesObj[company]
      })
      currenciesToDisplay.push({
        name: company,
        value: companiesObj[company]
      })
    }
  }
  this.formatCurrencies = currenciesObj => {
    for (currency in currenciesObj) {
      countryCurrencies.push({
        name: currency,
        value: currenciesObj[currency]
      })
    }
    countryCurrencies.push({
      name: 'USD',
      value: 1
    })
    countryCurrencies = this.sortCountries(countryCurrencies)
  }
  this.sortCountries = countries => countries.sort((countryA, countryB) => {
    return countryA.name < countryB.name ? -1 : 1
  })
  this.getCountryCurrencies = () => countryCurrencies
}])
