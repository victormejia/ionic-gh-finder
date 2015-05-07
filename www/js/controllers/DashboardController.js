angular.module('app')

.controller('DashboardController', function ($scope, $state, GitHubService) {
	$scope.user = GitHubService.currentUser;

	$scope.viewProfile = function () {
		$state.go('profile');
	}
})