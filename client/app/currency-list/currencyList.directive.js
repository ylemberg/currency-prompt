angular.module('currency-prompt')
.controller('currencyListCtrl', ['$scope', 'currencyAPI', function ($scope, currencyAPI) {
  var vm = this

  vm.companies = currencyAPI.getCurrencies()
  currencyAPI.requestCurrencies()

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
