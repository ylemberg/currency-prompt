angular.module('currency-prompt')
.controller('currencyCtrl', ['$scope', function ($scope) {
  var vm = this
}])
.directive('currency', function () {
  return {
    controller: 'currencyCtrl as ctrl',
    scope: {
    },
    templateUrl: 'app/currency-dropdown/currency.directive.html'
  }
})
