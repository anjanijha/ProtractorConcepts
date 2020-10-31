
describe('MySuite', function() {



   it("DragAndDrop",function()
   {
    browser.waitForAngularEnabled(false);
    browser.get('http://codef0rmer.github.io/angular-dragdrop/#!/');
    browser.manage().window().maximize();
    
    var source_ele= element(by.model("list1"))
    var target_ele= element(by.model("list2"))
    browser.actions().dragAndDrop(source_ele,target_ele).perform();
    browser.sleep(5000);
    
    
    })
    })