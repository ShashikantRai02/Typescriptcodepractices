// Arrow function/Lambda function
/* 

Lambda refers to anonymous functions in programming 
Lambda functions are a concise mechanism to represent anonymous functions
These functions are also called as Arrow function 
There are 3 parts to a Lambda function .
1. Parameters - A function may optionaly have parameters 
2. The fat arrow notation/lambda notation(=>)- It is also called as the "goes to operator "
3. Statements: represent the functions instruction set 

Syntax: 

let variable=(parameters)=>{

block of code
}
variable()

*/
//  example1- Arrow function with no parameters and no return type
let greet = () => {
  console.log("Hello Krisha and shivansh");
};
greet();
/* 
output-- 
Hello Krisha and shivansh
*/
// example2- Arrow function with parameters and a Return type
let add = (a: number, b: number): number => {
  return a + b;
};
console.log(add(50, 90));
/* 
140
*/
// exampple 3: Arrow function with implicit return
let add1 = (x: number, y: number): number => x + y;
let multiply1 = (x: number, y: number): number => x * y;
console.log(add1(90, 20));
console.log(add1(10, 10));
console.log(multiply1(25, 5));
/* 

110
20
125

*/
// example 4: Arrow function with Optional parameters
let displaydetails = (id: number, name: string, MailID?: string): void => {
  console.log("ID:", id);
  console.log("Name:", name);
  if (MailID !== undefined) {
    console.log("MAILID:", MailID);
  }
};
displaydetails(145, "Alok", "Alok1@gmail.com");
displaydetails(147, "Ajay", "Ajay2@gmail.com");
displaydetails(148, "Rahul");
/* 

ID: 145
Name: Alok
MAILID: Alok1@gmail.com
ID: 147
Name: Ajay
MAILID: Ajay2@gmail.com
ID: 148
Name: Rahul
*/

// example5: Arrow function with default Parameters
let calculatteDiscount = (price: number, rate: number = 0.5): void => {
  let discount: number = price * rate;
  console.log("Discount Amount:", discount);
};
calculatteDiscount(1000, 0.3);
calculatteDiscount(10000);
/* 

Discount Amount: 300
Discount Amount: 5000
*/
// example 6: Arrow function with Rest parameters
let FindElements = (...elements: (number | string)[]): number => {
  return elements.length;
};
console.log(FindElements(12, "Aloce", 4, 5, 6, 7, "Scott"));
console.log(FindElements(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(FindElements("abc", "dsc", "asc"));
/* 

7
9
3

*/
