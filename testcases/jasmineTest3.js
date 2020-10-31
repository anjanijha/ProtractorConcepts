describe("Expect Demo",function()
{
	
  it('ExpectTest', function() {
   
   //Test1
   
   let x=100;
   //expect(x).toBe(100);
   //expect(x).toEqual(100);
   // expect(x).not.toEqual(800);
   
   //Test2
   
  // let x=[10,20,30];
  // expect(x).toBe([10,20,30]);
  //expect(x).toEqual([10,20,30]);
   
   
    //Test3
    
  // let x=[10,20,30];
  // let y=x;
   //expect(x).toBe(y);
  // expect(x).toEqual([10,20,30]);
  
  //Test4
  
  //browser.get('https://angularjs.org/')
  //expect(browser.getTitle()).toBe('AngularJS — Superheroic JavaScript MVW Framework');
   //expect(browser.getTitle()).toContain('AngularJS');
  
     
   //Test5
   
  //let arr=[10,20,30];
  //expect(arr).toContain(30);
  //expect(arr).not.toContain(100);
  //expect(arr).not.toContain(100);
       
   //Test6
   
  let names=["anjani","kunal","jk"];
  expect(names).toContain("jk");
    
    //Test7
  // let value=100;
  // expect(value).toBeGreaterThan(50);
  //expect(value).toBeGreaterThan(150);
      
    //Test8
   let value=100;
  //expect(value).toBeNaN();
  //expect(value).not.toBeNaN();
  expect(value).toBeNull();
  
  })
  })