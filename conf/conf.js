// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  //specs: ['..//testcases//example_spec.js'],
  //specs: ['..//testcases//FirstTestSpec.js'],
 // specs: ['..//testcases//jasmineTest.js'],
 // specs: ['..//testcases//jasmineTest2.js'],
 //specs: ['..//testcases//jasmineTest3.js'],
 // specs: ['..//testcases//EmpLoginTest.js'],
 // specs: ['..//testcases//HandleElement1.js'],
 //   specs: ['..//testcases//table.js'],
// specs: ['..//testcases//NonAngular.js'],
 //specs: ['..//testcases//Frame.js'],
 //specs: ['..//testcases//MouseAction.js'],
 // specs: ['..//testcases//DoubleClick.js'],
 //  specs: ['..//testcases//RightClick.js'],
 specs: ['..//testcases//DragAndDrop.js'],
 

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
