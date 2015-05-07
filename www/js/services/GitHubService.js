angular.module('app')

.factory('GitHubService', function($http) {
	return {
		getBio: function (username) {
			var username = username.toLowerCase().trim();
			var url = 'https://api.github.com/users/' + username;
			return $http.get(url).then(
				function (resp) {
					return resp.data;
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