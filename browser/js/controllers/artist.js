app.controller('artist', function($rootScope, $scope, $http, PlayerFactory, ArtistFactory) {
	$rootScope.$on('showSpecificArtist', function(evt, artistid) {
		ArtistFactory.fetchById(artistid)
			.then(function(artistdata) {
				$scope.songs = artistdata.songs;
				$scope.artist = artistdata.artist;
				$scope.albums = artistdata.albums;
				$scope.songs.forEach(function (s) {
					s.audioUrl = '/api/songs/' + s._id + '.audio';
				});
			})
			.catch(function(err) {
				console.error(err);
			})
		$rootScope.$broadcast('hideEverything');
		$scope.showArtist = true;
	})
	$rootScope.$on('hideEverything', function() {
		$scope.showArtist=false;
	})

	$scope.start = function (s) {
		PlayerFactory.start(s)
		PlayerFactory.loadAlbum($scope.songs);
	}
})