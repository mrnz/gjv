describe('Testing the dash tab', function() {
    it('should be able to see the displayed products', function() {
        // element.all(by.repeater('product in products')).count().then(function(count) {
        //   expect(count).toBeGreaterThan(0);
        // });
    	browser.waitForAngular();
    	element( by.id('login-button') ).click();
    	browser.waitForAngular();
    	browser.wait(function() {
    		// element(by.model('credentials.email')).sendKeys('mrnz@wp.pl');
    		// element(by.model('credentials.password')).sendKeys('kalikali');
			}, 3000)
    	
    });
});