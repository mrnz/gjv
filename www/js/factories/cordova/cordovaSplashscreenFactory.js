angular.module('starter')

.factory('$cordovaSplashscreen', [

  function() {

    return {
      hide: function() {
        return navigator.splashscreen.hide();
      },

      show: function() {
        return navigator.splashscreen.show();
      }
    };

  }
]);