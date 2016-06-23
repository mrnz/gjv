angular.module('starter')

.factory('messageFactory', [ 
  '$ionicLoading', 
  '$timeout', 
  '$cordovaToast', 
  function($ionicLoading, $timeout, $cordovaToast) {

    var defaultShowLoading = {
      template: '<div style="color:red">Loading</div>',
      noBackdrop: false,
      hideOnStateChange: true,
      delay: 300,
      duration: 10000
    };

    return {
      showLoading: function(settings) {
        
        if (settings) {
          if (settings.template === '<div>cancel</div>') {
            $ionicLoading.hide();
            if(ionic.Platform.isWebView()){
            	$cordovaToast.showShortCenter('No network');
            	return;
            }else{
            	settings.template = '<div>No network</div>';
              settings.duration = 3000;
            }
           
          }
        }

        // Deep copy
        var def = {
          template: defaultShowLoading.template,
          noBackdrop: defaultShowLoading.noBackdrop,
          hideOnStateChange: defaultShowLoading.hideOnStateChange,
          delay: defaultShowLoading.delay,
          duration: defaultShowLoading.duration
        };

        angular.extend(def, settings);
        
        $ionicLoading.show(def);

      }
    };
}]);