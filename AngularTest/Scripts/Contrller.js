var myApp = angular.module('myApp', []);


myApp.filter('revers', function () {
    return function (tect) {
        return tect.split("").reverse().join("") + Data.message;
    }
});

myApp.factory('Avengers', function () {
    var Avengers = [
    {
      name: 'Wahid Shaikh', Age: 28
    },
    { name: 'Rizwan Parkar',
        Age: 28
    },
    { name: 'Pramod Bhosale',
        Age: 30
    },
    { name: 'Sameer Shah',
        Age: 28
    },
    { name: 'Yogesh Kondey',
        Age: 35
    },
    { name: 'Kamlesh Chettiyar',
        Age: 30
    },
    { name: 'Abdul Chaudhry',
        Age: 28
    }, ]

    return Avengers;
})

function AvengersCtrl($scope, Avengers) {
    $scope.avengers = Avengers;
}
