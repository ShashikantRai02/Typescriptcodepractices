function printTable(): void {
  for (let i = 1; i <= 10; i++) {
    console.log("2 x" + i + "=" + 2 * i);
  }
}
printTable();
/* 
output--
2 x1=2  
2 x2=4
2 x3=6
2 x4=8
2 x5=10
2 x6=12
2 x7=14
2 x8=16
2 x9=18
2 x10=20
*/
console.log("*********************otherway************************");
function table() {
  for (let i = 1; i <= 10; i++) {
    console.log(2 * i);
  }
}
table();
/* 

*********************otherway************************
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
