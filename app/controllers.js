angular.module('myApp.controllers', []).controller("songCtrl", function($scope) {
  // Write your code here
  $scope.songs = [

 //  	{
 //  		artist: "Nightwish",
 //  		title: "Ghost Loves Score"
	// }, 
	// {
 //  		artist: "Evanescence",
 //  		title: "Everybody's Fool"
	// }, 
	// {
 //  		artist: "Within Temptation",
 //  		title: "Ice Queen"
	// }
	];
	$scope.newSong = { };

	$scope.addSong = function(/** String */ artist, /** String */ title) {
  		$scope.songs.push({
    		artist: artist,
    		title: title
  			});
  	$scope.newSong.title = "";
  	$scope.newSong.artist = "";

	};

	$scope.isEmpty = function(/** String */ str) {
  		return _.isBlank(str);
	};

});