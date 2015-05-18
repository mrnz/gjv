angular.module('gjvMessage', [])

.factory('messageFactory', function($ionicLoading, $timeout){
	
	var defaultShowLoading = {
		template: '<div style="color:red">Loading</div>',
		noBackdrop: false,
		hideOnStateChange: true, 
		delay: 300,
		duration: 10000
	};

	return{
		showLoading: function(settings){
			
			// Deep copy
			var def = {
				template: defaultShowLoading.template,
				noBackdrop: defaultShowLoading.noBackdrop,
				hideOnStateChange: defaultShowLoading.hideOnStateChange, 
				delay: defaultShowLoading.delay,
				duration: defaultShowLoading.duration
			}
			
			angular.extend(def, settings);
			
			$ionicLoading.show(def);

		}
	}
})
