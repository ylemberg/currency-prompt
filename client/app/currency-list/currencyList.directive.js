angular.module('currency-prompt')
.controller('currencyListCtrl', ['$scope', 'currencyAPI', function ($scope, currencyAPI) {
  var vm = this

  vm.init = () => {
    vm.companies = () => currencyAPI.getCurrencyValues()
    currencyAPI.requestCompanies()
  }
  vm.lessthanzero = number => parseInt(number, 10) < 0

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
