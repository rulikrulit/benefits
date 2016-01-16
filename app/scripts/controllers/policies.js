'use strict';

/**
 * @ngdoc function
 * @name PoliciesApp.controller:PoliciesCtrl
 * @description
 * # PoliciesCtrl
 * Controller of the PoliciesApp
 */
angular.module('PoliciesApp')
  .controller('PoliciesCtrl', ['$rootScope', '$scope', '$location', 'wsdl', function ($rootScope, $scope, $location, wsdl) {

    if (!$rootScope.user) {
      $rootScope.$broadcast('setAlert', 'You must be logged in to view this page', 'error');
      $location.path('/login');
    } else {
      $scope.ownerReady = false;
      $scope.addressFound = false;
      wsdl('app', 'GetOwnerPolicies', {
        data: {
          user: $rootScope.user
        }
      }).then(function(response){
        if (response.data && response.data.GetOwnerPoliciesResult && response.data.GetOwnerPoliciesResult.PolicyInfo) {
          $scope.policyReady = true;
          $scope.policies = response.data.GetOwnerPoliciesResult.PolicyInfo;
        }
      });
      wsdl('app', 'GetPolicyOwnerPersonalInfo', {
        data: {
          user: $rootScope.user
        }
      }).then(function(response){
        $scope.owner = response.data.GetPolicyOwnerPersonalInfoResult;
        $scope.ownerReady = true;
      });
      wsdl('app', 'GetPolicyOwnerAddressInfo', {
        data: {
          user: $rootScope.user
        }
      }).then(function(response){
        if (response.data && response.data.GetPolicyOwnerAddressInfoResult && response.data.GetPolicyOwnerAddressInfoResult.Address) {
          $scope.addressData = response.data.GetPolicyOwnerAddressInfoResult.Address[0];
          $scope.addressFound = true;
        }
      });
    }

    $scope.openPolicy = function(id) {
      $location.path('/policy/' + id);
    };
  }]);
