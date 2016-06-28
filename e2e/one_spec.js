describe('Testing the dash tab', function() {
    
    beforeEach(function() {
      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
    });

    it('should be able to see the displayed products', function(done) {
      
      browser.waitForAngular();
      element( by.id('login-button') ).click();
			done()
     });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });    
});