angular.module('starter')

.factory('TokenFactory', [
	'$http', 
	'$q', 
	'$auth', 
	'$state', 
	function($http, $q, $auth, $state ){
	return{

		setUserToken: function(passedToken){
			
			var localStorageToken;

			if( typeof passedToken !== 'undefined' ){
				console.log(passedToken);
				// token passed - set it
				$http.defaults.headers.common['X-USER'] = passedToken; 
				return true;

			}else{
	
				if(typeof $http.defaults.headers.common['X-USER'] === 'undefined'){
					
					// token undefined - try get it from localStorage;
					localStorageToken = $auth.getToken();
					
					if( typeof localStorageToken !== 'undefined' ){
						
						// token in localStorage exist - set it 
						$http.defaults.headers.common['X-USER'] = localStorageToken;
						return true;

					}else{
						
						//token doesn't exist - return FALSE
						return false; 

					}

				}else{
	
					// token already set - nothing to do
					return true;

				}
			
			}

		},
		destroyToken: function() {
			$auth.removeToken();
			$http.defaults.headers.common['X-USER'] = undefined;
		},
		logOut: function(){
			$auth.logout();
			$state.go('start'); 
		},
		isAuthenticated: function() {
			return $auth.isAuthenticated();
		}
	};
}]);
