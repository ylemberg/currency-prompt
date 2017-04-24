angular.module('currency-prompt')
.controller('currencyDropdownCtrl', ['$scope', 'currencyAPI', function ($scope, currencyAPI) {
  var vm = this
  $('.dropdown').dropdown()

  this.currencies = currencyAPI.getCurrencies()
}])
.directive('currencyDropdown', function () {
  return {
    controller: 'currencyDropdownCtrl as ctrl',
    scope: {
    },
    templateUrl: 'app/currency-dropdown/currencyDropdown.directive.html'
  }
})
