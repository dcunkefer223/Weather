'use strict';

angular.module('sq1WeatherApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'btford.socket-io',
  'ui.bootstrap'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      }).when('/test', {
        templateUrl: 'app/login/test.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      // .when('/signup', {
      //   templateUrl: 'app/login/signupNew.html',
      //   controller: 'LoginController',
      //   controllerAs: 'login'
      // })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
