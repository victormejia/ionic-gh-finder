angular.module('app')

.controller('NotesController', function ($scope, GitHubService, $timeout, $ionicScrollDelegate) {
  $scope.user = GitHubService.getCurrentUser();
  $scope.notes = GitHubService.getNotes($scope.user.login);

  $scope.addNote = function () {
    $scope.notes.$add({
      'note': $scope.note
    });
    $scope.note = '';
  }

  $scope.delete = function (item) {
    $scope.notes.$remove(item);
  }

  $scope.inputUp = function() {
    $timeout(function() {
      $ionicScrollDelegate.scrollBottom(true);
    }, 100);

  };

  $scope.inputDown = function() {
    $ionicScrollDelegate.resize();
  };
})