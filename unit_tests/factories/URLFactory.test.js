describe('URL factory test', function () {

    var scope, URLFactory, TokenFactory;

    beforeEach(module('starter'));

    beforeEach(inject(function( $injector, _URLFactory_, _TokenFactory_, $httpBackend, _appCacheFactory_) {
    	URLFactory = _URLFactory_;
    	TokenFactory = _TokenFactory_;
    	httpBackend = $httpBackend;
    	appCacheFactory = _appCacheFactory_;
    	spyOn(TokenFactory,'setUserToken');
    	
    }));
    
    afterEach(function() {
    	httpBackend.verifyNoOutstandingExpectation();
    	httpBackend.verifyNoOutstandingRequest();
        appCacheFactory.destroy();
  	});

    describe('functions test', function () {
    
      it('after success authenticate userFactory should be call', function () {

			appCacheFactory.removeAll();
	    	var returnData = { excited: true };
	    	httpBackend.expectGET('/brands').respond(returnData);

	    	var returnedPromise = URLFactory.get({url:'/brands'});

		    var result;
		    returnedPromise.then(function(response) {
		       result = response;
		    });
	    	

	    	httpBackend.flush();
			expect(TokenFactory.setUserToken).toHaveBeenCalled();
			expect(result.excited).toBe(true);

      });

    

    });

});