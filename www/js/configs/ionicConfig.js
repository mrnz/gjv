angular.module('starter')
.config(function($ionicConfigProvider) {
  console.log($ionicConfigProvider.backButton)
  $ionicConfigProvider.backButton.text('').icon('ion-ios7-arrow-left').previousTitleText(false);
})