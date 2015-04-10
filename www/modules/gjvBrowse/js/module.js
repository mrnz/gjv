angular.module('gjvBrowse', ['gjvData'])

.config(function($stateProvider) {
  
  $stateProvider

    
    .state('brands', {
      url: "/brands",
      templateUrl: "modules/gjvBrowse/templates/brands.html",
      controller: 'BrandsCtrl',
      data: {
        stateName: 'start',
        googleAnalyticsName: '',
        activeTab: 0
      }
    })

    .state('models', {
      url: "/brand/:brandName/models",
      templateUrl: "modules/gjvBrowse/templates/models.html",
      controller: 'ModelsCtrl',
      data: {
        stateName: 'start',
        googleAnalyticsName: '',
        activeTab: 0
      }
    })

    .state('volumes', {
      url: "/brand/:brandName/model/:modelName/volumes",
      templateUrl: "modules/gjvBrowse/templates/volumes.html",
      controller: 'VolumesCtrl',
      data: {
        stateName: 'start',
        googleAnalyticsName: '',
        activeTab: 0
      }
    })

    .state('info', {
      url: "/brand/:brandName/model/:modelName/volume/:volumeName/info",
      templateUrl: "modules/gjvBrowse/templates/info.html",
      controller: 'InfoCtrl',
      data: {
        stateName: 'start',
        googleAnalyticsName: '',
        activeTab: 0
      }
    })




})

;
