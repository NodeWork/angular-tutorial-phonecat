'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
   beforeEach(module('myApp.controllers'));
   beforeEach(module('myApp.services'));

   describe('PhoneCtrl', function () {
      var scope, ctrl, $httpBackend;

      beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
         $httpBackend = _$httpBackend_;
         $httpBackend.expectGET('data/phones.json').
            respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

         scope = $rootScope.$new();
         ctrl = $controller('PhoneCtrl', {$scope: scope});
      }));

      it('should phones list has 2 items', function() {
         expect(scope.phones).toBeUndefined();
         $httpBackend.flush();
         expect(scope.phones.length).toBe(2);
      });

      it('should set the default value of orderProp model', function() {
         expect(scope.orderProp).toBe('age');
      });

   });

   describe('PhoneDetailCtrl', function(){
      var scope, $httpBackend, ctrl;
      
      beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
         $httpBackend = _$httpBackend_;
         $httpBackend.expectGET('data/xyz.json').respond({name:'phone xyz'});
         
         $routeParams.phoneId = 'xyz';
         scope = $rootScope.$new();
         ctrl = $controller('PhoneDetailCtrl', {$scope: scope});
      }));
      
      
      it('should fetch phone detail', function() {
         expect(scope.phone).toBeUndefined();
         $httpBackend.flush();
         
         expect(scope.phone).toEqual({name:'phone xyz'});
      });
   });

});
