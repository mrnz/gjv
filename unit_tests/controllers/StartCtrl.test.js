describe('StartCtrl test', function () {

    var scope, state;

    beforeEach(module('starter'));

    beforeEach(inject(function($rootScope, $controller, $q, $state) {
 
        scope = $rootScope.$new();
        state = $state;
        scope.modal = {
            hide: function() {},
            remove: function() {}
        }
        var defer = $q.defer();
        defer.resolve('result');
         
        TokenFactory = {
        	isAuthenticated: function() {return false;}
      	};
		effectMaterialFactory = {
            switchOnEffects: function() {}			
		};
        userFactory = {
            authenticate: function() {}
        }

        $ionicModal = {

        };
        
        spyOn(userFactory, 'authenticate').and.returnValue( defer.promise );
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

    });

});