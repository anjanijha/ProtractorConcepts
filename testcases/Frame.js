describe('tableSuite', function() {



   it("NonAngularTest",function()
   {
    browser.waitForAngularEnabled(false);
    browser.get('https://www.selenium.dev/selenium/docs/api/java/index');
    browser.manage().window().maximize();
   
   browser.switchTo().frame("packageListFrame");// 1st frame
   element(by.linkText('org.openqa.selenium')).click();
   browser.sleep(5000);
   browser.switchTo().defaultContent();
   
   browser.switchTo().frame("packageFrame");//2nd frame
   element(by.linkText('WebDriver')).click();
   browser.sleep(5000);
   browser.switchTo().defaultContent();
   
   browser.switchTo().frame("classFrame");//3rd frame
   element(by.xpath("//div[@class='topNav']//a[contains(text(),'Index')]")).click();
   browser.sleep(5000);

     });
     
     
     
     
  });