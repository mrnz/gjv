angular.module('gjvBrowse')

.controller('MenuCtrl', function($scope, $state, shareFactory, TokenFactory){

	$scope.redirect = function(stateName) {
		$state.go(stateName);
	};

	$scope.addVehicule = function() {
		$state.go('menu.addVehicule')
	};

	$scope.share = function(provider) {
		return shareFactory.share(provider);
	};
	$scope.rateapp = function() {
    var devicePlatform = ionic.Platform.platform();
    console.log(devicePlatform)
    if (devicePlatform == "iOS") {
      window.open('https://itunes.apple.com/us/app/YOUR-APP-SLUG-HERE/id000000000?mt=8&uo=4',  "_system"); 
    } else if (devicePlatform == "android") {
      window.open('market://details?id=com.boombit.RunningCircles','_system');
    }
  };
  $scope.logout = function() {
  	TokenFactory.logOut();
  };
})

.controller('BrandsCtrl', function($scope, $state, dataFactory, Settings){
	
	$scope.items = [];
	$scope.listEmpty = true;
	$scope.title = Settings.appName

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
	$scope.title = brandName;
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
	$scope.title = modelName;

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
	$scope.title = brandName; 

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

