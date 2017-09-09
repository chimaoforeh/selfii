//This file isn't transpiled so we must use CommonJs and ES5


//transpiling with babel
require('babel-register')();

// Prevent the testing of extension files mocha does not understand
require.extensions['.css']=function() {}; 

