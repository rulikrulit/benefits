'use strict';

/**
 * @ngdoc service
 * @name benefitsApp.zip
 * @description
 * # zip
 * Service in the benefitsApp.
 */
angular.module('benefitsApp')
  .service('zip', ['$soap', '$http', function ($soap, $http) {

    var wsdlUrl = '/zips/uszip.asmx';

    return {
      locationByZip: function(zip) {
        return $soap.post(wsdlUrl,"GetInfoByZIP", zip);
      }
    };
  }]);
