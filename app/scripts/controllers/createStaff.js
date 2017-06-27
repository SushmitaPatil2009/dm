/**
 * Created by Padmavati on 5/20/2017.
 */
app.controller('dashBoardController'['$scope','$http','$location',function ($scope,$http,$location) {
    $scope.print = "WelCome to Nest";
    
    $scope.createStaff = function(){
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

}])
