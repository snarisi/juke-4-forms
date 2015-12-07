app.controller('SinglePlaylist', function($scope, $stateParams, PlaylistFactory, PlayerFactory, SongFactory){
    PlaylistFactory.getPlaylist($stateParams.id)
        .then(playlist => $scope.playlist = playlist);
	
	SongFactory.fetchAll()
		.then(songs => { 
			$scope.allSongs = songs;
			console.log($scope.allSongs);
		});
    
    $scope.start = PlayerFactory.start;
    $scope.isCurrent = function(song) {
        return PlayerFactory.getCurrentSong()._id === song._id
    };
	
	$scope.addToPlaylist = function(song) {
		console.log(song);
	}
});