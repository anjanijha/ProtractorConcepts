describe('tableSuite', function() {



   it("NonAngularTest",function()
   {
    browser.waitForAngularEnabled(false);
    browser.get('https://opensource-demo.orangehrmlive.com/');
    browser.manage().window().maximize();
    element(by.id("txtUsername")).sendKeys("Admin");
    element(by.id("txtPassword")).sendKeys("admin123");
    element(by.id("btnLogin")).click();
    browser.sleep(5000);
    var admin= element(by.id('menu_admin_viewAdminModule'));
    var userManagent=element(by.id('menu_admin_UserManagement'));
    var users=element(by.id('menu_admin_viewSystemUsers'));
    browser.actions().mouseMove(admin).mouseMove(userManagent).mouseMove(users).click().perform();
    browser.sleep(5000)
    })
    })