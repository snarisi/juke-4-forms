app.controller('SinglePlaylist', function($scope, $stateParams, PlaylistFactory, PlayerFactory, SongFactory){
    PlaylistFactory.getPlaylist($stateParams.id)
        .then(playlist => $scope.playlist = playlist);
	
	SongFactory.fetchAll()
		.then(songs => { 
			$scope.allSongs = songs;
		});
    
    $scope.start = PlayerFactory.start;
    $scope.isCurrent = function(song) {
        if (!PlayerFactory.getCurrentSong()) return;
        return PlayerFactory.getCurrentSong()._id === song._id
    };
	
	$scope.addToPlaylist = function(song) {
		PlaylistFactory.addToPlaylist(song, $scope.playlist._id)
            .then(function (newSong) {
                $scope.playlist.songs.push(newSong);
                $scope.selected = null;
            });
	}
});