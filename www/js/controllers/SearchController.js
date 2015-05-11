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

  $scope.viewRepos = function () {
    $state.go('repos');
  }
})

.controller('ProfileController', function ($scope, GitHubService) {
  $scope.user = GitHubService.currentUser;
})

.controller('ReposController', function ($scope, GitHubService) {
  $scope.user = GitHubService.currentUser;

  GitHubService.getRepos($scope.user.login)
    .then(function (data) {
      $scope.repos = data;
    });

  $scope.openRepo = function (url) {
    var url = 'http://github.com/' + url;
    window.open(url, '_blank', 'location=no');
  }
})
