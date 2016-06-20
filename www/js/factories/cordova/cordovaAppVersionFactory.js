angular.module('starter')

.factory('$cordovaAppVersion', ['$q',
  function($q) {

    return {
      getAppVersion: function() {
        var q = $q.defer();
        cordova.getAppVersion(function(version) {
          q.resolve(version);
        });

        return q.promise;
      }
    };
  }
]);