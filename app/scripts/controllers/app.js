'use strict';

/**
 * @ngdoc function
 * @name benefitsApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the benefitsApp
 */
angular.module('benefitsApp')
  .controller('AppCtrl', ['$scope', '$location', function ($scope, $location) {

    $scope.getClass = function (path) {
      if ($location.path() === path) {
        return 'active';
      } else {
        return '';
      }
    };

    $scope.$on('setAlert', function(e, message, type) {
      $scope.alertMessage = message;

      switch (type) {
        case 'error':
          $scope.alertClass = 'danger';
          break;
        case 'warning':
          $scope.alertClass = 'info';
          break;
        default:
          $scope.alertClass = 'success';
      }
    });

    $scope.clearAlert = function() {
      $scope.alertMessage = false;
    };
  }]);
