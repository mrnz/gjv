angular.module('starter')
.controller('ModelsCtrl', [
	'$scope', 
	'$state', 
	'dataFactory', 
	'$timeout', 
	'ionicMaterialInk', 
	'ionicMaterialMotion', 
	function($scope, $state, dataFactory, $timeout, ionicMaterialInk, ionicMaterialMotion){
	
		var brandName = $state.params.brandName; 

		$scope.items = [];
		$scope.listEmpty = true;
		$scope.title = brandName;

		dataFactory.models(brandName).then(function(result){

			$scope.listEmpty = false;
			$scope.items = dataFactory.formatListData(result.models);

			$timeout(function() {
				ionicMaterialInk.displayEffect();
				ionicMaterialMotion.blinds();
			}, 300);

		},function(reason){console.log(reason);});
		
		$scope.selectItem = function (ev,modelName) {
			$state.go('menu.volumes', {brandName: brandName, modelName: modelName });
		}

}]);