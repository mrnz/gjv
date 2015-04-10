angular.module('gjvBrowse', [])

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

})

;
