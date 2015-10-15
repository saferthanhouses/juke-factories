app.factory('AlbumFactory', function($http, SongFactory) {
	return {
		fetchAll : function() {
			return $http.get('/api/albums')
				.then(function(response){
					albums = response.data;
					return albums
				})
		},
		fetchById : function(albumid) {
			return $http.get('/api/albums/'+albumid)
				.then(function (response) {
					return SongFactory.convertSongs(response.data);
				})
		}
	}
})