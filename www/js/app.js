// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var NETWORK = true;
var APP = angular.module('starter', [
  'ionic',
  'gjvUser',
  'gjvBrowse',
  'gjvMessage',
  'gjvCordova',
  'gjvTranslate'
])

APP.run(function($rootScope, $ionicPlatform, $auth, messageFactory, $cordovaNetwork, $cordovaAppRate, $cordovaAppVersion, $cordovaSplashscreen, $cordovaStatusbar, $cordovaToast, translate) {
  $ionicPlatform.ready(function() {

    if (ionic.Platform.isWebView()) {

      translate.setPreferredLanguage();      

      $rootScope.$on('$cordovaNetwork', function(a, b) {
        NETWORK = false;
      });

      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }

      if (window.StatusBar) {
        //$cordovaStatusbar.hide();
      }

      $cordovaNetwork.setListeners();

      //$cordovaAppRate.promptForRating(true);

      $cordovaAppVersion.getAppVersion().then(function(version) {
        //alert(version)
      });

      //$cordovaSplashscreen.show(); 
      //$cordovaSplashscreen.hide(); 

      if (ionic.Platform.isAndroid()) {
        // code for android
        //$cordovaToast.showShortBottom('Android');

      } else if (ionic.Platform.isIOS()) {
        // code for iOS
        //$cordovaToast.showShortBottom('iPhone');
      }

    }

  });
})


.constant('APIAddress', 'http://www.gdziejestvin.pl/api')


.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise(function(a, b, c, d) {
    console.log('otherwiser - from: ' + b.$$urlr);
    return "/start";
  });

})

.config(['$httpProvider',
  function($httpProvider) {

    $httpProvider.defaults.headers.common['X-TOKEN'] = 'gdziejestvintoken';
    $httpProvider.interceptors.push(function($rootScope, $q, APIAddress, $window, $timeout) {
      return {
        'request': function(config) {

          // only for external requests 
          if (config.url.indexOf('http') === 0 && (!NETWORK)) {
            var q = $q.defer();
            q.reject({
              data: {
                message: 'cancel'
              }
            });
            return q.promise;

          } else {
            return config;
          }
        },

        'response': function(response) {
          return response;
        }
      };
    });




  }
])

.constant('$ionicLoadingConfig', {
  template: 'Default Loading Template...'
})