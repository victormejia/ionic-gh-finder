angular.module('app')
	.factory('GeocoderService', function ($http) {
		var key = 'AIzaSyCHcahqaGUtpZHqzIZZwRYoYeIAXanKUAY';
		var url = 'https://maps.googleapis.com/maps/api/geocode/json';

		return {
			reverseGeocode: function (latLongString) {
				var city = '';
				return $http.get(url, {
					params: {
						key: key,
						result_type: 'street_address',
						location_type: 'ROOFTOP',
						latlng: latLongString
					}
				}).then(function (response) {
					var result = response.data.results[0];
					var cityFound = false;
					// try to find the city
					result.address_components.forEach(function (address) {
						if (address.types[0] === 'locality' && !cityFound) {
							city = address.long_name;
							cityFound = true;
						}
						if (address.types[0] === 'sublocality_level_1' && !cityFound) {
							city = address.long.long_name;
							cityFound = true;
						}
					});
					return city;
				});
			}
		}
	})