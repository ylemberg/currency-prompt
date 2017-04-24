angular.module('currency-prompt')
.controller('currencyDropdownCtrl', ['$scope', 'currencyAPI', 'conversion', function ($scope, currencyAPI, conversion) {
  var vm = this

  vm.init = () => {
    $('.dropdown').dropdown()

    currencyAPI.requestCurrencies()
    vm.countries = currencyAPI.getCountryCurrencies()
    vm.usdBase = currencyAPI.getUSDBase()
  }

  vm.countrySelected = country => {
    currencyAPI.changeCurrencyValues(conversion.convertCurrency(country.value, vm.usdBase))
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
