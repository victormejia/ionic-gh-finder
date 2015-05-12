angular.module('app')

.controller('NotesController', function ($scope, GitHubService, $timeout, $ionicScrollDelegate, $cordovaSocialSharing, $ionicListDelegate) {
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

  $scope.share = function (item) {
    $cordovaSocialSharing
    .share(item.note) // Share via native share sheet
    .then(function(result) {
      // Success!
      $ionicListDelegate.closeOptionButtons();
    }, function(err) {
      // An error occured. Show a message to the user
      $ionicListDelegate.closeOptionButtons();
    });
  }
})