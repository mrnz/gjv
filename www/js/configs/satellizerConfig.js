angular.module('starter')

.config(['$authProvider',function($authProvider) {

  $authProvider.httpInterceptor = true; // Add Authorization header to HTTP request
  $authProvider.loginOnSignup = false;
  $authProvider.baseUrl = '' // API Base URL for the paths below.
  $authProvider.loginRedirect = '';
  $authProvider.logoutRedirect = '';
  $authProvider.signupRedirect = '';
  
  $authProvider.loginUrl = 'http://www.gdziejestvin.pl/api/login/email';
  $authProvider.signupUrl = 'http://www.gdziejestvin.pl/api/register';
  $authProvider.tokenRoot = false; // set the token parent element if the token is not the JSON root
  $authProvider.tokenName = 'token';
  $authProvider.tokenPrefix = 'satellizer'; // Local Storage name prefix
  $authProvider.unlinkUrl = '/auth/unlink/';
  $authProvider.unlinkMethod = 'get';
  $authProvider.authHeader = 'Authorization';
  $authProvider.authToken = 'Bearer';
  $authProvider.withCredentials = false;
  $authProvider.platform = 'browser'; //'browser' or 'mobile'
  $authProvider.storage = 'localStorage'; // or 'sessionStorage'    

  $authProvider.facebook({
    url: 'http://www.gdziejestvin.pl/api/login/facebook',
    authorizationEndpoint: 'https://www.facebook.com/dialog/oauth',
    redirectUri: ($authProvider.platform === 'browser') ? (window.location.origin + '/' || window.location.protocol + '//' + window.location.host + '/') : 'https://www.facebook.com/connect/login_success.html',
    scope: 'email',
    scopeDelimiter: ',',
    requiredUrlParams: ['display', 'scope'],
    display: 'popup',
    type: '2.0',
    popupOptions: {
      width: 481,
      height: 269
    },
    clientId: '1553730694898954'
  });

  $authProvider.google({
    clientId: '862040010380-a1t480k0r6f0inmbntl8lnb96bd7vc9k.apps.googleusercontent.com',
    //clientId: ($authProvider.platform === 'browser') ? '862040010380-svonhanrok0jir08991nu2tojknj7b4s.apps.googleusercontent.com' : '862040010380-a1t480k0r6f0inmbntl8lnb96bd7vc9k.apps.googleusercontent.com' ,
    url: 'http://www.gdziejestvin.pl/api/login/google',
    authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
    redirectUri: ($authProvider.platform === 'browser') ? (window.location.origin || window.location.protocol + '//' + window.location.host + '/') : 'urn:ietf:wg:oauth:2.0:oob',
    scope: 'email',
    scopeDelimiter: ',',
    requiredUrlParams: ['scope'],
    display: 'popup',
    type: '2.0',
  });

}]);