'use strict';

/**
 * @ngdoc overview
 * @name PoliciesApp
 * @description
 * # PoliciesApp
 *
 * Main module of the application.
 */
angular
  .module('PoliciesApp', [
    'ngRoute',
    'ngSanitize',
    'ui.bootstrap',
    'angularSoap',
    'ngCookies',
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
      .when('/reset-password', {
        templateUrl: 'views/reset-password.html',
        controller: 'ResetPasswordCtrl',
        controllerAs: 'reset_password'
      })
      .when('/address', {
        templateUrl: 'views/address.html',
        controller: 'AddressCtrl',
        controllerAs: 'address'
      })
      .when('/policies', {
        templateUrl: 'views/policies.html',
        controller: 'PoliciesCtrl',
        controllerAs: 'policies'
      })
      .when('/policy/:id', {
        templateUrl: 'views/policy.html',
        controller: 'PolicyCtrl',
        controllerAs: 'policy'
      })
      .when('/payments/:id', {
        templateUrl: 'views/payments.html',
        controller: 'PaymentsCtrl',
        controllerAs: 'payments'
      })
      .when('/service', {
        templateUrl: 'views/service.html'
      })
      .when('/premiums', {
        templateUrl: 'views/premiums.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
