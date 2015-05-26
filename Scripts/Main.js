

var products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];

var MyApp = angular.module("myApp", []);
var app = angular.module("superhero", []);

//myApp.factory('Data', function () {
//    // return { message: "I'm data from service." }
//    return { Products: products }
//})

//MyApp.controller("FirstCtrl", function ($scope) {
//    alert(products);
//    $scope.Products = products;
//});

app.directive('superman', function () {
//    alert("Hi");
    return {
        restrict: "E",
        template: "<div>Here i am to save a day</div>"
    }
})

MyApp.directive('FirstCtrl', function () {
    alert("Hello");
})

app.controller("ThirdCtrl",
                function ($scope) {
                    $scope.names = [
                        { username: "Nitin" },
                        { username: "Mukesh" }
                    ];
                }
            );



MyApp.filter('search', function () {
    return function (text) {
        var listProd = _.filter(products, function (str) { return atr == text; });
        return listProd;
    }
})

//function FirstCtrl($scope, Data) {
//    $scope.data = Data;
//}

//function SecondCtrl($scope, Data) {
//    $scope.data = Data;

//    $scope.reversedMessage = function (message) {
//        return message.split("").reverse().join("");
//    }
//}
// 