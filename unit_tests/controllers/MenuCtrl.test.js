describe('MenuCtrl', function () {

    var scope, state;

    beforeEach(module('starter'));

    beforeEach(inject(function($rootScope, $controller, $q, $state) {
 
        scope = $rootScope.$new();
        state = $state;

        shareFactory = {
        	share: function() {}
        };
        TokenFactory = {
	        logOut: function() {}
        };

        var options = { 
        	$scope: scope, 
          $state: state, 
          shareFactory: shareFactory, 
          TokenFactory: TokenFactory
        };        
        
        spyOn(TokenFactory, 'logOut'); 
        spyOn(shareFactory, 'share'); 
        
        $controller('MenuCtrl', options);
    }));

    describe('Functions test', function () {
    
      it('logout should call token factory', function () {

        scope.share('providerName'); 
        scope.$digest();
        expect( shareFactory.share ).toHaveBeenCalledWith('providerName');


      });   

      it('logout should call token factory', function () {

        scope.logout(); 
        scope.$digest();
        expect( TokenFactory.logOut ).toHaveBeenCalled();


      });      
      
      // it('selectItem should change a state', function () {
      //   scope.selectItem('','Opel');
      //   scope.$apply();
      //   expect( state.current.views.menuContent.controller ).toEqual( 'InfoCtrl' );
      //   expect( state.params.volumeName ).toEqual('Opel');
      // });      

             
    });

});