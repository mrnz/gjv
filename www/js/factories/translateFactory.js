angular.module('starter')

.factory('translate', function($cordovaGlobalization, $translate) {
  return {
    setPreferredLanguage: function() {
      
      $cordovaGlobalization.getPreferredLanguage().then(

        function(result) {
          $translate.use(result.value.split("-")[0]);
        },
        function(error) {
          // error
        });
    }
  }
})