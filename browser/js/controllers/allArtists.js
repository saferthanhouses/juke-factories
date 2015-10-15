app.controller('allArtists',function($rootScope,$scope,$http,ArtistFactory) {
	$scope.showArtists = false;

	$rootScope.$on('showAllArtists',function() {

		ArtistFactory.fetchAll()
		.then(function(artists){

			$scope.artists=artists;
		})
		$rootScope.$broadcast('hideEverything');
		$scope.showArtists = true;
	})

	$rootScope.$on('hideEverything', function() {
		$scope.showArtists = false;
	})

	$scope.viewOneArtist = function(artistid) {
		console.log('view one artist', artistid)
		$rootScope.$broadcast('showSpecificArtist', artistid);
	}
})