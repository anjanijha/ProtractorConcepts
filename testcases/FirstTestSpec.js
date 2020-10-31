describe('mySuite', function() {
	beforeEach(function(){
		console.log("This is login.......")
	})
	
		afterEach(function(){
		console.log("This is logOut.......")
	})
		beforeAll(function(){
		console.log("This is launch App.......")
	})
		afterAll(function(){
		console.log("This is close App .......")
	})
	
  it('Validate URL', function() {
    browser.get('https://angularjs.org/');
    browser.sleep(5000);
    browser.manage().window().maximize();
    expect(browser.getCurrentUrl()).toBe('https://angularjs.org/');
    console.log("This is validate url.......")
  });
  
   it('Validate title', function() {
    browser.get('https://angularjs.org/');
    browser.sleep(5000);
    browser.manage().window().maximize(); 
    expect(browser.getTitle()).toBe('AngularJS — Superheroic JavaScript MVW Framework');
    console.log("This is validate title.......")
  });
  
  });
 