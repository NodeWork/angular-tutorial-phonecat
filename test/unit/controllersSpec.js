'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
   beforeEach(module('myApp.controllers'));

   describe('PhoneCtrl', function () {
      var scope, ctrl;

      beforeEach(inject(function ($rootScope, $controller) {
         scope = {};
         ctrl = new PhoneCtrl(scope);
      }));

      it('should phones list has 3 items', inject(function() {
         expect(scope.phones.length).toBe(3);
      }));

   });

});
