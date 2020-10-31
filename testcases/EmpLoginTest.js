describe('mySuite', function() {

  it('Validate URL', function() {
  browser.ignoreSynchronization = true; //Ask to JK Bhaiya for more clarity  ,getting error while not adding this line
    browser.get('http://cafetownsend-angular-rails.herokuapp.com/login');
    browser.sleep(1000);
    browser.manage().window().maximize();
    expect(browser.getTitle()).toBe('CafeTownsend-AngularJS-Rails');
    element(by.model("user.name")).sendKeys("Luke");
    element(by.model("user.password")).sendKeys("Skywalker");
    element(by.buttonText("Login")).click();
    browser.sleep(3000);
    var greetmsg=element(by.id("greetings"));
   expect(greetmsg.getText()).toBe("Hello Luke");// validate Greeting
    var logout= element(by.css('[ng-click="logout()"]'));
    expect(logout.isPresent()).toBe(true);
    logout.click();
  });
 
  });
 