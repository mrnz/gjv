angular.module('gjvOptions', [])

.config(function($stateProvider) {
  
  $stateProvider
    .state('menu.options', {
      url: "/options",
      //cache: false,
      views: {
        'menuContent': {
          templateUrl: "modules/gjvOptions/templates/options.html",
          controller: 'OptionsCtrl'
        }
      },
      data: {
        stateName: 'OPTIONS',
        googleAnalyticsName: ''
      }
    })
})
.controller('OptionsCtrl', ['$scope', function($scope){
  console.log('DSASDA') 
}])