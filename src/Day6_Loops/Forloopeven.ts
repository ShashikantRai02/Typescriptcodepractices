//  print even numbers between 1-------10
//  Method 1
for (let i = 2; i <= 10; i = i + 2) {
  console.log(i);
}
/* 
2
4
6
8
10

*/
console.log("**********Anothermethod************************");
for (let j = 1; j <= 10; j++) {
  if (j % 2 === 0) {
    console.log(j);
  }
}
/* 

**********Anothermethod************************
2
4
6
8
10
*/
