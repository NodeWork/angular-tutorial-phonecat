'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function() {

   beforeEach(function(){
      this.addMatchers({
         toEqualData: function(expected) {
            return angular.equals(this.actual, expected);
         }
      });
   });

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
         expect(scope.phones).toEqual([]);
         $httpBackend.flush();
         expect(scope.phones.length).toBe(2);
      });

      it('should set the default value of orderProp model', function() {
         expect(scope.orderProp).toBe('age');
      });

   });

   describe('PhoneDetailCtrl', function(){
      var scope, $httpBackend, ctrl, data;
      
      beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
         data = {name:'phone xyz', images: ['image1.png', 'image2.png']};

         $httpBackend = _$httpBackend_;
         $httpBackend.expectGET('data/xyz.json').respond(data);
         
         $routeParams.phoneId = 'xyz';
         scope = $rootScope.$new();
         ctrl = $controller('PhoneDetailCtrl', {$scope: scope});
      }));
      
      
      it('should fetch phone detail', function() {
         expect(scope.phone).toEqualData({});
         $httpBackend.flush();
         
         expect(scope.phone).toEqualData(data);
      });
   });

});
