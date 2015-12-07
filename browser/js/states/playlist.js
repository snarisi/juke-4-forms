app.config(function($stateProvider){
    $stateProvider.state('playlist', {
        url: '/playlist/:id',
        controller: 'SinglePlaylist',
        templateUrl: '/templates/playlist.html'
    });
});