'use strict';

describe('Directive: boostrapValidator', function () {

  // load the directive's module
  beforeEach(module('productFrontendApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<boostrap-validator></boostrap-validator>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the boostrapValidator directive');
  }));
});
