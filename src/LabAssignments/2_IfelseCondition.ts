// Check if a person is a teenager (age between 13 and 19).
function checkteenager(age: number) {
  if (age >= 13 && age <= 19) {
    console.log(`${age} is a teenager`);
  } else {
    console.log(`${age} is not a teenager`);
  }
}
checkteenager(11);
checkteenager(13);
checkteenager(16);
checkteenager(19);
checkteenager(20);
/* 
output- 
11 is not a teenager
13 is a teenager
16 is a teenager
19 is a teenager
20 is not a teenager
*/
//Compare two numbers and print the larger one.
function findlarger(num1: number, num2: number) {
  if (num1 > num2) {
    console.log(`${num1} is larger`);
  } else if (num2 > num1) {
    console.log(`${num2} is larger`);
  } else {
    console.log("Both numbers are equal");
  }
}
findlarger(5, 6);
findlarger(10, 20);
findlarger(10, 10);
findlarger(1000, 1001);
/* 
output- 
6 is larger
20 is larger
Both numbers are equal
1001 is larger
*/
//  Check if a number is positive, negative, or zero.
function checkNumber(num: number) {
  if (num > 0) {
    console.log(`${num} is a positive number`);
  } else if (num < 0) {
    console.log(`${num} is a negative number`);
  } else {
    console.log(`${num} is zero`);
  }
}
checkNumber(1);
checkNumber(-1);
checkNumber(-7);
checkNumber(0);
checkNumber(300);
/* 
output - 
1 is a positive number
-1 is a negative number
-7 is a negative number
0 is zero
300 is a positive number
*/
// Check if a person is eligible for a senior citizen discount (age >= 60).
function checkSeniorcitizen(age1: number) {
  if (age1 >= 60) {
    console.log(`${age1} Eligible for senior citizen discount`);
  } else {
    console.log(`${age1} Not eligible for senior citizen discount`);
  }
}
checkSeniorcitizen(55);
checkSeniorcitizen(36);
checkSeniorcitizen(60);
checkSeniorcitizen(61);
/* 
output-
55 Not eligible for senior citizen discount
36 Not eligible for senior citizen discount
60 Eligible for senior citizen discount
61 Eligible for senior citizen discount
*/
