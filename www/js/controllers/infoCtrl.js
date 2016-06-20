angular.module('starter')
.controller('InfoCtrl', [
	'$scope', 
	'$state', 
	'dataFactory', 
	'$timeout', 
	'ionicMaterialInk', 
	'ionicMaterialMotion', 
	function($scope, $state, dataFactory, $timeout, ionicMaterialInk, ionicMaterialMotion){
	
		var brandName = $state.params.brandName,
				modelName = $state.params.modelName,
				volumeName = $state.params.volumeName; 

		$scope.info = [];
		$scope.ready = false;
		$scope.title = brandName; 
		$scope.items = []
		dataFactory.info( brandName, modelName, volumeName ).then(function (result){
			$scope.ready = true;
			$scope.info = result.info; 
			var base = 'http://www.gdziejestvin.pl/file/'
			var foto1 = base + result.info.foto1;
			var foto2 = base + result.info.foto2;
			$scope.items = [
				{src: foto1, sub: 'sub 1'},
				{src: foto2, sub: 'sub 2'}
			]
		},function error (reason){console.log(reason);});


}]);