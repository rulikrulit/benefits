'use strict';

/**
 * @ngdoc service
 * @name PoliciesApp.wsdl
 * @description
 * # wsdl
 * Service in the PoliciesApp.
 */
angular.module('PoliciesApp')

  .service('wsdl', ['$http', '$q', '$rootScope', function($http, $q, $rootScope){

    //var request = 'http://localhost:9001/zip/GetInfoByZIP?USZip=53405';
    // var zipWsdlDomain = 'http://localhost:9001/zip/',
    //   appDomain = 'http://localhost:9001/app/';
      // urlList = {
      //   GetInfoByZIP: {
      //     url: zipWsdlDomain + 'GetInfoByZIP',
      //     method: 'GET'
      //   },
      //   Echo: {
      //     url: appDomain + 'Echo',
      //     method: 'GET'
      //   },
      //   HelloService: {
      //     url: appDomain + 'HelloService',
      //     method: 'GET'
      //   }

      // };

      var sourceDomains = {
        app: 'http://localhost:9001/app/',
        zip: 'http://localhost:9001/zip/'
      };

    return function(source, action, requestData) {
      var request = {},
        deferred = $q.defer();
      angular.copy({
        url: sourceDomains[source] + action,
        method: 'GET'
      }, request);
      if (!request) {
        console.error('wsdl service: ' + action + ' is not set yet');
        deferred.reject();
        return deferred.promise;
      }

      requestData = requestData || {};
      requestData.data = requestData.data || {};

      if (request.method === "GET") {
        request.url += '?data=' + JSON.stringify(requestData.data);
      } else {
        request.data = requestData.data;
        request.headers = {'Content-Type': 'application/x-www-form-urlencoded'};
        request.transformRequest = function(obj) {
            var str = [];
            for(var p in obj) {
              str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
            return str.join("&");
        };
      }

      $http(request)
        .then(function(resp) {
          console.log('wsdl service: ', action, resp);
          deferred.resolve(resp);

        }, function(resp) {
          console.log('wsdl service: error', resp);
          deferred.reject(resp);
        });
      return deferred.promise;

    };

    function serialize(obj) {
      var keys = Object.keys(obj),
        string = "";

      for (var i = 0, l = keys.length; i < l; i++) {
        if (i !== 0) {
          string += "&";
        } else {
          string += "?";
        }
        string += keys[i] + "=" + obj[keys[i]];
      }

      return string;
    }
  }]);
