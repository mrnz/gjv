describe('Testing the dash tab', function() {
    it('should be able to see the displayed products', function(done) {
      
      browser.waitForAngular();
      element( by.id('login-button') ).click();
			done()
    	
     });
});