'use strict';

/**
 * @ngdoc directive
 * @name benefitsApp.directive:date
 * @description
 * # date
 */
angular.module('benefitsApp')
  .directive('date', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            var DATE_REGEXP = /^[0-1]\d.[0-3]\d.[1-2][0,9]\d{2}$/;
            ctrl.$validators.date = function (modelValue, viewValue) {
                return DATE_REGEXP.test(viewValue);
            };
        }
    };
  });
