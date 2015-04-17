angular.module('gjvUser')

.controller('StartCtrl', function($scope, $state, $http, userFactory){
	
	$scope.join = function(){
		$state.go('join'); 
	};

	$scope.forgotPassword = function(){
		$state.go('forgotpassword');
	};

	$scope.submit = function(credentials){
		$scope.authenticate('email', credentials );	
	};

	$scope.authenticate = function(provider, user){

		userFactory.authenticate(provider, user ).then(
			function success(result){
				console.log(result)
				if( result.status === 200 ){;
					
					$http.defaults.headers.common['X-USER'] = result.data.token;

					$state.go('menu.brands');

				}
			},
			function error(reason){
				$state.go('start');
			}
		);	
	}; 

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


