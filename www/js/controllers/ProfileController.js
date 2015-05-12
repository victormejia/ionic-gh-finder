angular.module('app')

.controller('ProfileController', function ($scope, GitHubService) {
  $scope.user = GitHubService.getCurrentUser();
});
