myModule.controller('myController', function ($scope, userRepository, userService) {
    // $scope.users = userRepository.getAllUsers();

    userRepository.getAllUsers().success(function (users) {
        $scope.users = users;
    });

    userService.getAllUsers1().success(function (users1) {
        $scope.users1 = users1;
    });

    $scope.changeFirstUsersFirstName = function () {
        $scope.users[0].firstName = 'Wahid';
    };
});