'use strict';

/**
 * @ngdoc function
 * @name benefitsApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the benefitsApp
 */
angular.module('benefitsApp')
  .controller('RegistrationCtrl', ['zip', '$scope', function (zip, $scope) {
    zip.locationByZip('07747').then(function(response){
      console.log(response);
      $scope.response = response;
    });

  }]);
