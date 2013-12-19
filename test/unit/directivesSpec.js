'use strict';

/* jasmine specs for directives go here */

describe('directives', function() {

    var versionPrefix = "Angular seed app: ";

  beforeEach(module('myApp.directives'));

  describe('app-version', function() {
    it('should print current version', function() {
      module(function($provide) {
        $provide.value('version', 'TEST_VER');
      });
      inject(function($compile, $rootScope) {
        var element = $compile('<app-version/>')($rootScope);
        expect(element.text()).toEqual(versionPrefix + 'TEST_VER');
      });
    });
  });
});
