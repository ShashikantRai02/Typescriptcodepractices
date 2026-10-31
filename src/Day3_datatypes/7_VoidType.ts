//  VOID TYPE
//  Used for functions that don't return anything
function show() {
  console.log("Welcome");
}
show();
/* 
outpput- Welcome
*/
function sum(a: number, b: number): number {
  return a + b;
}
let result: number = sum(50, 40);
console.log(result);
/* 
output- 90

*/
console.log(10 >= 5);
