angular.module('starter')

.factory('translate', [
  '$cordovaGlobalization', 
  '$translate', 
  '$q',
  function($cordovaGlobalization, $translate, $q) {
    return {
      setPreferredLanguage: function() {
        
        var defer = $q.defer();

        $cordovaGlobalization.getPreferredLanguage().then(
          function(result) {
            $translate.use(result.value.split("-")[0]);
            defer.resolve(result.value.split("-")[0]);
          },
          function(error) {
            defer.reject(error);
          }
        );
        return defer.promise;
      }
    };
}]);