angular.module('starter')
.controller('AddVehiculeCtrl', ['$scope',function($scope){
	$scope.a = 'test;'
	$scope.test = function() {
		return 'test is this';
	};
}]);