var app = angular.module("phoneApp", [])

var controllers = {};
controllers.AppCtrl = function ($scope) {

    this.sayHi = function () {
        alert("Hi everyone");
    }

    return $scope.AppCtrl = this;
}

var directives = {};
directives.panel = function () {
    return {
        restrict: "E"
    }
}

app.controller(controllers);
app.directive(directives);


