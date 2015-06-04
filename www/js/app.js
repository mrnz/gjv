// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var NETWORK = true; 
var APP = angular.module('starter', [
    'ionic',
    'gjvUser',
    'gjvBrowse',
    'gjvMessage'
  ])

APP.run(function($ionicPlatform, $auth, messageFactory) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    

    if( ionic.Platform.isWebView() ){

      //code for mobile 
      console.log(navigator.connection.type);

      document.addEventListener("offline", function() {
        messageFactory.showLoading({
          template: '<div>No network</div>',
          duration: 3000
        });
      }, false);

      document.addEventListener("online", function() {
        messageFactory.showLoading({
          template: '<div>You are now online</div>',
          duration: 3000
        });
      }, false);

      if( ionic.Platform.isAndroid() ){
      // code for android

      }else if( ionic.Platform.isIOS() ){
      // code for iOS

      }

    }

  });
})


.constant('APIAddress','http://gdziejestvin.pl/api')


.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise( function(a,b,c,d){
      console.log('otherwiser - from: '+b.$$urlr);
      return "/start";
    });

})

.config(['$httpProvider', function ($httpProvider) {
    
    $httpProvider.defaults.headers.common['X-TOKEN'] = 'gdziejestvintoken';
   
}])

.constant('$ionicLoadingConfig', {
  template: 'Default Loading Template...'
});