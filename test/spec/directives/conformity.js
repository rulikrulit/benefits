'use strict';

describe('Directive: conformity', function () {

  // load the directive's module
  beforeEach(module('benefitsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<conformity></conformity>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the conformity directive');
  }));
});
