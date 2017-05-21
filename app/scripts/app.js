'use strict';

// Declare app level module which depends on views, and components
var  app = angular.module('nest', ['ngRoute']);
app.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when("/",{
      templateUrl : "views/login.html",
        controller :"loginController"
    })
    $routeProvider.when("/dashBoard",{
        templateUrl : "views/dashboard.html",
        controller :"dashBoardController"
    })
}]);

