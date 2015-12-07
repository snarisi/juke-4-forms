app.controller('SinglePlaylist', function($scope, $stateParams, PlaylistFactory, PlayerFactory){
    PlaylistFactory.getPlaylist($stateParams.id)
        .then(playlist => $scope.playlist = playlist);
    
    $scope.start = PlayerFactory.start;
    $scope.isCurrent = function(song) {
        return PlayerFactory.getCurrentSong()._id === song._id
    };
});