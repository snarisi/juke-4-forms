app.controller('NewPlaylistCtrl', function ($scope, NewPlaylist) {
	$scope.showWarning = false;
	
	$scope.showContents = function () {
//		if ($scope.addPlaylistForm.$pristine) {
//			$scope.showWarning = true;
//		}
//		console.log($scope.addPlaylistForm);
	}
	$scope.addPlaylist = function (playlist) {
		NewPlaylist.create(playlist)
			.then(newPlaylist => {
				$scope.addPlaylistForm.$setPristine();
				$scope.playlist.name = '';
				console.log(newPlaylist);
			});
		
	}
	
	
})