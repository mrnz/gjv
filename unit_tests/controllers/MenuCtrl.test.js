describe('MenuCtrl', function () {

    var scope, state;

    beforeEach(module('starter'));

    beforeEach(inject(function($rootScope, $controller, $q, $state) {
 
      scope = $rootScope.$new();
      state = $state;
      
      var defer = $q.defer();
      defer.resolve('result');

      shareFactory = {
      	share: function() {}
      };
      TokenFactory = {
        logOut: function() {}
      };
      $cordovaAppRate = {
        promptForRating: function() {}
      };

      var options = { 
      	$scope: scope, 
        $state: state, 
        shareFactory: shareFactory, 
        TokenFactory: TokenFactory,
        $cordovaAppRate: $cordovaAppRate,
      };        
 
      spyOn(ionic.Platform, "isWebView").and.callFake(function() {
        return true;
      });
      
      spyOn($cordovaAppRate, 'promptForRating').and.returnValue( defer.promise );
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

      it('rate app should call ionic.Platform', function () {

        scope.rateapp(); 
        scope.$digest();
        expect( $cordovaAppRate.promptForRating ).toHaveBeenCalled();


      }); 
  
    });

});