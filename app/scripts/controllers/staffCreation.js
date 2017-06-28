/**
 * Created by Padmavati on 5/20/2017.
 */
app.controller('staffCreationController',['$scope','$http','$location',function ($scope,$http,$location) {
    $scope.print = "CREATE STAFF ENTRY";
    var staffPersonalUrl = "http://localhost:8080/SM/api/v1/staff/personal";
    var staffProfessionalUrl = "http://localhost:8080/SM/api/v1/staff/professional";
    var staffBankUrl = "http://localhost:8080/SM/api/v1/staff/bank";
    var staffAddressUrl = "http://localhost:8080/SM/api/v1/staff/address";
    
    //personal information
    $scope.staffPersonalInfo = function(){
    var jsonObject = {
        employeeName: $scope.employeeName,
        middleName: $scope.middleName,
        lastName: $scope.lastName,
        fatherName: $scope.fatherName, 
        motherName: $scope.motherName,
        motherTongue: $scope.motherTongue,
        dob: $scope.dob,
        gender: $scope.gender,
        panNumber: $scope.panNumber,
        adharId: $scope.adharId,
        voterId: $scope.voterId,
        bloodGroup: $scope.bloodGroup,
        height: $scope.height,
        caste: $scope.caste,
        subCaste: $scope.subCaste,
        identificationMark: $scope.identificationMark,
        isPhysicallyDiasbled: $scope.isPhysicallyDiasbled
    };

    $http({
        method : 'POST',
        url : staffCreationUrl,
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
    
    //professional information
    
    $scope.staffProfessionalInfo = function(){
    var jsonObject = {
        staffId: $scope.staffId,
        designation: $scope.designation,
        dateOfJoining: $scope.dateOfJoining,
        dateOfRetirement: $scope.dateOfRetirement, 
        subjectName: $scope.subjectName,
        employeementGroupId: $scope.employeementGroupId,
        gradePay: $scope.gradePay,
        payScale: $scope.payScale,
        dateOfNextIncrement: $scope.dateOfNextIncrement,
        amtOfIncrement: $scope.amtOfIncrement,
        serviceTypeId: $scope.serviceTypeId,
        employeementTypeId: $scope.employeementTypeId,
        appointmentDate: $scope.appointmentDate
    };

    $http({
        method : 'POST',
        url : staffProfessionalUrl,
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
    
    //bank information
    
    $scope.staffBankInfo = function(){
    var jsonObject = {
        staffId: $scope.staffId,
        bankName: $scope.bankName,
        branchName: $scope.branchName,
        branchCode: $scope.branchCode, 
        micrNum: $scope.micrNum,
        ifsfCode: $scope.ifsfCode,
        accountNumber: $scope.accountNumber
    };

    $http({
        method : 'POST',
        url : staffBankUrl,
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
     //Address information
    
    $scope.staffAddressInfo = function(){
    var jsonObject = {
        staffId: $scope.staffId,
        houseNumber: $scope.houseNumber,
        town: $scope.town,
        district: $scope.district, 
        state: $scope.state,
        postOffice: $scope.postOffice,
        pinCode: $scope.pinCode,
        emailId: $scope.emailId,
        addressTypeId: $scope.addressTypeId, 
        housingSchemeName: $scope.housingSchemeName,
        mobileNumber: $scope.mobileNumber,
        landLine: $scope.landLine
    };

    $http({
        method : 'POST',
        url : staffAddressUrl,
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
}])
