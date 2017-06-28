'use strict';

// Declare app level module which depends on views, and components
var  app = angular.module('nammaGudu', ['ngRoute']);
app.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when("/login",{
      templateUrl : "views/login.html",
        controller :"loginController"
    })
    $routeProvider.when("/dashBoard",{
        templateUrl : "views/dashBoard.html",
        controller :"dashBoardController"
    })
$routeProvider.when("/schoolReg",{
        templateUrl : "views/schoolReg.html",
        controller :"schoolRegController"
    })
    $routeProvider.when("/license",{
        templateUrl : "views/license.html",
        controller :"licenseController"
    })
     $routeProvider.when("/staffCreation",{
        templateUrl : "views/staffEntry.html",
        //controller :"staffCreationController"
    })
}]);

