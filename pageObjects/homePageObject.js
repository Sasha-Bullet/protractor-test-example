module.exports = {
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
};