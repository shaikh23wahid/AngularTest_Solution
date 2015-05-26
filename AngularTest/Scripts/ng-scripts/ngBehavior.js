var app = angular.module("behaviorApp", []);

app.directive("enter", function () {
    return function (scope, element) {
        element.bind("mouseenter", function () {
            element.html("I'm inside of you");
            element.addClass("panel");
        });
    }
});

app.directive("leave", function () {
    return function (scope, element) {
        element.bind("mouseleave", function () {
            element.html("I'm out of you");
            element.removeClass("panel");
        });
    }
});