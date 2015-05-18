angular.module('gjvUser')

.controller('StartCtrl', function($scope, $state, $http, userFactory){


	$scope.authenticate = function(provider, user){
		userFactory.authenticate( provider, user );
	}; 

	$scope.join = function(){
		$state.go('join'); 
	};

	$scope.forgotPassword = function(){
		$state.go('forgotpassword');
	};


})

.controller('JoinCtrl', function($scope, $state, $auth, userFactory){

	$scope.authenticate = function(provider, user){
		
		userFactory.authenticate( provider, user );

	}; 
	
	$scope.submit = function(credentials){
		console.log('HERE')
		userFactory.authenticate('emailRegister', credentials);

	};

	$scope.cancel = function(){
		$state.go('start');
	};

})

.controller('ForgotPasswordCtrl', function($scope, $state, userFactory){

	$scope.cancel = function(){
		$state.go('start');
	}

	$scope.submit = function(credentials) {
		userFactory.passwordForgot(credentials.email)
	};

})


