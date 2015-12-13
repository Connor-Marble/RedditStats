var app = angular.module('redditStats', ['ngRoute'])


app.controller('StartController', function ($scope) {
    $scope.userName = "Example";
});

app.controller('AboutController', function ($scope) {

});


app.config(function($routeProvider) {
    $routeProvider

	.when('/', {
	    templateUrl : './templates/start.html',
	    controller : 'StartController'
	})
    
	.when('/about', {
	    templateUrl : './templates/about.html',
	    controller : 'StartController'
	});
});
