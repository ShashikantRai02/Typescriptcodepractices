//  Named function with rest parameters with same data type means number  only
//  Rest Parameters don't restrict the number of values that you can pass to a function
function addNumbers(...nums: number[]) {
  let i;
  let sum: number = 0;
  for (i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  console.log("Sum of the numbers:", sum);
}
addNumbers(2, 2);
addNumbers(10, 20, 30);
addNumbers(100, 200, 300, 200, 800);
/* 
output--
Sum of the numbers: 4
Sum of the numbers: 60
Sum of the numbers: 1600
*/
//  Another example: Named function with Rest parameters -multiples data types
function findelements(...elements: (number | string)[]): number {
  return elements.length;
}
console.log(findelements("asa", 232, "rea", 2323, "qa", 211));
console.log(findelements(10, 20, 30, 40, 50, 60, 70));
console.log(findelements("abc", "xyz"));
/* 

6
7
2
*/
