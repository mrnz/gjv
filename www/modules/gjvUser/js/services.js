angular.module('gjvUser')

.factory('userFactory', function($http, $auth){
	return{
		authenticate: function(provider){
			return $auth.authenticate(provider);		
		}
	}
})