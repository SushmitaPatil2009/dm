    
 "use strict";
app.controller("loginController", ['$scope','$http',function ($scope,$http) {
            $scope.message = "Hey done with integration with angular.";
        var loginUrl = "http://localhost:8080/SM/api/v1/login";
       
        $scope.login = function(){
            var jsonObject = {
                userId: "sushmita",
                passWord: "patil",
                roleId: 1
            };

            $http({
                method : 'POST',
                url : loginUrl,
                headers :{ 'Content-Type':'application/json'},
                data : angular.toJson(jsonObject)
            }).then(function(response){
                $scope.message = response.message;
            },
            function(response){
             $scope.error = response.error;   
            })
                
             }
        }]);
