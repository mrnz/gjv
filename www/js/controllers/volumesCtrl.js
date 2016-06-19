angular.module('starter')
	.controller('VolumesCtrl', function($scope, $state, dataFactory, $timeout, ionicMaterialInk, ionicMaterialMotion){
	
	// get brand name and model name from URL 
	var brandName = $state.params.brandName,
			modelName = $state.params.modelName;

	$scope.items = [];
	$scope.listEmpty = true; 
	$scope.title = modelName;

	dataFactory.volumes( brandName, modelName ).then(function success (result){
		
		$scope.listEmpty = false; 
		$scope.items = dataFactory.formatListData(result.volumes);
		$timeout(function() {
			ionicMaterialInk.displayEffect();
			ionicMaterialMotion.blinds();
		}, 300);

		
	},function error (reason){console.log(reason);});
	
	$scope.selectItem = function (ev,volumeName) {
		$state.go('menu.info', {brandName: brandName, modelName: modelName, volumeName: volumeName });
	}

});