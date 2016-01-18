'use strict';

/**
 * @ngdoc function
 * @name PoliciesApp.controller:paymentsCtrl
 * @description
 * # paymentsCtrl
 * Controller of the PoliciesApp
 */
angular.module('PoliciesApp')
  .controller('PaymentsCtrl', ['$rootScope', '$scope', '$routeParams', 'wsdl', function ($rootScope, $scope, $routeParams, wsdl) {
    $scope.policyId = $routeParams.id;
    $scope.policyReady = false;
    $scope.policyPaymentsReady = false;
    $scope.ownerReady = false;
    wsdl('app', 'GetPolicyOwnerPersonalInfo', {
        data: {
          user: $rootScope.user
        }
      }).then(function(response){
      $scope.owner = response.data.GetPolicyOwnerPersonalInfoResult;
      $scope.ownerReady = true;
    });
    wsdl('app', 'GetPolicy', {
        data: {
          user: $rootScope.user,
          policyID: $scope.policyId
        }
      }).then(function(response){
      $scope.policy = response.data.GetPolicyResult;
      $scope.policyReady = true;
      wsdl('app', 'GetPolicyPaymentsLastYear', {
        data: {
          user: $rootScope.user,
          policyID: $scope.policyId
        }
      }).then(function(response){
        $scope.policyPayments = response.data.GetPolicyPaymentsLastYearResult.PolicyPayment;
        $scope.policyPaymentsReady = true;
      });
    });
  }]);
