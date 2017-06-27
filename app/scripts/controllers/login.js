    
 "use strict";
app.controller("loginController", ['$scope','$http','$location',function ($scope,$http,$location) {
            $scope.message = "Hey done with integration with angular.";
        var loginUrl = "http://localhost:8080/SM/api/v1/login";

   
    
   if($scope.userId!='' && $scope.passWord!=''){
        $scope.login = function(){
            var jsonObject = {
                userId: $scope.userId,
                passWord: $scope.passWord,
                roleId: $scope.roleId.id
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
             
             alert($scope.error ,".Please enter correct input");
            })
        }
   }
           
    $scope.roleItemlist = [{name:'ADMINISTRATOR',id:1},{name:'STAFF',id:2},{name:'STUDENT',id:3} ];
                                                                                        
        $scope.roleId = $scope.roleItemlist[0];
    
    
                                                                                        
                                                                                        
        $scope.signUp=function(){
             $location.path("/schoolReg");
        }
        }]);
