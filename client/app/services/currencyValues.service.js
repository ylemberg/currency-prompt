angular.module('currency-prompt')
.service('currencyValues', ['$http', function ($http) {
  // const currencies = []

  // const handleSuccess = resp => {
  //   this.formatCurrencies(resp.data)
  // }

  // const handleFailure = err => {
  //   console.error('err after $http.get = ', err)
  // }

  // this.requestCurrencies = function (query, callback) {
  //   $http({
  //     method: 'GET',
  //     url: '/currencies'
  //   }).then(handleSuccess, handleFailure)
  // }

  // this.getCurrencies = () => currencies
  // this.formatCurrencies = currenciesObj => {
  //   for (company in currenciesObj) {
  //     currencies.push({
  //       company,
  //       value: currenciesObj[company]
  //     })
  //   }
  // }
}])