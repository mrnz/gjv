// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var NETWORK = true;
var APP = angular.module('starter', [
  'ionic',
  'ionic-material',
  'ion-gallery',
  'angular-cache',
  'satellizer',
  'pascalprecht.translate'
]);
    
APP.run([
  '$rootScope', 
  '$state', 
  '$ionicPlatform', 
  '$auth', 
  'messageFactory', 
  '$cordovaNetwork', 
  '$cordovaAppRate', 
  '$cordovaAppVersion', 
  '$cordovaSplashscreen', 
  '$cordovaStatusbar', 
  '$cordovaToast', 
  'translate', 
  'TokenFactory', 
  function($rootScope,$state, $ionicPlatform, $auth, messageFactory, $cordovaNetwork, $cordovaAppRate, $cordovaAppVersion, $cordovaSplashscreen, $cordovaStatusbar, $cordovaToast, translate, TokenFactory) {
  
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {

      if(toState.name === 'start'){
        if(TokenFactory.isAuthenticated()){
          event.preventDefault(); 
          $state.go('menu.brands');
        }
      }
  });

  $ionicPlatform.ready(function() {
    
    var onBackKeyDown = function (event) {
      console.warn('back Button hit');
      if($state.current.name === 'start'){
        event.preventDefault();
        navigator.Backbutton.goBack(function() {
          console.log('success');
        }, function() {
          console.log('fail');
        });
      }
    };

    if (ionic.Platform.isWebView()) {

      document.addEventListener("backbutton", onBackKeyDown, false);
      
      translate.setPreferredLanguage();

      $rootScope.$on('$cordovaNetwork', function(a, value) {
        NETWORK = value;
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
}])


.constant('APIAddress', 'http://www.gdziejestvin.pl/api')
.constant('Settings', {
    'appName': 'VIN Finder'
})
.constant('$ionicLoadingConfig', {
  template: 'Default Loading Template...'
});











