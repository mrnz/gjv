angular.module('starter')


.factory('URLFactory',[
	'$http', 
	'$q', 
	'CacheFactory', 
	'TokenFactory', 
	function($http, $q, CacheFactory, TokenFactory){
	
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

					defer.resolve(resultObj);
				})
				.error(function(errorObj,status,headerFunc){
					//console.log(errorObj);
					//console.log(status);
					if( status === 401 ){
						TokenFactory.logOut();
					}
					
					defer.reject(errorObj);
				});

			return defer.promise;
		},
		get: function( params ){

			var result,
				data = cachedData.get( params.url );

			// if undefined get data from API
			if( typeof data === 'undefined'){
				//console.log('API');
				result = this.call( params );
			}
			// if not undefined return data from cache
			else{
				
				//console.log('CACHE');
				var defer = $q.defer();
			 	defer.resolve(data);
			 	result = defer.promise;

			}

			return result;
		
		}

	};
	
}]);
