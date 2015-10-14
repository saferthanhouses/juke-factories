app.factory('PlayerFactory', function ($rootScope) {
	var audio = document.createElement('audio');
	var currentSong = null;
	var progress=0;
	var isPlaying = false;
	var songs = null;

	function load (song) {
		audio.src = song.audioUrl;
		audio.load();
		$rootScope.currentSong = song;
		// $rootScope.$broadcast('songLoad', song); //maybe put in controller
		progress = 0;
	}

	audio.addEventListener('timeupdate', function () {
		progress = 100 * audio.currentTime / audio.duration;
		$rootScope.$digest();
	});

	audio.addEventListener('ended', function () {
	// $scope.forward();
	// $rootScope.$digest();
		playerExports.next()
	});

	var playerExports = {
		start: function(song) {
			this.pause();
			load(song);
			this.play();
		},
		isPlaying: function() { return isPlaying;},
		pause: function() {
			audio.pause();
			isPlaying = false;
		},
		play: function(){
			audio.play();
			isPlaying = true;
		},
		getCurrentSong: function() {
			return currentSong;
		},
		next: function() {
			console.log('songs',songs);
			console.log('currentSong', $rootScope.currentSong);
			var index = songs.indexOf($rootScope.currentSong);
			this.moveTo(index + 1);
		},
		previous: function(){
			var index = songs.indexOf($rootScope.currentSong);
			this.moveTo(index - 1);
		},
		loadAlbum: function(song) {
			songs = song;
		},
		moveTo: function(index) {
			index += songs.length
			index %= songs.length;
			this.start(songs[index]);
		},
		getProgress: function() {
			console.log("getProgress executed")
			return progress;
		},
		currentSong: function(){
			return currentSong;
		}

	};

	return playerExports;
});

