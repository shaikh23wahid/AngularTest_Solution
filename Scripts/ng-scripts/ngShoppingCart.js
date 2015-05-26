var app = angular.module('shoppingcart', []);

app.controller('MainCtrl', function ($scope) {
    $scope.quantity = 1;
    $scope.rate = 10;
    $scope.TotalAmount = 0.0;

    $scope.$watchCollection('[quantity, rate, discount]', function (newValues) {
        var discountamt = 0;
        if (newValues[2]) {
            discountamt = parseInt(newValues[2]);
        };

        $scope.TotalAmount = (newValues[0] * newValues[1]) - discountamt;
    });
});
 