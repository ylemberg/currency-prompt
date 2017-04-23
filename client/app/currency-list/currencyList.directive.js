angular.module('currency-prompt')
.controller('currencyListCtrl', ['$scope', 'currencyCompanies', function ($scope, currencyCompanies) {
  var vm = this

  this.companies = currencyCompanies.getCurrencies()
  currencyCompanies.requestCurrencies()
}])
.directive('currencyList', function () {
  return {
    controller: 'currencyListCtrl as ctrl',
    scope: {
    },
    templateUrl: 'app/currency-list/currencyList.directive.html'
  }
})
