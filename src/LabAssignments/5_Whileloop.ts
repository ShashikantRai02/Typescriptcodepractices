// Write a program to calculate the sum of the first 10 natural numbers using a while loop.
function sumofnaturalnumber(): number {
  let sum: number = 0; //  container type/For addition/sum, we usually start with 0
  let i: number = 1;
  while (i <= 10) {
    sum = sum + i; // Add i to sum
    i = i + 1; // Increase  i by 1
  }
  return sum;
}
let result4 = sumofnaturalnumber();
console.log("Sum of 1st 10  natural number:", result4);
/* 
output--
Sum of 1st 10  natural number: 55

*/
