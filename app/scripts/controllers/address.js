'use strict';

/**
 * @ngdoc function
 * @name benefitsApp.controller:AddressCtrl
 * @description
 * # AddressCtrl
 * Controller of the benefitsApp
 */
angular.module('benefitsApp')
  .controller('AddressCtrl', ['$scope', 'wsdl', function ($scope, wsdl) {
    $scope.checkZip = function() {
      if ($scope.address && $scope.address.zip && $scope.address.zip.match(/^\d{5}$/)) {
        $scope.form_address.address_zip.$setValidity('existingZip', undefined);
        wsdl('GetInfoByZIP', {data: {USZip: $scope.address.zip}})
          .then(function(data){
            if (data.data.GetInfoByZIPResult && data.data.GetInfoByZIPResult.NewDataSet && data.data.GetInfoByZIPResult.NewDataSet.Table) {
              $scope.form_address.address_zip.$setValidity('existingZip', true);
              $scope.address.city = data.data.GetInfoByZIPResult.NewDataSet.Table.CITY;
              $scope.address.state = data.data.GetInfoByZIPResult.NewDataSet.Table.STATE;
            } else {
              $scope.form_address.address_zip.$setValidity('existingZip', false);
            }
          });
      } else {
              $scope.form_address.address_zip.$setValidity('existingZip', false);
              $scope.address.city = null;
              $scope.address.state = null;
            }
    };
  }]);
