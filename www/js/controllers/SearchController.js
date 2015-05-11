angular.module('app')

.controller('SearchController', function ($scope, $state, GitHubService, $cordovaGeolocation) {
	$scope.search = function (username) {
		GitHubService.getBio(username)
			.then(function (data) {
				GitHubService.currentUser = data;
				$state.go('dashboard');
			});
	}

})

.controller('DashboardController', function ($scope, $state, GitHubService) {
  $scope.user = GitHubService.currentUser;

  $scope.viewProfile = function () {
    $state.go('profile');
  }
})

.controller('ProfileController', function ($scope, GitHubService) {
  $scope.user = GitHubService.currentUser;
})
