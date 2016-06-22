angular.module('starter')
.config(['$cordovaAppRateProvider', function ($cordovaAppRateProvider) {
	
  document.addEventListener("deviceready", function () {

    var prefs = {
      language: 'pl',
      appName: 'MY APP',
      iosURL: '<my_app_id>',
      androidURL: 'market://details?id=pl.gdziejestvin.vinfinder',
      windowsURL: 'ms-windows-store:Review?name=<...>'
    };

    $cordovaAppRateProvider.setPreferences(prefs);

 }, false);
}]);

