angular.module('gjvUser')

.factory('testFactory', function($http){
	return{
		a: function(){

			var req = {
				method: 'GET',
				url: 'http://www.gdziejestvin.pl/api/brands',
				headers: {
   					'X-TOKEN': 'gdziejestvin'
 				},
			}

			$http(req).success(function(){console.log('1')}).error(function(){console.log('2')});
		}
	}
})