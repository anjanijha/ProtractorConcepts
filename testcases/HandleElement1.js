describe('mySuite', function() {

  it('Input_box....button....drop_down....check_box....alert', function() {
  //browser.ignoreSynchronization = true; //Ask to JK Bhaiya for more clarity  ,getting error while not adding this line
    browser.get('https://www.trycatchclasses.com/code/demo/angular_crud/');
    browser.sleep(1000);
    browser.manage().window().maximize();
    element(by.css('span[ng-click="addUser()"]')).click(); //Add new User
    
    //Input boxes/text boxes
    
    element(by.model("UserFirstname")).sendKeys("Anjani");
    element(by.model("UserLastname")).sendKeys("Jha");
    element(by.model("UserType")).sendKeys("5");
    element(by.model("UserActive")).click();//checkbox
    element(by.css('span[ng-click="AddUpdateUser()"]')).click(); //Save Button
    browser.sleep(5000);
    //let alert=browser.switchTo().alert();
   // expect(alert.getText()).toEqual("Error in adding User record")
   // alert.accept();
    browser.sleep(5000);
    element(by.model("search.type")).element(by.css("option[value='number:5']")).click();
    browser.sleep(5000);
    
  });
 
  });