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
    }
  }]);
