app.controller('sideBar', function($rootScope,$scope){
	$scope.viewAlbums = function() {
		// broadcast that hides everything
		$rootScope.$broadcast('hideEverything');
		// bring back the albums
		$rootScope.$broadcast('showAllAlbums');
	}
	$scope.viewAllArtists = function() {
		console.log("you clicked on artist")
		$rootScope.$broadcast('showAllArtists');
	}
})