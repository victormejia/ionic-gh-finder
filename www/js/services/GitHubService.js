angular.module('app')

.factory('GitHubService', function($http, $ImageCacheFactory) {
	return {
		getBio: function (username) {
			var username = username.toLowerCase().trim();
			var url = 'https://api.github.com/users/' + username;
			return $http.get(url).then(
				function (resp) {
					var user =  resp.data;
					if (user.avatar_url) {
						// don't return until we prefetch the user image, for a more
						// smooth experience
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
			var url = 'https://api.github.com/users/' + username + '/repos';
			return $http.get(url);
		},
		searchByCity: function (city) {
			var url = 'https://api.github.com/search/users?q=location:\"' + city + '\"';
			return $http.get(url).then(
				function (resp) {
					return resp.data.items;
				});
		}
	}
})