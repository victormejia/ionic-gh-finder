angular.module('app')

.controller('ReposController', function ($scope, GitHubService) {
  $scope.user = GitHubService.getCurrentUser();

  GitHubService.getRepos($scope.user.login)
    .then(function (data) {
      $scope.repos = data;
    });

  $scope.openRepo = function (url) {
    var url = 'http://github.com/' + url;
    window.open(url, '_system');
  }
})