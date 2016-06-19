angular.module('starter')

.factory('$cordovaNetwork', function($rootScope, $timeout, messageFactory, $cordovaToast) {

  var network = true;

  var offlineEvent = function() {
    var networkState = navigator.connection.type;
    $timeout(function() {
      $rootScope.$broadcast('$cordovaNetwork', false);

      if (network) {
        network = false;
        $cordovaToast.show('No network', 3000, 'center')
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
        $cordovaToast.show('You are now online', 3000, 'bottom')
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
        console.warn('network status plugin has not found')
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
})

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
])

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
])

.factory('$cordovaStatusbar', [

  function() {

    return {
      overlaysWebView: function(bool) {
        return StatusBar.overlaysWebView(!!bool);
      },

      STYLES: {
        DEFAULT: 0,
        LIGHT_CONTENT: 1,
        BLACK_TRANSLUCENT: 2,
        BLACK_OPAQUE: 3
      },

      style: function(style) {
        switch (style) {
          // Default
          case 0:
            return StatusBar.styleDefault();

            // LightContent
          case 1:
            return StatusBar.styleLightContent();

            // BlackTranslucent
          case 2:
            return StatusBar.styleBlackTranslucent();

            // BlackOpaque
          case 3:
            return StatusBar.styleBlackOpaque();

          default:
            return StatusBar.styleDefault();
        }
      },

      // supported names:
      // black, darkGray, lightGray, white, gray, red, green,
      // blue, cyan, yellow, magenta, orange, purple, brown
      styleColor: function(color) {
        return StatusBar.backgroundColorByName(color);
      },

      styleHex: function(colorHex) {
        return StatusBar.backgroundColorByHexString(colorHex);
      },

      hide: function() {
        return StatusBar.hide();
      },

      show: function() {
        return StatusBar.show();
      },

      isVisible: function() {
        return StatusBar.isVisible;
      }
    };
  }
])

.factory('$cordovaToast', ['$q', '$window',
  function($q, $window) {

    return {
      showShortTop: function(message) {
        var q = $q.defer();
        $window.plugins.toast.showShortTop(message, function(response) {
          q.resolve(response);
        }, function(error) {
          q.reject(error);
        });
        return q.promise;
      },

      showShortCenter: function(message) {
        var q = $q.defer();
        $window.plugins.toast.showShortCenter(message, function(response) {
          q.resolve(response);
        }, function(error) {
          q.reject(error);
        });
        return q.promise;
      },

      showShortBottom: function(message) {
        var q = $q.defer();
        $window.plugins.toast.showShortBottom(message, function(response) {
          q.resolve(response);
        }, function(error) {
          q.reject(error);
        });
        return q.promise;
      },

      showLongTop: function(message) {
        var q = $q.defer();
        $window.plugins.toast.showLongTop(message, function(response) {
          q.resolve(response);
        }, function(error) {
          q.reject(error);
        });
        return q.promise;
      },

      showLongCenter: function(message) {
        var q = $q.defer();
        $window.plugins.toast.showLongCenter(message, function(response) {
          q.resolve(response);
        }, function(error) {
          q.reject(error);
        });
        return q.promise;
      },

      showLongBottom: function(message) {
        var q = $q.defer();
        $window.plugins.toast.showLongBottom(message, function(response) {
          q.resolve(response);
        }, function(error) {
          q.reject(error);
        });
        return q.promise;
      },


      show: function(message, duration, position) {
        var q = $q.defer();
        $window.plugins.toast.show(message, duration, position, function(response) {
          q.resolve(response);
        }, function(error) {
          q.reject(error);
        });
        return q.promise;
      }
    };

  }
])

.factory('$cordovaGlobalization', ['$q', function ($q) {

    return {
      getPreferredLanguage: function () {
        var q = $q.defer();

        navigator.globalization.getPreferredLanguage(function (result) {
            q.resolve(result);
          },
          function (err) {
            q.reject(err);
          });
        return q.promise;
      },

      getLocaleName: function () {
        var q = $q.defer();

        navigator.globalization.getLocaleName(function (result) {
            q.resolve(result);
          },
          function (err) {
            q.reject(err);
          });
        return q.promise;
      },

      getFirstDayOfWeek: function () {
        var q = $q.defer();

        navigator.globalization.getFirstDayOfWeek(function (result) {
            q.resolve(result);
          },
          function (err) {
            q.reject(err);
          });
        return q.promise;
      },

      // "date" parameter must be a JavaScript Date Object.
      dateToString: function (date, options) {
        var q = $q.defer();

        navigator.globalization.dateToString(
          date,
          function (result) {
            q.resolve(result);
          },
          function (err) {
            q.reject(err);
          },
          options);
        return q.promise;
      },

      stringToDate: function (dateString, options) {
        var q = $q.defer();

        navigator.globalization.stringToDate(
          dateString,
          function (result) {
            q.resolve(result);
          },
          function (err) {
            q.reject(err);
          },
          options);
        return q.promise;
      },

      getDatePattern: function (options) {
        var q = $q.defer();

        navigator.globalization.getDatePattern(
          function (result) {
            q.resolve(result);
          },
          function (err) {
            q.reject(err);
          },
          options);
        return q.promise;
      },

      getDateNames: function (options) {
        var q = $q.defer();

        navigator.globalization.getDateNames(
          function (result) {
            q.resolve(result);
          },
          function (err) {
            q.reject(err);
          },
          options);
        return q.promise;
      },

      // "date" parameter must be a JavaScript Date Object.
      isDayLightSavingsTime: function (date) {
        var q = $q.defer();

        navigator.globalization.isDayLightSavingsTime(
          date,
          function (result) {
            q.resolve(result);
          },
          function (err) {
            q.reject(err);
          });
        return q.promise;
      },

      numberToString: function (number, options) {
        var q = $q.defer();

        navigator.globalization.numberToString(
          number,
          function (result) {
            q.resolve(result);
          },
          function (err) {
            q.reject(err);
          },
          options);
        return q.promise;
      },

      stringToNumber: function (numberString, options) {
        var q = $q.defer();

        navigator.globalization.stringToNumber(
          numberString,
          function (result) {
            q.resolve(result);
          },
          function (err) {
            q.reject(err);
          },
          options);
        return q.promise;
      },

      getNumberPattern: function (options) {
        var q = $q.defer();

        navigator.globalization.getNumberPattern(
          function (result) {
            q.resolve(result);
          },
          function (err) {
            q.reject(err);
          },
          options);
        return q.promise;
      },

      getCurrencyPattern: function (currencyCode) {
        var q = $q.defer();

        navigator.globalization.getCurrencyPattern(
          currencyCode,
          function (result) {
            q.resolve(result);
          },
          function (err) {
            q.reject(err);
          });
        return q.promise;
      }

    };
  }]);