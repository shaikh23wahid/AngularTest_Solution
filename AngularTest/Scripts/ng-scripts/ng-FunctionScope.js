var app = angular.module("phoneApp", []);


app.service('s1', function () {
    this.value = 22;
});


app.controller("AppCtrl", function ($scope, $inject) {
    $scope.callHome = function (message) {
        alert(message);
    };

    $scope.doSomething = function () {
        var s1 = $injector.get('s1');
        s1.value += 10;
    }

    $scope.value = function () {
        var s1 = $injector.get('s1');
        return s1.value;
    }
});

app.directive("phone", function () {
    return {
        scope: {
            dial: "&"
        },
        template: '<input type="text" ng-model="value">' +
          '<div class="button" ng-click="dial({message:value})">Call home!</div>'
    };
});
