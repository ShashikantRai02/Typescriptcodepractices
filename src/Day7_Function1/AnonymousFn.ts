// Anonymous function (Unnamed Function/Nameless function)
/* 
An anonymous function is a function that does not have a name.
Instead , it is assigned to a variable which acts as its name
Syntax: 

let variable=function(parameters){

function body 

}
variable() // Calling the function 

*/
//  example 1- Anonymous Function
let msg = function (): string {
  return "Hello Krisha and shivansh";
};
console.log(msg());
/* 
output-- 
Hello Krisha and shivansh
*/
// Example 2: Anonymous function with Parameters
let multiply = function (a: number, b: number): number {
  return a * b;
};
console.log(multiply(100, 50));
/* 
output
5000
*/
