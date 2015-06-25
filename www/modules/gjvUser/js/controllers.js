angular.module('gjvUser')

.controller('StartCtrl', function($scope, $state, $http, userFactory, $ionicModal){


	$scope.authenticate = function(provider, user){
		userFactory.authenticate( provider, user ).then(function(a) {
			if(a)close();
		});
	}; 

	$scope.submit = function(credentials){
		console.log('-----')
		console.log(credentials)
		// userFactory.authenticate('emailRegister', credentials).then(function(a) {
		// 	if(a)close();
		// });
	};

	$scope.join = function(){
		$state.go('join'); 
	};

	$scope.forgotPassword = function(){
		$state.go('forgotpassword');
	};


	$scope.switchTo = function(toWhat) {
		$scope.closeModal();
		setTimeout(function() {
			if(toWhat === 1){
				$scope.openModal();
			}else{
				$scope.openModal2();
			}
		}, 500);
		
	};


  $scope.openModal = function() {
		$ionicModal.fromTemplateUrl('my-modal.html', {
	    scope: $scope,
	    animation: 'slide-in-up'
	  }).then(function(modal) {
	    $scope.modal = modal;
	    $scope.modal.show();
	  });
  };
  
  $scope.openModal2 = function() {
		$ionicModal.fromTemplateUrl('my-modal2.html', {
	    scope: $scope,
	    animation: 'slide-in-up'
	  }).then(function(modal) {
	    $scope.modal = modal;
	    $scope.modal.show();
	  });
  };
  
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
  // var close = function() {
  // 	$scope.modal.hide();
  // };
})

.controller('JoinCtrl', function($scope, $state, $auth, userFactory){

	$scope.authenticate = function(provider, user){
		userFactory.authenticate( provider, user );
	}; 
	
	$scope.submit = function(credentials){
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


