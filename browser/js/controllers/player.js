app.controller('PlayerCtrl', function ($scope, $rootScope, PlayerFactory, $interval) {

	//var audio = document.createElement('audio');
	$scope.isPlaying = PlayerFactory.isPlaying;
	
	var songs;


	// $scope.$on('startIt', function (evt, data) {
	// 	// $scope.start(data.song);
	// 	PlayerFactory.loadAlbum(data.album.songs);
	// });

	// $scope.load = function (song) {
	// 	audio.src = song.audioUrl;
	// 	audio.load();
	// 	$scope.currentSong = song;
	// 	$rootScope.$broadcast('songLoad', song);
	// 	$scope.progress = 0;
	// }

	// $scope.pause = function () {
	// 	audio.pause();
	// 	$scope.isPlaying = false;
	// };

	// $scope.play = function () {
	// 	audio.play();
	// 	$scope.isPlaying = true;
	// };

	$scope.start = function (song) {
		PlayerFactory.start(song)
		// $scope.currentSong = song;
		console.log("Inside PlayerCTRL start", $rootScope.currentSong);
		$rootScope.$digest();
		// $scope.pause();
		// $scope.load(song);
		// $scope.play();
	};

	$scope.toggle = function () {
		if (PlayerFactory.isPlaying()) PlayerFactory.pause();
		else PlayerFactory.play();
	};

	// $scope.moveTo = function (index) {
	// 	index += songs.length
	// 	index %= songs.length;
	// 	$scope.start(songs[index]);
	// };

	$scope.forward = function () {
		PlayerFactory.next();
		// var index = songs.indexOf($scope.currentSong);
		// $scope.moveTo(index + 1);
	};

	$scope.back = function () {
		PlayerFactory.previous();
		// var index = songs.indexOf($scope.currentSong);
		// $scope.moveTo(index - 1);
	};

	// $scope.progress = PlayerFactory.getProgress();

	$interval(function () {
		$scope.progress = PlayerFactory.getProgress();
	},100);

	// $scope.currentSong = PlayerFactory.currentSong();
	// audio.addEventListener('ended', function () {
	// 	$scope.forward();
	// 	$rootScope.$digest();
	// });

});