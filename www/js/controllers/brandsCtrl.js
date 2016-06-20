angular.module('starter')

.controller('BrandsCtrl', [
	'$scope', 
	'$state', 
	'dataFactory', 
	'Settings', 
	'effectMaterialFactory',
	function($scope, $state, dataFactory, Settings, effectMaterialFactory){
	
		$scope.items = [];
		$scope.listEmpty = true;
		$scope.title = Settings.appName;

		dataFactory.brands().then(function(result){

			$scope.listEmpty = false; 
			$scope.items = dataFactory.formatListData(result.brands);
			effectMaterialFactory.switchOnEffectsWithDelay(300);

		},function(reason){});
		
		$scope.selectItem = function (ev,brandName) {
			$state.go('menu.models', {brandName: brandName});
		};

}]);

