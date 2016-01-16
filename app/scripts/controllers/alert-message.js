'use strict';

angular.module('PoliciesApp')


.controller('alertMessageCtrl', function($rootScope, $scope, $uibModalInstance, alert) {

  $scope.alert = alert;
  $rootScope.$on('setAlert', function() {
    $uibModalInstance.dismiss('cancel');
  });
  switch (alert.type) {
    case 'success':
      $scope.title = 'Success!';
      $scope.icon = 'thumbs-up';
      break;
    case 'info':
      $scope.title = 'Warning!';
      $scope.icon = 'info-sign';
      break;
    case 'danger':
      $scope.title = 'Error!';
      $scope.icon = 'alert';
      break;
  }

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };



//}]);
});
