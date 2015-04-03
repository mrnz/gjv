angular.module('gjvUser')

.controller('StartCtrl', function($scope, $state){
	
	$scope.join = function(){
		$state.go('join'); 
	}

	$scope.forgotPassword = function(){
		$state.go('forgotpassword');
	}

})

.controller('JoinCtrl', function($scope, $state){
	$scope.cancel = function(){
		$state.go('start');
	}
})

.controller('ForgotPasswordCtrl', function($scope, $state){
	
	$scope.cancel = function(){
		$state.go('start');
	}
	
})


