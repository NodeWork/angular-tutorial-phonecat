'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services']).
   controller('MyCtrl1', [function() {

   }])
   .controller('MyCtrl2', [function() {

   }])
   .controller('PhoneCtrl', ['$scope', 'PhoneService', '$http', function ($scope, PhoneService, $http) {
      //$http.get('data/phones.json')
      //   .success(function (data) {
      //      $scope.phones = data;
      //   });
      $scope.phones = PhoneService.query();
      $scope.orderProp = "age";
   }])
   .controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'PhoneService', '$http', function ($scope, $routeParams, PhoneService, $http) {
      $scope.phoneId = $routeParams.phoneId;
      $scope.phone = PhoneService.get({phoneId: $scope.phoneId}, function (data) {
         $scope.mainImageUrl = data.images[0];
      });

      //$http.get('data/' + $scope.phoneId + '.json')
      //   .success(function (data) {
      //      $scope.phone = data;
      //      $scope.mainImageUrl = data.images[0];
      //   });

      $scope.setImage = function (url) {
         console.log(">>> Setting image: ", url);
         $scope.mainImageUrl = url;
      };

   }])
;
