var app = angular.module('supergasbras', [
  'ui-router',
  'LocalStorageModule'
])

app.config([
  '$stateProvider',
  'localStorageServiceProvider',

  function ($stateProvider,
            localStorageServiceProvider) {

    localStorageServiceProvider
      .setPrefix('supergasbras')
  }
])