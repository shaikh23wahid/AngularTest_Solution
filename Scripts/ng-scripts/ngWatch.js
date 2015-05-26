function isLongEnough(pwd) {
    return pwd.length > 4;
}

function hasNumbers(pwd) {
    return /[0-9]/.test(pwd);
}


var app = angular.module('app', []);

app.controller('WatchCtrl', function ($scope) {
    $scope.quantity = 1;
    $scope.rate = 10;
    $scope.TotalAmount = 0.0;

    $scope.$watch('user.password', function (newVal, oldVal) {
        if (!newVal) return;

        $scope.reqs = [];

        if (!isLongEnough(newVal)) {
            $scope.reqs.push('Too short');
        }

        if (!hasNumbers(newVal)) {
            $scope.reqs.push('Must include numbers');
        }

        $scope.showReqs = $scope.reqs.length;
    });
});