angular.module('currency-prompt')
.controller('currencyListCtrl', ['$scope', 'currencyCompanies', function ($scope, currencyCompanies) {
  var vm = this

  vm.companies = currencyCompanies.getCurrencies()
  currencyCompanies.requestCurrencies()

  vm.lessthanzero = number => number < 0
}])
.directive('currencyList', function () {
  return {
    controller: 'currencyListCtrl as ctrl',
    scope: {
    },
    templateUrl: 'app/currency-list/currencyList.directive.html'
  }
})
