describe('Testing the dash tab', function() {
    
    beforeEach(function() {
      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
    });

    it('should be able to see the displayed products', function(done) {
      
      browser.waitForAngular();
      
      element( by.id('login-button') ).click();
      var formInput = element( by.id('sign-in-password') );
      
      browser.wait(function() {
			  return browser.isElementPresent( formInput );
			}, 10000).then(function() {

   			expect( formInput.isPresent() ).toBeTruthy();
   			formInput.sendKeys('kalikali');
      	element( by.id('sign-in-email') ).sendKeys('mrnz@wp.pl');
      	element( by.id('submit') ).click();

				
				var pageTitle = element( by.className('title') )
	 			browser.wait(function() {
				  return browser.isElementPresent(pageTitle);
				}, 10000).then(function() {
					pageTitle.getText().then(	function(res) {
						console.log(res)
					})

					var txt = pageTitle.getText();
					console.log(txt)
					done();
				});

			});
   

   
      
      
 			

			
     });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });    
});