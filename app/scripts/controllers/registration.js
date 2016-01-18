'use strict';

/**
 * @ngdoc function
 * @name PoliciesApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the PoliciesApp
 */
angular.module('PoliciesApp')
  .controller('RegistrationCtrl', ['$scope', '$rootScope', '$location', '$cookies', 'wsdl', '$filter', function ($scope, $rootScope, $location, $cookies, wsdl, $filter) {

    $scope.maxDate = new Date();

    $scope.open = function($event) {
      $scope.status.opened = true;
    };

    $scope.setDate = function(year, month, day) {
      $scope.dt = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'MM.dd.yyyy', 'shortDate'];
    $scope.format = 'MM/dd/yyyy';

    $scope.status = {
      opened: false
    };
    $scope.submitRegister = function() {
      if ($scope.form_registration.$valid) {
        wsdl('app', 'RegisterNewUser', {
          data: {
            // 'user[UserName]':'Boris@M3tech.com',BORIS@M3TECH.COM //boris@m3tech.com
            // 'user[UserPassword]':'b569d2dc',
            // 'newPassowrd':'b569d2dc',
            // 'newPasswordConfirm':'b569d2dc',//B569D2DC
            // 'last4SS':'4797',
            // 'dob':'04/28/1966'
            user: {
              UserName: $scope.registration.username,
              UserPassword: $scope.registration.passwordOld,
            },
            newPassowrd: $scope.registration.passwordNew,
            newPasswordConfirm: $scope.registration.passwordComfirm,
            last4SS: $scope.registration.last4ss,
            dob: $filter('date')($scope.registration.birthday, 'yyyy-MM-dd')

          }
        }).then(function(response){
          if (response.statusText && response.statusText === 'OK') {
            $rootScope.$broadcast('setAlert', 'You are successfully registered');
            $rootScope.user = {
              UserName: $scope.registration.username,
              UserPassword: $scope.registration.passwordNew
            };
            $cookies.put('login', $scope.registration.username);
            $cookies.put('pass', $scope.registration.passwordNew);
            $location.path('/policies');
          } else {
            $rootScope.$broadcast('setAlert', 'The data you entered is incorrect.', 'error');
          }
        });

      } else {
        $rootScope.$broadcast('setAlert', 'Please, fill in the form correctly', 'error');
      }
    };

  }]);
