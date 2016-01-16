'use strict';

/**
 * @ngdoc function
 * @name PoliciesApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the PoliciesApp
 */
angular.module('PoliciesApp')
  .controller('AppCtrl', ['$rootScope', '$scope', '$location', '$cookies', '$uibModal', 'wsdl', function ($rootScope, $scope, $location, $cookies, $uibModal, wsdl) {

    $rootScope.user = null;

    $scope.getClass = function (path) {
      if ($location.path() === path) {
        return 'active';
      } else {
        return '';
      }
    };
    var login = $cookies.get('login'),
      pass = $cookies.get('pass');

    if (pass && login) {
      $rootScope.user = {
        UserName: login,//'Boris@M3tech.com',
        UserPassword: pass//'b569d2dc'
      };
      wsdl('app', 'GetPolicyOwnerPersonalInfo', {
        data: {
          user: $rootScope.user
        }
      }).then(function(response){
        $rootScope.owner = response.data.GetPolicyOwnerPersonalInfoResult;
        console.log('owner', $rootScope.owner);
      });

    }

    $rootScope.logout = function() {
      login = $cookies.put('login', '');
      pass = $cookies.put('pass', '');

      $rootScope.user = null;
      $rootScope.owner = null;
      $rootScope.$broadcast('setAlert', 'You have logged out successfully');

      $location.path('/login');
    };


    $scope.$on('setAlert', function(e, message, type) {
      var modalInstance;
      type = type || 'success';
      if (type === 'error') {
        type = 'danger';
      }
      modalInstance = $uibModal.open({
        templateUrl: 'views/alert-message.html',
        controller: 'alertMessageCtrl',
        size: 'sm',
        windowClass: 'modal-alert',
        resolve: {
          alert: {
            message: message,
            type: type
          }
        }
      });
    });

    $scope.clearAlert = function() {
      $scope.alertMessage = false;
    };
  }]);
