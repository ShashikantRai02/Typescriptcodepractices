//  print even numbers 1........10
// method
let n: number = 2;
while (n <= 20) {
  console.log(n);
  n = n + 2; // n+=2
}
/* 
output-- 
2
4
6
8
10
12
14
16
18
20

*/
//  Method2--
console.log("*****************Method*********************");
let i1: number = 1;
while (i1 <= 10) {
  if (i1 % 2 === 0) {
    console.log(i1);
  }
  i1++;
}
/* 
output---
2
4
6
8
10
*/
