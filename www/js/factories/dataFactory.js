angular.module('starter')

.factory('dataFactory', [
	'$http', 
	'$q', 
	'APIAddress', 
	'URLFactory', 
	function($http, $q, APIAddress, URLFactory){
	
	return{
		brands: function(){
			var result,
				req = {
					method: 'GET',
					url: APIAddress+'/brands'
				}

			return URLFactory.get(req); 
		
		},
		models: function(brand){
			var result,
				req = {
					method: 'GET',
					url: APIAddress+'/brands/'+brand+'/models'
				}
			
			result = URLFactory.get(req);

			return result;
		
		},
		volumes: function(brand, model){

			var req = {
				method: 'GET',
				url: APIAddress+'/brands/'+brand+'/models/'+model+'/volumes'
			}
			return URLFactory.get(req);
		
		},
		info: function(brand, model, volume){
			var req = {
				method: 'GET',
				url: APIAddress+'/brands/'+brand+'/models/'+model+'/volumes/'+volume+'/info'
			}

			return URLFactory.get(req);
		
		},

		formatListData: function(dataIn) {
			var firstChar = null;
			return dataIn.map(function(val) {
				var temp = {
					name: val,
				};
				temp.first = val[0] === firstChar ? false : true;
				firstChar = val[0];
				return temp;
			});
		}		
	}
}]);