//  Logical operators && || !
// returns true/false (boolean)
//  works between boolean variables
// b1             b2   &&       ||            !b1
// ----------------------------------------------
// true        true    true     true         false
// true        false   false    true
// false       true    false     true         true
// false       false   false     false
let b1: boolean = true;
let b2: boolean = false;
console.log(b1 && b2);
console.log(b1 || b2);
console.log(!b1);
console.log(!b2);
/* 
output- 
false
true
false
true

*/
//  combination og logical & Relational operators
console.log(
  "@@@@@@@@@@@@@combination og logical & Relational operators@@@@@@@@@@",
);
console.log(20 > 10 && 10 > 5);
console.log(10 < 20 || 5 > 10);
/* 

@@@@@@@@@@@@@combination og logical & Relational operators@@@@@@@@@@
true
true
*/
