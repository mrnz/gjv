angular.module('gjvUser')

.factory('userFactory', function($http, $q, $auth, $timeout, $state, $ionicLoading, TokenFactory, messageFactory){
	
	return{
		
		authenticate: function(provider, user){
			
			var that = this,
				defer = $q.defer();
			
			TokenFactory.destroyToken();

			messageFactory.showLoading();
			
			that.satellizer(provider, user).then(

				function success(result) {
					that.postActionSuccess(result);
				},
				function error(reason) {
					console.log(reason)
					that.postActionError(reason);
				}

			)
		}, 
		satellizer: function( provider, user ){

			if(provider === 'email'){
				return $auth.login( user )
			}else if(provider === 'emailRegister'){
				return $auth.signup(user);
			}else{
				return $auth.authenticate(provider);	
			}

		},

		postActionSuccess: function(result){
			
			if( result.status === 200 ){;

				TokenFactory.setUserToken();
				$state.go('menu.brands');

			}
			if( result.status === 201 ){;

				TokenFactory.setUserToken();
				$state.go('menu.brands');

			}

			if( result.status === 202 ){
				
				//User registered but email need to be confirmed
				messageFactory.showLoading({
					template: '<div>'+ result.data.message +'</div>',
					duration: 3000
				});

				$timeout(function(){
						$state.go('start');
				}, 3000)
			}
			
		},
		
		postActionError: function(reason){
			
			messageFactory.showLoading({
				template: '<div>'+ reason.data.message +'</div>',
				duration: 3000
			});
	
		},
		passwordForgot: function(email){
			console.log('email: ' + email);
		},




	};

})
;