var pageObject = {
  loginButton: function () {
    var form = element(by.css('.home-hero-signup'));
    return form.element(by.css('button[type="submit"]'));
  },
  usernameInput: function () {
    return element(by.id('user[login]'));
  },
  emailInput: function () {
    return element(by.id('user[email]'));
  },
  passwordInput: function () {
    return element(by.id('user[password]'));
  }
}

describe('angularjs homepage', function() {
	
	browser.waitForAngularEnabled(false);
  browser.get('http://github.com');

	var EC = protractor.ExpectedConditions;
	browser.wait(EC.presenceOf(pageObject.loginButton()));
	
	it('should greet the named user', function(done) {
		pageObject.usernameInput().sendKeys('Alex-bullet');
		pageObject.emailInput().sendKeys('hgafsghxfa@weqh24.com');
		pageObject.passwordInput().sendKeys('2LDQj9ewuWPP');
		pageObject.loginButton().click();
    
		setTimeout(function () {
      expect(browser.getCurrentUrl()).toBe('https://github.com/join');
      browser.close();
			done();
		}, 5000);
	});
});