angular.module('gjvMessage', [])

.factory('messageFactory', function($ionicLoading, $timeout){
	
	var defaultShowLoading = {
		template: '<div style="color:red">Loading</div>',
		noBackdrop: false,
		hideOnStateChange: true, 
		delay: 300,
		duration: false,
		max: 10000
	};

	return{
		showLoading: function(settings){
			
			var def = defaultShowLoading; 
			
			angular.extend(def, settings);
			
			$ionicLoading.show(def);

		}
	}
})
