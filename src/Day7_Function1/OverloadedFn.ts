// 1ststep- write a signatures of function
//  2ndstep: implement a function
// 3rdstep: calling function

//  example1- different parameters types (data types)
function getInfo(id: number): string;
function getInfo(name: string): string;

function getInfo(param: number | string): string {
  if (typeof param === "number") {
    return `User ID is ${param}`;
  } else {
    return `User name is ${param}`;
  }
}
console.log(getInfo(124));
console.log(getInfo("shashikant"));
/* 
output---
User ID is 124
User name is shashikant
*/
//  different numbers of parameters

function add5(a: number, b: number): number;
function add5(a: number, b: number, c: number): number;
function add5(a: number, b: number, c?: number): number {
  if (c !== undefined) {
    return a + b + c;
  }
  return a + b;
}
console.log(add5(10, 90)); //o/p- 100
console.log(add5(10, 20, 40)); // o/p- 70
// example3- different return types
function processInput(input: string): string;
function processInput(input: number): number;
function processInput(input: string | number): string | number {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else {
    return input * 2;
  }
}
console.log(processInput("shashikant"));
console.log(processInput(8));
/* 
output--
SHASHIKANT
16
*/
//  example4:
function greet1(name: string): string;
function greet1(age: number): string;
function greet1(isMarried: boolean): string;
function greet1(value: string | number | boolean): string {
  if (typeof value === "string") {
    return `Hello ${value}`;
  } else if (typeof value === "number") {
    return `you are ${value} years old`;
  } else {
    let result: string = value ? "married" : "single";
    return result;
  }
}
console.log(greet1("shashikant"));
console.log(greet1(37));
console.log(greet1(true));
console.log(greet1(false));
