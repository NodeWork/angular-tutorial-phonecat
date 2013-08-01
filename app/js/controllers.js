'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
   controller('MyCtrl1', [function() {

   }])
   .controller('MyCtrl2', [function() {

   }])
   .controller('PhoneCtrl', ['$scope', '$http', function ($scope, $http) {
      $http.get('data/phones.json')
         .success(function (data) {
            $scope.phones = data;
         });

      $scope.orderProp = "age";
   }])
   .controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
      $scope.phoneId = $routeParams.phoneId;
      $http.get('data/' + $scope.phoneId + '.json')
         .success(function (data) {
            console.log("data>", data);
            $scope.phone = data;
         });
   }])
;
