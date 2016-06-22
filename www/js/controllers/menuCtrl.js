angular.module('starter')

.controller('MenuCtrl', [
  '$scope', 
  '$state', 
  'shareFactory', 
  'TokenFactory', 
  '$cordovaAppRate',
  function($scope, $state, shareFactory, TokenFactory, $cordovaAppRate){

  	$scope.share = function(provider) {
  		return shareFactory.share(provider);
  	};

  	$scope.rateapp = function() {
      var isWebView = ionic.Platform.isWebView();
     
      if (isWebView) {
      
        $cordovaAppRate.promptForRating(true).then(function (result) {

        });
      
      }
      
    };

    $scope.logout = function() {
    	TokenFactory.logOut();
    };

}]);

