angular.module('currency-prompt')
.service('currencyAPI', ['$http', function ($http) {
  const usdBase = []
  const currenciesToDisplay = []

  const handleSuccess = resp => {
    this.formatCurrencies(resp.data)
  }

  const handleFailure = err => {
    console.error('err after $http.get = ', err)
  }

  this.requestCurrencies = function (query, callback) {
    $http({
      method: 'GET',
      url: '/currencies'
    }).then(handleSuccess, handleFailure)
  }

  this.getCurrencies = () => currenciesToDisplay
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
}])
