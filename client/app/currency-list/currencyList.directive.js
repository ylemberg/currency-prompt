angular.module('currency-prompt')
.controller('currencyListCtrl', ['currencyAPI', 'conversion', function (currencyAPI, conversion) {
  const vm = this

  vm.init = () => {
    vm.companies = () => currencyAPI.getCurrencyValues()
    currencyAPI.requestCompanies()
  }
  vm.lessthanzero = number => parseInt(number, 10) < 0
  vm.fixDecimals = val => conversion.setToTwoDecimals(val)

  vm.init()
}])
.directive('currencyList', function () {
  return {
    controller: 'currencyListCtrl as ctrl',
    scope: {
    },
    templateUrl: 'app/currency-list/currencyList.directive.html'
  }
})
