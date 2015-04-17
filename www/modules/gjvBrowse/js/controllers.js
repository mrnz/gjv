angular.module('gjvBrowse')

.controller('MenuCtrl', function($scope, $state){

})

.controller('BrandsCtrl', function($scope, $state, dataFactory){
	
	$scope.items = [];
	console.log('sdadsa')
	dataFactory.brands().then(
		function(result){
			$scope.items = result.brands; 
		},
		function(reason){
			console.log(reason);
		}
	);
	
	$scope.selectItem = function (ev,brandName) {
		$state.go('menu.models', {brandName: brandName})
	}

})


.controller('ModelsCtrl', function($scope, $state, dataFactory){
	
	// get brand name from URL 
	var brandName = $state.params.brandName; 


	$scope.items = [];

	dataFactory.models(brandName).then(
		function(result){
			$scope.items = result.models; 
			console.log($scope.items);
		},
		function(reason){
			console.log(reason);
		}
	);
	
	$scope.selectItem = function (ev,modelName) {
		$state.go('menu.volumes', {brandName: brandName, modelName: modelName });
	}

})



.controller('VolumesCtrl', function($scope, $state, dataFactory){
	
	// get brand name and model name from URL 
	var brandName = $state.params.brandName,
		modelName = $state.params.modelName; 

	$scope.items = [];

	dataFactory.volumes( brandName, modelName ).then(
		function success (result){
			$scope.items = result.volumes; 
			console.log($scope.items);
		},
		function error (reason){
			console.log(reason);
		}
	);
	
	$scope.selectItem = function (ev,volumeName) {
		$state.go('menu.info', {brandName: brandName, modelName: modelName, volumeName: volumeName });
	}

})


.controller('InfoCtrl', function($scope, $state, dataFactory){
	
	// get brand name and model name from URL 
	var brandName = $state.params.brandName,
		modelName = $state.params.modelName,
		volumeName = $state.params.volumeName; 
		console.log($state.params)
	$scope.info = [];

	dataFactory.info( brandName, modelName, volumeName ).then(
		function success (result){
			$scope.info = result.info; 
		},
		function error (reason){
			console.log(reason);
		}
	);


})