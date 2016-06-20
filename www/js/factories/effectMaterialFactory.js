angular.module('starter')

.factory('effectMaterialFactory', [
	'$timeout', 
	'ionicMaterialInk', 
	'ionicMaterialMotion',
	function($timeout, ionicMaterialInk, ionicMaterialMotion){
		var switchOnFunc = function() {
			ionicMaterialInk.displayEffect();
			ionicMaterialMotion.blinds();
		};
		return {
			switchOnEffects: function() {
				switchOnFunc();
			},
			switchOnEffectsWithDelay: function(delay) {
				$timeout(function() {
					switchOnFunc();
				}, delay);
			},
		}
}]);