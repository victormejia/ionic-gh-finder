angular.module('app')

.controller('SearchController', function ($scope, $state, GitHubService) {
  $scope.search = function (username) {
    GitHubService.getProfile(username)
      .then(function (data) {
        GitHubService.setUser(data);
        $state.go('dashboard');
      });
  }

});