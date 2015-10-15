app.factory('SongFactory',function(){
	return {
		convertSongs: function(album) {
			album.imageUrl = '/api/albums/' + album._id + '.image';
			var albumArtists = _.indexBy(album.artists, '_id');
			album.songs.forEach(function (s) {
				s.audioUrl = '/api/songs/' + s._id + '.audio';
				s.artists = s.artists.map(function (artistId) {
					return albumArtists[artistId];
					});
			});
			return album;
		}
	}

})