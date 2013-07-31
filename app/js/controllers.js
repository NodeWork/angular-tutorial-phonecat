'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
   controller('MyCtrl1', [function() {

   }])
   .controller('MyCtrl2', [function() {

   }]);

var PhoneCtrl = ['$scope', '$http', function ($scope, $http) {
   $http.get('data/phones.json')
      .success(function (data) {
         $scope.phones = data;
      });

   $scope.orderProp = "age";
}];
