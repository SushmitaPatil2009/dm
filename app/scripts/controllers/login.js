
"use strict";
app.controller("loginController", ['$scope','$http','$location',function ($scope,$http,$location) {
    $scope.message = "Hey done with integration with angular.";
var loginUrl = "http://localhost:8080/SM/api/v1/login";
var checkSchoolStatusUrl = "http://localhost:8080/SM/api/v1/school/getSchoolDetail"

if($scope.userId!='' && $scope.passWord!=''){
$scope.login = function(){
    var jsonObject = {
        userId: $scope.userId,
        passWord: $scope.passWord,
        roleId: $scope.roleId
    };

    $http({
        method : 'POST',
        url : loginUrl,
        headers :{ 'Content-Type':'application/json'},
        data : angular.toJson(jsonObject)
    }).then(function(response){
        $scope.message = response.data;
        console.log("message ",$scope.message);
        if  ($scope.message.code == 200){
              $location.path("/dashBoard");
        }
    },
    function(response){               
     $scope.error = response.data.message;   
     console.log("response.error ",$scope.error);
     alert($scope.error ,".Please enter correct input");
    })
}
}


$scope.signUp=function(){
     $location.path("/schoolReg");
}

$scope.checkSchoolStatus=function(){
        $http({
            method : 'GET',
            url : checkSchoolStatusUrl}).
           then(function(response){
            $scope.message = response.data;
            if  ($scope.message.code === 200){
                console.log("sushmita");
                $scope.disabled =  true;
                console.log("Sush",$scope.disabled);
            }
        },
        function(response){               
         $scope.error = response.data.message;   
         console.log("response.error ",$scope.error);
         alert($scope.error ,".Please enter correct input");
        })


}


              






}]);
