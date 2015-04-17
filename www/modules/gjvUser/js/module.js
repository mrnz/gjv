// An AngularJS module that provides video functionality for the 180vita mobile applications.

angular.module('gjvUser', ['satellizer'])

.config(function($stateProvider) {
  
  $stateProvider

    
    .state('start', {
      url: "/start",
      templateUrl: "modules/gjvUser/templates/start.html",
      controller: 'StartCtrl',
      data: {
        stateName: 'fdfsdf',
        googleAnalyticsName: '',
        activeTab: 0
      }
    })

    .state('join', {
      url: "/join",
      templateUrl: "modules/gjvUser/templates/join.html",
      controller: 'JoinCtrl',
      data: {
        stateName: 'dasdsa',
        activeTab: 0
      }
    })

    .state('forgotpassword', {
      url: "/forgot-password",
      templateUrl: "modules/gjvUser/templates/forgot-password.html",
      controller: 'ForgotPasswordCtrl',
      data: {
        stateName: 'dsadsa',
        activeTab: 0
      }
    })
    
    .state('log', {
      url: "/auth",
      templateUrl: "modules/gjvUser/templates/start.html",
      controller: 'StartCtrl',
      data: {
        stateName: 'fdfsdf',
        googleAnalyticsName: '',
        activeTab: 0
      }
    })


})
.config(function($authProvider) {

    $authProvider.loginSignup = true;
    $authProvider.loginRedirect = '/';
    $authProvider.logoutRedirect = '/';
    $authProvider.signupRedirect = '/login';
    $authProvider.loginUrl = 'http://www.gdziejestvin.pl/api/login/email';
    $authProvider.signupUrl = '/auth/signup';
    $authProvider.loginRoute = '/login';
    $authProvider.signupRoute = '/signup';
    $authProvider.tokenName = 'token';
    $authProvider.tokenPrefix = 'satellizer'; // Local storage name prefix
    $authProvider.unlinkUrl = '/auth/unlink/';

    $authProvider.facebook({

      //url: 'http://www.gdziejestvin.pl/api/login/facebook',
      url: 'http://www.gdziejestvin.pl/api/login/facebook',
      authorizationEndpoint: 'https://www.facebook.com/dialog/oauth',
      redirectUri: window.location.origin + '/' || window.location.protocol + '//' + window.location.host + '/',
      scope: 'email',
      scopeDelimiter: ',',
      requiredUrlParams: ['display', 'scope'],
      display: 'popup',
      type: '2.0',
      popupOptions: { width: 481, height: 269 },
      
  
      clientId: '1553730694898954'
    });

    $authProvider.google({
      clientId: '522852666401-4v15cdps4mnhagqq2pr03ibahssgfg4l.apps.googleusercontent.com',
      url: 'http://www.gdziejestvin.pl/api/login/google',
      // // authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
      // redirectUri: window.location.origin  || window.location.protocol + '//' + window.location.host + '/',
      // scope: 'email',
      // scopeDelimiter: ',',
      // requiredUrlParams: ['scope'],
      // display: 'popup',
      // type: '2.0',
      });

    $authProvider.github({
      clientId: '0ba2600b1dbdb756688b'
    });

    $authProvider.linkedin({
      clientId: '77cw786yignpzj'
    });

    $authProvider.yahoo({
      clientId: 'dj0yJmk9dkNGM0RTOHpOM0ZsJmQ9WVdrOVlVTm9hVk0wTkRRbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD0wMA--'
    });

    $authProvider.live({
      clientId: '000000004C12E68D'
    });

    $authProvider.twitter({
      url: '/auth/twitter'
    });

    $authProvider.oauth2({
      name: 'foursquare',
      url: '/auth/foursquare',
      redirectUri: window.location.origin,
      clientId: 'MTCEJ3NGW2PNNB31WOSBFDSAD4MTHYVAZ1UKIULXZ2CVFC2K',
      authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate',
    });

  })
;
