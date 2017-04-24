angular.module('currency-prompt')
.controller('appCtrl', [() => {
  const vm = this
}])
.directive('app', () => {
  return {
    controller: 'appCtrl as ctrl',
    scope: {
    },
    templateUrl: 'app/app.html'
  }
})
