'use strict';

/**
 * @ngdoc function
 * @name benefitsApp.controller:BenefitsCtrl
 * @description
 * # BenefitsCtrl
 * Controller of the benefitsApp
 */
angular.module('benefitsApp')
  .controller('BenefitsCtrl', ['$scope', 'wsdl', function ($scope, wsdl) {
    $scope.ownerReady = false;
    $scope.addressFound = false;
    wsdl('app', 'GetOwnerPolicies').then(function(response){
      $scope.benefits = response.data;
    });
    wsdl('app', 'GetPolicyOwnerPersonalInfo').then(function(response){
      $scope.owner = response.data.GetPolicyOwnerPersonalInfoResult;
      $scope.ownerReady = true;
    });
    wsdl('app', 'GetPolicyOwnerAddressInfo').then(function(response){
      if (response.data && response.data.GetPolicyOwnerAddressInfoResult && response.data.GetPolicyOwnerAddressInfoResult.Address) {
        $scope.addressData = response.data.GetPolicyOwnerAddressInfoResult.Address[0];
        $scope.addressFound = true;
      }
    });
  }]);
