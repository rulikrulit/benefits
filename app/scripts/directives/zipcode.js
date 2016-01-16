'use strict';

/**
 * @ngdoc directive
 * @name PoliciesApp.directive:zipcode
 * @description
 * # zipcode
 */
angular.module('PoliciesApp')
  .directive('zipcode', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            var ZIPCODE_REGEXP = /^(\d{5})?$/;
            ctrl.$validators.zipcode = function (modelValue, viewValue) {
                return ZIPCODE_REGEXP.test(viewValue);
            };
        }
    };
});
