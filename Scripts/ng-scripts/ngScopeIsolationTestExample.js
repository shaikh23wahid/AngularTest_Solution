var app = angular.module("docIsolatesScopeDirective", [])

app.controller("myTestController", function ($scope) {
    $scope.naomi = { name: "Wahid Shaikh", address: "Patelwadi,I.N.S. Hamala, Malad West, Mumbai-4000095" };
    $scope.igor = { name: "Rizwan Parkar", address: "Mohammad ali road, Dongari, Mumbai-4000001" };

})

app.directive("myCustomer", function () {
    return {
        restrict: "E",
        scope:
        {
            customerInfo: "=info"
        },
        template: "my-customer-iso.htm"
    }
})