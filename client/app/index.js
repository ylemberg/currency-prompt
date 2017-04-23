angular.module('currency-prompt', [])
.config(function ($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self'
  ])
})
