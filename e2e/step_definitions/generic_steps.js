// var chai = require('chai');
// var chaiAsPromised = require('chai-as-promised');
// var connect = require('connect');
// var serveStatic = require('serve-static');
// var expect = chai.expect;

// chai.use(chaiAsPromised);

module.exports = function () {
	
	this.Given(/^Wait for app instalation$/,  {timeout: 60 * 1000}, function (next) {
	
			browser.waitForAngular().then(function() {
				next();
			});

  });

  this.Then(/^Go to login screen$/, {timeout: 60 * 1000}, function (next) {

    browser.wait(function() {
      return browser.isElementPresent( element( by.id('login-button') ) );
    }, 60000).then(function() {
		  console.log('===============================') ;
      console.log('===============================') ;
      console.log('===============================') ;
      browser.getCurrentUrl().then(function(currentUrl){
    		console.log(currentUrl) 		
     		next();
      });

    });
  });

  this.Then(/^Click button with id "([^"]*)"$/, function (ID, next) {
   	element(by.id(ID)).click().then(function() {
			next();
		});
  });

   this.Then(/^Put "([^"]*)" to inptu with id "([^"]*)"$/, function (text, ID, next) {
     element( by.id(ID) ).sendKeys(text).then(function() {
        next(); 
     });
   });



  this.Then(/^Test page$/, function (next) {
  	element( by.id('super-coder') ).isPresent().then(function(result) {
      expect( result ).to.equal(true);
      next();
    });
     
      // element(by.id('dsadsa')).isPresent().then(function(val) {
      //   console.log(val)
      //   expect( val ).to.equal(true);
      //   next()
      // })
      
      
    
 	});


};