app.controller('allAlbumsCtrl', function($scope, $http,$rootScope, AlbumFactory){
	$scope.showAlbums=true;

		AlbumFactory.fetchAll()
		.then(function(albums){ 
			$scope.albums = albums;
		})
		.catch(function(error){
			console.error(error);
		})


	$rootScope.$on('showAllAlbums',function() {
		$scope.showAlbums = !$scope.showAlbums;
	})

	$rootScope.$on('hideEverything',function() {
		$scope.showAlbums = false;
	})

	$scope.showSpecificAlbum = function(albumid){
		$rootScope.$broadcast('showSpecificAlbum',albumid);
	}

	$rootScope.$on('hideEverythingButOneAlbum',function() {
		$scope.showAlbums = false;
	})
})