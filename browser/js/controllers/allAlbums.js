app.controller('allAlbumsCtrl', function($scope, $http,$rootScope){
	$scope.showAlbums=true;
	$http.get('/api/albums')
		.then(function(response){
			albums = response.data;
			return albums
		})
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
})