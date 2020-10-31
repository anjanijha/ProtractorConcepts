describe('MySuite', function() {



   it("DoubleClick",function()
   {
    browser.waitForAngularEnabled(false);
    browser.get('http://testautomationpractice.blogspot.com/');
    browser.manage().window().maximize();
    
    var button= element(by.xpath("//button[contains(text(),'Copy Text')]"))
 //   browser.actions().mouseMove(button).doubleClick().perform();
  browser.actions().doubleClick(button).perform();
    browser.sleep(5000);
    
    
    })
    })