    
 "use strict";
app.controller("schoolRegController", ['$scope','$http','$location',function ($scope,$http,$location) {
        var signUpUrl = "http://localhost:8080/SM/api/v1/school/signUp";
       
        $scope.signUp = function(){
            console.log("Hi");
            
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
            })
                
             }
       /* $scope.checkvalidation = function () {
if ($scope.sta == true && $scope.stp == true && $scope.sth==true && $scope.stc==true)
$scope.validationmsg = false;
else if ($scope.sta == false && $scope.stp == true && $scope.sth==true && $scope.stc==true)
$scope.validationmsg = false;
else if ($scope.sta == true && ($scope.stp == true || $scope.sth==true || $scope.stc==true))
$scope.validationmsg = false;
    else
        $scope.validationmsg = true;
            
            return $scope.validationmsg;
}
*/
                                       
        }]);
