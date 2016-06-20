angular.module('starter')
.config(['CacheFactoryProvider', function (CacheFactoryProvider) {

    angular.extend( CacheFactoryProvider.defaults, { 
      maxAge: 60 * 1000,
      deleteOnExpire: 'passive',
      storageMode: 'localStorage'

    });

}]);
