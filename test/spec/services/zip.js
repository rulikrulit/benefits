'use strict';

describe('Service: zip', function () {

  // load the service's module
  beforeEach(module('benefitsApp'));

  // instantiate service
  var zip;
  beforeEach(inject(function (_zip_) {
    zip = _zip_;
  }));

  it('should do something', function () {
    expect(!!zip).toBe(true);
  });

});
