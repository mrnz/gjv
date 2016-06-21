angular.module('starter')

.controller('MenuCtrl', [
  '$scope', 
  '$state', 
  'shareFactory', 
  'TokenFactory', 
  function($scope, $state, shareFactory, TokenFactory){

  	$scope.share = function(provider) {
  		return shareFactory.share(provider);
  	};

  	$scope.rateapp = function() {
      var devicePlatform = ionic.Platform.platform();
      console.log(devicePlatform);
      if (devicePlatform == "iOS") {
        window.open('https://itunes.apple.com/us/app/YOUR-APP-SLUG-HERE/id000000000?mt=8&uo=4',  "_system"); 
      } else if (devicePlatform == "android") {
        window.open('market://details?id=com.boombit.RunningCircles','_system');
      }
    };

    $scope.logout = function() {
    	TokenFactory.logOut();
    };

}]);

