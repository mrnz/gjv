angular.module('gjvBrowse')

.controller('BrandsCtrl', function($scope, $state, dataFactory){
	
	$scope.brands = [];

	dataFactory.brands().then(
		function(result){
			$scope.brands = result.brands; 
			console.log($scope.brands);
		},
		function(reason){
			console.log(reason);
		}
	);
	
	$scope.selectBrand = function (a,brandName,c) {
		console.log(a);
		console.log(brandName);

		$state.go('models', {brandName: brandName})
	}

})


.controller('ModelsCtrl', function($scope, $state, dataFactory){
	
	// get brand name from URL 
	var brandName = $state.params.brandName; 

	$scope.models = [];

	dataFactory.models(brandName).then(
		function(result){
			$scope.models = result.models; 
			console.log($scope.models);
		},
		function(reason){
			console.log(reason);
		}
	);
	
	$scope.selectBrand = function (a,modelName,c) {
		console.log(a);
		console.log(brandName);
		console.log(modelName);


		$state.go('volumes', {brandName: brandName, modelName: modelName });
	}

})



.controller('VolumesCtrl', function($scope, $state, dataFactory){
	
	// get brand name and model name from URL 
	var brandName = $state.params.brandName,
		modelName = $state.params.modelName; 

	$scope.volumes = [];

	dataFactory.volumes( brandName, modelName ).then(
		function success (result){
			$scope.volumes = result.volumes; 
			console.log($scope.volumes);
		},
		function error (reason){
			console.log(reason);
		}
	);
	
	$scope.selectBrand = function (a,b,c) {
		console.log(a);
		console.log(b);
	}

})