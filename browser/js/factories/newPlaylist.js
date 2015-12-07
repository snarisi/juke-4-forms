app.factory('NewPlaylist', function ($http) {
	return {
		
		create: function (playlist) {
			return $http.post('/api/playlists', playlist)
				.then(function (res) {
					return res.data;
				});
		}
	}
});