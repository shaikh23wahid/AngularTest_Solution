// module as a container
var app = angular.module("app", []);

var fun = function () {
    this.name = "SomeName";
    this.$get = function () {
        this.name = "New Name";
        return " Default fun.$get().this.name = " + this.name;
    }

    return " fun.$get().this.name = " + this.name;
}

// returns the actual function
app.service('serviceExample', fun);

// returns the output of the function's $get function
app.provider('providerExample', fun);

// returns the function's return value
app.factory('factoryExample', fun);

app.controller('ModuleController', function ($scope, serviceExample, factoryExample, providerExample) {
    $scope.service = "The Service is Actual Function value = " + serviceExample;
    $scope.factory = "The Factory is function return value = " + factoryExample;
    $scope.provider = "The Provider is provider $getFunction = " + providerExample; 
});