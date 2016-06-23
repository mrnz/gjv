describe('data factory test', function () {

    var scope, dataFactory, appCacheFactory, URLFactory, APIAddress, $q ;

    beforeEach(module('starter'));

    beforeEach(inject(function( _$q_, _$rootScope_, _dataFactory_, _appCacheFactory_, _URLFactory_, _APIAddress_) {
        
        appCacheFactory = _appCacheFactory_;
        $q = _$q_;
        APIAddress = _APIAddress_;
        URLFactory = _URLFactory_; 
        dataFactory = _dataFactory_;

        scope = _$rootScope_.$new();
    	spyOn(URLFactory,'get').and.callFake(function(input) { return input; });
    	
    }));
    afterEach(function() {
        appCacheFactory.destroy();
    });
    describe('functions test', function () {
    
      it('after success authenticate userFactory should be call', function () {

        var result = dataFactory.brands();
		scope.$digest();
        expect(result.url).toBe(APIAddress+'/brands');

      });

      it('after success authenticate userFactory should be call', function () {
        
        var result = dataFactory.models('BRAND');
        scope.$digest();
        expect(result.url).toBe(APIAddress+'/brands/BRAND/models');

      });

      it('after success authenticate userFactory should be call', function () {
        
        var result = dataFactory.volumes('BRAND', 'MODEL');
        scope.$digest();
        expect(result.url).toBe(APIAddress+'/brands/BRAND/models/MODEL/volumes');

      });
      
      it('after success authenticate userFactory should be call', function () {
        
        var result = dataFactory.info('BRAND', 'MODEL', 'VOLUME');
        scope.$digest();
        expect(result.url).toBe(APIAddress+'/brands/BRAND/models/MODEL/volumes/VOLUME/info');

      });  

      it('after success authenticate userFactory should be call', function () {
        
        var result = dataFactory.formatListData(['BRAND', 'MODEL', 'VOLUME']);
        
        expect( result[0].first ).toBe(true);

      });        

    });

});