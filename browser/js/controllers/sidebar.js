app.controller('sideBar', function($rootScope,$scope){
	$scope.viewAlbums = function() {
		$rootScope.$broadcast('showAllAlbums');
	}
	$scope.viewAllArtists = function() {
		console.log("you clicked on artist")
		$rootScope.$broadcast('showAllArtists');
	}
})