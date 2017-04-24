angular.module('currency-prompt')
.service('currencyAPI', ['$http', function ($http) {
  const usdBase = []
  const currenciesToDisplay = []
  const currencies = []

  this.requestCompanies = () => {
    $http.get('/companies')
      .then(resp => {
        this.formatCurrencies(resp.data)
      }, err => {
        console.error(`err after $http.get = ${err}`)
      })
  }

  this.getCurrencies = () => {
    $http.get('/currencies')
  }

  this.getCurrencyValues = () => currenciesToDisplay
  this.formatCurrencies = currenciesObj => {
    for (company in currenciesObj) {
      usdBase.push({
        name: company,
        value: currenciesObj[company]
      })
      currenciesToDisplay.push({
        name: company,
        value: currenciesObj[company]
      })
    }
  }
  this.getCurrencies = () => currencies
}])
