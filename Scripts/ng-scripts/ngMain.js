var app = angular.module("superhero", []);

app.controller('myController', function ($scope) {
    // also can be empty
})

//app.directive("superman1", function () {
//    return {
//        restrict: "A",
//        priority: 1,
//        template: "<div>Here I am to save the day</div>"
//    }
//});

app.directive("superman1", function () {
    return {
        restrict: "A",
        priority: 1,
        link: function (scope, element, attributes) {
            // in above live if we have to append some text to element then scope and element are mendatory parameter and attributes parameter is optional
            element.html("Hello world! My name is Mr.Cena");
            console.log("superman1");
        }
    }
});


app.directive("superman2", function () {
    return {
        restrict: "A",
        priority: 2,
        link: function (scope, element, attributes) {
            // in above live if we have to append some text to element then scope and element are mendatory parameter and attributes parameter is optional
            element.html("Hello world! My name is Mr.Cena");
            console.log("superman2");
        }
    }
});


app.directive("superman3", function () {
    return {
        restrict: "A",
        priority: 7,
        link: function (scope, element, attributes) {
            // in above live if we have to append some text to element then scope and element are mendatory parameter and attributes parameter is optional
            element.html("Hi everyone");
            console.log("superman3");
        }
    }
});


app.directive("superman4", function () {
    return {
        restrict: "M",
        priority: 4,
        link: function (scope, element, attributes) {
            // in above live if we have to append some text to element then scope and element are mendatory parameter and attributes parameter is optional
            console.log("superman4");
            scope.xyz = "Wahid Shaikh";
            console.log(scope.xyz);
            alert("Hi");
        }
    }
});