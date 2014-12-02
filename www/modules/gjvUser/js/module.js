// An AngularJS module that provides video functionality for the 180vita mobile applications.

angular.module('gjvUser', [])

.config(function($stateProvider) {
  
  $stateProvider

    
    .state('start', {
      url: "/start",
      templateUrl: "modules/gjvUser/templates/start.html",
      controller: 'StartCtrl',
      data: {
        stateName: 'start',
        googleAnalyticsName: '',
        activeTab: 0
      }
    })

    .state('forgotpassword', {
      url: "/forgot-password",
      templateUrl: "modules/gjvUser/templates/forgot-password.html",
      controller: 'VtUserForgotPasswordCtrl',
      data: {
        stateName: 'start',
        activeTab: 0
      }
    })

    .state('join', {
      url: "/join",
      templateUrl: "modules/gjvUser/templates/join.html",
      controller: 'VtUserJoinCtrl',
      data: {
        stateName: 'start',
        activeTab: 0
      }
    })

})

;
