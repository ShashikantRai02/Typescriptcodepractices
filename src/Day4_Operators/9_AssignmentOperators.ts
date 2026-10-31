//  Assignment operators =
let a: number = 40,
  b: number = 20;
a += b;
console.log(a);
/* 
output = 60
*/
console.log((a += b)); //80
console.log((a -= b));
console.log((a *= b));
console.log((a /= b));
console.log((a %= b));
/* 
output- 
60
80
60
1200
60
0
*/
