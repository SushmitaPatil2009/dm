    
 "use strict";
app.controller("schoolRegController", ['$scope','$http','$location',function ($scope,$http,$location) {
        var signUpUrl = "http://localhost:8008/?#!/signUp";
      
        $scope.signUp = function(){          
            
            var jsonObject = {          
                schoolName: $scope.schoolName,
                schoolCode: $scope.schoolCode,
                addressLine1: $scope.addressLine1,
                addressLine2: $scope.addressLine2,
                town: $scope.town,
                taluk: $scope.taluk,
                district: $scope.district,
                state: $scope.state,
                pinCode: $scope.pinCode,
                schoolType: $scope.schoolType
            };

            $http({
                method : 'POST',
                url : signUpUrl,
                headers :{ 'Content-Type':'application/json'},
                data : angular.toJson(jsonObject)
            }).then(function(response){
                $scope.message = response.data;
                console.log('$scope.message',$scope.message);
                if  ($scope.message.code == 200){
                    $location.path("/login");
                }
            },
            function(response){
             $scope.error = response.error; 
                 $location.path("/schoolReg");
            })
                
             }
        
        $scope.filterValue = function($event){
        if(isNaN(String.fromCharCode($event.keyCode))){
            $event.preventDefault();
        }
};                                        
        }]);
