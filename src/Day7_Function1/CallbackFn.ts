//  A callback function: A function passed as an argument to another function and executed later
//  example 1:
//  Function that takes callback function as an parameter
function greet(name: string, callback: (message: string) => void) {
  console.log(name);
  callback("Hello"); // executing the callback function
}

// callback function
function showMessage(message: string) {
  console.log(message);
}
// calling the function by passing the callback function
greet("Alice", showMessage);
/* 

output---
Alice 
Hello
*/
// example 2:

//
function sum(a: number, b: number, callback1: (result: number) => void) {
  let result = a * b;
  callback1(result);
}

// callback function
function displayResult(result: number) {
  console.log(result);
}
sum(10, 10, displayResult);
/* output-- 100 */
