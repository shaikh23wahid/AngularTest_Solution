var app = angular.module("app", [])

app.config(function ($routeProvider) {
    $routeProvider.when("/pizza:id",
        {
            templateUrl: "app.htm",
            controller: "AppCtrl"
        })

});


app.controller("AppCtrl", function ($scope) {
    $scope.model = {
        message: "This is my app!!!"
    }

});