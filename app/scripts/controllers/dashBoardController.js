/**
 * Created by Padmavati on 5/20/2017.
 */
app.controller('dashBoardController',['$scope','$http','$location',function ($scope,$http,$location) {
    $scope.print = "WelCome to Nest"; 
    alert("DASH  BOARD")
     $scope.createStaff = function () {
        $location.path("/staffCreation");
    }
}])
