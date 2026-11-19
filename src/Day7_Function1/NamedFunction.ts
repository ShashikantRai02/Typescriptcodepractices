// Named Function: A function that is declared with a name.
/* 

function functionname(parameter):returntype{

Block of code
}
functionname() - calling the function /invoking the function 

*/
//  example 1:  Named function with no parameters and no return type
function display() {
  console.log("Welcome to India");
}
display(); // calling the function
//  example2: Named function with parameters and return type
function multiplytwonumbers(x: number, y: number): number {
  return x * y;
}
let resultt: number = multiplytwonumbers(5, 5);
console.log(resultt);
console.log(multiplytwonumbers(9, 9));
//console.log(multiplytwonumbers(6,7,8)) -- compiler error : expected 2 arguments but got 3
//console.log(multiplytwonumbers(4)) -- compiler error : expected 2 arguments but got 1
//  example 3: 
