app.factory('PlaylistFactory', function($http){
    return {
        getAll: function() {
            return $http.get('/api/playlists').
            then(playlists => playlists.data);
        },
        getPlaylist: function(playlistId) {
            return $http.get('/api/playlists/' + playlistId)
                .then(playlist => playlist.data);
        },
		addToPlaylist: function (song) {
			return $http.post('/api/playlists/')
		}
    }
});