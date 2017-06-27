 "use strict";
app.controller("licenseController", ['$scope','$http','$location',function ($scope,$http,$location) {
    
   $scope.productId=0;
     
    $scope.licenseCheck=function(){
        if($scope.serialKey=='' || $scope.serialKey==null)
            {
                alert("Serial Key must be given");
            }
        else{
        var productNo=((($scope.productId+9)-5)/99);
        var serialNo=$scope.serialKey;
        if(productNo==serialNo){  
                      alert("Success");
            $location.path("/dashBoard");
                }
            else
            {                
             alert("Invalid Serial Key");
                $scope.serialKey='';
            }    }
    }
    
     var x = new Date();
    $scope.productId=(((Number(x)*99)+5)-9); 
   

}]);