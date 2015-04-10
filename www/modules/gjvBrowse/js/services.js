angular.module('gjvBrowse')

.factory('dataFactory', function($http, $q){
	return{
		call: function(params){
				
			var defer = $q.defer();

			$http(params)
				.success(function(resultObj,status,headerFunc){
					//console.log(result);console.log(status);
					defer.resolve(resultObj)
				})
				.error(function(errorObj,status,headerFunc){
					//console.log(errorObj);
					//console.log(status);
					defer.reject(errorObj)
				});
			return defer.promise;
		},
		brands: function(){

			var req = {
				method: 'GET',
				url: 'http://www.gdziejestvin.pl/api/brands',
				headers: {
   					'X-TOKEN': 'gdziejestvintoken',
   					'X-USER' : "954ec124678207080ddae2f390cb0757"
 				},
			}
			return this.call(req);
		
		},
		models: function(brand){

			var req = {
				method: 'GET',
				url: 'http://www.gdziejestvin.pl/api/brands/'+brand+'/models',
				headers: {
   					'X-TOKEN': 'gdziejestvintoken',
   					'X-USER' : "954ec124678207080ddae2f390cb0757"
 				},
			}
			return this.call(req);
		
		},
		volumes: function(brand, model){

			var req = {
				method: 'GET',
				url: 'http://www.gdziejestvin.pl/api/brands/'+brand+'/models/'+model+'/volumes',
				headers: {
   					'X-TOKEN': 'gdziejestvintoken',
   					'X-USER' : "954ec124678207080ddae2f390cb0757"
 				},
			}
			return this.call(req);
		
		}
	}
})