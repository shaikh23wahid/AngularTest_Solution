myModule.factory('userRepository', function ($http) {
    return {
        getAllUsers: function () {
            var url = "https://api.mongolab.com/api/1/databases/angularjs-intro/collections/users?apiKey=terrPcifZzn01_ImGsFOIZ96SwvSXgN9";
            return $http.get(url);
        }
    }
});

myModule.service('userService', function ($http) {
    this.getAllUsers1 = function () {
        var url = "https://api.mongolab.com/api/1/databases/angularjs-intro/collections/users?apiKey=terrPcifZzn01_ImGsFOIZ96SwvSXgN9";
        return $http.get(url);
    };
});