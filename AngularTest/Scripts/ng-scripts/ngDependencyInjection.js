var myModule = angular.module("myModule", []);

myModule.value("numberValue", 999);

myModule.service('myService', function ($http) {
    this.getAllUsers = function () {
        var url = "https://api.mongolab.com/api/1/databases/angularjs-intro/collections/users?apiKey=terrPcifZzn01_ImGsFOIZ96SwvSXgN9";
        return $http.get(url);
    };
});

myModule.controller("DIController", function ($scope, myService, numberValue) {

    $scope.number = numberValue;
    $scope.msg = 'avf';
 
    myService.getAllUsers().success(function (data) {
        $scope.userdata = data;
    });

    $scope.changeValue = function (changeVal) {
        $scope.msg = 'clicked';
        $scope.number = $scope.number + changeVal;
    }

});