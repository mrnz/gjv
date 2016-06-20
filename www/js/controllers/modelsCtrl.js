angular.module('starter')
.controller('ModelsCtrl', [
	'$scope', 
	'$state', 
	'dataFactory', 
	'effectMaterialFactory',
	function($scope, $state, dataFactory){
	
		var brandName = $state.params.brandName; 

		$scope.items = [];
		$scope.listEmpty = true;
		$scope.title = brandName;

		dataFactory.models(brandName).then(function(result){

			$scope.listEmpty = false;
			$scope.items = dataFactory.formatListData(result.models);

			effectMaterialFactory.switchOnEffectsWithDelay(300);

		},function(reason){console.log(reason);});
		
		$scope.selectItem = function (ev,modelName) {
			$state.go('menu.volumes', {brandName: brandName, modelName: modelName });
		};

}]);