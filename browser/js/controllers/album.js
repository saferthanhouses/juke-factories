// var fakeAlbum = {
// 	name: 'Abbey Road',
// 	artists: [{name: 'Bill'}, {name: 'Bob'}],
// 	songs: [{
// 		name: 'Romeo & Juliette',
// 		artists: [{name: 'Bill'}],
// 		genres: ['Smooth', 'Funk'],
// 		audioUrl: 'http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2013.mp3'
// 	}, {
// 		name: 'White Rabbit',
// 		artists: [{name: 'Bill'}, {name: 'Bob'}],
// 		genres: ['Fantasy', 'Sci-fi'],
// 		audioUrl: 'http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2008.mp3'
// 	}, {
// 		name: 'Lucy in the Sky with Diamonds',
// 		artists: [{name: 'Bob'}],
// 		genres: ['Space'],
// 		audioUrl: 'http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2001.mp3'
// 	}],
// 	imageUrl: 'http://fillmurray.com/300/300'
// };

app.controller('AlbumCtrl', function ($scope, $http, $rootScope, StatsFactory, PlayerFactory, AlbumFactory) {
	// $scope.album = fakeAlbum;
	$scope.showAlbum=false;

	$rootScope.$on('showSpecificAlbum',function(evt,albumid) {

		AlbumFactory.fetchById(albumid)
			.then(function(album) {
				$scope.album = album;
				return album;
			})
			.then(function(album){
				StatsFactory.totalTime(album)
					.then(function(totalTime){
						$scope.albumTime = totalTime;
					})
					.catch(function(error) { console.error(error) })
			})
		$scope.showAlbum=true;
		$rootScope.$broadcast('hideEverythingButOneAlbum');
	});

	$rootScope.$on('hideEverything',function() {
		$scope.showAlbum = false;
	})

	$scope.start = function (s) {
		PlayerFactory.start(s)
		PlayerFactory.loadAlbum($scope.album.songs);
		// $rootScope.$broadcast('startIt', {
		// 	song: s,
		// 	album: $scope.album
		// });
	};
	// $scope.$on('songLoad', function (evt, song) {
	// 	console.log("received current song", song);
	// 	$scope.currentSong = song;
	// });
});