'use strict';

/**
 * @ngdoc directive
 * @name benefitsApp.directive:zipcode
 * @description
 * # zipcode
 */
angular.module('benefitsApp')
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
