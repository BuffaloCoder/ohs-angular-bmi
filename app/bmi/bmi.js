'use strict';

angular.module('myApp.bmi', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bmi', {
    templateUrl: 'bmi/bmi.html',
    controller: 'BmiCtrl'
  });
}])

.controller('BmiCtrl', [function() {

}]);