angular.module('app')

.controller('SearchController', function ($scope, $state, GitHubService, GeocoderService, $cordovaGeolocation) {

	$scope.searchInfo = {
		searchType: 'username'
	};

	$scope.search = function () {
		var searchText = $scope.searchInfo.searchText;
		if ($scope.searchInfo.searchType === 'username') {
			$scope.searchByUser(searchText);
		}
		else {
			$scope.searchByCity(searchText);
		}
	}

	$scope.locate = function () {
		$cordovaGeolocation
			.getCurrentPosition()
			.then(function (position) {
				var latLong = position.coords.latitude + ',' + position.coords.longitude;
				// reverse geocode
				GeocoderService.reverseGeocode(latLong)
					.then(function (city) {
						$scope.searchInfo.searchText = city;
					})
			}, function (err) {})
	}

	$scope.searchByUser = function (username) {
		GitHubService.getBio(username)
			.then(function (data) {
				GitHubService.currentUser = data;
				$state.go('dashboard');
			});
	}

	$scope.searchByCity = function (city) {
		GitHubService.searchByCity(city)
			.then(function (data) {
				console.log(data);
			})
	}

	$scope.clearCity = function () {
		if ($scope.searchInfo.searchType === 'location') {
			$scope.searchInfo.searchText = '';
		}
	}

	$scope.$watch('searchInfo.searchType', function (newVal, oldVal) {
		if (newVal == 'username') {
			$scope.searchInfo.searchText = '';
		}
	});
})