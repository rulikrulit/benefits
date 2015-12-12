'use strict';

/**
 * @ngdoc function
 * @name benefitsApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the benefitsApp
 */
angular.module('benefitsApp')
  .controller('LoginCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
    $scope.submitLogin = function() {
      if ($scope.form_login.$valid) {
        $rootScope.$broadcast('setAlert', 'You are successfully logged in');
        $location.path('/benefits');
      } else {
        $rootScope.$broadcast('setAlert', 'Please, fill in the form correctly', 'error');
      }
    };
  }]);
