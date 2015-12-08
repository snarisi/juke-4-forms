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
		addToPlaylist: function (song, playlistId) {
            console.log(song);
			return $http.post('/api/playlists/' + playlistId + '/songs', {song: song})
                .then(res => res.data)
                .then(song => {
                    song.audioUrl = '/api/songs/' + song._id + '.audio';
                    return song;
                });
		}
    }
});