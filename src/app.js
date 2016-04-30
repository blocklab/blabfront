'use strict';

angular.module('blab', [
  'ngRoute',
  'LocalForageModule'
])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/login/templates/login_form',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .when('/ledger', {
        templateUrl: 'src/ledger/templates/overview',
        controller: 'BlabController',
        controllerAs: 'overview'
      })
      .when('/ledger/:id', {
        templateUrl: 'src/ledger/templates/detail',
        controller: 'LedgerDetailController'
      })
  }])

  .constant('REST_API_URL', 'http://localhost:3000');