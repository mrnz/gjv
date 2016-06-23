angular.module('starter')

.controller('StartCtrl', [
	'$scope', 
	'$state', 
	'userFactory', 
	'$ionicModal', 
	'TokenFactory', 
	'effectMaterialFactory', 
	function($scope, $state, userFactory, $ionicModal, TokenFactory, effectMaterialFactory){

		effectMaterialFactory.switchOnEffects();

		console.log('is auth: '+TokenFactory.isAuthenticated());

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
			userFactory.authenticate('emailRegister', credentials).then(function(success) {
				if(success){
					close();	
				}
			});
		};	

		$scope.switchTo = function(toWhat) {
			$scope.closeModal();
			setTimeout(function() {
				if(toWhat === 1){
					$scope.openModal();
				}else{
					console.log('dsadsa')
					$scope.openModal2();
				}
			}, 500);
			
		};


	  $scope.openModal = function() {
			$ionicModal.fromTemplateUrl('my-modal.html', {
		    scope: $scope,
		    animation: 'slide-in-up'
		  }).then(function(modal) {
		   	console.log(modal)
		   	effectMaterialFactory.switchOnEffects();
		    $scope.modal = modal;
		    $scope.modal.show();
		  });
	  };
	  
	  $scope.openModal2 = function() {
			$ionicModal.fromTemplateUrl('my-modal2.html', {
		    scope: $scope,
		    animation: 'slide-in-up'
		  }).then(function(modal) {
		    effectMaterialFactory.switchOnEffects();
		    $scope.modal = modal;
		    $scope.modal.show();
		  });
	  };
	  
	  $scope.closeModal = function() {
	    $scope.modal.hide();
	  };
	  
	  $scope.$on('$destroy', function() {
	    if($scope.modal){
	    	$scope.modal.remove();	
	    }
	  });
	  
	  // $scope.$on('modal.hidden', function() {});
	  // $scope.$on('modal.removed', function() {});

	  var close = function() {
	  	if($scope.modal){
	    	$scope.modal.hide();
	    }
	  	
	  };
}]);
