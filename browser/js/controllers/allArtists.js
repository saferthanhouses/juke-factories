app.controller('allArtists',function($rootScope,$scope,$http) {
	$scope.showArtist = false;

	$rootScope.$on('showAllArtists',function() {
		console.log("received ShowArtists broadcast")
		$http.get('/api/artists')
		.then(function(response) {
			console.log(response)
			return response.data;
		})
		.then(function(artists){

			$scope.artists=artists;
		})
		console.log($scope.artists)
		$scope.showArtist = true;
		$rootScope.$broadcast('hideEverything');
	})
})