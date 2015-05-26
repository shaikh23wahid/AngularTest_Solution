var promiseapp = angular.module("app1", []);

promiseapp.controller("controller1", function ($scope, $http, $q) {

    var first = $http.get("http://support-api.pureprofile.com/v1/infinity/ahid/registration/geoip_locations/5481635");
    var second = $http.get("http://support-api.pureprofile.com/v1/infinity/ahid/registration/geoip_locations/5481683");
    var third = $http.get("http://support-api.pureprofile.com/v1/infinity/ahid/registration/geoip_locations/5481640");

    $q.all([first, second, third]).then(function (result) {
        var tmp = [];
        angular.forEach(result, function (response) {
            tmp.push(response.data);
        });

        return tmp;
    }).then(function (tmpResult) {
        $scope.combinedResult = tmpResult.join(", ");
    });
});
