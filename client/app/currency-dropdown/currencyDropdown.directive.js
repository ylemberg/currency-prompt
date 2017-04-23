angular.module('currency-prompt')
.controller('currencyDropdownCtrl', ['$scope', 'currencyValues', function ($scope, currencyValues) {
  var vm = this
  $('.dropdown').dropdown()
}])
.directive('currencyDropdown', function () {
  return {
    controller: 'currencyDropdownCtrl as ctrl',
    scope: {
    },
    templateUrl: 'app/currency-dropdown/currencyDropdown.directive.html'
  }
})
