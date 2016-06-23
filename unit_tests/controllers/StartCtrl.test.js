describe('StartCtrl test', function () {

    var scope, state, $ionicModal, effectMaterialFactory;

    beforeEach(module('starter'));

    beforeEach(inject(function($rootScope, $controller, $q, $state, _$ionicModal_, _effectMaterialFactory_) {

        effectMaterialFactory = _effectMaterialFactory_;
        $ionicModal = _$ionicModal_;
        scope = $rootScope.$new();
        state = $state;
        scope.modal = {
            remove: function() {},
            hide: function() {},
            show: function() {}
        }
        var defer = $q.defer();
        defer.resolve(scope.modal);
         
        TokenFactory = {
        	isAuthenticated: function() {return false;}
      	};
		effectMaterialFactory = {
            switchOnEffects: function() {}			
		};
        userFactory = {
            authenticate: function() {}
        }

    
        
        spyOn(userFactory, 'authenticate').and.returnValue( defer.promise );
        spyOn(scope.modal, 'hide').and.callFake( function() {return true;} );
        spyOn(scope.modal, 'remove').and.callFake( function() {return true;} );
        spyOn(effectMaterialFactory, 'switchOnEffects').and.returnValue( true );
        spyOn($ionicModal, 'fromTemplateUrl').and.returnValue( defer.promise );
        
        // spyOn(userFactory, 'info').and.callThrough(); 
 

        var options = { $scope: scope, 
                        $state: state, 
                        userFactory: userFactory,
                        $ionicModal: $ionicModal, 
                        TokenFactory: TokenFactory,
                        effectMaterialFactory: effectMaterialFactory
                      };
        
    
     
        $controller('StartCtrl', options);
    }));
  
    describe('functions test', function () {
    
      it('after success authenticate userFactory should be call', function () {

        scope.authenticate(); 
        scope.$digest();

        expect(userFactory.authenticate).toHaveBeenCalled();

      });

      it('after success submit userFactory should be call', function () {

        scope.submit(); 
        scope.$digest();

        expect(userFactory.authenticate).toHaveBeenCalled();

      });

      it('after closeModal modal.hide should be called', function () {

        scope.closeModal(); 
        expect(scope.modal.hide).toHaveBeenCalled();

      });

      it('after closeModal modal.hide should be called', function () {

        scope.openModal();
        scope.$digest(); 
        expect(effectMaterialFactory.switchOnEffects).toHaveBeenCalled();

      });

      it('after closeModal modal.hide should be called', function () {

        scope.openModal2();
        scope.$digest(); 
        expect(effectMaterialFactory.switchOnEffects).toHaveBeenCalled();

      });       

      it('after closeModal modal.hide should be called', function () {

        scope.switchTo();
        scope.$digest(); 
        expect(effectMaterialFactory.switchOnEffects).toHaveBeenCalled();

      });       


    });

});