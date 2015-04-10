angular.module('gjvBrowse')

.factory('dataFactory', function($http, $q, APIAddress, URLFactory){
	
	return{
		brands: function(){
			var result,
				req = {
					method: 'GET',
					url: APIAddress+'/brands'
				}
			
			//result = this.get(url, req);

			return URLFactory.call(req); 
		
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
			console.log('---------');
			console.log(brand)
			console.log(model)
			console.log(volume)
			console.log('---------');
			var req = {
				method: 'GET',
				url: APIAddress+'/brands/'+brand+'/models/'+model+'/volumes/'+volume+'/info'

			}

			return URLFactory.get(req);
		
		}		
	}
})