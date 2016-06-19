angular.module('starter')
.config(function ($cordovaAppRateProvider) {

  document.addEventListener("deviceready", function () {

    var prefs = {
      language: 'en',
      appName: 'MY APP',
      iosURL: '<my_app_id>',
      androidURL: 'market://details?id=<package_name>',
      windowsURL: 'ms-windows-store:Review?name=<...>'
    };

    $cordovaAppRateProvider.setPreferences(prefs)

 }, false);
});

