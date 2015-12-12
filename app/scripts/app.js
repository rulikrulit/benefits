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
    'ui.bootstrap',
    'angularSoap',
    'ngMessages'

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
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/address', {
        templateUrl: 'views/address.html',
        controller: 'AddressCtrl',
        controllerAs: 'address'
      })
      .when('/benefits', {
        templateUrl: 'views/benefits.html',
        controller: 'BenefitsCtrl',
        controllerAs: 'benefits'
      })
      .when('/benefit', {
        templateUrl: 'views/benefit.html',
        controller: 'BenefitCtrl',
        controllerAs: 'benefit'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
