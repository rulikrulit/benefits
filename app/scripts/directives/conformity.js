'use strict';

/**
 * @ngdoc directive
 * @name benefitsApp.directive:conformity
 * @description
 * # conformity
 */
angular.module('benefitsApp')
  .directive('conformity', function () {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=conformity"
        },
        link: function(scope, element, attributes, ngModel) {
             
            ngModel.$validators.conformity = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };
 
            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
  });
