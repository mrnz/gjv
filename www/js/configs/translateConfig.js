angular.module('starter')

.config(['$translateProvider', function($translateProvider) {

  $translateProvider.translations('en', {
    INPUT_PLACEHOLDER_PASSWORD: 'Password...',
    INPUT_PLACEHOLDER_EMAIL: 'E-mail...',

    BUTTON_SIGN_UP_EMAIL: 'Sign in with e-mail',
    BUTTON_CONNECT: 'Connect with',
    BUTTON_REGISTER_EMAIL: 'Register using Email',

    TEXT_FORGOT: 'Forgot your password?',
    TEXT_OR: 'OR'
    
  });

  $translateProvider.translations('pl', {
    
    INPUT_PLACEHOLDER_PASSWORD: 'Hasło...',
    INPUT_PLACEHOLDER_EMAIL: 'E-mail...',

    BUTTON_SIGN_UP_EMAIL: 'Zaloguj się',
    BUTTON_CONNECT: 'Zaloguj sie przez',
    BUTTON_REGISTER_EMAIL: 'Zarejestruj sie przez e-mail',
		
		TEXT_FORGOT: 'Zapomniales hasła?',
    TEXT_OR: 'LUB'
  });

  $translateProvider.preferredLanguage('en');
  $translateProvider.fallbackLanguage('en');
	//$translateProvider.useSanitizeValueStrategy('sanitize');
	
}]);