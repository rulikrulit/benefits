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
    $scope.addressFound = false;
    $scope.checkZip = function() {
      if ($scope.address && $scope.address.zip && $scope.address.zip.match(/^\d{5}$/)) {
        $scope.form_address.address_zip.$setValidity('existingZip', undefined);
        wsdl('zip', 'GetInfoByZIP', {data: {USZip: $scope.address.zip}})
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

    wsdl('app', 'GetPolicyOwnerAddressInfo').then(function(response){
      if (response.data && response.data.GetPolicyOwnerAddressInfoResult && response.data.GetPolicyOwnerAddressInfoResult.Address) {
        $scope.addressData = response.data.GetPolicyOwnerAddressInfoResult.Address[0];
        $scope.addressFound = true;
        $scope.address.address = $scope.addressData.Address1;
        $scope.address.zip = $scope.addressData.AddressZip;
        $scope.checkZip();
      }
    });

    // wsdl('app', 'Echo', {data: {echo: 'hi'}});
    // wsdl('app', 'GetOwnerPolicies');
    // wsdl('app', 'HelloService');
    // wsdl('app', 'GetPolicy');
    // wsdl('app', 'GetPolicyOwnerAddressInfo');
    // wsdl('app', 'GetPolicyOwnerContactInfo');
    // wsdl('app', 'GetPolicyOwnerPersonalInfo');
    // wsdl('app', 'GetPolicyPaymentsLastYear');
    // wsdl('app', 'IsUserAuthenticated');
    // wsdl('app', 'RegisterNewUser');
    // wsdl('app', 'RequestResetPassword');
  }]);
