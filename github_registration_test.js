describe('angularjs homepage', function() {
  it('should greet the named user', function() {


    browser.waitForAngularEnabled(false);
    browser.get('http://github.com');

    var username_input = element(by.id('user[login]'));
    var until = protractor.ExpectedConditions;

    browser.wait(until.presenceOf(username_input));


    username_input.sendKeys('Alex-bullet');
    var Email_input = element(by.id("user[email]"));
    browser.wait(until.presenceOf(Email_input));


    Email_input.sendKeys('hgafsghxfa@weqh24.com');

    var Password_input = element(by.id("user[password]"));
    browser.wait(until.presenceOf(Password_input));

    Password_input.sendKeys('2LDQj9ewuWPP');

    browser.wait(element(by.buttonText('Sign up for GitHub')));


    element(by.buttonText('Sign up for GitHub')).click();

    // Waits for the element with id 'h2' to contain the text 'Verify your account'.
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('h2'), 'Verify your account'), 5000);







  });



  // describe('todo list', function() {
  //   var todoList;
  //
  //   beforeEach(function() {
  //     browser.get('http://www.angularjs.org');
  //
  //     todoList = element.all(by.repeater('todo in todoList.todos'));
  //   });
  //
  //   it('should list todos', function() {
  //     expect(todoList.count()).toEqual(2);
  //     expect(todoList.get(1).getText()).toEqual('build an AngularJS app');
  //   });
  //
  //   it('should add a todo', function() {
  //     var addTodo = element(by.model('todoList.todoText'));
  //     var addButton = element(by.css('[value="add"]'));
  //
  //     addTodo.sendKeys('write a protractor test');
  //     addButton.click();
  //
  //     expect(todoList.count()).toEqual(3);
  //     expect(todoList.get(2).getText()).toEqual('write a protractor test');
  //   });
  // });
});
