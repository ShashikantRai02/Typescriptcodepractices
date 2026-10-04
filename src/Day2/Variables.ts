/* 
console.log("hi")
console.log("hi")
console.log("hi")
console.log("hi")
console.log("hi")
console.log("hi")
*/
// let ,const,var
// Syntax: keyword variablename:datatypes=value

// var age:number=36
// var age=36

/* var age=36
console.log(age) */

// var vs let vs const
// --------------------------------------

/* 
1.Scope
2. Declaration/Value Assignment
3.Re-declaration
4.Re-Initialization/Re-assignment
5. Hoisting 
*/
//let - Use let when you need a variable that can change.
// const- Use const when the variable value should not change.
// var- we do not use this in modern JS/TS .Avoid var because it has function scope and can lead to unexpected
//1. Scope- Accessible area (Functional scope & Block scope)
// example var (Functional scope)
/* function varscope() {
  if (true) {
    var msg = "hello world";
    // console.log(msg)
  }
  console.log(msg)
}
varscope(); */

// example 2 : let and const (Block Scope)
/* function blockscope(){
    if(true){
        let msg="hello world"
        const greet="hello const"
        console.log(msg)
        console.log(greet)
    }
    //console.log(msg)
    //console.log(greet)
}
blockscope() */
// example 3:

/* function scopediff() {
  if (true) {
    var num1 = 10;
    let num2 = 20;
    const num3 = 30;
    console.log(num1)
    console.log(num2)
    console.log(num3)
  }
    //   console.log(num1)
    // console.log(num2)
    // console.log(num3)
}
scopediff() */
// Declaration/Value assignment
// example 1: var can be declared without initialization
/*  var x;
 console.log(x) //  undefined
 x=10
 console.log(x) */

// example 2: let can be declared without initialization

/* let y;
console.log(y);
y = 11;
console.log(y); */
// example 3: const must be initialisation at the time of declaration
// const z; incorrect
/* const z=2
console.log(z) */

// 3. Redeclaration
// var - allows the redeclaration
// let and const -not allows the re-declaration (making code safer)
// example 1: var allowes the re-declaration
/* var city="ara"
var city="bihar"
console.log(city) */
//  example 2: let not-allowed re-declaration
/* let country="India"
let country="America"
console.log(country) */
// example 3: const not allowed re-declaration
/* const planet="Mars"
const planet="Earth"
console.log(planet) */
// 4. Re-initialization/Re-assignment
// var and let : Re-assignment allowed
// const: Re-assignment Not allowed (Only constants allowed-cannot change the value)
// example 1: var allows re-assignment
/* var age=36
age=37
console.log(age) */

// example 2: let allows re-assignment
/* let age=36
age=37
console.log(age) */
// example 3: const not allows re-assignment
/* const age=39
age=32
console.log(age) */
// 5.  Hoisting - var (Hoisted with undefined)
/* console.log(a)
var a = 11;
console.log(a); */

//console.log(b)
let b = 77;
console.log(b);
