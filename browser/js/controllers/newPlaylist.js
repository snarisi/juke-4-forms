app.controller('NewPlaylistCtrl', function ($scope, $state, NewPlaylist) {
	$scope.showWarning = false;
	
	$scope.showContents = function () {
//		if ($scope.addPlaylistForm.$pristine) {
//			$scope.showWarning = true;
//		}
//		console.log($scope.addPlaylistForm);
	}
	$scope.addPlaylist = function (playlist) {
		NewPlaylist.create(playlist)
			.then(newPlaylist => $state.go('playlist', {id: newPlaylist._id}))
		
	}
	
	
})