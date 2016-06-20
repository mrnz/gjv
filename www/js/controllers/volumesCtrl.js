angular.module('starter')
	.controller('VolumesCtrl',[
		'$scope', 
		'$state', 
		'dataFactory', 
		'effectMaterialFactory',
		function($scope, $state, dataFactory, effectMaterialFactory){
	
		// get brand name and model name from URL 
		var brandName = $state.params.brandName,
				modelName = $state.params.modelName;

		$scope.items = [];
		$scope.listEmpty = true; 
		$scope.title = modelName;

		dataFactory.volumes( brandName, modelName ).then(function success (result){
			
			$scope.listEmpty = false; 
			$scope.items = dataFactory.formatListData(result.volumes);
			effectMaterialFactory.switchOnEffectsWithDelay(300);
			
		},function error (reason){console.log(reason);});
		
		$scope.selectItem = function (ev,volumeName) {
			$state.go('menu.info', {brandName: brandName, modelName: modelName, volumeName: volumeName });
		};

}]);