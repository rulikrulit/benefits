'use strict';

/**
 * @ngdoc function
 * @name benefitsApp.controller:BenefitCtrl
 * @description
 * # BenefitCtrl
 * Controller of the benefitsApp
 */
angular.module('benefitsApp')
  .controller('BenefitCtrl', ['$scope', 'wsdl', function ($scope, wsdl) {
    $scope.benefitReady = false;
    $scope.benefitPaymentsReady = false;
    $scope.ownerReady = false;
    wsdl('app', 'GetPolicyOwnerPersonalInfo').then(function(response){
      $scope.owner = response.data.GetPolicyOwnerPersonalInfoResult;
      $scope.ownerReady = true;
    });
    wsdl('app', 'GetPolicy').then(function(response){
      $scope.benefit = response.data.GetPolicyResult;
      $scope.benefitReady = true;
      wsdl('app', 'GetPolicyPaymentsLastYear').then(function(response){
        $scope.benefitPayments = response.data.GetPolicyPaymentsLastYearResult.PolicyPayment;
        $scope.benefitPaymentsReady = true;
      });
    });
  }]);
