    
 "use strict";
app.controller("schoolRegController", ['$scope','$http',function ($scope,$http) {
            $scope.message = "Hey done with integration with angular.";
        var signupUrl = "http://localhost:8008/?#!/schoolreg";
       
        $scope.signUp = function(){
            
            if($scope.checkvalidation==true)
                {
            var jsonObject = {
                             
                schoolName: "schoolName",
                schoolCode: "schoolCode",
                addressLine1: "addressLine1",
                addressLine2: "addressLine2",
                town: "town",
                taluk: "taluk",
                district: "district",
                state: "state",
                pinCode: "pinCode",
                schoolType: 1
            };

            $http({
                method : 'POST',
                url : signupUrl,
                headers :{ 'Content-Type':'application/json'},
                data : angular.toJson(jsonObject)
            }).then(function(response){
                $scope.message = response.message;
            },
            function(response){
             $scope.error = response.error;   
            })
                }
             }
        $scope.checkvalidation = function () {
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

                                       
        }]);
