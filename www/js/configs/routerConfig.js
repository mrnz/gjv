angular.module('starter')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  
  $stateProvider

    .state('start', {
      url: "/",
      cache: false,
      templateUrl: "start.html",
      controller: 'StartCtrl',
      data: {
        stateName: 'start',
        googleAnalyticsName: '',
        activeTab: 0
      }
    })

    .state('menu', {
      url: "/menu",
      templateUrl: "menu.html",
      abstract: true,
      controller: 'MenuCtrl',
    })


    .state('menu.brands', {
      url: "/brands",
      cache: false,
      views: {
        'menuContent': {
          templateUrl: "list.html",
          controller: 'BrandsCtrl'
        }
      },
      data: {
        stateName: 'BRANDS',
        googleAnalyticsName: '',
        activeTab: 0
      }
    })

    .state('menu.models', {
      url: "/brand/:brandName/models",
      cache: false,
      views: {
        'menuContent': {
          templateUrl: "list.html",
          controller: 'ModelsCtrl'
        }
      },
      data: {
        stateName: 'MODELS',
        googleAnalyticsName: '',
        activeTab: 0
      }
    })

    .state('menu.volumes', {
      cache: false,
      url: "/brand/:brandName/model/:modelName/volumes",
      views: {
        'menuContent': {
          templateUrl: "list.html",
          controller: 'VolumesCtrl'
        }
      },
      data: {
        stateName: 'VOLUMES',
        googleAnalyticsName: '',
        activeTab: 0
      }
    })

    .state('menu.info', {
      url: "/brand/:brandName/model/:modelName/volume/:volumeName/info",
      cache: false,
      views: {
        'menuContent': {
          templateUrl: "info.html",
          controller: 'InfoCtrl'
        }
      },
      data: {
        stateName: 'INFO',
        googleAnalyticsName: '',
        activeTab: 0
      }
    })


    .state('menu.addVehicule', {
      url: "/addVehicule",
      cache: false,
      views: {
        'menuContent': {
          templateUrl: "addVehicule.html",
          controller: 'AddVehiculeCtrl'
        }
      },
      data: {
        stateName: 'Add Vehicule',
        googleAnalyticsName: '',
        activeTab: 0
      }
    });

  $urlRouterProvider.otherwise(function(a, b, c, d) {
    // console.log('otherwise - from: ' + b.$$urlr);
    return "/";
  });


}]);