//   Print the corresponding month name for a given month number.
function getMonthName(month: number) {
  switch (month) {
    case 1:
      console.log("January");
      break;
    case 2:
      console.log("February");
      break;
    case 3:
      console.log("March");
      break;
    case 4:
      console.log("April");
      break;
    case 5:
      console.log("May");
      break;
    case 6:
      console.log("June");
      break;
    case 7:
      console.log("July");
      break;
    case 8:
      console.log("August");
      break;
    case 9:
      console.log("September");
      break;
    case 10:
      console.log("October");
      break;
    case 11:
      console.log("November");
      break;
    case 12:
      console.log("December");
      break;
    default:
      console.log("Invalid month number");
  }
}
getMonthName(11);
/* 
output- November

*/
//Perform basic arithmetic operations based on user input.
function calculator(a: number, b: number, operator: string) {
  switch (operator) {
    case "+":
      console.log("Addition:", a + b);
      break;
    case "-":
      console.log("Subtraction:", a - b);
      break;
    case "*":
      console.log("Multiplication:", a * b);
      break;
    case "/":
      console.log("Divide:", a / b);
      break;
    default:
      console.log("Invalid operator");
  }
}
calculator(10, 2, "+");
calculator(10, 2, "-");
calculator(10, 2, "*");
calculator(10, 2, "/");
/* 
output - 
Addition: 12
Subtraction: 8
Multiplication: 20
Divide: 5
*/
//   Print the season based on the month number.
function getSeason(month: number) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      console.log("Winter");
      break;
    case 3:
    case 4:
    case 5:
      console.log("Summer");
      break;
    case 6:
    case 7:
    case 8:
      console.log("Rainy season");
      break;
    case 9:
    case 10:
    case 11:
      console.log("Autumn");
      break;
    default:
      console.log("Invalid month number");
  }
}
getSeason(6);
getSeason(11);
getSeason(13);
/* 
output - 
Rainy season
Autumn
Invalid month number
*/
