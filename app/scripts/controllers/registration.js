'use strict';

/**
 * @ngdoc function
 * @name benefitsApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the benefitsApp
 */
angular.module('benefitsApp')
  .controller('RegistrationCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {

    $scope.maxDate = new Date();

    $scope.open = function($event) {
      $scope.status.opened = true;
    };

    $scope.setDate = function(year, month, day) {
      $scope.dt = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'MM.dd.yyyy', 'shortDate'];
    $scope.format = $scope.formats[2];

    $scope.status = {
      opened: false
    };

    $scope.submitRegister = function() {
      if ($scope.form_registration.$valid) {
        $rootScope.$broadcast('setAlert', 'You are successfully registered');
        $location.path('/benefits');
      } else {
        $rootScope.$broadcast('setAlert', 'Please, fill in the form correctly', 'error');
      }
    };

  }]);
