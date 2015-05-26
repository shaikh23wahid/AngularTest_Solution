var app = angular.module("twitterApp", []);

app.controller("appCtrl", function ($scope) {
    $scope.loadMoreTweets = function () {
        console.log("loading tweets");
    }

    $scope.deletTweets = function () {
        console.log("deleting tweets");
    }
});

app.directive("enter", function () {
    return function (scope, element, attribute) {
        element.bind("mouseenter", function () {
            //            scope.loadMoreTweets();
            //            scope.$apply("loadMoreTweets()");
            scope.$apply(attribute.enter);
        });
    }
})
