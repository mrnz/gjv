angular.module('gjvBrowse')

.factory('dataFactory', function($http, $q, APIAddress, URLFactory){
	
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

.factory('shareFactory', ['$cordovaSocialSharing', function($cordovaSocialSharing){
	return{
		share: function(provider) {

      if (!ionic.Platform.isWebView()) {
        console.warn("this app works in browser mode - this function is not available in this mode");
      	return false;
      }

			var message = 'Oto wiadomosc - co za cudna appka';
      var link =  'http://wp.pl';
      var subject = "subject";
      var image = '../img/vin_152.png';
      var number	= '';
      var toArr = '';
      var ccArr = '';
      var bccArr = '';

      var successCallback = function(result) {
      	console.log(result);
      };
      var errorCallback = function(err) {
      	console.log(err);
      };
      
      console.log('provider: ' + provider)
      switch (provider) {
		    case 'fb':
					$cordovaSocialSharing.shareViaFacebook(message, image, link).then(function(result) {successCallback(result)}, function(err) {errorCallback(err)});
		      break;
		    case 'twitter':
		      $cordovaSocialSharing.shareViaTwitter(message, image, link).then(function(result) {successCallback(result)}, function(err) {errorCallback(err)});
		      break;
		    case 'sms':
		      $cordovaSocialSharing.shareViaSMS(message, number).then(function(result) {successCallback(result)}, function(err) {errorCallback(err)});
		      break;
		    case 'email':
		      $cordovaSocialSharing.shareViaEmail(message, subject, toArr, ccArr, bccArr, image).then(function(result) {successCallback(result)}, function(err) {errorCallback(err)});
		      break;
		    case 'whatsapp':
		      $cordovaSocialSharing.shareViaWhatsApp(message, image, link).then(function(result) {successCallback(result)}, function(err) {errorCallback(err)});
		      break;
			}
		}
	};
}])

