angular.module('gjvUser')

.factory('userFactory', function($http, $auth, $state, TokenFactory){
	
	return{
		
		authenticate: function(provider, user){
			
			var that = this;

			that.satellizer(provider, user).then(

				function success(result) {
					that.postActionSuccess(result);
				},
				function error(reason) {
					that.postActionError(reason);
				}

			)
		}, 
		emailRegister: function(){
			
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
			
		},
		
		postActionError: function(reason){
	
			$state.go('start');
	
		}

	};

})
;