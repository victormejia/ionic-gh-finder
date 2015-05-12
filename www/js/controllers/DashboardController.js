angular.module('app')

.controller('DashboardController', function ($scope, $state, GitHubService) {
  $scope.user = GitHubService.getCurrentUser();

  $scope.viewProfile = function () {
    $state.go('profile');
  }

  $scope.viewRepos = function () {
    $state.go('repos');
  }

  $scope.viewNotes = function () {
    $state.go('notes');
  }
})