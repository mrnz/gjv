describe('Effect Material factory test', function () {

    var scope, dataFactory, appCacheFactory, URLFactory, APIAddress, $q ;

    beforeEach(module('starter'));

    beforeEach(inject(function( _$q_, _$rootScope_, _$timeout_, _ionicMaterialInk_, _ionicMaterialMotion_, _effectMaterialFactory_) {
        
        $q = _$q_;
        $timeout = _$timeout_;
        ionicMaterialInk = _ionicMaterialInk_; 
        ionicMaterialMotion = _ionicMaterialMotion_;
        effectMaterialFactory = _effectMaterialFactory_;
        scope = _$rootScope_.$new();
    	  spyOn(ionicMaterialInk,'displayEffect');
        spyOn(ionicMaterialMotion,'blinds');
    	
    }));

    describe('functions test', function () {
    
      it('Aftert switch effects Ink should be called', function () {
        effectMaterialFactory.switchOnEffects();
        expect(ionicMaterialMotion.blinds).toHaveBeenCalled();
        expect(ionicMaterialInk.displayEffect).toHaveBeenCalled();
      });

      it('Aftert switch effects with delay Ink should be called', function () {
        effectMaterialFactory.switchOnEffectsWithDelay(10000);
        $timeout.flush();
        expect(ionicMaterialMotion.blinds).toHaveBeenCalled();
        expect(ionicMaterialInk.displayEffect).toHaveBeenCalled();
      });
       
    });

});