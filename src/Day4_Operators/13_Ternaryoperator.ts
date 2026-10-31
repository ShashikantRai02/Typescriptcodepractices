//  Ternary/conditional operator
// ?:
//  exp? res1:res2
// condition? true print:false print
//  example 1
let a: number = 100,
  b: number = 200;
let result: number = a > b ? a : b;
console.log(result); // o/p- 200

// example 2
let personAge: number = 36;
let result1: string = personAge > 18 ? "Adult" : "Minor";
console.log(result1); // Adult
