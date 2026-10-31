//  Relational operators
//  Returns boolean - true/false
//  > < >= <= == != ===(Strict equality)
let a: number = 11,
  b: number = 20;
console.log(a > b);
console.log(a < b);
console.log(a <= b);
console.log(a >= b);
console.log(a == b);
console.log(a != b);
/* 
output- 
false
true
true
false
false
true
*/
//  Difference between ==(equality)   ===(strict equality)
console.log("********* Difference between ==   ===*****");
let num1: any = 11;
let num2: any = "11";
console.log(num1 == num2); // o/p- true(only compares values)
console.log(num1 === num2); // o/p- false (compares the values & type)
