describe('Router tests', function () {

    var scope;
		var state;
    // load the controller's module
    beforeEach(module('starter'));

		beforeEach(inject(function($templateCache) {
			$templateCache.put('addVehicule.html', '');
			$templateCache.put('info.html', '');
			$templateCache.put('list.html', '');
			$templateCache.put('menu.html', '');
			$templateCache.put('start.html', '');
		}));

		beforeEach(inject(function($rootScope, $state) {
			scope = $rootScope.$new();
			state = $state;
		}));		

		describe('Start state test', function () {
	  
			it('default state should be home', function () {
				scope.$apply();
				expect(state.current.name).toEqual('start');
			});	  

	  	it('state templateUrl should be start.html',
				inject(function($rootScope, $state) {
				$rootScope.$apply();
				expect($state.current.templateUrl).toEqual('start.html');
			}));
			
			it('state controller should be StartCtrl',
				inject(function($rootScope, $state) {
				$rootScope.$apply();
				expect($state.current.controller).toEqual('StartCtrl');
			}));

		});

		describe('Brands state test', function () {
				  
	  	it('state templateUrl should be list.html',
				inject(function($rootScope, $state) {
					$state.go('menu.brands');
					$rootScope.$apply();
					expect($state.current.views.menuContent.templateUrl).toEqual('list.html');
			}));
			
			it('state controller should be BrandsCtrl',
				inject(function($rootScope, $state) {
					$state.go('menu.brands');
					$rootScope.$apply();
					expect($state.current.views.menuContent.controller).toEqual('BrandsCtrl');
			}));

		});		

		describe('Models state test', function () {
				  
	  	it('state templateUrl should be list.html',
				inject(function($rootScope, $state) {
					$state.go('menu.models');
					$rootScope.$apply();
					expect($state.current.views.menuContent.templateUrl).toEqual('list.html');
			}));
			
			it('state controller should be ModelsCtrl',
				inject(function($rootScope, $state) {
					$state.go('menu.models');
					$rootScope.$apply();
					expect($state.current.views.menuContent.controller).toEqual('ModelsCtrl');
			}));
			
			it('should transition to models state passing the correct brandName',
				inject(function($rootScope, $state) {
					$state.go('menu.models', {brandName: 'Opel'});
					$rootScope.$apply();
					expect(state.params.brandName).toEqual('Opel');
			}));

		});		

		describe('Volumes state test', function () {
				  
	  	it('state templateUrl should be list.html',
				inject(function($rootScope, $state) {
					$state.go('menu.volumes');
					$rootScope.$apply();
					expect($state.current.views.menuContent.templateUrl).toEqual('list.html');
			}));
			
			it('state controller should be VolumesCtrl',
				inject(function($rootScope, $state) {
					$state.go('menu.volumes');
					$rootScope.$apply();
					expect($state.current.views.menuContent.controller).toEqual('VolumesCtrl');
			}));

			it('should transition to volumes state passing the correct brandName and modelName',
				inject(function($rootScope, $state) {
					$state.go('menu.volumes', {brandName: 'Opel', modelName: 'corsa' });
					$rootScope.$apply();
					expect(state.params.brandName).toEqual('Opel');
					expect(state.params.modelName).toEqual('corsa');
			}));

		});			

		describe('InfoCtrl', function () {
				  
	  	it('state templateUrl should be info.html',
				inject(function($rootScope, $state) {
					$state.go('menu.info');
					$rootScope.$apply();
					expect($state.current.views.menuContent.templateUrl).toEqual('info.html');
			}));
			
			it('state controller should be InfoCtrl',
				inject(function($rootScope, $state) {
					$state.go('menu.info');
					$rootScope.$apply();
					expect($state.current.views.menuContent.controller).toEqual('InfoCtrl');
			}));

			it('should transition to volumes state passing the correct brandName, modelName and volumeName',
				inject(function($rootScope, $state) {
					$state.go('menu.info', {brandName: 'Opel', modelName: 'corsa', volumeName: '1996' });
					$rootScope.$apply();
					expect(state.params.brandName).toEqual('Opel');
					expect(state.params.modelName).toEqual('corsa');
					expect(state.params.volumeName).toEqual('1996');
			}));

		});	

		describe('Add Vehicule state test', function () {
				  
	  	it('state templateUrl should be addVehicule.html',
				inject(function($rootScope, $state) {
					$state.go('menu.addVehicule');
					$rootScope.$apply();
					expect($state.current.views.menuContent.templateUrl).toEqual('addVehicule.html');
			}));
			
			it('state controller should be AddVehiculeCtrl',
				inject(function($rootScope, $state) {
					$state.go('menu.addVehicule');
					$rootScope.$apply();
					expect($state.current.views.menuContent.controller).toEqual('AddVehiculeCtrl');
			}));

		});	
});