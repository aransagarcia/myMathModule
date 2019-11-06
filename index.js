	/* 
  myMathModule
  This is a collaboratively made Math module with support for basic math operations.
  Feel free to use it for you basic math needs.
*/

let div = require('./div');
const sub = require('./sub.js');
const sum = require('./sum');
const multiply = require('./multiply');
const Math = {
    PI: 3.141592653589793, // Mathematical constant defined as the ratio of a circle's circumference to its diameter.
    div: div,
    sub: sub, 
    multiply: multiply,
    sum: sum
 }

  
  module.exports = Math
  

  