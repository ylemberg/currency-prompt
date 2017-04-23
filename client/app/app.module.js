angular.module('currency-prompt')
.controller('appCtrl', ['$scope', function ($scope) {
  var vm = this
}])
.directive('app', function () {
  return {
    controller: 'appCtrl as ctrl',
    scope: {
    },
    templateUrl: 'app/templates/app.html'
  }
})
