angular.module('starter')
.config(['$httpProvider',
  function($httpProvider) {

    $httpProvider.defaults.headers.common['X-TOKEN'] = 'gdziejestvintoken';
    $httpProvider.interceptors.push(function($rootScope, $q, APIAddress, $window, $timeout) {
      return {
        'request': function(config) {

          // only for external requests 
          if (config.url.indexOf('http') === 0 && (!NETWORK)) {
            var q = $q.defer();
            q.reject({
              data: {
                message: 'cancel'
              }
            });
            return q.promise;

          } else {
            return config;
          }
        },

        'response': function(response) {
          return response;
        }
      };
    });
  }
]);