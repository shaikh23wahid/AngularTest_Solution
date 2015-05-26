var app = angular.module("app", ['ngRoute']);


app.config(function ($routeProvider) {
    $routeProvider.when('/route1/:id', {
        templateUrl: "app1.htm",
        controller: "AppCtrl"
    }).when('/route2/:name', {
        templateUrl: "customer.htm",
        controller: "CustCtrl1"
    }).when('/map/:country/:state/:city',
    {
        templateUrl: "customer.htm",
        controller: "CustCtrl2"
    }).otherwise({
        redirectTo: '/route2'
    });
});

app.controller("AppCtrl", function ($scope, $q, $routeParams) {

    $scope.urlParameter = $routeParams.id;
    var defer = $q.defer();

    defer.promise
    .then(function (weapon) {
        alert("I promise you can have my " + weapon);
        return "bow";
    }).then(function (weapon) {
        alert("and " + weapon);
        return "axe";
    }).then(function (weapon) {
        alert("and " + weapon + " too");
    });

    defer.resolve("sword");

    $scope.model = {
        message: "This is my App!!"
    };
})

app.controller("CustCtrl1", function ($scope, $routeParams) {
    $scope.customerModel = {
        name: "Wahid Akhter Shaikh",
        age: 29,
        dob: "10 - 10 - 1985"
    };

    alert($routeParams.name);
})


app.controller("CustCtrl2", function ($scope, $routeParams) {
    $scope.customerModel = "Address: " + $routeParams.country + ", " + $routeParams.state + ", " + $routeParams.city;
})
