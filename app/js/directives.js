'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    //return function(scope, elm, attrs) {
    //  elm.text(version);
    //};

     return {
        restrict: 'E',
        replace: true,
        template: "<p>Angular seed app: <span>" + version + "</span></p>"
     };
  }]);
