app.factory('ArtistFactory', function($http, $q){ 
	var cache = {};
	return {
		fetchAll: function() {
			return $http.get('/api/artists')
				.then(function(response) {
					return response.data;
				})
		},
		fetchById: function(artistid) {
			if(cache[artistid]){
				console.log("returned from cache", artistid);

				return $q(
					function(resolve, reject) {
						resolve(cache[artistid])
						reject(null)
					})
				}
			else {
			var artistdata = {};
			return $http.get('/api/artists/'+artistid)
			.then(function(response) {
				artistdata.artist = response.data;
				return $http.get('/api/artists/'+artistid+'/albums')
			})
			.then(function(response) {
				artistdata.albums = response.data;
				return $http.get('/api/artists/'+artistid+'/songs')
			})
			.then(function(response) {
				artistdata.songs=response.data;
				cache[artistid]= artistdata;
				return artistdata;
			})
			}
		}
	}
})