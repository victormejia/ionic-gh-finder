angular.module('app')

.controller('SearchController', function ($scope, $state, GitHubService, $cordovaGeolocation) {

	$scope.search = function (username) {
		GitHubService.getBio(username)
			.then(function (data) {
				GitHubService.currentUser = data;
				$state.go('dashboard');
			});
	}

});