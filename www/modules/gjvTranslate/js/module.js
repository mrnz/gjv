angular.module('gjvTranslate', ['pascalprecht.translate'])

.config(function($translateProvider) {

  $translateProvider.translations('en', {
    INPUT_PLACEHOLDER_PASSWORD: 'Password...',
    INPUT_PLACEHOLDER_EMAIL: 'E-mail...',

    BUTTON_SIGN_UP_EMAIL: 'Sign in with e-mail',
    BUTTON_CONNECT_FB: 'Connect with facebook',
    BUTTON_CONNECT_GOOGLE: 'Connect with google',
    BUTTON_REGISTER_EMAIL: 'Register using Email',

    TEXT_FORGOT: 'Forgot your password?',
    TEXT_OR: 'OR'
    
  });

  $translateProvider.translations('pl', {
    
    INPUT_PLACEHOLDER_PASSWORD: 'Hasło...',
    INPUT_PLACEHOLDER_EMAIL: 'E-mail...',

    BUTTON_SIGN_UP_EMAIL: 'Zaloguj się',
    BUTTON_CONNECT_FB: 'Zaloguj sie przez facebook',
    BUTTON_CONNECT_GOOGLE: 'Zaloguj sie przez google',
    BUTTON_REGISTER_EMAIL: 'Zarejestruj sie przez e-mail',
		
		TEXT_FORGOT: 'Zapomniales hasła?',
    TEXT_OR: 'LUB'
  });

  $translateProvider.preferredLanguage('en');
  $translateProvider.fallbackLanguage('en');
	//$translateProvider.useSanitizeValueStrategy('sanitize');
	
})

.factory('translate', function($cordovaGlobalization, $translate) {
  return {
    setPreferredLanguage: function() {
      
      $cordovaGlobalization.getPreferredLanguage().then(

        function(result) {
          $translate.use(result.value.split("-")[0]);
        },
        function(error) {
          // error
        });
    }
  }
})