

describe('Translate factory test', function () {

    var scope, URLFactory, TokenFactory, defer;

    beforeEach(module('starter'));

    beforeEach(inject(function( $q, $rootScope, $injector, _$cordovaGlobalization_, _translate_, _$translate_) {
    	  
    		defer = $q.defer();
    		
    		scope = $rootScope.$new()
    		$cordovaGlobalization = _$cordovaGlobalization_;
        translate = _translate_; 
        $translate = _$translate_; 

     		spyOn($cordovaGlobalization,'getPreferredLanguage').and.returnValue(defer.promise);
     		spyOn($translate,'use');

    }));
    
    describe('functions test', function () {
    
      it('setPreferredLanguage should $translate end return EN', function () {
        defer.resolve({value:'EN-en'});
        var result;    
        translate.setPreferredLanguage().then(function(res) {
        	result = res;
        });      
        scope.$digest();
        expect($translate.use).toHaveBeenCalled();
        expect(result).toBe('EN')
      });

      it('setPreferredLanguage should return ERR when rejected', function () {
        defer.reject('ERR');
        var result;    
        translate.setPreferredLanguage().then(null, function(res) {
        	result = res;
        });      
        scope.$digest();
        
        expect(result).toBe('ERR')
      });

    });

});