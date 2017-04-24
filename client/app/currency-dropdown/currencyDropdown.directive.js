angular.module('currency-prompt')
.controller('currencyDropdownCtrl', ['$scope', 'currencyAPI', function ($scope, currencyAPI) {
  var vm = this

  vm.init = () => {
    $('.dropdown').dropdown()
    currencyAPI.requestCurrencies()
    vm.countries = currencyAPI.getCountryCurrencies()
  }

  vm.init()
}])
.directive('currencyDropdown', function () {
  return {
    controller: 'currencyDropdownCtrl as ctrl',
    scope: {
    },
    templateUrl: 'app/currency-dropdown/currencyDropdown.directive.html'
  }
})
