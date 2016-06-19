angular.module('starter')

.controller('BrandsCtrl', function($scope, $state, dataFactory, Settings, $timeout, ionicMaterialInk, ionicMaterialMotion){
	
	$scope.items = [];
	$scope.listEmpty = true;
	$scope.title = Settings.appName

	dataFactory.brands().then(function(result){

		$scope.listEmpty = false; 
		$scope.items = dataFactory.formatListData(result.brands);
		$timeout(function() {
			ionicMaterialInk.displayEffect();
			ionicMaterialMotion.blinds();
		}, 300);
	},function(reason){});
	
	$scope.selectItem = function (ev,brandName) {
		$state.go('menu.models', {brandName: brandName})
	}

});

