angular.module('gjvUser')

.factory('userFactory', function($http, $auth){
	return{
		authenticate: function(provider, email, password){
			if(provider === 'email'){
				return $auth.login(email, password)
			}else{
				return $auth.authenticate(provider);	
			}
		}
	}
})