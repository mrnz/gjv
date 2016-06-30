var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var expect = chai.expect;
var should = chai.should();
var config = require('../support/env');

var HELPERS = {
  getHash: function(url) {
    return url.split('#')[1];
  }
};

var a = require('jasmine');
console.log(a())
module.exports = function () {
	
	


  this.Given(/^I wait for app to be ready$/,  function (next) {
	
		browser.waitForAngular().then(function() {
			next();
		});

  });

  


  this.Then(/^I check If I am on login screen$/, function (next) {

    browser.wait(function() {
      
      return browser.isElementPresent( element( by.id('open-signin-modal') ) );

    }).then(function() {

      browser.getCurrentUrl().then(function(currentUrl){
    	
      	expect( HELPERS.getHash( currentUrl ) ).to.equal( '/' );
     		next();

      });

    });

  });

  this.Then(/^Click button with id "([^"]*)"$/, function (ID, next) {
   	browser.wait(function() {
      
      return browser.isElementPresent( element( by.id(ID) ) );

    }).then(function() {
      
      element(by.id(ID)).click().then(function() {
  			next();
      });

    });
  });

  this.Then(/^Open side menu$/, function (next) {

    var elem = element(by.xpath("//*[@nav-bar='active']//*//div//span//button"));

    browser.wait(function() {
      
      return browser.isElementPresent( elem );

    }).then(function() {
      var item1 = elem;  
      
      var EC = protractor.ExpectedConditions;
      // Waits for the element with id 'abc' to be clickable.
      browser.wait(EC.elementToBeClickable( item1 ), 60000).then(function() {
      
      item1.click().then( function(location){
        next();
      });
});


      


      
    });
  });  

  this.Then(/^Nav$/, function (next) {
    
    browser.wait(function() {
      
      return false;

    }).then(function() { next(); });


    
  });



  this.Then(/^Wait for element with id "([^"]*)"$/, function (ID, next) {
    
    browser.wait(function() {
      
      return browser.isElementPresent( element( by.id(ID) ) );

    }).then(function() { next(); });


    
  });






  this.Then(/^Put "([^"]*)" to inptu with id "([^"]*)"$/, function (text, ID, next) {
    browser.wait(function() {
      
      return browser.isElementPresent( element( by.id(ID) ) );

    }).then(function() {
      
      element( by.id(ID) ).sendKeys(text).then(function() {
        next(); 
      });

    });
  });

  this.Then(/^I should see "([^"]*)" list$/, function (arg1, next) {
    var elem = element.all(by.repeater('item in items')).get(0)
    browser.wait(function() {      
      return elem.isDisplayed();
    }).then(function() {
      next();
    }) 
  });

  this.Then(/^I should see element with ID "([^"]*)"$/, function (ID, next) {
    
    browser.wait(function() {      
      return browser.isElementPresent( element( by.id(ID) ) );
    }).then(function() {
      next();
    });

  });


  this.Then(/^Button with id "([^"]*)" should be "([^"]*)"$/, function (ID, status, next) {

    var elem = element( by.id(ID) );
    browser.wait(function() {      
      return browser.isElementPresent( elem );
    }, 60000).then(function() {

      var variable = status === 'enabled' ? true : false; 
      elem.isEnabled().then(function(result) {
        expect( result ).to.equal(variable);
        next();
      });
      
    });
   
  });


  this.Then(/^I click first element on the list$/, function (next) {
    var elem = element.all(by.repeater('item in items')).get(0)
    browser.wait(function() {      
      return elem.isDisplayed();
    }, 60000).then(function() {
      elem.click()
      next();
    }) 
  });


  this.Then(/^Wait (\d+) second\(s\)$/, function (seconds, next) {
    browser.driver.sleep(seconds*1000);
    next();
  });

};