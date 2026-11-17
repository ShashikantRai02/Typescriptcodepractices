//  break or exit the loop/ means jumping statement or terminate the loop
for (let z: number = 1; z <= 10; z++) {
  //console.log(z); output- 12345
  if (z == 5) {
    break;
  }
  console.log(z);
}
/* 
output--
1
2
3
4
*/
//  Continue means skip the number
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$4Continue$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
for (let r = 1; r <= 10; r++) {
  if (r == 5) {
    continue; // skip  the 5
  }
  console.log(r);
}
/* 
output--
$$$$$$$$$$$$$$$$$$$$$$$$$4Continue$$$$$$$$$$$$$$$$$$$$$$$$$$$$
1
2
3
4
6
7
8
9
10

*/
console.log("**********otherlogic************");
for (let t = 1; t <= 11; t++) {
  if (t == 3 || t == 5 || t == 8) {
    continue;
  }
  console.log(t);
}
/* 
output---

**********otherlogic************
1
2
4
6
7
9
10
11

*/
