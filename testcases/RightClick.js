describe('MySuite', function() {



   it("RightClick",function()
   {
    browser.waitForAngularEnabled(false);
    browser.get('http://swisnl.github.io/jQuery-contextMenu/demo.html');
    browser.manage().window().maximize();
    
    var button= element(by.className("context-menu-one btn btn-neutral"))
    browser.actions().click(button,protractor.Button.RIGHT).perform();
    browser.sleep(5000);
    
    
    })
    })