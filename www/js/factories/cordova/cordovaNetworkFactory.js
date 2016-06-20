angular.module('starter')

.factory('$cordovaNetwork',[ 
  '$rootScope', 
  '$timeout', 
  'messageFactory', 
  '$cordovaToast', 
  function($rootScope, $timeout, messageFactory, $cordovaToast) {

  var network = true;

  var offlineEvent = function() {
    var networkState = navigator.connection.type;
    $timeout(function() {
      $rootScope.$broadcast('$cordovaNetwork', false);

      if (network) {
        network = false;
        $cordovaToast.show('No network', 3000, 'center');
        // messageFactory.showLoading({
        //   template: '<div>No network</div>',
        //   duration: 3000
        // });
      }

    });
  };

  var onlineEvent = function() {
    var networkState = navigator.connection.type;
    $timeout(function() {

      $rootScope.$broadcast('$cordovaNetwork', networkState);

      if (!network) {
        network = true;
        $cordovaToast.show('You are now online', 3000, 'bottom');
        // messageFactory.showLoading({
        //   template: '<div>You are now online</div>',
        //   duration: 3000
        // });
      }

    });
  };

  return {
    setListeners: function() {
      if (navigator.connection) {
        document.addEventListener("offline", offlineEvent, false);
        document.addEventListener("online", onlineEvent, false);
      } else {
        console.warn('network status plugin has not found');
      }
    },
    getNetwork: function() {
      return navigator.connection.type;
    },

    isOnline: function() {
      var networkState = navigator.connection.type;
      return networkState !== Connection.UNKNOWN && networkState !== Connection.NONE;
    },

    isOffline: function() {
      var networkState = navigator.connection.type;
      return networkState === Connection.UNKNOWN || networkState === Connection.NONE;
    },

    clearOfflineWatch: function() {
      document.removeEventListener("offline", offlineEvent);
      $rootScope.$$listeners["$cordovaNetwork:offline"] = [];
    },

    clearOnlineWatch: function() {
      document.removeEventListener("online", offlineEvent);
      $rootScope.$$listeners["$cordovaNetwork:online"] = [];
    }
  };
}]);
