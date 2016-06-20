angular.module('starter')

.factory('effectMaterialFactory', [
	'$timeout', 
	'ionicMaterialInk', 
	'ionicMaterialMotion',
	function($timeout, ionicMaterialInk, ionicMaterialMotion){
		return {
			switchOnEffects: function() {
				ionicMaterialInk.displayEffect();
				ionicMaterialMotion.blinds();
			},
			switchOnEffectsWithDelay: function(delay) {
				$timeout(function() {
					ionicMaterialInk.displayEffect();
					ionicMaterialMotion.blinds();
				}, delay);
			},
		}
}]);