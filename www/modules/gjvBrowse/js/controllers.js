angular.module('gjvBrowse')

.controller('MenuCtrl', function($scope, $state){

	$scope.vinFinder = function() {
		console.log('claaa')
	};

	$scope.addVehicule = function() {
		$state.go('menu.addVehicule')
	};

})

.controller('BrandsCtrl', function($scope, $state, dataFactory){
	
	$scope.items = [];
	$scope.listEmpty = true;

	dataFactory.brands().then(
		function(result){
			$scope.listEmpty = false; 
			$scope.items = result.brands;

		},
		function(reason){
			
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
	$scope.listEmpty = true; 

	dataFactory.models(brandName).then(
		function(result){
			$scope.listEmpty = false;
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
	$scope.listEmpty = true; 

	dataFactory.volumes( brandName, modelName ).then(
		function success (result){
			$scope.listEmpty = false; 
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
	$scope.ready = false;


	dataFactory.info( brandName, modelName, volumeName ).then(
		function success (result){
			$scope.ready = true;
			$scope.info = result.info; 
		},
		function error (reason){
			console.log(reason);
		}
	);


})


.controller('AddVehiculeCtrl', function($scope, $state, dataFactory){
	
	
	console.log('dsadsad')


})

