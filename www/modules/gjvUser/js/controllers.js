angular.module('gjvUser')

.controller('StartCtrl', function($scope, $state, $http, userFactory, $ionicModal, TokenFactory, ionicMaterialInk){

	ionicMaterialInk.displayEffect();

	console.log('is auth: '+TokenFactory.isAuthenticated())

	if(TokenFactory.isAuthenticated()){
    $state.go('menu.brands');
  }
  
	$scope.authenticate = function(provider, user){
		//TokenFactory.logOut()
		userFactory.authenticate( provider, user ).then(function(a) {
			if(a)close();
		});
	}; 

	$scope.submit = function(credentials){
		userFactory.authenticate('emailRegister', credentials).then(function(a) {
			if(a)close();
		});
	};	$scope.join = function(){
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
	    ionicMaterialInk.displayEffect();
	    $scope.modal = modal;
	    $scope.modal.show();
	  });
  };
  
  $scope.openModal2 = function() {
		$ionicModal.fromTemplateUrl('my-modal2.html', {
	    scope: $scope,
	    animation: 'slide-in-up'
	  }).then(function(modal) {
	    ionicMaterialInk.displayEffect();
	    $scope.modal = modal;
	    $scope.modal.show();
	  });
  };
  
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    if($scope.modal){
    	$scope.modal.remove();	
    }
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
  var close = function() {
  	if($scope.modal){
    	$scope.modal.hide();
    }
  	
  };
})
