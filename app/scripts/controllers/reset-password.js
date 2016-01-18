'use strict';

/**
 * @ngdoc function
 * @name PoliciesApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the PoliciesApp
 */
angular.module('PoliciesApp')
  .controller('ResetPasswordCtrl', ['$scope', '$rootScope', '$location', '$cookies', 'wsdl', function ($scope, $rootScope, $location, $cookies, wsdl) {
    $scope.resetPassword = function() {
      if ($scope.form_reset.$valid) {
        wsdl('app', 'RequestResetPassword', {
          data: {
            user: {
              UserName: $scope.reset.username,
              UserPassword: $scope.reset.passwordOld
            }
          }
        }).then(function(response){
          console.log('reset', response);
          $rootScope.$broadcast('setAlert', 'You password reset request has been submitted successfully');
          $rootScope.user = {
            UserName: $scope.reset.username,
            UserPassword: $scope.reset.passwordOld
          };
          $cookies.put('login', $scope.reset.username);
          $cookies.put('pass', $scope.reset.passwordOld);
          $location.path('/home');
          wsdl('app', 'GetPolicyOwnerPersonalInfo', {
            data: {
              user: $rootScope.user
            }
          }).then(function(response){
            $rootScope.owner = response.data.GetPolicyOwnerPersonalInfoResult;
            console.log('owner', $rootScope.owner);
          });
            // if (response.data && response.data.IsUserAuthenticatedResult) {
            //   $rootScope.$broadcast('setAlert', response.data.IsUserAuthenticatedResult, 'error');
            // } else {
            //   $rootScope.$broadcast('setAlert', 'The service is temporarly unavailable, pleaes try again later', 'error');
            // }
        });

      } else {
        $rootScope.$broadcast('setAlert', 'Please, fill in the form correctly', 'error');
      }
    };
  }]);
