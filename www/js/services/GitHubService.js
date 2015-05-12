angular.module('app')

.factory('GitHubService', function($window, $http, $ImageCacheFactory, $firebaseArray) {
  var apiUrl = 'https://api.github.com/users/';
  
  return {
    setUser: function (user) {
      $window.localStorage['user'] = JSON.stringify(user);
    },
    getCurrentUser: function () {
      var user = $window.localStorage['user'];
      return user ? JSON.parse(user) : {};
    },
    getProfile: function (username) {
      var username = username.toLowerCase().trim();
      var url = apiUrl + username;
      return $http.get(url).then(function (resp) {
        var user =  resp.data;
        if (user.avatar_url) {
          // don't return until we prefetch the user image, for a more smooth experience
          return $ImageCacheFactory.Cache([user.avatar_url])
            .then(function () {
              return user;
            });
        }
        else {
          return user;
        }
      });
    },
    getRepos: function (username) {
      username = username.toLowerCase().trim();
      var url = apiUrl + username + '/repos';
      return $http.get(url).then(function (resp) {
        return resp.data;
      });
    },
    getNotes: function (username) {
      var url = 'https://<your-firebase>.firebaseio.com/';
      var notesRef = new Firebase(url).child(username);
      return $firebaseArray(notesRef);
    }
  }
})
