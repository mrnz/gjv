angular.module('gjvBrowse', ['gjvData'])

.config(function($stateProvider) {
  
  $stateProvider

    
    .state('menu', {
      url: "/menu",
      templateUrl: "modules/gjvBrowse/templates/menu.html",
      abstract: true,
      controller: 'MenuCtrl',
    })


    .state('menu.brands', {
      url: "/brands",
      views: {
        'menuContent': {
          templateUrl: "modules/gjvBrowse/templates/brands.html",
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
      views: {
        'menuContent': {
          templateUrl: "modules/gjvBrowse/templates/models.html",
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
      url: "/brand/:brandName/model/:modelName/volumes",
      views: {
        'menuContent': {
          templateUrl: "modules/gjvBrowse/templates/volumes.html",
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
      views: {
        'menuContent': {
          templateUrl: "modules/gjvBrowse/templates/info.html",
          controller: 'InfoCtrl'
        }
      },
      data: {
        stateName: 'INFO',
        googleAnalyticsName: '',
        activeTab: 0
      }
    })




})

;
