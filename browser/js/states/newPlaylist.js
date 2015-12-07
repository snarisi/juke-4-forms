app.config(function ($stateProvider) {
	$stateProvider.state('newPlaylist', {
		url: '/newplaylist',
		templateUrl: '/templates/newPlaylist.html',
		controller: 'NewPlaylistCtrl'
	})
})