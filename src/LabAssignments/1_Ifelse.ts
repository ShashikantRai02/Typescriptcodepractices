function checkuppercase(char: string): void {
  if (char >= "A" && char <= "Z") {
    console.log(`${char} is an uppercase letter`);
  } else {
    console.log(`${char} is an Lowercase letter`);
  }
}
checkuppercase("A");
checkuppercase("b");
/* 
output- 
A is an uppercase letter
b is an Lowercase letter
*/
// 2nd program Check if a number is a multiple of 10.
function checkMultipleof10(num: number) {
  if (num % 10 === 0) {
    console.log(`${num} is a multiple of 10`);
  } else {
    console.log(`${num} is not a multiple of 10`);
  }
}
checkMultipleof10(20);
checkMultipleof10(55);
