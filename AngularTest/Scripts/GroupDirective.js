var app = angular.module("phoneApp", [])

var phoneAppStuff = {}
phoneAppStuff.controllers = {}

phoneAppStuff.controllers.AppCtrl = function ($scope) {
    this.sayHi = function () {
        alert("Hi");
    }

    return $scope.AppCtrl = this;
};

phoneAppStuff.directives = {}
phoneAppStuff.directives.panel = function ($scope) {
    return {
        restrict: "E"
    }
};

app.filter();
app.directive(phoneAppStuff.directives)
app.controller(phoneAppStuff.controllers);