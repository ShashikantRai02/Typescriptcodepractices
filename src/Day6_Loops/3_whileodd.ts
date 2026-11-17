// Print odd numbers 1 to 10
// Method 1
let n2: number = 1;
while (n2 <= 10) {
  console.log(n2);
  n2 = n2 + 2; // n2+=2
}
/* 

1
3
5
7
9
*/
console.log("#################Methodanother############################");
let n3: number = 1;
while (n3 <= 10) {
  if (n3 % 2 != 0) {
    console.log(n3);
  }
  n3++;
}
/* 


#################Methodanother############################
1
3
5
7
9
*/