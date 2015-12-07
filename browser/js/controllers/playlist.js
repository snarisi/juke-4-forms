app.controller('PlaylistCtrl', function($scope, PlaylistFactory){
    
    PlaylistFactory.getAll()
        .then(result => $scope.playlists = result);
});