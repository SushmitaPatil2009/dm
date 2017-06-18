    
 "use strict";
app.controller("schoolRegController", ['$scope','$http',function ($scope,$http) {
            $scope.message = "Hey done with integration with angular.";
        var signupUrl = "http://localhost:8008/?#!/schoolreg";
       
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
