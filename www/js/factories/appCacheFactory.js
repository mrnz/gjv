angular.module('starter')

.factory('appCacheFactory', ['CacheFactory',function($cacheFactory){
		return $cacheFactory('appcache');
}]);