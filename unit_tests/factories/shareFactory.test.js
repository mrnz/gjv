describe('Share factory test', function () {

    var scope, URLFactory, TokenFactory;

    beforeEach(module('starter'));

    beforeEach(inject(function( $q, $injector, _$cordovaSocialSharing_, _shareFactory_) {
        var defer = $q.defer();
        defer.resolve();

    	$cordovaSocialSharing = _$cordovaSocialSharing_;
        shareFactory = _shareFactory_; 

        spyOn($cordovaSocialSharing,'shareViaWhatsApp').and.returnValue(defer.promise);
        spyOn($cordovaSocialSharing,'shareViaEmail').and.returnValue(defer.promise);
        spyOn($cordovaSocialSharing,'shareViaSMS').and.returnValue(defer.promise);
        spyOn($cordovaSocialSharing,'shareViaTwitter').and.returnValue(defer.promise);
    	spyOn($cordovaSocialSharing,'shareViaFacebook').and.returnValue(defer.promise);
    	spyOn(ionic.Platform,'isWebView').and.returnValue(false);
    }));
    
    describe('functions test', function () {
    
      it('Not in webview should return false', function () {
			
        var res = shareFactory.share('fb')
		expect(res).toBe(false);

      });

      it('In webview should call facebook provider when "fb" passed', function () {
            
        ionic.Platform.isWebView.and.callFake(function(){return true});      
        var res = shareFactory.share('fb');
        expect($cordovaSocialSharing.shareViaFacebook).toHaveBeenCalled();


      });

      it('In webview should call twitter provider when "twitter" passed', function () {
            
        ionic.Platform.isWebView.and.callFake(function(){return true});      
        var res = shareFactory.share('twitter');
        expect($cordovaSocialSharing.shareViaTwitter).toHaveBeenCalled();

      });

      it('In webview should call sms provider when "sms" passed', function () {
            
        ionic.Platform.isWebView.and.callFake(function(){return true});      
        var res = shareFactory.share('sms');
        expect($cordovaSocialSharing.shareViaSMS).toHaveBeenCalled();

      });      

      it('In webview should call email provider when "email" passed', function () {
            
        ionic.Platform.isWebView.and.callFake(function(){return true});      
        var res = shareFactory.share('email');
        expect($cordovaSocialSharing.shareViaEmail).toHaveBeenCalled();

      });     

      it('In webview should call whatsapp provider when "whatsapp" passed', function () {
            
        ionic.Platform.isWebView.and.callFake(function(){return true});      
        var res = shareFactory.share('whatsapp');
        expect($cordovaSocialSharing.shareViaWhatsApp).toHaveBeenCalled();

      });      

    });

});