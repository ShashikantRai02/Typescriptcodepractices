// switch case statements
/* 

switch(expression){
case value 1:statements;
break
case value 2:statements
break
case value 3:statements
break
default : statements


}
*/
// example - Depending on the value of day, print the corresponding day of the week
let day: number = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid week");
}
/* 
output- Wednesday
*/
//  next example- switch statement can also include an expression   
let x: number = 20,
  y: number = 20;
switch (
  x - y // expression
) {
  case 0:
    console.log("Result is zero");
    break;
  case 5:
    console.log("Result is Five");
    break;
  case 10:
    console.log("Result is ten");
    break;
  default:
    console.log("Other values");
}
