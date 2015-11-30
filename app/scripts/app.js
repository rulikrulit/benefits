'use strict';

/**
 * @ngdoc overview
 * @name benefitsApp
 * @description
 * # benefitsApp
 *
 * Main module of the application.
 */
angular
  .module('benefitsApp', [
    'ngRoute',
    'ngSanitize',
    'angularSoap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/register', {
        templateUrl: 'views/registration.html',
        controller: 'RegistrationCtrl',
        controllerAs: 'registration'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
