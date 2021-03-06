angular.module('starter')

.factory('userFactory', [ 
	'$q', 
	'$auth', 
	'$timeout', 
	'$state', 
	'TokenFactory', 
	'messageFactory',
	function($q, $auth, $timeout, $state, TokenFactory, messageFactory){
	
	return{
		
		authenticate: function(provider, user){
			var that = this,
				defer = $q.defer();
						
			if(!NETWORK){
				messageFactory.showLoading({template: '<div>cancel</div>'});
				defer.resolve(false);
				return defer.promise;
			}

			TokenFactory.destroyToken();

			messageFactory.showLoading();
			
			that.satellizer(provider, user).then(

				function success(result) {
					that.postActionSuccess(result);
					defer.resolve(true);
				},
				function error(reason) {
					console.log(reason);
					that.postActionError(reason);
					defer.resolve(false);
				}
			
			);
			return defer.promise;
		}, 
		satellizer: function( provider, user ){

			if(provider === 'email'){
				return $auth.login( user );
			}else if(provider === 'emailRegister'){
				return $auth.signup(user);
			}else{
				return $auth.authenticate(provider);	
			}

		},

		postActionSuccess: function(result){
			
			if( result.status === 200 ){

				TokenFactory.setUserToken();
				$state.go('menu.brands');

			}
			if( result.status === 201 ){

				TokenFactory.setUserToken();
				$state.go('menu.brands');

			}

			if( result.status === 202 ){
				console.log('dsadsads');
				//User registered but email need to be confirmed
				messageFactory.showLoading({
					template: '<div>'+ result.data.message +'</div>',
					duration: 3000
				});

				$timeout(function(){
						$state.go('start');
				}, 3000);
			}
			
		},
		
		postActionError: function(reason){
			
			messageFactory.showLoading({
				template: '<div>'+ (reason.message || reason.data.message ) +'</div>',
				duration: 3000
			});
	
		}

	};

}]);