angular.module('gjvData', ['angular-cache'])


.config(function (CacheFactoryProvider) {

    angular.extend( CacheFactoryProvider.defaults, { 
    	maxAge: 60 * 1000,
    	deleteOnExpire: 'passive',
    	storageMode: 'localStorage'

   	});

})

.factory('URLFactory', function($http, $q, CacheFactory){
	
	var cachedData = CacheFactory('cachedData');

	return{
		
		call: function(params){
			console.log('-+++++-')
			console.log(params)		
			var defer = $q.defer();

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
					defer.reject(errorObj)
					});
			console.log('-+++++-')
			return defer.promise;
		},
		cache: function(){

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

;
