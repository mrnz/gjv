describe('Message factory test', function () {

    var scope, dataFactory, $ionicLoading, $cordovaToast, messageFactory, $q ;

    beforeEach(module('starter'));

    beforeEach(inject(function( _$q_, _$rootScope_, _$timeout_, _$cordovaToast_, _messageFactory_) {
        
        $q = _$q_;
        $timeout = _$timeout_;
        $ionicLoading = $ionicLoading;
        $cordovaToast =  _$cordovaToast_;
        messageFactory = _messageFactory_;
        scope = _$rootScope_.$new();

       	spyOn($cordovaToast,'showShortCenter').and.returnValue(true);
	   		spyOn(angular,'extend').and.returnValue(true);
    		
    }));

    describe('functions test', function () {
    
      it('Aftert switch effects Ink should be called', function () {
        spyOn(ionic.Platform,'isWebView').and.returnValue(true);
        messageFactory.showLoading({template: '<div>cancel</div>'});
        expect($cordovaToast.showShortCenter).toHaveBeenCalled()
      });

      it('Aftert switch effects with delay Ink should be called', function () {
        spyOn(ionic.Platform,'isWebView').and.returnValue(false);
        messageFactory.showLoading({template: '<div>cancel</div>'});console.log($ionicLoading)
        expect(angular.extend).toHaveBeenCalled()
      });
       
    });

});