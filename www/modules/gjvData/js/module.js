angular.module('gjvData', ['angular-cache'])


.config(function (CacheFactoryProvider) {

    angular.extend( CacheFactoryProvider.defaults, { 
    	maxAge: 60 * 1000,
    	deleteOnExpire: 'passive',
    	storageMode: 'localStorage'

   	});

})

.factory('URLFactory', function($http, $q, CacheFactory, TokenFactory){
	
	var cachedData = CacheFactory('cachedData');

	return{
		
		call: function(params){
	
			var defer = $q.defer(),
				isTokenSet = TokenFactory.setUserToken();

			if(!isTokenSet){
				//LOGOUT
				TokenFactory.logOut(); 
			}

			

			$http(params)
				.success(function(resultObj,status,headerFunc){
					//console.log(result);console.log(status);
					
					// put data in cache
					cachedData.put( params.url, resultObj );

					defer.resolve(resultObj)
				})
				.error(function(errorObj,status,headerFunc){
					//console.log(errorObj);
					//console.log(status);
					if( status === 401 ){
						TokenFactory.logOut();
					}
					
					defer.reject(errorObj)
				});

			return defer.promise;
		},
		get: function( params ){

			var result,
				data = cachedData.get( params.url );

			// if undefined get data from API
			if( typeof data === 'undefined'){
				console.log('API');
				result = this.call( params );
			}
			// if not undefined return data from cache
			else{
				
				console.log('CACHE');
				var defer = $q.defer();
			 	defer.resolve(data);
			 	result = defer.promise;

			}

			return result;
		
		}

	}
	
})
.factory('TokenFactory', function($http, $q, $auth, $state ){
	return{
		setUserToken: function(passedToken){
			
			var passedToken = passedToken,
				localStorageToken;

			if( typeof passedToken !== 'undefined' ){
				console.log(passedToken)
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

		}
	}
});
