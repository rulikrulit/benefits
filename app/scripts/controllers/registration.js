'use strict';

/**
 * @ngdoc function
 * @name benefitsApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the benefitsApp
 */
angular.module('benefitsApp')
  .controller('RegistrationCtrl', ['$scope', function ($scope) {

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

  }]);
