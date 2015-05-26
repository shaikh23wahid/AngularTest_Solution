var app = angular.module('superhero', []);

app.directive('superman', function () {
    return {
        restrict: "A",
        link: function () {
            alert("I'm working stronger");
        }
    }
});

app.directive('flash', function () {
    return {
        restrict: "A",
        link: function () {
            alert("I'm working faster");
        }
    }
});


app.directive('enter', function () {
    return function ($scope, element) {
        element.bind("mouseenter", function () {
            alert("I'm inside you");
        });
    }
});

app.directive('leave', function () {
    return function ($scope, element) {
        element.bind("mouseleave", function () {
            alert("I'm leaving on the jet plane");
        });
    }
}); 