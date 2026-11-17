//  Write a program to calculate the factorial of a given number using a while loop.
function factorialofnumber(n: number): number {
  let fact: number = 1;
  let i: number = 1;
  while (i <= n) {
    fact = fact * i;
    i = i + 1;
  }
  return fact;
}
let result6 = factorialofnumber(5);
console.log("Factorial:", result6);
/* 
Factorial: 120
*/
