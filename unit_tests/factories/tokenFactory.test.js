

describe('Token factory test', function () {

    var scope, $q, $auth, $state, $timeout, TokenFactory, $http, temp;

    beforeEach(module('starter'));

    beforeEach(inject(function( _$q_, _$rootScope_, _$timeout_,_$auth_, _$state_, _TokenFactory_, _$http_) {
        
        $auth = _$auth_;  
        $state = _$state_;
        $q = _$q_;
        $timeout = _$timeout_;
        scope = _$rootScope_.$new();
        TokenFactory = _TokenFactory_;
        $http = _$http_;
       	spyOn($http.defaults.headers,'common').and.returnValue(true);
	   		// spyOn(angular,'extend').and.returnValue(true);
    		
    }));

    describe('Set user token functions test', function () {
    
      it('When token passed it should return true', function () {
      	// token passed - set it
      	
        var result = TokenFactory.setUserToken('tokenTETS');
        expect(result).toBe(true);
        expect($http.defaults.headers.common['X-USER']).toBe('tokenTETS');


      });
      
      it('When token already set it should return true', function () {
      	// token already set - nothing to do
      	
      	$http.defaults.headers.common['X-USER'] = 'test';
        var result = TokenFactory.setUserToken(undefined);
        expect(result).toBe(true);
        

      });       


      it('When token doesn\'t exist it should return false', function () {
      	//token doesn't exist - return FALSE
      	spyOn($auth, "getToken").and.returnValue(null);

      	$http.defaults.headers.common['X-USER'] = undefined;
        var result = TokenFactory.setUserToken(undefined);
        expect(result).toBe(false);

      }); 

      it('When token in localStorage it should return true', function () {
      	//token doesn't exist - return FALSE
      	spyOn($auth, "getToken").and.returnValue('null');

      	$http.defaults.headers.common['X-USER'] = undefined;
        var result = TokenFactory.setUserToken(undefined);
        expect($http.defaults.headers.common['X-USER']).toBe('null')
        expect(result).toBe(true);

      }); 

    });
   
    describe('Destroy token functions test', function () {
    
      it('Aftert token destroy removeToken should be called', function () {
      	// token passed - set it
      	spyOn($auth,'removeToken')
        var result = TokenFactory.destroyToken();

        expect($auth.removeToken).toHaveBeenCalled();


      });

    });

    describe('Log Out functions test', function () {
    
      it('After logout $state.go and $auth.logout should be called', function () {
      	
      	spyOn($auth,'logout')
      	spyOn($state,'go');
        var result = TokenFactory.logOut();

        expect($auth.logout).toHaveBeenCalled();
        expect($state.go).toHaveBeenCalled();


      });

    }); 

    describe('isAuthenticated functions test', function () {
    
      it('After logout $auth.isAuthenticated should be called', function () {
      	
      	spyOn($auth,'isAuthenticated');
        TokenFactory.isAuthenticated();

        expect($auth.isAuthenticated).toHaveBeenCalled();
        
      });

    }); 

});