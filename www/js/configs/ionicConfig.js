angular.module('starter')
.config(['$ionicConfigProvider', function($ionicConfigProvider) {
  $ionicConfigProvider.backButton.text('').icon('ion-ios7-arrow-left').previousTitleText(false);
}]);